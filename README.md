# Moon & Mocha 

A responsive, night-themed café and restaurant landing page built with **HTML**, **JavaScript**, and **Tailwind CSS**. Moon & Mocha combines a layered moonlit landscape with scroll-based parallax effects, a café introduction, opening hours, a sample menu, and a simple interactive order form.

## Features

- **Parallax hero section:** A layered night sky, moon, mountains, river, and boat move as the page scrolls.
- **Responsive layout:** Navigation and content sections adapt to different screen widths using Tailwind CSS utilities.
- **Café information:** About section, opening hours, and contact details.
- **Menu preview:** Sample dishes, drinks, descriptions, and prices.
- **Interactive order form:** Show or hide the form, enter customer details, choose an item and quantity, and receive an on-page confirmation message.
- **Smooth interactions:** Scroll-to-form behavior and hover transitions.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Website structure and content |
| Tailwind CSS | Styling and responsive layout (included locally as `tailwind.min.js`) |
| Vanilla JavaScript | Parallax effects and form interactions |
| WebP / PNG | Images and logo |

## Getting Started

No build process, package installation, or backend setup is required.

1. Download or clone this repository.
2. Open the project folder.
3. Open **`proj.html`** in a modern web browser.

For development, you can also open the folder in VS Code and serve `proj.html` using the **Live Server** extension.

## Project Structure

```text
final-project/
├── img/
│   ├── boat6.webp
│   ├── logo.png
│   ├── moon2.webp
│   ├── mountains3.webp
│   ├── mountains4.webp
│   ├── mountains7.webp
│   ├── river5.webp
│   └── stars1.webp
├── proj.html         # Main website page
├── proj.js           # Scroll effects and order form logic
├── tailwind.min.js   # Locally included Tailwind styling script
├── README.md
└── .gitignore
```

## How the Order Form Works

Click **Order Now** to reveal the form. Enter your name, phone number, menu item, and quantity, then click **Submit Order**. JavaScript checks that the fields are filled in and displays a confirmation message.

> **Note:** This is a front-end demonstration only. The form does **not** send orders to a server, store customer information, or process payments. The displayed contact details and menu information are sample content.

## Possible Future Improvements

- Connect the order form to a backend and database.
- Add more complete form validation and order tracking.
- Expand the menu and add a mobile-friendly navigation menu.
- Improve accessibility and optimize parallax animation performance.

## Project Status

Front-end demo / educational project.
