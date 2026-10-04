(() => {
  "use strict";

  const PROFILE_SELECTOR = ".hero-profile-frame";
  const BACKDROP_SELECTOR = ".profile-backdrop";

  function getProfile() {
    return document.querySelector(PROFILE_SELECTOR);
  }

  function getBackdrop() {
    let backdrop = document.querySelector(BACKDROP_SELECTOR);

    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "profile-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      document.body.appendChild(backdrop);
    }

    return backdrop;
  }

  function openProfile() {
    const profile = getProfile();

    if (!profile) {
      return;
    }

    const backdrop = getBackdrop();

    profile.classList.add("profile-expanded");
    backdrop.classList.add("active");

    backdrop.setAttribute("aria-hidden", "false");

    document.body.classList.add("profile-view-open");
    document.body.style.overflow = "hidden";
  }

  function closeProfile() {
    const profile = getProfile();
    const backdrop = document.querySelector(BACKDROP_SELECTOR);

    if (profile) {
      profile.classList.remove("profile-expanded");
    }

    if (backdrop) {
      backdrop.classList.remove("active");
      backdrop.setAttribute("aria-hidden", "true");
    }

    document.body.classList.remove("profile-view-open");
    document.body.style.overflow = "";
  }

  function setupProfileDP() {
    const profile = getProfile();

    if (!profile) {
      return;
    }

    const backdrop = getBackdrop();

    profile.setAttribute("role", "button");
    profile.setAttribute("tabindex", "0");
    profile.setAttribute("aria-label", "Open profile picture");

    profile.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (profile.classList.contains("profile-expanded")) {
        closeProfile();
      } else {
        openProfile();
      }
    });

    profile.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProfile();
      }

      if (event.key === "Escape") {
        closeProfile();
      }
    });

    backdrop.addEventListener("click", function (event) {
      if (event.target === backdrop) {
        closeProfile();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeProfile();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupProfileDP);
  } else {
    setupProfileDP();
  }
})();