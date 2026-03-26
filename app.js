// JavaScript Document
console.log("Curso carregado com sucesso.");

const menuToggle = document.getElementById("menuToggle");
const lessonSidebar = document.getElementById("lessonSidebar");

if (menuToggle && lessonSidebar) {
  menuToggle.addEventListener("click", () => {
    lessonSidebar.classList.toggle("open");
  });
}

document.querySelectorAll(".accordion-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const icon = button.querySelector(".accordion-icon");

    button.setAttribute("aria-expanded", String(!isOpen));

    if (item) {
      item.classList.toggle("is-open", !isOpen);
    }

    if (icon) {
      icon.textContent = isOpen ? "+" : "−";
    }
  });
});

document.querySelectorAll(".flashcard-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const isFlipped = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isFlipped));
  });
});

const hotspotButtons = document.querySelectorAll(".hotspot");
const hotspotModal = document.getElementById("hotspotModal");
const hotspotClose = document.getElementById("hotspotClose");
const hotspotTitle = document.getElementById("hotspotTitle");
const hotspotText = document.getElementById("hotspotText");

if (
  hotspotButtons.length &&
  hotspotModal &&
  hotspotClose &&
  hotspotTitle &&
  hotspotText
) {
  hotspotButtons.forEach((button) => {
    button.addEventListener("click", () => {
      hotspotButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      hotspotTitle.textContent = button.dataset.title || "";
      hotspotText.textContent = button.dataset.text || "";

      hotspotModal.classList.add("is-open");
      hotspotModal.setAttribute("aria-hidden", "false");
    });
  });

  hotspotClose.addEventListener("click", () => {
    hotspotModal.classList.remove("is-open");
    hotspotModal.setAttribute("aria-hidden", "true");
  });

  hotspotModal.addEventListener("click", (event) => {
    if (event.target === hotspotModal) {
      hotspotModal.classList.remove("is-open");
      hotspotModal.setAttribute("aria-hidden", "true");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hotspotModal.classList.remove("is-open");
      hotspotModal.setAttribute("aria-hidden", "true");
    }
  });
}

document.querySelectorAll(".tabs").forEach((tabs) => {
  const buttons = tabs.querySelectorAll(".tab-btn");
  const panels = tabs.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls");

      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      panels.forEach((panel) => {
        panel.classList.remove("active");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const targetPanel = tabs.querySelector(`#${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});