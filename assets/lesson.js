/* ===================================================================
   AI Engineer — shared course behaviour
   Reusable across all lessons. Three concerns:
     1) theme toggle (persisted)
     2) quiz widgets  (immediate, automatic feedback loop)
     3) active-recall reveal cards
   =================================================================== */
(function () {
  "use strict";

  /* ---- 1. Theme toggle -------------------------------------------- */
  function initTheme() {
    var KEY = "ai-course-theme";
    var root = document.documentElement;
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved) root.setAttribute("data-theme", saved);

    var btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";
    function label() {
      var dark = getComputedStyle(root).getPropertyValue("--paper").trim();
      // decide from current effective theme
      var isDark = root.getAttribute("data-theme")
        ? root.getAttribute("data-theme") === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      btn.textContent = isDark ? "☀ light" : "☽ dark";
    }
    btn.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme")
        ? root.getAttribute("data-theme") === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label();
    });
    label();
    document.body.appendChild(btn);
  }

  /* ---- 2. Quiz ----------------------------------------------------- */
  /* Markup contract:
       <div class="quiz" data-answer="b">
         <p class="qlabel">Check yourself</p>
         <p class="q">Question?</p>
         <div class="opts">
           <button class="opt" data-key="a">Option one exactly</button>
           <button class="opt" data-key="b">Option two exactly</button>
         </div>
         <p class="feedback"
            data-ok="Right — because ..."
            data-no="Not quite — because ...">
         </p>
       </div>                                                          */
  function initQuizzes() {
    document.querySelectorAll(".quiz").forEach(function (quiz) {
      var answer = quiz.getAttribute("data-answer");
      var opts = quiz.querySelectorAll(".opt");
      var fb = quiz.querySelector(".feedback");
      var done = false;

      opts.forEach(function (opt) {
        opt.addEventListener("click", function () {
          if (done) return;
          done = true;
          var chosen = opt.getAttribute("data-key");
          var right = chosen === answer;

          opts.forEach(function (o) {
            o.setAttribute("disabled", "");
            var k = o.getAttribute("data-key");
            if (k === answer) o.classList.add("correct");
            else if (o === opt) o.classList.add("wrong");
          });

          if (fb) {
            fb.textContent = right
              ? (fb.getAttribute("data-ok") || "Correct.")
              : (fb.getAttribute("data-no") || "Not quite.");
            fb.classList.add("show", right ? "ok" : "no");
          }
        });
      });
    });
  }

  /* ---- 3. Active-recall reveal cards ------------------------------ */
  /* Markup contract:
       <div class="recall">
         <p class="prompt">Recall: ...</p>
         <button class="reveal-btn">Show answer</button>
         <div class="answer" hidden>...</div>
       </div>                                                          */
  function initRecall() {
    document.querySelectorAll(".recall").forEach(function (card) {
      var btn = card.querySelector(".reveal-btn");
      var ans = card.querySelector(".answer");
      if (!btn || !ans) return;
      btn.addEventListener("click", function () {
        var hidden = ans.hasAttribute("hidden");
        if (hidden) { ans.removeAttribute("hidden"); btn.textContent = "Hide answer"; }
        else { ans.setAttribute("hidden", ""); btn.textContent = "Show answer"; }
      });
    });
  }

  function boot() { initTheme(); initQuizzes(); initRecall(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
