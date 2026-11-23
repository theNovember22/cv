/**
 * Developer Portfolio: Battula Bhargav
 * Apple HIG Interactive Engine & Abu Said Architecture
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Apple Toast Notification System
  // ==========================================
  const toast = document.getElementById("appleToast");
  const toastMessage = document.getElementById("toastMessage");
  let toastTimeout = null;

  function showToast(message, iconClass = "fa-circle-check") {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    
    const icon = toast.querySelector("i");
    if (icon) {
      icon.className = `fa-solid ${iconClass}`;
    }

    toast.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  // ==========================================
  // 2. Apple Theme Toggle (Dark & Light Mode)
  // ==========================================
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  const currentTheme = localStorage.getItem("bhargav-apple-theme") || "dark";
  if (currentTheme === "light") {
    body.classList.add("light-theme");
    if (themeIcon) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = body.classList.toggle("light-theme");
      const nextTheme = isLight ? "light" : "dark";
      localStorage.setItem("bhargav-apple-theme", nextTheme);

      if (themeIcon) {
        if (isLight) {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
          showToast("Switched to Apple Light Frost mode", "fa-sun");
        } else {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
          showToast("Switched to Apple Obsidian Dark mode", "fa-moon");
        }
      }
    });
  }

  // ==========================================
  // 3. Dynamic Typing Text in Hero
  // ==========================================
  const typingTarget = document.getElementById("typingText");
  const roles = [
    "Software Engineer",
    "AI & ML Researcher",
    "Ex-Systems Engineer @ Infosys",
    "M.Tech CSE @ NIT Goa",
    "GATE CSE AIR 10139",
    "Full-Stack Developer",
    "Competitive Programmer (300+ LeetCode)"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingDelay = 120;

  function typeEffect() {
    if (!typingTarget) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typingTarget.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingDelay = 45;
    } else {
      typingTarget.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingDelay = 110;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingDelay = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingDelay = 400; // Pause before new word
    }

    setTimeout(typeEffect, typingDelay);
  }

  if (typingTarget) {
    typeEffect();
  }

  // ==========================================
  // 4. macOS Interactive Code Window Engine
  // ==========================================
  const runCodeBtn = document.getElementById("runCodeBtn");
  const copyCodeBtn = document.getElementById("copyCodeBtn");
  const codeOutputTray = document.getElementById("codeOutputTray");

  if (runCodeBtn && codeOutputTray) {
    runCodeBtn.addEventListener("click", () => {
      codeOutputTray.classList.toggle("show");
      if (codeOutputTray.classList.contains("show")) {
        showToast("Code executed: hireable is TRUE!", "fa-circle-check");
        runCodeBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Reset';
      } else {
        runCodeBtn.innerHTML = '<i class="fa-solid fa-play"></i> Run';
      }
    });
  }

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", () => {
      const codeSnippet = `const developer = {
  name: 'Battula Bhargav',
  title: 'Software Engineer & AI Researcher',
  institution: 'NIT Goa (M.Tech CSE)',
  experience: 'Ex-Systems Engineer @ Infosys',
  coreSkills: ['C/C++', 'Python', 'React.js', 'PyTorch', 'MongoDB', 'SQL', 'DSA'],
  leetCodeProblems: '300+ Solved',
  gateCSE: 'AIR 10139 (Top ~6%)',
  amazonMLSS: 'Selected Participant 2026',
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && this.problemSolver && this.coreSkills.length >= 5;
  }
};`;

      navigator.clipboard.writeText(codeSnippet).then(() => {
        showToast("Object copied to clipboard!", "fa-copy");
      }).catch(() => {
        showToast("Copied code to clipboard!", "fa-check");
      });
    });
  }

  // ==========================================
  // 5. Skills Category Filter
  // ==========================================
  const skillFilterBtns = document.querySelectorAll(".skill-filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  skillFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      skillCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px) scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });

  // ==========================================
  // 6. Projects Filter Tabs
  // ==========================================
  const projectFilterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  projectFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const cardFilter = card.getAttribute("data-filter");
        if (filter === "all" || cardFilter === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0) scale(1)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px) scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });

  // ==========================================
  // 7. Scrollspy & Sticky Header Highlighting
  // ==========================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function scrollSpy() {
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", scrollSpy);
  scrollSpy(); // initial run

  // ==========================================
  // 8. Back to Top Button
  // ==========================================
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================================
  // 9. Mobile Menu Toggle
  // ==========================================
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = mobileMenuBtn.querySelector("i");
      if (navMenu.classList.contains("open")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });

    // Close on link click
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }

  // ==========================================
  // 10. Contact Form Handler (Direct Mailto)
  // ==========================================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subject = document.getElementById("contactSubject").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields", "fa-triangle-exclamation");
        return;
      }

      const recipient = "battulabhargav222@gmail.com";
      const fullSubject = encodeURIComponent(`[Portfolio] ${subject} - from ${name}`);
      const bodyContent = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Portfolio Contact Form`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${fullSubject}&body=${bodyContent}`;

      showToast("Opening your email client to send note...", "fa-paper-plane");

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      contactForm.reset();
    });
  }

  // ==========================================
  // 11. Intersection Observer for Reveal Elements
  // ==========================================
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
});
