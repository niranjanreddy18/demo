# Sri Balaji Cement Blocks

A marketing website for Sri Balaji Cement Blocks built with React, Vite, and Tailwind CSS.

## Features

- Multi-page layout with Home, About, Products, Gallery, Contact, and FAQ pages
- Quote request modal with client-side validation and local quote storage
- Contact form with local submission storage and toast notifications
- Google Maps redirect for the business location
- WhatsApp contact buttons for quick customer chat
- Responsive design using Tailwind CSS

## Technology Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- React Icons

## Setup

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - main router and app layout
- `src/pages/` - page components for each route
- `src/components/` - shared UI components like `Navbar`, `Footer`, `QuoteModal`, and `Toast`
- `src/data/` - product and gallery data sources
- `src/index.css` - Tailwind and global styles

## Contact & Quote Behavior

- Contact form data is saved to `localStorage` and shows a toast message
- Quote form validates required fields and stores quote requests locally
- Business address links open Google Maps for the physical location

## Notes

This app is client-side only. For real WhatsApp message delivery in the background, a server-side integration would be required.
