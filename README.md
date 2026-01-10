# 🏥 MedCare — Expert Medical Care, Redefined

MedCare is a premium, modern, responsive landing page designed for medical practices and healthcare organizations. The website offers an elegant, user-centric interface that blends cutting-edge web design aesthetics with high performance and accessibility.

It features smooth micro-animations, scroll-triggered visual reveals, interactive anatomical hotspots, and a fully fluid responsive layout.

---

## 🌟 Key Features

- **Header / Navigation:** 
  - Dynamic navbar that shifts styling upon scroll.
  - Fully accessible mobile hamburger navigation.
  - Keyboard navigation compatibility (`tabindex` and `space/enter` handlers).
- **Hero Banner:** 
  - Seamless, auto-playing background video overlay.
  - Parallax text scaling and fading scroll effects.
  - Multi-avatar trust indicator demonstrating social proof (30k+ patients).
- **Holistic Approach Section:** 
  - Staggered entry transitions on cards.
  - 3D-depth scroll parallax effect on side media.
  - Fluid grid layouts mapping diagnostics, patient care, and surgical excellence.
- **Interactive Anatomy Explorer:** 
  - Dynamic visual mapping using interactive pulse hotspots.
  - Interactive tooltip cards on click/tap for body systems (Joints, Cardiac, Neural).
  - Clean side panel compositions leveraging layout parallax.
- **Testimonial Grid:** 
  - Responsive, grid-based card layout showcasing real patient reviews and ratings.
- **Visual Marquee:** 
  - Continuous infinite text loop ("BOOK YOUR Appointment") that slows down interactively on mouse hover.
- **Contact & CTA:** 
  - Highly stylized, high-contrast background section detailing address and email.
  - Floating book-appointment button with automatic entrance/exit threshold detection based on scroll position.

---

## 🛠️ Technology Stack

- **Markup:** Semantic [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) for structure, SEO optimization, and accessibility.
- **Styling:** Vanilla [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) including:
  - Custom properties (CSS variables) for strict theme configuration.
  - Modern layouts via CSS Grid and Flexbox.
  - CSS transforms, transitions, and keyframe animations for high performance.
- **Interactivity:** Lightweight Vanilla [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+):
  - **Intersection Observer API** for scroll-triggered entry reveals.
  - **requestAnimationFrame** for scroll-synchronized parallax rendering.
  - Focus listeners and keyboard handler delegates for accessibility.

---

## 📂 Project Structure

```bash
MedCare-main/
│
├── hero_section_video/      # Auto-playing background video assets
│   └── 8375486-uhd_4096_2160_25fps.mp4
│
├── landscape/               # General section photographs
│   ├── pexels-gustavo-fring-8770713.jpg
│   └── pexels-zeoxs-11661531.jpg
│
├── people/                  # User avatar photos (Testimonials/Hero)
│   ├── pexels-abet-31848622.jpg
│   ├── pexels-kevinbidwell-2380795.jpg
│   ├── pexels-khalil-atif-khan-3701376-7515590.jpg
│   └── pexels-syed-muhammad-danial-706152162-18143810.jpg
│
├── portrait_photos/         # Anatomy section panel images
│   ├── pexels-ai25studioai-5215009.jpg
│   ├── pexels-kooldark-15962798.jpg
│   └── pexels-tima-miroshnichenko-8376281.jpg
│
├── square_photo/            # Square patient/staff photos
│
├── .gitignore               # Configured to ignore local system/IDE files
├── index.html               # Main website markup & layout structure
├── style.css                # Visual stylesheets and responsive rules
├── script.js                # Interactivity and animation engines
├── logo.png                 # Brand icon asset
├── logo_text.png            # Textual brand header asset
└── README.md                # Comprehensive documentation (this file)
```

---

## 🚀 Getting Started

Since the project uses purely native web technologies, no build step or node package installations are required.

### Local Development / Preview
You can run this project locally using any static web server:

1. **Using VS Code (Live Server extension):**
   - Open the directory in VS Code.
   - Right-click `index.html` and choose **"Open with Live Server"**.

2. **Using Python:**
   - Open your terminal in the root directory.
   - Run:
     ```bash
     python -m http.server 8000
     ```
   - Open [http://localhost:8000](http://localhost:8000) in your browser.

3. **Using Node.js (`serve` package):**
   - Run:
     ```bash
     npx serve .
     ```
   - Open the provided port in your browser.

---

## 📜 Version History & Commit Ledger

The git repository is structured sequentially to highlight clean, incremental progress:

1. **`feat: initialize project structure and add media assets`**
   - Configured directory skeleton.
   - Checked in images, video files, and brand assets.
   - Established the baseline `.gitignore`.
2. **`feat: implement semantic HTML structure for MedCare landing page`**
   - Written `index.html` structure.
   - Created layouts for Navbar, Hero, Holistic Approach, Specialists, Anatomy, Testimonials, Footer, and Marquee.
3. **`feat: design responsive styles and modern typography`**
   - Written `style.css` stylesheet.
   - Defined unified design tokens, custom font mappings (Inter/Outfit), layout grids, and responsiveness rules.
4. **`feat: implement scroll animations and interactive body hotspots`**
   - Programmed `script.js` functions.
   - Added scroll-triggered revealing, smooth navigation, performance-tuned parallax calculations, and interactive anatomy tooltips.
5. **`docs: add comprehensive README.md detailing features and setup`**
   - Created detailed layout documentation and setup procedures.

---

## 👥 Author

**Rupansh Soni**  
- GitHub: [@rupanshsoni](https://github.com/rupanshsoni)  
- Email: [soni.rupansh@yahoo.in](mailto:soni.rupansh@yahoo.in)
