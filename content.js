/* =====================================================
   PUD'S PIT DASHBOARD · WEEKLY CONTENT
   --------------------------------------------------
   This is the ONLY file you edit each week.
   Change the headlines, subs, photos, and dates below.
   Save, commit, push. Dashboard updates automatically.
   --------------------------------------------------
   To add a NEW post in a section: copy any object inside
   `items: [ ... ]`, paste it on a new line, change the
   fields. The dashboard re-renders on reload.
   --------------------------------------------------
   To add a NEW photo to the picker:
     1. Drop the .jpg into assets/
     2. Add a line to PHOTOS at the bottom of this file.
   ===================================================== */

window.CONTENT = {
  week: "WEEK OF MAY 31, 2026",
  tagline:
    "The Pud's Pit weekly drop — where we're parked, what's smokin', and posts ready to drop into Canva.",

  sections: [
    // ─────────────────────────────────────────────────
    // 01 · THIS WEEK'S DROPS
    // ─────────────────────────────────────────────────
    {
      id: "drops",
      number: "01",
      navLabel: "This Week's Drops",
      titleLead: "THIS WEEK'S",
      titleAccent: "DROPS",
      subtitle:
        "Where we're parked Friday through Sunday and the one menu item leading the charge. Two posts. Ready to publish.",
      format: "post",
      items: [
        {
          tabLabel: "Weekend Location",
          postNumber: "POST 01",
          postName: "Where to Find Us",
          photo: "food-truck.jpg",
          headline: "Pull up this weekend.",
          sub: "Fri, Sat & Sun — check our stories for the pin.",
        },
        {
          tabLabel: "Featured Plate",
          postNumber: "POST 02",
          postName: "The Pit, plated",
          photo: "ribs-glazed.jpg",
          headline: "Glazed. Sliced. Gone.",
          sub: "The Big Rack is on the smoker now — $3 a bone.",
        },
        {
          tabLabel: "Wings Drop",
          postNumber: "POST 03",
          postName: "Flappers & Drums",
          photo: "smoker-wings.jpg",
          headline: "Flappers & drums, done right.",
          sub: "Five for $11. Twelve for $20. Gone by sunset.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 02 · SOCIAL CHECK-IN
    // ─────────────────────────────────────────────────
    {
      id: "social",
      number: "02",
      navLabel: "Social Check-In",
      titleLead: "SOCIAL",
      titleAccent: "CHECK-IN",
      subtitle:
        "A short read on what's working this week — top post, engagement note, the one thing to keep doing.",
      format: "checkin",
      rows: [
        {
          label: "Top post last week",
          value: "Saturday's brisket reel — 4,820 views, 312 saves.",
        },
        {
          label: "What drove it",
          value:
            "Close-up smoke shot in the first 0.8s + a \"where you eatin' Saturday?\" caption hook.",
        },
        {
          label: "Engagement note",
          value:
            "DMs asking about catering are up 38% week-over-week. Push catering once this week.",
        },
        {
          label: "Keep doing",
          value:
            "Vertical video. Smoke in the first second. Real prices in the caption, not \"DM us.\"",
        },
        {
          label: "Stop doing",
          value: "Static menu photos with no headline overlay. They die at 4% reach.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 03 · THREE REELS
    // ─────────────────────────────────────────────────
    {
      id: "reels",
      number: "03",
      navLabel: "Three Reels",
      titleLead: "THREE",
      titleAccent: "REELS",
      subtitle:
        "Three 15-second cuts. Hook in the first second. Caption written. Hit record at the truck — these are the shots.",
      format: "post",
      items: [
        {
          tabLabel: "Smoker Open",
          postNumber: "REEL 01",
          postName: "Lift the Lid",
          photo: "ribs-on-smoker.jpg",
          headline: "12 hours of patience.",
          sub: "No shortcuts. No liquid smoke. Just oak and time.",
        },
        {
          tabLabel: "Slice & Sauce",
          postNumber: "REEL 02",
          postName: "Slice & Sauce",
          photo: "ribs-sliced.jpg",
          headline: "That first slice.",
          sub: "Pull-apart tender. Bark on. Homemade sauce on the side.",
        },
        {
          tabLabel: "Family Moment",
          postNumber: "REEL 03",
          postName: "Family at the truck",
          photo: "truck-side.jpg",
          headline: "Family operated.",
          sub: "Scott, Wendy, Ashlan, Kyler — all hands, every weekend.",
        },
        {
          tabLabel: "Smoke Ring",
          postNumber: "REEL 04",
          postName: "Look for the ring",
          photo: "rib-smoke-ring.jpg",
          headline: "Look for the ring.",
          sub: "That pink line means we did it right. Oak smoke only.",
        },
        {
          tabLabel: "Order Up",
          postNumber: "REEL 05",
          postName: "Built to order",
          photo: "pulled-pork-slaw.jpg",
          headline: "Order up.",
          sub: "Pull Piggy topped with B's Slaw — watch it get built.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 04 · THREE CAROUSELS
    // ─────────────────────────────────────────────────
    {
      id: "carousels",
      number: "04",
      navLabel: "Three Carousels",
      titleLead: "THREE",
      titleAccent: "CAROUSELS",
      subtitle:
        "Three covers. Each one ready to drop into Canva and build out the swipe-through. No placeholders.",
      format: "post",
      items: [
        {
          tabLabel: "Menu Drop",
          postNumber: "CAROUSEL 01",
          postName: "The Menu, plated.",
          photo: "finished-racks.jpg",
          headline: "Everything we're slingin' this weekend.",
          sub: "Swipe → The Pit, Pull Piggy, Big Rack, Oh Cluck, the sides.",
        },
        {
          tabLabel: "Customer Love",
          postNumber: "CAROUSEL 02",
          postName: "What they're saying.",
          photo: "smoked-chicken.jpg",
          headline: "\"Best ribs in SWFL.\"",
          sub: "Swipe through five reviews from real customers this month.",
        },
        {
          tabLabel: "Catering Pitch",
          postNumber: "CAROUSEL 03",
          postName: "Catering, built for the backyard.",
          photo: "whole-hog-smoker.jpg",
          headline: "Book the truck.",
          sub: "Weddings, fundraisers, corporate. Swipe for the meats & how to book.",
        },
        {
          tabLabel: "Deep Cuts",
          postNumber: "CAROUSEL 04",
          postName: "The order regulars make.",
          photo: "sausage-boats.jpg",
          headline: "Deep cuts.",
          sub: "Swipe → Sausage Boats, Puds Spuds, Bayou Beans. The regulars know.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 05 · THREE STORIES   (1080x1920 vertical)
    // ─────────────────────────────────────────────────
    {
      id: "stories",
      number: "05",
      navLabel: "Three Stories",
      titleLead: "THREE",
      titleAccent: "STORIES",
      subtitle:
        "Three vertical 1080×1920 stories — countdown, quick poll prompt, behind-the-pit. Built to drop straight into Instagram Stories.",
      format: "story",
      items: [
        {
          tabLabel: "Countdown",
          postNumber: "STORY 01",
          postName: "Smokin' in 24 hours",
          photo: "ribs-on-smoker.jpg",
          kicker: "TOMORROW",
          headline: "Smokin' in 24 hours.",
          sub: "Swipe up for the location pin. Be hungry.",
        },
        {
          tabLabel: "Poll Prompt",
          postNumber: "STORY 02",
          postName: "What you eatin'?",
          photo: "ribs-glazed.jpg",
          kicker: "SATURDAY POLL",
          headline: "What you eatin'?",
          sub: "The Pit · Pull Piggy · Big Rack · Oh Cluck.",
        },
        {
          tabLabel: "Behind the Pit",
          postNumber: "STORY 03",
          postName: "Behind the pit",
          photo: "smoker-full.jpg",
          kicker: "4 AM",
          headline: "Up before the sun.",
          sub: "Oak loaded. Coals lit. See you at the truck.",
        },
        {
          tabLabel: "Last Call",
          postNumber: "STORY 04",
          postName: "Almost sold out",
          photo: "brisket-sliced.jpg",
          kicker: "LAST CALL",
          headline: "Almost sold out.",
          sub: "Brisket's going fast — pull up before 7.",
        },
        {
          tabLabel: "Catering",
          postNumber: "STORY 05",
          postName: "Book the whole hog",
          photo: "whole-hog-smoker.jpg",
          kicker: "CATERING OPEN",
          headline: "Book the whole hog.",
          sub: "Summer dates are filling — call (239) 220-6014.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 06 · IDEA BANK — grab-and-go content ideas.
    // Not rendered as posts; this is the well to pull
    // from when you want an extra post mid-week.
    // ─────────────────────────────────────────────────
    {
      id: "ideas",
      number: "06",
      navLabel: "Idea Bank",
      titleLead: "IDEA",
      titleAccent: "BANK",
      subtitle:
        "Ten extra angles ready to shoot whenever there's a gap in the week. Pull one, film it, post it.",
      format: "checkin",
      rows: [
        {
          label: "Pitmaster Q&A",
          value:
            "Scott answers one customer question on camera. 30 seconds. Start with \"why oak?\"",
        },
        {
          label: "Smoker timelapse",
          value:
            "Prop a phone at 4am, compress 12 hours into 15 seconds. Post it Friday morning.",
        },
        {
          label: "Sauce origin story",
          value:
            "Three-slide carousel on how the signature glaze came to be. Family recipe angle.",
        },
        {
          label: "This-or-that poll",
          value:
            "Story poll: Mac N Cheese vs Puds Spuds. The loser gets a redemption feature next week.",
        },
        {
          label: "Regulars wall",
          value:
            "Photo of a repeat customer with their usual order. Ask permission, tag them.",
        },
        {
          label: "Behind the window",
          value:
            "Wendy's view during the Saturday rush — handoffs, chaos, laughing. Raw and fast.",
        },
        {
          label: "Kyler's pick",
          value:
            "The Future picks one menu item a month and says why. Next-generation angle.",
        },
        {
          label: "Sold-out post",
          value:
            "When something sells out, post the empty pan. Scarcity is the best advertisement.",
        },
        {
          label: "Catering recap",
          value:
            "After every event: one carousel of the setup, the spread, and a quote from the host.",
        },
        {
          label: "Local shoutout",
          value:
            "Tag the brewery or market you're parked at. They reshare — you reach their whole crowd.",
        },
      ],
    },
  ],

  // ─────────────────────────────────────────────────
  // PHOTOS — everything available in the picker
  // To add a new photo: drop the file in assets/, then
  // add a line here. Files NOT listed here won't appear
  // in the dropdown (but can still be referenced above).
  // ─────────────────────────────────────────────────
  photos: [
    { file: "food-truck.jpg",           label: "The truck" },
    { file: "truck-side.jpg",           label: "Truck (side)" },
    { file: "truck-interior.jpg",       label: "Truck (interior)" },
    { file: "truck-palm-trees.jpg",     label: "Truck + palm trees" },
    { file: "ribs-on-smoker.jpg",       label: "Ribs on smoker" },
    { file: "ribs-glazed.jpg",          label: "Glazed ribs" },
    { file: "ribs-sliced.jpg",          label: "Sliced ribs" },
    { file: "rib-smoke-ring.jpg",       label: "Rib smoke ring" },
    { file: "finished-racks.jpg",       label: "Finished racks" },
    { file: "brisket-sliced.jpg",       label: "Sliced brisket" },
    { file: "smoked-chicken.jpg",       label: "Smoked chicken" },
    { file: "smoked-turkey.jpg",        label: "Smoked turkey" },
    { file: "smoker-wings.jpg",         label: "Wings on the smoker" },
    { file: "smoker-full.jpg",          label: "Smoker (full)" },
    { file: "smoker-ribs-chicken.jpg",  label: "Smoker (ribs + chicken)" },
    { file: "whole-hog-smoker.jpg",     label: "Whole hog" },
    { file: "sausage-boats.jpg",        label: "Sausage boats" },
    { file: "bbq-tacos.jpg",            label: "BBQ tacos" },
    { file: "chimichurri-sandwich.jpg", label: "Chimichurri sandwich" },
    { file: "chimichurri-steak.jpg",    label: "Chimichurri steak (new)" },
    { file: "pulled-pork-slaw.jpg",     label: "Pulled pork + slaw (new)" },
  ],
};
