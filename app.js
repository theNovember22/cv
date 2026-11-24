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
  // 7. Yggdrasil Tree of Knowledge Interactive Engine (Leaves & Stems)
  // ==========================================
  const yggdrasilStage = document.getElementById("yggdrasilStage");
  const yggdrasilLeafWrappers = document.querySelectorAll(".yggdrasil-leaf-wrapper");
  const treeSection = document.getElementById("education");
  const treePaths = document.querySelectorAll(".tree-trunk-core, .tree-branch, .tree-stem, .tree-root");

  // A. SVG Branch & Stem Drawing on Scroll Entry
  let treeDrawn = false;
  function triggerTreeAnimation() {
    if (treeDrawn) return;
    treeDrawn = true;
    treePaths.forEach((path, idx) => {
      try {
        const length = path.getTotalLength ? path.getTotalLength() : 800;
        path.style.strokeDasharray = length + " " + length;
        path.style.strokeDashoffset = length;
        path.style.transition = "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)";
        setTimeout(() => {
          path.style.strokeDashoffset = "0";
        }, idx * 70);
      } catch (err) {
        path.style.strokeDashoffset = "0";
      }
    });
  }

  const treeScrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerTreeAnimation();
        }
      });
    },
    { threshold: 0.05, rootMargin: "150px 0px" }
  );

  if (treeSection) {
    treeScrollObserver.observe(treeSection);
  }
  setTimeout(triggerTreeAnimation, 1800);

  // B. Interactive Branch, Stem & Leaf Focus on Hover
  yggdrasilLeafWrappers.forEach((wrapper) => {
    const nodeKey = wrapper.getAttribute("data-node");
    const num = nodeKey ? nodeKey.replace("node-", "") : "";
    const branch = document.getElementById("branch-" + num);
    const stem = document.getElementById("stem-" + num);
    const stemNode = document.getElementById("stem-node-" + num);

    wrapper.addEventListener("mouseenter", () => {
      if (yggdrasilStage) yggdrasilStage.classList.add("has-hover");
      wrapper.classList.add("hovered");
      if (branch) branch.classList.add("active-branch");
      if (stem) stem.classList.add("active-stem");
      if (stemNode) stemNode.classList.add("active-stem-node");
    });

    wrapper.addEventListener("mouseleave", () => {
      if (yggdrasilStage) yggdrasilStage.classList.remove("has-hover");
      wrapper.classList.remove("hovered");
      if (branch) branch.classList.remove("active-branch");
      if (stem) stem.classList.remove("active-stem");
      if (stemNode) stemNode.classList.remove("active-stem-node");
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

  // ==========================================
  // 14. Career Airport Journey Controller (Minimal Scroll-Controlled Aircraft)
  // ==========================================
  const airportSection = document.getElementById("experience");
  const airportGuidePath = document.getElementById("airportGuidePath");
  const airportActiveTrail = document.getElementById("airportActiveTrail");
  const airportAircraft = document.getElementById("airportAircraft");

  const airportBeacons = [
    document.getElementById("airportBeacon1"),
    document.getElementById("airportBeacon2"),
    document.getElementById("airportBeacon3"),
    document.getElementById("airportBeacon4")
  ];

  const airportTerminals = [
    document.getElementById("airport-term-1"),
    document.getElementById("airport-term-2"),
    document.getElementById("airport-term-3"),
    document.getElementById("airport-term-4")
  ];

  const transitSteps = [
    document.getElementById("transit-step-1"),
    document.getElementById("transit-step-2"),
    document.getElementById("transit-step-3"),
    document.getElementById("transit-step-4")
  ];

  if (airportSection && airportGuidePath && airportActiveTrail && airportAircraft) {
    let totalRunwayLength = 0;

    function initAirportRunway() {
      try {
        totalRunwayLength = airportGuidePath.getTotalLength();
        airportActiveTrail.style.strokeDasharray = totalRunwayLength + " " + totalRunwayLength;
        airportActiveTrail.style.strokeDashoffset = totalRunwayLength;
      } catch (err) {
        console.warn("Runway calculation error:", err);
      }
    }

    initAirportRunway();
    window.addEventListener("resize", initAirportRunway);

    const gateRatios = [0.05, 0.35, 0.65, 0.95];
    let ticking = false;

    function updateAirportJourney() {
      ticking = false;

      // On tablet / mobile, runway SVG is hidden and terminals stack cleanly
      if (window.innerWidth <= 1024) {
        airportTerminals.forEach((card) => {
          if (card) card.classList.add("terminal-open");
        });
        return;
      }

      if (!totalRunwayLength) {
        initAirportRunway();
        if (!totalRunwayLength) return;
      }

      const rect = airportSection.getBoundingClientRect();
      const sectionHeight = airportSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = sectionHeight - viewportHeight;

      if (maxScroll <= 0) return;

      const scrollDist = -rect.top;
      let rawProgress = scrollDist / maxScroll;
      let progress = Math.max(0, Math.min(1, rawProgress));

      // 1. Update Active Flight Runway
      const strokeOffset = totalRunwayLength * (1 - progress);
      airportActiveTrail.style.strokeDashoffset = strokeOffset;

      // 2. Position & Rotate Minimal Aircraft
      const currentLength = progress * totalRunwayLength;
      const pt = airportGuidePath.getPointAtLength(currentLength);
      const delta = 2;
      const ptAhead = airportGuidePath.getPointAtLength(Math.min(totalRunwayLength, currentLength + delta));
      const ptBehind = airportGuidePath.getPointAtLength(Math.max(0, currentLength - delta));
      const angleRad = Math.atan2(ptAhead.y - ptBehind.y, ptAhead.x - ptBehind.x);
      const angleDeg = angleRad * (180 / Math.PI);

      airportAircraft.setAttribute("transform", "translate(" + pt.x + ", " + pt.y + ") rotate(" + angleDeg + ")");

      // 3. Determine Active Destination Gate (0 to 3)
      let activeGateIndex = 0;
      if (progress < 0.25) {
        activeGateIndex = 0;
      } else if (progress < 0.52) {
        activeGateIndex = 1;
      } else if (progress < 0.78) {
        activeGateIndex = 2;
      } else {
        activeGateIndex = 3;
      }

      // 4. Update Departure-Board Transit Bar
      transitSteps.forEach((pill, idx) => {
        if (!pill) return;
        if (idx === activeGateIndex) {
          pill.classList.add("active");
          pill.classList.remove("passed");
        } else if (idx < activeGateIndex) {
          pill.classList.remove("active");
          pill.classList.add("passed");
        } else {
          pill.classList.remove("active", "passed");
        }
      });

      // 5. Update Gate Beacons along SVG
      airportBeacons.forEach((beacon, idx) => {
        if (!beacon) return;
        if (idx === activeGateIndex) {
          beacon.classList.add("active");
        } else {
          beacon.classList.remove("active");
        }
        if (idx <= activeGateIndex) {
          beacon.classList.add("passed");
        } else {
          beacon.classList.remove("passed");
        }
      });

      // 6. Highlight Active Destination Terminal Card
      airportTerminals.forEach((card, idx) => {
        if (!card) return;
        if (idx === activeGateIndex) {
          card.classList.add("active-dest");
        } else {
          card.classList.remove("active-dest");
        }
      });
    }

    function onAirportScroll() {
      if (!ticking) {
        requestAnimationFrame(updateAirportJourney);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onAirportScroll, { passive: true });
    updateAirportJourney();

    // Click airport stop on mobile/tablet to toggle flyout
    airportTerminals.forEach((card, idx) => {
      if (!card) return;
      card.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
          card.classList.toggle("terminal-open");
        }
      });
    });

    airportBeacons.forEach((beacon, idx) => {
      if (!beacon) return;
      beacon.addEventListener("click", () => {
        const sectionTop = airportSection.offsetTop;
        const maxScroll = airportSection.offsetHeight - window.innerHeight;
        const targetScroll = sectionTop + (gateRatios[idx] * maxScroll);
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      });
    });
  }


  // ==========================================
  // 15. Personal Developer Desk & Expandable Form Controller
  // ==========================================
  const toggleContactFormBtn = document.getElementById("toggleContactFormBtn");
  const closeDeskFormBtn = document.getElementById("closeDeskFormBtn");
  const deskFormPanel = document.getElementById("deskFormPanel");
  const contactForm = document.getElementById("contactForm");

  function toggleDeskForm() {
    if (!deskFormPanel) return;
    const isExpanded = deskFormPanel.classList.toggle("active");
    deskFormPanel.setAttribute("aria-hidden", (!isExpanded).toString());
    if (toggleContactFormBtn) {
      toggleContactFormBtn.setAttribute("aria-expanded", isExpanded.toString());
      if (isExpanded) {
        toggleContactFormBtn.classList.add("active");
        setTimeout(() => {
          deskFormPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 150);
      } else {
        toggleContactFormBtn.classList.remove("active");
      }
    }
  }

  function closeDeskForm() {
    if (!deskFormPanel) return;
    deskFormPanel.classList.remove("active");
    deskFormPanel.setAttribute("aria-hidden", "true");
    if (toggleContactFormBtn) {
      toggleContactFormBtn.setAttribute("aria-expanded", "false");
      toggleContactFormBtn.classList.remove("active");
    }
  }

  if (toggleContactFormBtn) {
    toggleContactFormBtn.addEventListener("click", toggleDeskForm);
  }

  if (closeDeskFormBtn) {
    closeDeskFormBtn.addEventListener("click", closeDeskForm);
  }

  // Handle Note Submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName")?.value.trim() || "";
      const email = document.getElementById("contactEmail")?.value.trim() || "";
      const subject = document.getElementById("contactSubject")?.value.trim() || "Portfolio Opportunity";
      const message = document.getElementById("contactMessage")?.value.trim() || "";

      if (!name || !email || !message) {
        showToast("Please fill in all fields", "fa-triangle-exclamation");
        return;
      }

      showToast("Thank you, " + name + "! Opening email client...", "fa-paper-plane");

      const recipient = "battulabhargav222@gmail.com";
      const fullSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const bodyContent = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Battula Bhargav Portfolio Desk`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${fullSubject}&body=${bodyContent}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      contactForm.reset();
      setTimeout(() => {
        closeDeskForm();
      }, 1500);
    });
  }

  // ==========================================
  // 16. Playing Cards Mobile Tap Controller
  // ==========================================
  const playingCards = document.querySelectorAll(".playing-card");
  if (window.matchMedia("(hover: none)").matches) {
    playingCards.forEach((card) => {
      card.addEventListener("click", () => {
        const isLifted = card.classList.contains("card-lifted");
        playingCards.forEach((c) => c.classList.remove("card-lifted"));
        if (!isLifted) {
          card.classList.add("card-lifted");
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".playing-card")) {
        playingCards.forEach((c) => c.classList.remove("card-lifted"));
      }
    });
  }

});
