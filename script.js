/* =====================================================
   PUD'S PIT DASHBOARD · RENDER + WIRE-UP
   --------------------------------------------------
   You should NOT have to edit this file weekly.
   All weekly content lives in content.js.
   ===================================================== */

(function () {
  const data = window.CONTENT;
  if (!data) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<p style='padding:24px;font-family:sans-serif;color:#b71c2a'>content.js failed to load.</p>"
    );
    return;
  }

  // ───── Small helpers ─────
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function")
        node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v === true) node.setAttribute(k, "");
      else if (v !== false && v != null) node.setAttribute(k, v);
    }
    children.flat().forEach((c) => {
      if (c == null || c === false) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  };
  const esc = (s) => String(s ?? "");

  // ───── Topbar ─────
  $("#weekpill").textContent = esc(data.week);
  $("#tagline").textContent = esc(data.tagline);

  // ───── Sidebar ─────
  const sidebar = $("#sidebar");
  data.sections.forEach((section, idx) => {
    const btn = el(
      "button",
      {
        class: "navitem" + (idx === 0 ? " is-active" : ""),
        "data-target": section.id,
        type: "button",
      },
      el("span", { class: "navitem__num" }, esc(section.number)),
      el("span", { class: "navitem__label" }, esc(section.navLabel))
    );
    sidebar.appendChild(btn);
  });

  // ───── Content panels ─────
  const content = $("#content");

  data.sections.forEach((section, idx) => {
    const panel = el("article", {
      class: "panel" + (idx === 0 ? " is-active" : ""),
      id: section.id,
    });

    // Title
    panel.appendChild(
      el(
        "h1",
        { class: "panel__title" },
        esc(section.titleLead) + " ",
        el("span", { class: "accent" }, esc(section.titleAccent)),
        "."
      )
    );
    panel.appendChild(el("p", { class: "panel__sub" }, esc(section.subtitle)));

    if (section.format === "checkin") {
      panel.appendChild(renderCheckin(section));
    } else {
      // "post" or "story" — both use the postcard pattern
      panel.appendChild(renderTabs(section));
      panel.appendChild(renderCardStack(section));
    }

    content.appendChild(panel);
  });

  // ───── Renderers ─────
  function renderCheckin(section) {
    const wrap = el("div", { class: "checkin" });
    (section.rows || []).forEach((row) => {
      wrap.appendChild(
        el(
          "div",
          { class: "checkin__row" },
          el("span", { class: "checkin__label" }, esc(row.label)),
          el("span", { class: "checkin__value" }, esc(row.value))
        )
      );
    });
    return wrap;
  }

  function renderTabs(section) {
    const tabs = el("div", { class: "tabs" });
    (section.items || []).forEach((item, i) => {
      tabs.appendChild(
        el(
          "button",
          {
            class: "tab" + (i === 0 ? " is-active" : ""),
            "data-tab": section.id + "-" + i,
            type: "button",
          },
          esc(item.tabLabel)
        )
      );
    });
    return tabs;
  }

  function renderCardStack(section) {
    const stack = el("div", { class: "card-stack" });
    (section.items || []).forEach((item, i) => {
      const cardKey = section.id + "-" + i;
      const frameId = "post-" + cardKey;
      const isStory = section.format === "story";

      const card = el(
        "div",
        {
          class: "postcard" + (i === 0 ? " is-active" : ""),
          "data-card": cardKey,
        },

        el(
          "div",
          { class: "postcard__head" },
          el(
            "div",
            null,
            el("div", { class: "postcard__num" }, esc(item.postNumber)),
            el("div", { class: "postcard__name" }, esc(item.postName))
          ),
          el(
            "button",
            { class: "btn-edit", type: "button" },
            isStory ? "EDIT THIS STORY" : "EDIT THIS POST"
          )
        ),

        el(
          "div",
          { class: "postwrap", "data-format": isStory ? "story" : "post" },
          // photo picker injected here
          buildPostFrame(frameId, isStory, item),
          el(
            "button",
            { class: "btn-download", "data-target": frameId, type: "button" },
            isStory
              ? "DOWNLOAD STORY (1080×1920)"
              : "DOWNLOAD POST (1080×1350)"
          )
        )
      );
      stack.appendChild(card);
    });
    return stack;
  }

  function buildPostFrame(frameId, isStory, item) {
    const copyKids = [];
    if (isStory && item.kicker) {
      copyKids.push(el("div", { class: "storykicker" }, esc(item.kicker)));
    }
    copyKids.push(el("h2", { class: "postframe__head" }, esc(item.headline)));
    copyKids.push(el("p", { class: "postframe__sub" }, esc(item.sub)));

    return el(
      "div",
      {
        class: "postframe" + (isStory ? " postframe--story" : ""),
        id: frameId,
      },
      el("img", { class: "postframe__bg", src: "assets/" + item.photo, alt: "" }),
      el("div", { class: "postframe__overlay" }),
      el("img", {
        class: "postframe__logo",
        src: "assets/puds-pit-logo-transparent.png",
        alt: "Pud's Pit",
      }),
      el(
        "div",
        {
          class:
            "postframe__copy" + (isStory ? " postframe__copy--story" : ""),
        },
        copyKids
      )
    );
  }

  // ───── Wire up navigation ─────
  const navItems = $$(".navitem");
  const panels = $$(".panel");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      navItems.forEach((n) => n.classList.toggle("is-active", n === item));
      panels.forEach((p) => p.classList.toggle("is-active", p.id === target));
    });
  });

  // ───── Wire up tab strips ─────
  $$(".panel").forEach((panel) => {
    const tabs = $$(".tab", panel);
    const cards = $$(".postcard", panel);
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

  // ───── Inject a photo picker above every postframe ─────
  $$(".postwrap").forEach((wrap) => {
    const bg = $(".postframe__bg", wrap);
    if (!bg) return;
    const currentFile = bg.getAttribute("src").split("/").pop();

    const select = el("select", { class: "bgpicker" });
    (data.photos || []).forEach((p) => {
      const opt = el("option", { value: p.file }, esc(p.label));
      if (p.file === currentFile) opt.selected = true;
      select.appendChild(opt);
    });
    // include current file if it's not in the photos list
    if (!data.photos.find((p) => p.file === currentFile)) {
      const opt = el(
        "option",
        { value: currentFile, selected: true },
        currentFile + " (current)"
      );
      select.insertBefore(opt, select.firstChild);
    }
    select.addEventListener("change", () => {
      bg.setAttribute("src", "assets/" + select.value);
    });

    const pickerWrap = el(
      "div",
      { class: "bgpicker-wrap" },
      el("label", null, "Photo"),
      select
    );
    wrap.insertBefore(pickerWrap, $(".postframe", wrap));
  });

  // ───── Download buttons ─────
  $$(".btn-download").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.dataset.target;
      const node = document.getElementById(targetId);
      if (!node) return;

      const originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Rendering…";

      try {
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
        link.download = "puds-pit-" + targetId + ".png";
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
