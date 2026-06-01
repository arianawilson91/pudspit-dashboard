(function () {
  // ===== Sidebar nav: swap active panel =====
  const navItems = document.querySelectorAll(".navitem");
  const panels = document.querySelectorAll(".panel");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      navItems.forEach((n) => n.classList.toggle("is-active", n === item));
      panels.forEach((p) => p.classList.toggle("is-active", p.id === target));
    });
  });

  // ===== Tab strips: each .tabs row swaps cards inside the same .panel =====
  document.querySelectorAll(".panel").forEach((panel) => {
    const tabs = panel.querySelectorAll(".tab");
    const cards = panel.querySelectorAll(".postcard");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        cards.forEach((c) =>
          c.classList.toggle("is-active", c.dataset.card === key)
        );
      });
    });
  });

  // ===== Download buttons: render the postframe to a 1080x1350 PNG =====
  document.querySelectorAll(".btn-download").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.dataset.target;
      const node = document.getElementById(targetId);
      if (!node) return;

      const originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Rendering…";

      try {
        // Scale up so the captured image is 1080 wide regardless of viewport size
        const rect = node.getBoundingClientRect();
        const scale = 1080 / rect.width;

        const canvas = await html2canvas(node, {
          backgroundColor: "#1a1a1a",
          scale: scale,
          useCORS: true,
          logging: false,
          allowTaint: true,
        });

        const link = document.createElement("a");
        link.download = `puds-pit-${targetId}.png`;
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        btn.textContent = "Downloaded ✓";
      } catch (err) {
        console.error("[puds-pit-dashboard] Download failed:", err);
        btn.textContent = "Try again";
      } finally {
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalLabel;
        }, 1400);
      }
    });
  });
})();
