# Edu Track Landing Page

Edu Track is a modern, responsive landing page designed to showcase a platform for efficient tender management. It features a clean design, engaging animations, and a user-friendly experience across various devices.

-----

## Table of Contents

  * [Features](https://www.google.com/search?q=%23features)
  * [Technologies Used](https://www.google.com/search?q=%23technologies-used)
  * [Setup and Installation](https://www.google.com/search?q=%23setup-and-installation)
  * [Project Structure](https://www.google.com/search?q=%23project-structure)
  * [Responsiveness](https://www.google.com/search?q=%23responsiveness)
  * [Animations](https://www.google.com/search?q=%23animations)
  * [Usage](https://www.google.com/search?q=%23usage)

-----

## Features

  * **Responsive Navigation Bar**: A top navigation bar that adapts for desktop and mobile devices, including a hamburger menu toggle for smaller screens.
  * **Engaging Hero Section**: A prominent hero area with a clear call to action and subtle animations.
  * **Interactive Features Showcase**: A section detailing key features with an interactive layout.
  * **Flexible Pricing Plans**: Clearly presented pricing options with a highlighted featured plan.
  * **Trusted Brands Display**: A dynamic section showcasing logos of companies that trust the platform.
  * **Client Testimonials**: A dedicated section for client feedback, enhancing credibility.
  * **Tender Activity Statistics**: Highlights key performance metrics in an easy-to-read format.
  * **Prominent Call to Action (CTA)**: A final, strong call to action section to encourage user engagement.
  * **Comprehensive Footer**: Provides quick links, legal information, contact details, and social media icons.
  * **Smooth Animations**: Utilizes CSS animations and Intersection Observer API for an appealing scroll-based reveal effect.

-----

## Technologies Used

  * **HTML5**: For the basic structure of the web page.
  * **CSS3**: For styling, layout (Flexbox), responsiveness (Media Queries), and animations.
  * **JavaScript (ES6+)**: For dynamic functionalities like the mobile navigation toggle and scroll-based fade-in animations.
  * **Google Fonts**: `Inter` and `Lato` for modern and readable typography.
  * **Custom Font**: `Aeonik Pro` for a unique brand feel.


## Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── img/
│   ├── edu-track-main-logo.png
│   ├── edu-track-logo-icon.png
│   ├── Vector.png
│   ├── sec-dashboard-img.png
│   ├── sec-feature-heading-bg.png
│   ├── sec-dashboard-img-bg-vector.png
│   ├── sec-feature-left-col-icon.png
│   ├── sec-feature-right-col-img.png
│   ├── profile.png
│   ├── profile-2user.png
│   ├── sec-company-logo-1.png
│   ├── sec-company-logo-2.png
│   ├── sec-company-logo-3.png
│   ├── sec-company-logo-4.png
│   ├── sec-company-logo-5.png
│   ├── sec-company-logo-6.png
│   ├── Image.png
│   ├── star-img.png
│   ├── linkedin-footer-icon.png
│   ├── twitter-footer-icon.png
│   └── facbook-footer-icon.png
└── fonts/
    ├── AeonikProTrial.woff2
    └── AeonikProTrial.woff
```

-----

## Responsiveness

The layout is fully responsive and optimized for various screen sizes, from mobile phones to large desktops. Media queries are implemented at:

  * **`@media (max-width: 1024px)`**: Adjustments for tablets and smaller laptops.
  * **`@media (max-width: 767px)`**: Specific optimizations for mobile devices, including a stacked navigation menu controlled by a toggle button.

-----

## Animations

The website incorporates smooth animations to enhance the user experience:

  * **Fade-in on Scroll**: Sections and key elements animate into view as the user scrolls down the page, providing a dynamic and engaging Browse experience. This is achieved using the `Intersection Observer API` in JavaScript and CSS `@keyframes`.
  * **Hero Section Entrance**: The badge, heading, paragraph, and call-to-action button in the hero section feature distinct entrance animations (`slideInFromTop` and `fadeIn`).
  * **Interactive Elements**: Hover effects are applied to buttons, navigation links, and pricing cards for subtle visual feedback.

-----

## Usage

This project is a static HTML/CSS/JS landing page. It can be easily deployed to any web hosting service. Simply upload all the files and folders to your web server.
