# Netflix Mockup (W4D1)

A front-end project inspired by the Netflix interface, built with HTML, CSS, and vanilla JavaScript.

## Project Structure

- `index.html`: main page structure.
- `style.css`: visual styles, responsiveness, and animations.
- `script.js`: carousel logic and section reveal effects.
- `assets/imgs/movies/`: movie card images.

## What Was Implemented

- Main layout with navigation bar, movie sections, and footer.
- Movie carousels with button-based navigation (next/previous).
- Smooth reveal animation for movie rows on scroll.
- Responsive adaptation for desktop, tablet, and mobile.
- Footer with links and social icons.

## Applied Adjustment

Social icons in the footer were made clickable:

- Facebook
- Instagram
- X (Twitter)
- YouTube

Each icon is now wrapped in an `<a>` tag with:

- `href` pointing to Netflix's official profile
- `target="_blank"` to open in a new tab
- `rel="noopener noreferrer"` for security
- `aria-label` for accessibility

## How To Run

1. Open the project folder in VS Code.
2. Open `index.html` in your browser (or use the Live Server extension).

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)
