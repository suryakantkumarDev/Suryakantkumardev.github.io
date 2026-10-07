"use strict";

const menu = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
menu.hidden = false;
navigation.classList.add("enhanced");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.innerHTML = 'Menu <span aria-hidden="true">＋</span>';
  navigation.classList.remove("open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.innerHTML = open
    ? 'Close <span aria-hidden="true">−</span>'
    : 'Menu <span aria-hidden="true">＋</span>';
  navigation.classList.toggle("open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
const mobileQuery = window.matchMedia("(max-width: 760px)");
function syncMenu() {
  menu.hidden = !mobileQuery.matches;
  closeMenu();
}
mobileQuery.addEventListener("change", syncMenu);
syncMenu();

document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("project-form");
const result = document.getElementById("draft-result");
const email = "suryakantkumar.dev@gmail.com";
const service = document.getElementById("service");
const channels = form.querySelectorAll('input[name="channel"]');
const upworkMode = () =>
  form.querySelector('input[name="channel"]:checked').value === "upwork";
function updateChannel() {
  const onUpwork = upworkMode();
  const emailInput = document.getElementById("email");
  emailInput.required = !onUpwork;
  emailInput.disabled = onUpwork;
  document.getElementById("email-field").hidden = onUpwork;
  document.getElementById("prepare-brief").textContent = onUpwork
    ? "Prepare Upwork brief ↗"
    : "Prepare project email ↗";
  document.getElementById("channel-note").textContent = onUpwork
    ? "Prepare a brief to copy into Upwork. Discuss your project and next steps there. Nothing is sent automatically."
    : "Creates a draft for your email app. Nothing is sent or stored by this website.";
  clearDraft();
}
let preparedBrief = "";
let toastTimer;
form.hidden = false;
document.getElementById("copy-email").hidden = false;
function announce(message) {
  const status = document.getElementById("status");
  status.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    status.textContent = "";
  }, 6000);
}
async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    announce(successMessage);
  } catch {
    announce("Copy is unavailable. Select and copy the text directly.");
  }
}
document
  .getElementById("copy-email")
  .addEventListener("click", () => copyText(email, "Email address copied."));
document
  .getElementById("copy-brief")
  .addEventListener("click", () =>
    copyText(
      preparedBrief,
      upworkMode()
        ? "Brief copied. Open Upwork and paste it into your conversation."
        : "Project brief copied. Paste it into your email.",
    ),
  );
function clearDraft() {
  result.hidden = true;
  preparedBrief = "";
}
form.addEventListener("input", clearDraft);
channels.forEach((channel) =>
  channel.addEventListener("change", updateChannel),
);
const entryParams = new URLSearchParams(window.location.search);
if (entryParams.get("via") === "upwork") {
  form.querySelector('input[value="upwork"]').checked = true;
}
updateChannel();
const projectServices = {
  "#saas-project": "SaaS / web application",
  "#mobile-project": "Existing product / mobile",
  "#voice-project": "AI integration",
};
if (projectServices[window.location.hash])
  service.value = projectServices[window.location.hash];
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    service.value = link.dataset.service;
    clearDraft();
  });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const brief = document.getElementById("brief");
  name.setCustomValidity(name.value.trim() ? "" : "Please enter your name.");
  brief.setCustomValidity(
    brief.value.trim().length >= 15
      ? ""
      : "Please add a little more detail about your project (at least 15 characters).",
  );
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Project enquiry: ${data.get("service")}`;
  const replyLine = upworkMode()
    ? ""
    : `\n\nReply to: ${String(data.get("email")).trim()}`;
  preparedBrief = `Hi Suryakant,\n\nI’m ${String(data.get("name")).trim()}.\n\nProject type: ${data.get("service")}\n\n${String(data.get("brief")).trim()}${replyLine}\n\nThanks,\n${String(data.get("name")).trim()}`;
  document.getElementById("open-email").href =
    `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(preparedBrief)}`;
  document.getElementById("brief-preview").textContent = preparedBrief;
  document.getElementById("open-email").hidden = upworkMode();
  document.getElementById("open-upwork").hidden = !upworkMode();
  document.getElementById("draft-instructions").textContent = upworkMode()
    ? "Your brief is ready. Copy it, then open my Upwork profile to start a conversation. Upwork may ask you to sign in."
    : "Your brief is ready. Open your email app, or copy the brief into your preferred email service.";
  result.hidden = false;
  document
    .getElementById(upworkMode() ? "copy-brief" : "open-email")
    .focus({ preventScroll: true });
  result.scrollIntoView({
    block: "nearest",
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
  announce("Your draft is ready. Nothing has been sent yet.");
});
for (const id of ["name", "brief"]) {
  document
    .getElementById(id)
    .addEventListener("input", (event) => event.target.setCustomValidity(""));
}

// Motion stays optional: content and navigation never depend on an animation.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const header = document.querySelector(".site-header");
const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
header.append(progress);
let scrollFrame = 0;
function updateScroll() {
  const distance = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0})`;
  header.classList.toggle("is-scrolled", scrollY > 12);
  scrollFrame = 0;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  },
  { passive: true },
);
window.addEventListener("resize", updateScroll);
updateScroll();

function enter(element, delay = 0) {
  if (reducedMotion.matches || !element.animate) return;
  element.animate(
    [
      { opacity: 0, transform: "translateY(22px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    {
      duration: 750,
      delay,
      easing: "cubic-bezier(.2,.7,.2,1)",
      fill: "backwards",
    },
  );
}
[...document.querySelector(".hero-copy").children].forEach((element, i) =>
  enter(element, i * 85),
);
enter(document.querySelector(".hero-visual"), 190);
if ("IntersectionObserver" in window) {
  const reveals = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // Animate only once and never make offscreen content inaccessible.
        enter(entry.target);
        reveals.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(
      ".section-heading,.project,.service,.process-grid li,.about-grid>div,.faq-section>div,.contact-grid>div,.brief-form",
    )
    .forEach((element) => reveals.observe(element));
  const voice = document.querySelector(".visual-voice");
  const voiceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        voice.classList.toggle(
          "motion-active",
          entry.isIntersecting && !reducedMotion.matches,
        ),
      );
    },
    { threshold: 0.4 },
  );
  voiceObserver.observe(voice);
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll("a").forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => sectionObserver.observe(section));
}
const portrait = document.querySelector(".portrait-frame");
let tiltFrame = 0;
portrait.addEventListener("pointermove", (event) => {
  if (reducedMotion.matches || !finePointer.matches || mobileQuery.matches)
    return;
  cancelAnimationFrame(tiltFrame);
  tiltFrame = requestAnimationFrame(() => {
    const bounds = portrait.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portrait.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg) rotate(1deg)`;
  });
});
function resetTilt() {
  cancelAnimationFrame(tiltFrame);
  portrait.style.transform = "";
}
portrait.addEventListener("pointerleave", resetTilt);
reducedMotion.addEventListener("change", () => {
  resetTilt();
  if (reducedMotion.matches) {
    document.getAnimations().forEach((animation) => animation.cancel());
    document.querySelector(".visual-voice").classList.remove("motion-active");
  }
});
