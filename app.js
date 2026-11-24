/**
 * Developer Portfolio: Battula Bhargav
 * Architecture: Liquid-Glass Black & White Aesthetic
 * Features:
 *  - Cinematic Scroll Reveal for Personal Portrait
 *  - 3D Perspective Tilt, Specular Glare & Magnetic "HIRE ME" CTA
 *  - Yggdrasil World Tree of Knowledge Interactive SVG Engine & Node Focus
 *  - Abu Said Sticky Stacking Card System & IDE Windows
 *  - Infinite Monochrome Skills Marquee
 *  - Dynamic Typing Engine, Toast System & Scrollspy
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Toast Notification System
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
  // 2. Liquid Glass Theme Toggle (Obsidian Dark & Frost Light)
  // ==========================================
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;

  const currentTheme = localStorage.getItem("bhargav-theme") || "dark";
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
      localStorage.setItem("bhargav-theme", nextTheme);

      if (themeIcon) {
        if (isLight) {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
          showToast("Switched to Frosted Monochrome Light", "fa-sun");
        } else {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
          showToast("Switched to Obsidian Liquid Glass", "fa-moon");
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
    "Full-Stack Architect",
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
      typingDelay = 2200; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingDelay = 450; // Pause before new word
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
  // 5. Cinematic Photo Scroll Reveal Engine
  // ==========================================
  const photoContainer = document.getElementById("photoRevealContainer");
  const photoVeil = document.getElementById("photoVeil");
  const photoImg = document.getElementById("photoImg");

  function updatePhotoScrollReveal() {
    if (!photoContainer || !photoVeil) return;
    const rect = photoContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Start dissolving when element enters viewport from bottom
    // Fully clear when element is well in view
    const triggerBottom = windowHeight * 0.95;
    const triggerTop = windowHeight * 0.35;

    let progress = (triggerBottom - rect.top) / (triggerBottom - triggerTop);
    progress = Math.min(Math.max(progress, 0), 1);

    const veilOpacity = 1 - progress;
    const blurPx = (1 - progress) * 36;
    const scale = 0.93 + progress * 0.07;
    const translateY = (1 - progress) * 20;

    photoVeil.style.opacity = veilOpacity.toFixed(3);
    photoVeil.style.backdropFilter = `blur(${blurPx.toFixed(1)}px)`;
    photoVeil.style.webkitBackdropFilter = `blur(${blurPx.toFixed(1)}px)`;

    if (photoImg) {
      photoImg.style.transform = `scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`;
    }

    if (progress >= 0.95) {
      photoVeil.classList.add("revealed");
    } else {
      photoVeil.classList.remove("revealed");
    }
  }

  window.addEventListener("scroll", updatePhotoScrollReveal, { passive: true });
  updatePhotoScrollReveal();

  // ==========================================
  // 6. Photo 3D Perspective Tilt & Glare & Magnetic "HIRE ME"
  // ==========================================
  const photoFrame = document.getElementById("photoLiquidFrame");
  const photoGlare = document.getElementById("photoGlare");
  const hireMePill = document.getElementById("hireMePill");

  if (photoFrame) {
    photoFrame.addEventListener("mousemove", (e) => {
      const rect = photoFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      // 3D Perspective Tilt
      const tiltX = -deltaY * 12;
      const tiltY = deltaX * 12;
      photoFrame.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;

      // Dynamic Glare Reflection
      if (photoGlare) {
        photoGlare.style.opacity = "0.75";
        photoGlare.style.transform = `translate(${(-deltaX * 35).toFixed(1)}px, ${(-deltaY * 35).toFixed(1)}px)`;
      }

      // Magnetic "HIRE ME" CTA tracking
      if (hireMePill) {
        const moveX = deltaX * 24;
        const moveY = deltaY * 24;
        hireMePill.style.transform = `translate(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px) scale(1)`;
      }
    });

    photoFrame.addEventListener("mouseleave", () => {
      photoFrame.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      if (photoGlare) {
        photoGlare.style.opacity = "0.55";
        photoGlare.style.transform = "translate(0, 0)";
      }
      if (hireMePill) {
        hireMePill.style.transform = "translate(0, 0) scale(1)";
      }
    });
  }

  // ==========================================
  // 7. Yggdrasil Tree of Knowledge Interactive Engine
  // ==========================================
  const yggdrasilStage = document.getElementById("yggdrasilStage");
  const treeNodeWrappers = document.querySelectorAll(".tree-node-wrapper");
  const treeSection = document.getElementById("education");
  const treePaths = document.querySelectorAll(".tree-trunk-core, .tree-branch, .tree-root");

  // A. SVG Branch Drawing on Scroll Entry
  let treeDrawn = false;
  function setupTreeSVGAnimation() {
    treePaths.forEach((path) => {
      try {
        const length = path.getTotalLength ? path.getTotalLength() : 800;
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.style.transition = "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)";
      } catch (err) {
        // fallback
      }
    });
  }
  setupTreeSVGAnimation();

  const treeScrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !treeDrawn) {
          treeDrawn = true;
          treePaths.forEach((path, idx) => {
            setTimeout(() => {
              path.style.strokeDashoffset = "0";
            }, idx * 110);
          });
        }
      });
    },
    { threshold: 0.15 }
  );

  if (treeSection) {
    treeScrollObserver.observe(treeSection);
  }

  // B. Interactive Branch & Node Focus on Hover
  treeNodeWrappers.forEach((wrapper) => {
    const nodeKey = wrapper.getAttribute("data-node");
    const branchId = `branch-${nodeKey ? nodeKey.replace("node-", "") : ""}`;
    const nexusId = `nexus-${nodeKey ? nodeKey.replace("node-", "") : ""}`;

    const branch = document.getElementById(branchId);
    const nexus = document.getElementById(nexusId);

    wrapper.addEventListener("mouseenter", () => {
      if (yggdrasilStage) yggdrasilStage.classList.add("has-hover");
      wrapper.classList.add("hovered");
      if (branch) branch.classList.add("active-branch");
      if (nexus) nexus.classList.add("active-nexus");
    });

    wrapper.addEventListener("mouseleave", () => {
      if (yggdrasilStage) yggdrasilStage.classList.remove("has-hover");
      wrapper.classList.remove("hovered");
      if (branch) branch.classList.remove("active-branch");
      if (nexus) nexus.classList.remove("active-nexus");
    });
  });

  // ==========================================
  // 8. Skills Category Filter
  // ==========================================
  const skillFilterBtns = document.querySelectorAll(".skill-filter-btn");
  const skillCards = document.querySelectorAll("#skillsGrid .skill-box-card, .skill-card");

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
  // 9. Scrollspy & Sticky Header Highlighting
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
          const href = link.getAttribute("href");
          if (href === `#${id}` || (id === "identity" && href === "#about")) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", scrollSpy, { passive: true });
  scrollSpy();

  // ==========================================
  // 10. Back to Top Button
  // ==========================================
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ==========================================
  // 11. Mobile Menu Toggle
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

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = mobileMenuBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }

  // ==========================================
  // 12. Contact Form Handler (Direct Mailto)
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
      const fullSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const bodyContent = encodeURIComponent(
        `Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from Battula Bhargav Portfolio`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${fullSubject}&body=${bodyContent}`;

      showToast("Opening email client...", "fa-paper-plane");

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      contactForm.reset();
    });
  }

  // ==========================================
  // 13. Reveal Elements Observer
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
