(function () {
  // ===== Photo library — every background option available in the picker =====
  // To add new photos: drop them into assets/, add the filename here.
  const PHOTOS = [
    { file: "food-truck.jpg",          label: "The truck" },
    { file: "truck-side.jpg",          label: "Truck (side)" },
    { file: "truck-interior.jpg",      label: "Truck (interior)" },
    { file: "truck-palm-trees.jpg",    label: "Truck + palm trees" },
    { file: "ribs-on-smoker.jpg",      label: "Ribs on smoker" },
    { file: "ribs-glazed.jpg",         label: "Glazed ribs" },
    { file: "ribs-sliced.jpg",         label: "Sliced ribs" },
    { file: "rib-smoke-ring.jpg",      label: "Rib smoke ring" },
    { file: "finished-racks.jpg",      label: "Finished racks" },
    { file: "brisket-sliced.jpg",      label: "Sliced brisket" },
    { file: "smoked-chicken.jpg",      label: "Smoked chicken" },
    { file: "smoked-turkey.jpg",       label: "Smoked turkey" },
    { file: "smoker-wings.jpg",        label: "Wings on the smoker" },
    { file: "smoker-full.jpg",         label: "Smoker (full)" },
    { file: "smoker-ribs-chicken.jpg", label: "Smoker (ribs + chicken)" },
    { file: "whole-hog-smoker.jpg",    label: "Whole hog" },
    { file: "sausage-boats.jpg",       label: "Sausage boats" },
    { file: "bbq-tacos.jpg",           label: "BBQ tacos" },
    { file: "chimichurri-sandwich.jpg", label: "Chimichurri sandwich" },
    { file: "chimichurri-steak.jpg",   label: "Chimichurri steak (new)" },
    { file: "pulled-pork-slaw.jpg",    label: "Pulled pork + slaw (new)" },
  ];

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

  // ===== Inject a photo picker above every postframe =====
  document.querySelectorAll(".postwrap").forEach((wrap) => {
    const bg = wrap.querySelector(".postframe__bg");
    if (!bg) return;

    // Current photo (basename) from the src
    const currentFile = bg.getAttribute("src").split("/").pop();

    // Build the picker
    const pickerWrap = document.createElement("div");
    pickerWrap.className = "bgpicker-wrap";

    const label = document.createElement("label");
    label.textContent = "Photo";

    const select = document.createElement("select");
    select.className = "bgpicker";
    PHOTOS.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.file;
      opt.textContent = p.label;
      if (p.file === currentFile) opt.selected = true;
      select.appendChild(opt);
    });

    // If the current file isn't in PHOTOS (e.g. someone hand-edited), include it
    if (!PHOTOS.find((p) => p.file === currentFile)) {
      const opt = document.createElement("option");
      opt.value = currentFile;
      opt.textContent = currentFile + " (current)";
      opt.selected = true;
      select.insertBefore(opt, select.firstChild);
    }

    select.addEventListener("change", () => {
      bg.setAttribute("src", "assets/" + select.value);
    });

    pickerWrap.appendChild(label);
    pickerWrap.appendChild(select);

    // Insert before the postframe
    const frame = wrap.querySelector(".postframe");
    wrap.insertBefore(pickerWrap, frame);
  });

  // ===== Download buttons: render the postframe to PNG =====
  // Feed posts: 1080x1350. Stories: 1080x1920.
  document.querySelectorAll(".btn-download").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.dataset.target;
      const node = document.getElementById(targetId);
      if (!node) return;

      const originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Rendering…";

      try {
        // Scale so the captured image is 1080 wide regardless of viewport
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
