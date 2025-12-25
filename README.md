# 🌟 Ayan Hussain - Personal Portfolio

A modern, professional single-page portfolio website showcasing my journey as a Data Science student at IIT Madras, featuring projects, certifications, and technical expertise.

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://23f1000932.github.io/Ayan-Hussain)

## ✨ Features

- **Modern Dark Mode Design** - Professional gradient aesthetics with glassmorphism effects
- **Typing Animation** - Dynamic role display in hero section
- **Responsive Layout** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered fade-in effects and hover interactions
- **Dynamic Content** - Projects and certifications generated from JavaScript arrays
- **SEO Optimized** - Meta tags for better search engine visibility
- **Scroll-to-Top** - Convenient navigation button
- **Mobile Navigation** - Hamburger menu for small screens

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, gradients, and animations
- **Vanilla JavaScript** - No frameworks, pure JS for performance
- **Google Fonts** - Inter font family
- **Font Awesome** - Icon library

## 📁 Project Structure

```
Ayan-Hussain/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark mode design
├── script.js           # JavaScript for interactivity
└── README.md           # Project documentation
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Repository name: `Ayan-Hussain` (or any name you prefer)
5. Make it **Public**
6. Do **NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open your terminal/command prompt in the project directory and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/23f1000932/Ayan-Hussain.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (gear icon)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://23f1000932.github.io/Ayan-Hussain/`

## 🎨 Customization Guide

### Update Personal Information

Edit `index.html` to change:
- Name and role in the hero section
- About me content
- Contact information
- Social media links

### Add/Edit Projects

In `script.js`, modify the `projects` array:

```javascript
const projects = [
    {
        title: "Your Project Name",
        icon: "🚀", // Any emoji
        description: "Project description",
        techStack: ["Tech1", "Tech2", "Tech3"],
        outcome: "What you learned or achieved",
        github: "https://github.com/username/repo"
    }
];
```

### Add/Edit Certifications

In `script.js`, modify the `certifications` array:

```javascript
const certifications = [
    {
        title: "Certification Name",
        organization: "Issuing Organization",
        date: "2024",
        icon: "🎓",
        description: "What you learned"
    }
];
```

### Change Color Scheme

Edit CSS variables in `style.css` (`:root` section):

```css
:root {
    --accent-primary: #6366f1;  /* Primary accent color */
    --accent-secondary: #8b5cf6; /* Secondary accent color */
    /* Modify other colors as needed */
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lightweight** - No heavy frameworks
- **Fast Loading** - Minimal dependencies
- **Optimized Animations** - RequestAnimationFrame for smooth performance
- **Lazy Loading** - Scroll-triggered animations

## 📧 Contact

**Ayan Hussain**
- Email: [ayanhussain4212@gmail.com](mailto:ayanhussain4212@gmail.com)
- GitHub: [@23f1000932](https://github.com/23f1000932)
- LinkedIn: [Connect with me](https://linkedin.com/in/ayan-hussain)

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- **IIT Madras** - For the excellent Data Science program
- **Google Fonts** - For the Inter font family
- **Font Awesome** - For the icon library

---

**Built with 💜 by Ayan Hussain**

*Last Updated: December 2024*