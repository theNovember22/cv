/**
 * Developer Portfolio: Battula Bhargav
 * Architecture: Liquid-Glass Black & White Aesthetic
 * Features:
 *  - Cinematic Scroll Reveal for Personal Portrait
 *  - 3D Perspective Tilt, Specular Glare & Magnetic "HIRE ME" CTA
 *  - Yggdrasil World Tree of Knowledge Interactive SVG Engine & Node Focus
 *  - Bespoke Sticky Stacking Card System & IDE Windows
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



  // ==========================================
  // 17. Interactive Engineering Terminal Controller
  // ==========================================
  const terminalForm = document.getElementById("terminalForm");
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");
  const termChips = document.querySelectorAll(".term-chip");

  const cmdHistory = [];
  let historyIdx = -1;

  const terminalResponses = {
    help: [
      "Available commands:",
      "  • <strong>about</strong>     : Career, academic & research background",
      "  • <strong>projects</strong>  : Key systems & research implementations",
      "  • <strong>research</strong>  : Reliability-Aware Active Learning & Bayesian uncertainty",
      "  • <strong>skills</strong>    : Categorized technical proficiencies",
      "  • <strong>contact</strong>   : Email, phone, LinkedIn & GitHub coordinates",
      "  • <strong>resume</strong>    : Open / download Curriculum Vitae",
      "  • <strong>whoami</strong>    : View your session context",
      "  • <strong>clear</strong>     : Clear terminal output screen"
    ],
    about: [
      "<strong>Battula Bhargav</strong> &bull; Software Engineer & AI Researcher",
      "• <strong>M.Tech CSE Scholar</strong> @ NIT Goa (Aug 2024 – Present)",
      "• <strong>Ex-Systems Engineer</strong> @ Infosys (July 2022 – Oct 2023) — 1+ year enterprise ETL & SAC pipelines",
      "• <strong>GATE CSE 2025</strong>: AIR 10,139 (Top ~6% nationally) | GATE DA 2025: AIR 9,572",
      "• <strong>Amazon ML Summer School 2024</strong>: Competitively selected participant",
      "• Focus: Reliable AI, Bayesian Active Learning, Large-scale optimization & systems"
    ],
    projects: [
      "Key Engineering Projects & Case Studies:",
      "1. <a href='#cs-aura'><strong>National EV Energy Network Optimizer (AURA)</strong></a> — 1,200 MW Grid Joint LP/MILP Dispatch",
      "2. <a href='#cs-activehai'><strong>Reliability-Aware Active Learning</strong></a> — Monte Carlo Dropout on Diabetic Retinopathy DR-5",
      "3. <strong>Personal AI Voice Assistant</strong> — Low-latency keyword spotting with Groq LLM routing",
      "4. <strong>MovieGo+ Ticketing Platform</strong> — Concurrent full-stack booking with Clerk Auth & MongoDB",
      "5. <strong>CNN Digit Recognizer</strong> — LeNet-5 computer vision model on MNIST with live inference",
      "6. <strong>Interactive Sudoku Solver</strong> — Recursive backtracking DSA solver (&lt;1s execution)",
      "7. <strong>BayGrid Smart Parking</strong> — C++ OOP system with dynamic bay allocation"
    ],
    research: [
      "<strong>M.Tech Research: Reliability-Aware Human-AI Active Learning</strong>",
      "• Institution: National Institute of Technology Goa (NIT Goa)",
      "• Core methodology: Test-time Monte Carlo Dropout for epistemic uncertainty estimation",
      "• Dataset benchmark: Diabetic Retinopathy 5-class clinical grading (DR-5)",
      "• Metric evaluation: AUROC and AUPRC for error prediction vs softmax baseline",
      "• Outcome: Selective abstention prevents overconfident errors and reduces specialist annotation overhead."
    ],
    skills: [
      "<strong>Categorized Technical Competencies:</strong>",
      "• <strong>Languages</strong>: Python, C/C++ (OOP), JavaScript (ES6+), C, SQL",
      "• <strong>AI/ML</strong>: PyTorch, TensorFlow/Keras, Scikit-Learn, Monte Carlo Dropout, Active Learning, Groq LLM",
      "• <strong>Backend & Systems</strong>: Node.js, RESTful APIs, OOP Architecture, Linux, SciPy LP/MILP",
      "• <strong>Data & Cloud</strong>: MongoDB, PostgreSQL, MySQL, Enterprise ETL, Docker, Vercel, Git"
    ],
    contact: [
      "<strong>Direct Contact Coordinates:</strong>",
      "• Email: <a href='mailto:battulabhargav222@gmail.com'>battulabhargav222@gmail.com</a>",
      "• LinkedIn: <a href='https://www.linkedin.com/in/b22in' target='_blank'>linkedin.com/in/b22in</a>",
      "• GitHub: <a href='https://github.com/theNovember22' target='_blank'>github.com/theNovember22</a>",
      "• Phone: <a href='tel:+917286066067'>+91 7286066067</a>"
    ],
    whoami: [
      "Visitor Session Context:",
      "&gt; Role: Engineering Recruiter / Researcher / Technical Hiring Manager",
      "&gt; Authorization: Verified candidate profile review for Battula Bhargav",
      "&gt; Status: Open for full-time SWE, AI/ML Engineering & Research roles."
    ]
  };

  function executeTerminalCommand(rawCmd) {
    if (!terminalOutput) return;
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    cmdHistory.push(cmd);
    historyIdx = cmdHistory.length;

    const cmdLine = document.createElement("div");
    cmdLine.className = "term-line";
    cmdLine.innerHTML = '<span class="term-prompt">bhargav@nitgoa:~$</span> <span class="term-cmd">' + escapeHtml(cmd) + '</span>';
    terminalOutput.appendChild(cmdLine);

    if (cmd === "clear") {
      terminalOutput.innerHTML = '<div class="term-line term-dim"><span class="term-comment">// Screen cleared. Type "help" for commands.</span></div>';
      return;
    }

    if (cmd === "resume") {
      window.open("Battula_Bhargav_Resume.pdf", "_blank");
      const resp = document.createElement("div");
      resp.className = "term-output";
      resp.innerHTML = "&gt; Opening Battula_Bhargav_Resume.pdf in new tab...";
      terminalOutput.appendChild(resp);
    } else if (terminalResponses[cmd]) {
      const resp = document.createElement("div");
      resp.className = "term-output";
      resp.innerHTML = terminalResponses[cmd].join("<br>");
      terminalOutput.appendChild(resp);
    } else {
      const resp = document.createElement("div");
      resp.className = "term-output";
      resp.innerHTML = 'zsh: command not found: ' + escapeHtml(cmd) + '. Type <strong style="color:#0A84FF;">help</strong> for available commands.';
      terminalOutput.appendChild(resp);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var val = terminalInput.value;
      if (val) {
        executeTerminalCommand(val);
        terminalInput.value = "";
      }
    });

    terminalInput.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIdx > 0) {
          historyIdx--;
          terminalInput.value = cmdHistory[historyIdx] || "";
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIdx < cmdHistory.length - 1) {
          historyIdx++;
          terminalInput.value = cmdHistory[historyIdx] || "";
        } else {
          historyIdx = cmdHistory.length;
          terminalInput.value = "";
        }
      }
    });
  }

  termChips.forEach(function(chip) {
    chip.addEventListener("click", function() {
      var cmd = chip.getAttribute("data-cmd");
      if (cmd) {
        executeTerminalCommand(cmd);
        if (terminalInput) terminalInput.focus();
      }
    });
  });


  // ==========================================
  // 18. Proof-of-Work: Interactive CNN Digit Recognition Demo Controller
  // ==========================================
  var digitCanvas = document.getElementById("digitCanvas");
  var previewCanvas = document.getElementById("previewCanvas");
  var clearCanvasBtn = document.getElementById("clearCanvasBtn");
  var predictCanvasBtn = document.getElementById("predictCanvasBtn");
  var realtimeToggle = document.getElementById("realtimeToggle");
  var canvasHint = document.getElementById("canvasHint");
  var predictedDigitEl = document.getElementById("predictedDigit");
  var predictedConfidenceEl = document.getElementById("predictedConfidence");
  var distributionBarsEl = document.getElementById("distributionBars");

  if (distributionBarsEl) {
    distributionBarsEl.innerHTML = "";
    for (var d = 0; d < 10; d++) {
      var row = document.createElement("div");
      row.className = "prob-bar-row";
      row.id = "prob-row-" + d;
      row.innerHTML = 
        '<span class="prob-digit-label">' + d + '</span>' +
        '<div class="prob-bar-track">' +
          '<div class="prob-bar-fill" id="prob-fill-' + d + '" style="width: 0%;"></div>' +
        '</div>' +
        '<span class="prob-bar-val" id="prob-val-' + d + '">0.0%</span>';
      distributionBarsEl.appendChild(row);
    }
  }

  if (digitCanvas) {
    var ctx = digitCanvas.getContext("2d");
    var isDrawing = false;
    var hasDrawn = false;
    var strokeTimer = null;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, digitCanvas.width, digitCanvas.height);

    function startDraw(e) {
      isDrawing = true;
      hasDrawn = true;
      if (canvasHint) canvasHint.classList.add("hidden");
      var pos = getCanvasPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineWidth = 22;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#FFFFFF";
      ctx.shadowBlur = 4;
      ctx.shadowColor = "#FFFFFF";
    }

    function moveDraw(e) {
      if (!isDrawing) return;
      var pos = getCanvasPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();

      if (realtimeToggle && realtimeToggle.checked) {
        clearTimeout(strokeTimer);
        strokeTimer = setTimeout(runDigitInference, 120);
      }
    }

    function endDraw() {
      if (isDrawing) {
        isDrawing = false;
        ctx.closePath();
        if (realtimeToggle && realtimeToggle.checked) {
          runDigitInference();
        }
      }
    }

    function getCanvasPos(e) {
      var rect = digitCanvas.getBoundingClientRect();
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      var scaleX = digitCanvas.width / rect.width;
      var scaleY = digitCanvas.height / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
      };
    }

    digitCanvas.addEventListener("mousedown", startDraw);
    digitCanvas.addEventListener("mousemove", moveDraw);
    window.addEventListener("mouseup", endDraw);

    digitCanvas.addEventListener("touchstart", function(e) {
      e.preventDefault();
      startDraw(e);
    }, { passive: false });

    digitCanvas.addEventListener("touchmove", function(e) {
      e.preventDefault();
      moveDraw(e);
    }, { passive: false });

    digitCanvas.addEventListener("touchend", endDraw);

    function clearCanvas() {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, digitCanvas.width, digitCanvas.height);
      if (canvasHint) canvasHint.classList.remove("hidden");
      hasDrawn = false;
      if (predictedDigitEl) predictedDigitEl.textContent = "—";
      if (predictedConfidenceEl) predictedConfidenceEl.textContent = "0.0% Confidence";

      for (var d = 0; d < 10; d++) {
        var fill = document.getElementById("prob-fill-" + d);
        var val = document.getElementById("prob-val-" + d);
        var row = document.getElementById("prob-row-" + d);
        if (fill) fill.style.width = "0%";
        if (val) val.textContent = "0.0%";
        if (row) row.classList.remove("top-pred");
      }

      if (previewCanvas) {
        var pCtx = previewCanvas.getContext("2d");
        pCtx.fillStyle = "#000000";
        pCtx.fillRect(0, 0, 28, 28);
      }
    }

    if (clearCanvasBtn) clearCanvasBtn.addEventListener("click", clearCanvas);
    if (predictCanvasBtn) predictCanvasBtn.addEventListener("click", runDigitInference);

    function runDigitInference() {
      if (!hasDrawn) return;
      var t0 = performance.now();

      var imgData = ctx.getImageData(0, 0, digitCanvas.width, digitCanvas.height);
      var data = imgData.data;
      var minX = digitCanvas.width, minY = digitCanvas.height, maxX = 0, maxY = 0;
      var count = 0;

      for (var y = 0; y < digitCanvas.height; y++) {
        for (var x = 0; x < digitCanvas.width; x++) {
          var idx = (y * digitCanvas.width + x) * 4;
          var brightness = data[idx];
          if (brightness > 20) {
            count++;
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (count < 20 || minX > maxX || minY > maxY) {
        return;
      }

      var pad = 12;
      minX = Math.max(0, minX - pad);
      minY = Math.max(0, minY - pad);
      maxX = Math.min(digitCanvas.width, maxX + pad);
      maxY = Math.min(digitCanvas.height, maxY + pad);
      var bw = maxX - minX;
      var bh = maxY - minY;

      var tempCanvas = document.createElement("canvas");
      tempCanvas.width = bw;
      tempCanvas.height = bh;
      var tCtx = tempCanvas.getContext("2d");
      tCtx.putImageData(ctx.getImageData(minX, minY, bw, bh), 0, 0);

      var target20 = document.createElement("canvas");
      target20.width = 20;
      target20.height = 20;
      var t20Ctx = target20.getContext("2d");
      t20Ctx.fillStyle = "#000000";
      t20Ctx.fillRect(0, 0, 20, 20);

      var dw = 20, dh = 20;
      if (bw > bh) {
        dh = Math.round((bh / bw) * 20);
      } else {
        dw = Math.round((bw / bh) * 20);
      }
      var dx = Math.round((20 - dw) / 2);
      var dy = Math.round((20 - dh) / 2);
      t20Ctx.drawImage(tempCanvas, 0, 0, bw, bh, dx, dy, dw, dh);

      var d20 = t20Ctx.getImageData(0, 0, 20, 20).data;
      var sumMass = 0, sumX = 0, sumY = 0;
      for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) {
          var val = d20[(y * 20 + x) * 4];
          sumMass += val;
          sumX += x * val;
          sumY += y * val;
        }
      }

      var cX = sumMass > 0 ? (sumX / sumMass) : 10;
      var cY = sumMass > 0 ? (sumY / sumMass) : 10;

      var offsetX = Math.round(14 - cX);
      var offsetY = Math.round(14 - cY);

      var final28 = document.createElement("canvas");
      final28.width = 28;
      final28.height = 28;
      var fCtx = final28.getContext("2d");
      fCtx.fillStyle = "#000000";
      fCtx.fillRect(0, 0, 28, 28);
      fCtx.drawImage(target20, offsetX, offsetY);

      if (previewCanvas) {
        var pCtx = previewCanvas.getContext("2d");
        pCtx.drawImage(final28, 0, 0);
      }

      var fData = fCtx.getImageData(0, 0, 28, 28).data;
      var xInput = new Float32Array(784);
      for (var i = 0; i < 784; i++) {
        xInput[i] = fData[i * 4] / 255.0;
      }

      if (!window.MNIST_WEIGHTS) {
        console.warn("MNIST weights not loaded yet.");
        return;
      }

      var W1 = window.MNIST_WEIGHTS.W1;
      var b1 = window.MNIST_WEIGHTS.b1;
      var W2 = window.MNIST_WEIGHTS.W2;
      var b2 = window.MNIST_WEIGHTS.b2;
      var W3 = window.MNIST_WEIGHTS.W3;
      var b3 = window.MNIST_WEIGHTS.b3;

      var h1 = new Float32Array(64);
      for (var j = 0; j < 64; j++) {
        var sum = b1[j];
        for (var i = 0; i < 784; i++) {
          sum += xInput[i] * W1[i][j];
        }
        h1[j] = sum > 0 ? sum : 0;
      }

      var h2 = new Float32Array(32);
      for (var j = 0; j < 32; j++) {
        var sum = b2[j];
        for (var i = 0; i < 64; i++) {
          sum += h1[i] * W2[i][j];
        }
        h2[j] = sum > 0 ? sum : 0;
      }

      var logits = new Float32Array(10);
      var maxLogit = -Infinity;
      for (var j = 0; j < 10; j++) {
        var sum = b3[j];
        for (var i = 0; i < 32; i++) {
          sum += h2[i] * W3[i][j];
        }
        logits[j] = sum;
        if (sum > maxLogit) maxLogit = sum;
      }

      var expSum = new Float32Array(10);
      var totalExp = 0;
      for (var j = 0; j < 10; j++) {
        expSum[j] = Math.exp(logits[j] - maxLogit);
        totalExp += expSum[j];
      }

      var probs = new Float32Array(10);
      var bestDigit = 0;
      var maxProb = 0;
      for (var j = 0; j < 10; j++) {
        probs[j] = expSum[j] / totalExp;
        if (probs[j] > maxProb) {
          maxProb = probs[j];
          bestDigit = j;
        }
      }

      var t1 = performance.now();
      var latencyMs = (t1 - t0).toFixed(1);

      if (predictedDigitEl) predictedDigitEl.textContent = bestDigit;
      if (predictedConfidenceEl) {
        predictedConfidenceEl.textContent = (maxProb * 100).toFixed(1) + "% Confidence";
      }
      var latencyEl = document.getElementById("inferenceLatency");
      if (latencyEl) {
        latencyEl.textContent = "Latency: " + latencyMs + " ms (Client-Side Forward Pass)";
      }

      for (var d = 0; d < 10; d++) {
        var pct = (probs[d] * 100).toFixed(1);
        var fill = document.getElementById("prob-fill-" + d);
        var val = document.getElementById("prob-val-" + d);
        var row = document.getElementById("prob-row-" + d);
        if (fill) fill.style.width = pct + "%";
        if (val) val.textContent = pct + "%";
        if (row) {
          if (d === bestDigit) {
            row.classList.add("top-pred");
          } else {
            row.classList.remove("top-pred");
          }
        }
      }
    }
  }


  // ==========================================
  // 19. Interactive Skill-to-Project Highlighting Controller
  // ==========================================
  var skillPills = document.querySelectorAll(".skill-pill-btn");
  var projectCards = document.querySelectorAll(".case-study-card, .eng-card");

  var activeSkillFilter = null;

  function applySkillHighlight(skillName) {
    if (!skillName) {
      projectCards.forEach(function(card) {
        card.classList.remove("skill-focused", "skill-dimmed");
      });
      skillPills.forEach(function(p) {
        p.classList.remove("active");
      });
      activeSkillFilter = null;
      return;
    }

    activeSkillFilter = skillName;
    skillPills.forEach(function(p) {
      if (p.getAttribute("data-skill") === skillName) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    projectCards.forEach(function(card) {
      var cardSkills = (card.getAttribute("data-skills") || "").toLowerCase();
      if (cardSkills.indexOf(skillName.toLowerCase()) !== -1) {
        card.classList.add("skill-focused");
        card.classList.remove("skill-dimmed");
      } else {
        card.classList.remove("skill-focused");
        card.classList.add("skill-dimmed");
      }
    });
  }

  skillPills.forEach(function(pill) {
    pill.addEventListener("click", function() {
      var skill = pill.getAttribute("data-skill");
      if (activeSkillFilter === skill) {
        applySkillHighlight(null);
      } else {
        applySkillHighlight(skill);
      }
    });

    pill.addEventListener("mouseenter", function() {
      if (!activeSkillFilter) {
        var skill = pill.getAttribute("data-skill");
        applySkillHighlight(skill);
      }
    });

    pill.addEventListener("mouseleave", function() {
      if (!activeSkillFilter) {
        applySkillHighlight(null);
      }
    });
  });

});
