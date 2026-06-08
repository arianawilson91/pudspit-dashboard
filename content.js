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
  week: "WEEK OF JUNE 8, 2026",
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
        "Where we're parked Friday through Sunday and the menu items leading the charge. Three posts. Ready to publish.",
      format: "post",
      items: [
        {
          tabLabel: "Weekend Location",
          postNumber: "POST 01",
          postName: "Where to Find Us",
          photo: "truck-palm-trees.jpg",
          headline: "Back at it this weekend.",
          sub: "Fri, Sat & Sun. Watch our stories for the drop pin.",
        },
        {
          tabLabel: "Featured Plate",
          postNumber: "POST 02",
          postName: "Meet the Pull Piggy",
          photo: "pulled-pork-slaw.jpg",
          headline: "Say hey to the Pull Piggy.",
          sub: "Pulled pork piled high, topped with B's Slaw — $15.",
        },
        {
          tabLabel: "Oh Cluck",
          postNumber: "POST 03",
          postName: "Oh Cluck",
          photo: "smoked-chicken.jpg",
          headline: "Oh, cluck yeah.",
          sub: "Smoked chicken in our signature glaze — all homemade sauce. $16.",
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
          label: "Check this in Insights",
          value:
            "Open last week's posts and find your top one by Saves (not likes). Saves = people planning to come. Make more of whatever earned them.",
        },
        {
          label: "Usually your winner",
          value:
            "The weekend location post tends to lead — people screenshot the schedule. Keep leading the week with where + when.",
        },
        {
          label: "Watch the DMs",
          value:
            "Catering questions keep landing in DMs. Reply fast and run one \"book the truck\" story this week while interest is hot.",
        },
        {
          label: "Keep doing",
          value:
            "Vertical reels. Smoke in the first second. Real prices in the caption, not \"DM us.\"",
        },
        {
          label: "Stop doing",
          value:
            "Posting the menu as a flat photo with no headline — it stalls. Put it in a reel or carousel instead.",
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
          tabLabel: "Menu Rundown",
          postNumber: "REEL 01",
          postName: "The whole board",
          photo: "finished-racks.jpg",
          headline: "The whole board.",
          sub: "Pan the full spread, name each item one by one — pair with EVERYTHING HALLELUJAH.",
        },
        {
          tabLabel: "Pull Up",
          postNumber: "REEL 02",
          postName: "This is home",
          photo: "truck-side.jpg",
          headline: "This is home.",
          sub: "Strut up to the truck window — Beat It, the \"I Am Home\" trend.",
        },
        {
          tabLabel: "Sauce Mop",
          postNumber: "REEL 03",
          postName: "One more coat",
          photo: "ribs-glazed.jpg",
          headline: "One more coat.",
          sub: "Slow-mo close-up of the glaze mopped on the rack — SPEND DAT SAX.",
        },
        {
          tabLabel: "First Slice",
          postNumber: "REEL 04",
          postName: "Listen to the bark",
          photo: "brisket-sliced.jpg",
          headline: "Listen to that bark.",
          sub: "Knife through the bark, ASMR — use the real sound, no music.",
        },
        {
          tabLabel: "Family",
          postNumber: "REEL 05",
          postName: "Four Puds, one pit",
          photo: "smoker-full.jpg",
          headline: "Four Puds, one pit.",
          sub: "Quick cuts of the family working the rush — moody track, story vibe.",
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
          postName: "This weekend's lineup.",
          photo: "finished-racks.jpg",
          headline: "This weekend's lineup.",
          sub: "Swipe → The Pit, Pull Piggy, Oh Cluck, the wings, the sides.",
        },
        {
          tabLabel: "How We Smoke",
          postNumber: "CAROUSEL 02",
          postName: "Low and slow.",
          photo: "ribs-on-smoker.jpg",
          headline: "Low and slow. No shortcuts.",
          sub: "Swipe → oak, time, bark, the smoke ring. Why it tastes like that.",
        },
        {
          tabLabel: "Catering Pitch",
          postNumber: "CAROUSEL 03",
          postName: "Feed the whole party.",
          photo: "whole-hog-smoker.jpg",
          headline: "Feed the whole party.",
          sub: "Swipe → the meats, how it works, how to book the truck.",
        },
        {
          tabLabel: "Customer Love",
          postNumber: "CAROUSEL 04",
          postName: "Y'all said it best.",
          photo: "smoked-chicken.jpg",
          headline: "Y'all said it best.",
          sub: "Swipe → five reviews from the line this month.",
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
          postName: "Smoke starts tonight",
          photo: "ribs-on-smoker.jpg",
          kicker: "TOMORROW",
          headline: "Smoke starts tonight.",
          sub: "Pull up tomorrow — the pin's in our story.",
        },
        {
          tabLabel: "Poll Prompt",
          postNumber: "STORY 02",
          postName: "Pick your plate",
          photo: "pulled-pork-slaw.jpg",
          kicker: "SATURDAY POLL",
          headline: "Pick your plate.",
          sub: "Pull Piggy or The Pit? Tap to vote.",
        },
        {
          tabLabel: "Behind the Pit",
          postNumber: "STORY 03",
          postName: "While you sleep",
          photo: "smoker-full.jpg",
          kicker: "4 AM",
          headline: "While you sleep.",
          sub: "Coals lit, oak loaded. See you at lunch.",
        },
        {
          tabLabel: "Last Call",
          postNumber: "STORY 04",
          postName: "Going fast",
          photo: "ribs-glazed.jpg",
          kicker: "LAST CALL",
          headline: "Going fast.",
          sub: "Ribs almost gone — get here before we sell out.",
        },
        {
          tabLabel: "Catering",
          postNumber: "STORY 05",
          postName: "Summer dates filling",
          photo: "whole-hog-smoker.jpg",
          kicker: "BOOK NOW",
          headline: "Summer dates are filling.",
          sub: "Tap to book the truck — (239) 220-6014.",
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

    // ─────────────────────────────────────────────────
    // 07 · GROWTH PLAYBOOK — the weekly checklist that
    // grows the account. Modeled on how food trucks like
    // @moschickensmash hit 5k followers on a few reels.
    // ─────────────────────────────────────────────────
    {
      id: "growth",
      number: "07",
      navLabel: "Growth Playbook",
      titleLead: "GROWTH",
      titleAccent: "PLAYBOOK",
      subtitle:
        "The weekly moves that actually grow the account. Reels reach strangers; photos reach fans. Do these every week.",
      format: "checkin",
      rows: [
        {
          label: "Post 3–5 reels/week",
          value:
            "Reels get shown to non-followers — that's how new people find you. Photos mostly reach current fans. Reels are the growth engine.",
        },
        {
          label: "Hook in 1 second",
          value:
            "Lead with the smoke billowing off the lid, a cheese pull, or the first slice. If the first second isn't a scroll-stopper, the reel dies.",
        },
        {
          label: "On-screen text hook",
          value:
            "Add a bold line in the first frame: \"POV: best ribs in SWFL\" or \"12 hours for THIS.\" Text + visual hook together.",
        },
        {
          label: "Trending audio",
          value:
            "Use a sound that's trending that week (look for the little ↗ arrow in Reels). Trending audio = more pushes from the algorithm.",
        },
        {
          label: "Tag your location EVERY post",
          value:
            "Tag Fort Myers / Cape Coral / Estero or the exact brewery. Instagram auto-pushes geotagged posts to locals nearby.",
        },
        {
          label: "DM 3 local food bloggers/week",
          value:
            "One SWFL food-Instagram feature beats 50 of your own posts. Invite them to the truck. This is the single biggest growth lever.",
        },
        {
          label: "Reply to every comment & DM",
          value:
            "Fast replies signal the algorithm AND build regulars. Aim to reply within the first hour a post goes up.",
        },
        {
          label: "Lead with the family",
          value:
            "People follow people. Scott, Wendy, Ashlan, Kyler + veteran-owned story = the loyalty hook competitors can't copy.",
        },
        {
          label: "Post at peak times",
          value:
            "Lunch (11a–1p) and dinner (5–7p) on days you're open. Drop the \"where to find us\" post the night before.",
        },
        {
          label: "One clear CTA every post",
          value:
            "Tell them exactly what to do: \"Pull up Saturday, Estero Village, 11–7\" or \"DM us to book catering.\" Never make them guess.",
        },
        {
          label: "Hashtags that work",
          value:
            "#swflfood #fortmyerseats #capecoralfood #bbq #foodtruck #swfl — local + category tags, not generic #yummy spam.",
        },
        {
          label: "Repost fan content",
          value:
            "When a customer tags you, reshare it to your story and thank them. Free content + makes regulars feel seen.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 08 · AUDIO PLAYBOOK — trending audio changes weekly,
    // so this teaches the METHOD + audio-by-reel-type. The
    // specific song examples rotate — always verify in-app.
    // ─────────────────────────────────────────────────
    {
      id: "audio",
      number: "08",
      navLabel: "Audio Playbook",
      titleLead: "AUDIO",
      titleAccent: "PLAYBOOK",
      subtitle:
        "Trending audio is half of why a reel gets pushed. Trends rotate weekly — learn the method, match the sound to the reel, and grab the live trending version in the app.",
      format: "checkin",
      rows: [
        {
          label: "How to find what's trending",
          value:
            "In the app: Reels → tap any reel's audio name. A little ↗ rising-arrow icon = it's trending right now. Browse, then tap Save on 5–10 sounds each week.",
        },
        {
          label: "Pick FRESH, not oversaturated",
          value:
            "Aim for sounds with roughly under 25k–50k uses — enough to be rising, not so many it's already everywhere. Riding a sound early gets you more reach.",
        },
        {
          label: "Business-account rule (important)",
          value:
            "Business/creator accounts can only use sounds marked \"Original audio\" or cleared for commercial use. If a song is greyed out, that's why — use the Reels audio browser, which only shows what you're allowed to use.",
        },
        {
          label: "ASMR reels → use the REAL sound",
          value:
            "Smoker lid open, the slice, the sauce mop: let the sizzle/crackle/knife carry it with no music (or music very low). Post it as \"Original audio\" — Instagram pushes original audio too.",
        },
        {
          label: "Hype / food montage → upbeat beat",
          value:
            "Fast cuts of the food? Use a trending upbeat hip-hop, phonk, saxophone, or amapiano beat. High energy matches the quick cuts.",
        },
        {
          label: "Family / story reel → warm or moody",
          value:
            "Behind-the-scenes, the 4am grind, the family: pair with a warm or slightly emotional trending track, or use a voiceover over soft music.",
        },
        {
          label: "Save sounds the moment you hear them",
          value:
            "Scrolling and a sound is everywhere? Tap the audio → Save. Build a little library so when you film at the truck you already have 5 trending options ready.",
        },
        // >>> TRENDING-AUDIO:START (auto-refreshed weekly — do not hand-edit between markers) >>>
        {
          label: "Trending now · week of Jun 8, 2026",
          value:
            "Picks below are mapped to Pud's Pit reel types. They rotate weekly — always confirm the ↗ arrow in-app and that the sound isn't greyed out for your account.",
        },
        {
          label: "SPEND DAT SAX — Corey Staggers",
          value: "Smooth saxophone. Food reveal: the glaze pour, the slice, the plate.",
        },
        {
          label: "\"Hot girl dinner\" — Megan Thee Stallion (original audio)",
          value: "Playful \"it appears\" effect — make the food conjure into frame for \"what's on the truck.\" Original audio = safe on business accounts.",
        },
        {
          label: "EVERYTHING HALLELUJAH — Justin Bieber",
          value: "List format: name each menu item one by one — \"The Pit… Pull Piggy… Big Rack…\" — each line a \"hallelujah.\" Perfect menu rundown.",
        },
        {
          label: "Beat It — Michael Jackson",
          value: "\"I Am Home\" trend — strut up to the truck and confess it's your real happy place. Arrival / hype shot.",
        },
        {
          label: "DAISIES — Justin Bieber",
          value: "Chill, cozy. Low-and-slow prep, the 4am grind, cooking b-roll.",
        },
        {
          label: "Hate That I Made You Love Me — Ariana Grande",
          value: "Moody, reflective. Family/story reel or the \"why we do this\" post.",
        },
        {
          label: "Heads up — business accounts",
          value: "The major-label tracks (HALLELUJAH, Beat It, DAISIES, Ariana) are often greyed out on business accounts. \"Hot girl dinner\" (original audio) is the safe bet; for the rest, use a Creator account or pick what's not greyed out in-app.",
        },
        // <<< TRENDING-AUDIO:END <<<
        {
          label: "Match audio to the hook, not the other way",
          value:
            "Film the reel first with a strong first-second hook, then pick a trending sound that fits the vibe. Don't force a great sound onto a weak shot.",
        },
        {
          label: "One sound, one reel",
          value:
            "Don't reuse the same trending sound on back-to-back posts. Vary it so your feed doesn't feel repetitive and you ride multiple trends.",
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // 09 · REVIEWS — turn real customer reviews into
    // shareable credibility posts, + a "leave a review"
    // CTA with links and scannable QR codes.
    // NOTE: the quotes below are EXAMPLES — replace them
    // with real customer reviews before posting.
    // ─────────────────────────────────────────────────
    {
      id: "reviews",
      number: "09",
      navLabel: "Reviews",
      titleLead: "CUSTOMER",
      titleAccent: "REVIEWS",
      subtitle:
        "Five real 5-star reviews from your customers — download any one and post it for instant credibility. Then point new customers to leave their own below.",
      format: "post",
      items: [
        {
          tabLabel: "Gigi M. ★",
          postNumber: "REVIEW 01",
          postName: "The Pit sandwich",
          photo: "chimichurri-steak.jpg",
          headline: "“Can’t recommend you guys highly enough!”",
          sub: "— Gigi Maisonet · ★★★★★",
        },
        {
          tabLabel: "Camille H. ★",
          postNumber: "REVIEW 02",
          postName: "Best BBQ out there",
          photo: "finished-racks.jpg",
          headline: "“Holy delicious. Best BBQ joint out there.”",
          sub: "— Camille Hockett · ★★★★★",
        },
        {
          tabLabel: "Kelly K. ★",
          postNumber: "REVIEW 03",
          postName: "Best sandwich ever",
          photo: "chimichurri-sandwich.jpg",
          headline: "“Hands down the best sandwich I’ve ever had!”",
          sub: "— Kelly Kanthook · ★★★★★",
        },
        {
          tabLabel: "Soeren ★",
          postNumber: "REVIEW 04",
          postName: "Service + food",
          photo: "brisket-sliced.jpg",
          headline: "“Service was awesome — the food even better.”",
          sub: "— Soeren · ★★★★★ (Google Local Guide)",
        },
        {
          tabLabel: "Valeri E. ★",
          postNumber: "REVIEW 05",
          postName: "Tri-tip & breakfast",
          photo: "smoker-full.jpg",
          headline: "“Best I’ve had — Scott doesn’t skimp.”",
          sub: "— Valeri Eide · ★★★★★",
        },
      ],
      // "Leave a review" call-to-action: links + scannable QR codes
      cta: {
        heading: "Loved it? Leave us a review.",
        note:
          "Scan to drop a Google review (the big one — it's what shows up when people search BBQ near them), or follow & tag us. We reshare every shout-out.",
        links: [
          {
            label: "Leave a Google review",
            url: "https://www.google.com/search?q=Pud%27s+Pit+BBQ+Reviews",
            plat: "google",
          },
          { label: "@puds.pit.bbq", url: "https://instagram.com/puds.pit.bbq", plat: "ig" },
          {
            label: "Pud's Pit on Facebook",
            url: "https://www.facebook.com/profile.php?id=61578196155729",
            plat: "fb",
          },
        ],
        qrs: [
          { img: "qr-google.png", caption: "★ Scan to review us on Google" },
          { img: "qr-instagram.png", caption: "Scan to follow on Instagram" },
          { img: "qr-facebook.png", caption: "Scan to find us on Facebook" },
        ],
        tip:
          "Google reviews are the highest-value — they lift how you rank when people search “BBQ near me.” Ask every happy customer to scan the Google code while they're still at the truck.",
        reviewCard: {
          qr: "qr-google.png",
          kicker: "LOVED IT?",
          headline: "Scan to review us on Google",
          foot: "Pud's Pit BBQ · @puds.pit.bbq",
        },
      },
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
