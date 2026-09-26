/* ================= EXPERIENCE DATA ================= */
const experiences = [
  {
    id: "raneen",
    title: "Data Analyst & Distribution Specialist",
    subtitle: "Planning Department",
    company: "Raneen",
    location: "Giza, Egypt (Onsite)",
    duration: "January 2026 - Present",
    logo: "images/raneen.png",
    link: "https://www.raneen.com/ar/",
    bullets: [
      "Analyze home appliances sales, inventory, and branch performance data using Python and Excel to support operational planning and decision-making.",
      "Develop automated reporting workflows using Python, Pandas, Excel, and VBA, reducing report preparation time from approximately 3 hours to 3 minutes.",
      "Analyze stock availability and branch requirements across 55+ branches, supporting inventory allocation and product distribution.",
      "Coordinate Data Analysis team activities, ensuring accurate reporting, task completion, and timely delivery of analytical outputs."
    ]
  },
  {
    id: "corelia",
    title: "Machine Learning Intern",
    subtitle: "",
    company: "Corelia.AI",
    location: "Maadi, Egypt (Onsite)",
    duration: "July 2025 - October 2025",
    logo: "images/corelia.jfif",
    link: "https://www.corelia.ai/",
    bullets: [
      "Developed DL handwriting recognition model achieving 96% accuracy.",
      "Collaborated with the ML team on model building and evaluation.",
      "Built end-to-end pipeline: data loading → preprocessing (normalization, class-encoding) → model training → evaluation and confusion-matrix analysis."
    ]
  },
  {
    id: "azhar",
    title: "Data Specialist Intern",
    subtitle: "",
    company: "Al Azhar Institution",
    location: "Giza, Egypt",
    duration: "September 2023 - October 2023",
    logo: "images/Azhar.jpg",
    link: "https://drive.google.com/open?id=1YDsf0V13l3QTWzF3ZMEKJDsGvd3dRLc3&usp=drive_fs",
    linkLabel: "View Certificate ↗",
    bullets: [
      "Designed and optimized SQL databases, improving data integrity and security.",
      "Optimized queries, reducing payroll processing time by 50%.",
      "Supported the data team with daily data operations and quality checks."
    ]
  },
  {
    id: "raja",
    title: "Data Science Intern",
    subtitle: "",
    company: "Coding Raja Techniques",
    location: "Remote",
    duration: "July 2023 - August 2023",
    logo: "images/raja_cert.png",
    link: "https://drive.google.com/open?id=1twvu1gJoQVYqK5xUqo8RMHUYIohy4DaU&usp=drive_fs",
    linkLabel: "View Certificate ↗",
    bullets: [
      "Completed hands-on data science tasks including EDA and visualization.",
      "Built small ML models and presented findings to mentors."
    ]
  },
  {
    id: "sparks",
    title: "Business Analytics Intern",
    subtitle: "",
    company: "The Sparks Foundation",
    location: "Remote",
    duration: "May 2023 - June 2023",
    logo: "images/sparks_cert.png",
    link: "https://drive.google.com/open?id=1BLpg-2QbyQhZag1H56Ru_iEDta4I8D3f&usp=drive_fs",
    linkLabel: "View Certificate ↗",
    bullets: [
      "Performed business analytics tasks on real datasets using Python.",
      "Created dashboards and reports to present insights to the team."
    ]
  }
];

/* ================= RENDER EXPERIENCE CARDS ================= */
const grid = document.getElementById("experienceGrid");

experiences.forEach(exp => {
  const card = document.createElement("div");
  card.className = "exp-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `View details for ${exp.title} at ${exp.company}`);
  card.dataset.id = exp.id;

  card.innerHTML = `
    <img src="${exp.logo}" alt="${exp.company} logo" class="exp-logo" loading="lazy">
    <h3 class="exp-title">${exp.title}</h3>
    <p class="exp-company">${exp.company}</p>
    <p class="exp-date">${exp.duration}</p>
  `;

  card.addEventListener("click", () => openModal(exp));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(exp);
    }
  });

  grid.appendChild(card);
});

/* ================= MODAL LOGIC ================= */
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(exp) {
  modalBody.innerHTML = `
    <div class="modal-header">
      <img src="${exp.logo}" alt="${exp.company} logo">
      <div>
        <h3 id="modalTitle">${exp.title}</h3>
        ${exp.subtitle ? `<p class="modal-sub">${exp.subtitle}</p>` : ""}
        <p class="modal-sub">${exp.company}</p>
        <p class="modal-meta">${exp.location} · ${exp.duration}</p>
      </div>
    </div>
    <h4>Key Responsibilities & Achievements</h4>
    <ul>
      ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
    </ul>
        ${exp.link ? `<a href="${exp.link}" class="modal-link" target="_blank" rel="noopener noreferrer">${exp.linkLabel || "Visit Company ↗"}</a>` : ""}
  `;

  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove("active");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ================= MENU TOGGLE ================= */
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

/* ================= SCROLL TOP ================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display =
    window.scrollY > 200 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= DYNAMIC YEAR ================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* ================= SMOOTH SCROLL FOR NAV LINKS ================= */
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const topbarHeight = document.querySelector(".topbar")?.offsetHeight || 0;
    const y = target.getBoundingClientRect().top + window.scrollY - topbarHeight - 10;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

/* ================= SCROLL REVEAL ANIMATION ================= */
const revealEls = document.querySelectorAll(
  ".section, .hero, .project-card, .cert-card, .exp-card, .skills span"
);

revealEls.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -60px 0px"
});

revealEls.forEach(el => revealObserver.observe(el));

