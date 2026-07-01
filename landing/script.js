const SITE_CONFIG = {
  downloadUrl: "https://github.com/IvanDerkach/AntiCasino-Shield/releases/latest",
  githubUrl: "https://github.com/IvanDerkach/AntiCasino-Shield",
  githubReleasesUrl: "https://github.com/IvanDerkach/AntiCasino-Shield/releases",
  telegramUrl: "https://t.me/AntiCasinoShield",
  buyMeACoffeeUrl: "https://buymeacoffee.com/ivanderkach",
  kofiUrl: "https://ko-fi.com/ivanderkach",
  paypalUrl: "https://paypal.me/ivanderkach"
};

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}

const linkMap = {
  ".js-download-link": SITE_CONFIG.downloadUrl,
  ".js-github-link": SITE_CONFIG.githubUrl,
  ".js-github-releases-link": SITE_CONFIG.githubReleasesUrl,
  ".js-telegram-link": SITE_CONFIG.telegramUrl,
  ".js-bmac-link": SITE_CONFIG.buyMeACoffeeUrl,
  ".js-kofi-link": SITE_CONFIG.kofiUrl,
  ".js-paypal-link": SITE_CONFIG.paypalUrl
};

for (const [selector, url] of Object.entries(linkMap)) {
  document.querySelectorAll(selector).forEach((link) => {
    link.href = url;
  });
}
