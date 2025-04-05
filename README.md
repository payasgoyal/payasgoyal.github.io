# Professional Portfolio Website

A clean, modern, responsive portfolio website designed to showcase your professional skills, projects, and experience.

## Features

- **Responsive Design:** Looks great on all devices (desktop, tablet, mobile)
- **Modern Aesthetics:** Dark theme with accent colors for a professional look
- **Interactive Elements:** Smooth scrolling, animations, and typewriter effect
- **Project Showcase:** Filterable project gallery
- **Contact Form:** Ready to use with Formspree integration
- **SEO Optimized:** Includes proper meta tags and schema markup
- **Fast Loading:** Optimized assets and code for performance
- **Custom 404 Page:** Styled error page for better user experience

## Getting Started

### Prerequisites

No special prerequisites are needed. This is a static website built with HTML, CSS, and JavaScript.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Open `index.html` in your browser to view the site locally.

## Customization

### Personal Information

1. Edit the `index.html` file to update your personal information, experience, skills, and projects.
2. Replace placeholder text with your actual information.

### Profile Image

1. Replace `assets/images/profile.jpg` with your own profile photo.
2. Make sure the dimensions are similar for optimal layout.

### Project Images

1. Replace project images in `assets/images/projects/` with your own project screenshots.
2. Update project descriptions and links in the HTML.

### Resume

1. Replace `assets/documents/payas_goyal_resume.pdf` with your own resume PDF.

### Contact Form

1. Create an account at [Formspree](https://formspree.io/)
2. Set up a new form and get your form ID
3. Replace the form action in `index.html`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/yourformid" method="POST">
   ```

### Colors and Styling

1. Edit the CSS variables in `assets/css/style.css` to customize the color scheme:
   ```css
   :root {
       --primary-color: #fe5f55;       /* Coral/Red accent color */
       --secondary-color: #2a293e;     /* Dark navy background */
       /* ...other variables */
   }
   ```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository.
2. Go to the repository settings.
3. Scroll down to the GitHub Pages section.
4. Select the main branch as the source.
5. Click Save, and your site will be published.
6. The URL will be `https://yourusername.github.io/repository-name/`

### Custom Domain (optional)

1. Purchase a domain from a domain registrar.
2. Add a CNAME record pointing to your GitHub Pages URL.
3. Add your custom domain in the GitHub Pages settings.
4. Check "Enforce HTTPS" for secure connections.

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Formspree for form handling 