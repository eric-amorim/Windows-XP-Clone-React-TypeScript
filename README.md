# 📁 Windows XP Clone - React + TypeScript

A nostalgic and interactive clone of the legendary **Windows XP** interface, built using modern web technologies. This project recreates the classic operating system experience, from the iconic boot screen to a functional desktop with windows, shortcuts, and sound effects.

<img width="273.2" height="153.6" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Windows-XP-Clone-React-TypeScript/refs/heads/main/screenshots/1.png" /> <img width="273.2" height="153.6" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Windows-XP-Clone-React-TypeScript/refs/heads/main/screenshots/2.png" />

<img width="273.2" height="153.6" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Windows-XP-Clone-React-TypeScript/refs/heads/main/screenshots/3.png" /> <img width="273.2" height="153.6" alt="image" src="https://raw.githubusercontent.com/eric-amorim/Windows-XP-Clone-React-TypeScript/refs/heads/main/screenshots/4.png" />

## 🚀 Features

- **Classic Boot Screen:** Identical loading animation built from scratch using CSS Keyframes.
- **Login Screen:** Interactive interface to log into the system.
- **Complete Desktop Experience:** The classic *Bliss* wallpaper with properly organized desktop icons.
- **Window Management System:** Dynamic windows with depth control (`zIndex`) that focus when clicked.
- **Functional Start Menu:** Classic two-column layout featuring shortcuts to programs and system folders.
- **Isolated Recycle Bin:** Faithfully positioned in the bottom-right corner, floating perfectly above the taskbar.
- **Startup Sound Effect:** Plays the unmistakable Windows XP startup sound right as the Desktop loads.

## 🛠️ Technologies Used

- **React** (Frontend library for building user interfaces)
- **TypeScript** (Static typing for safer and more maintainable code)
- **Vite** (Ultra-fast frontend build tool)
- **Tailwind CSS v3** (Utility-first CSS framework for custom styling and animations)
- **PostCSS & Autoprefixer** (CSS post-processing)
- **Framer Motion** (For smooth window transitions and animations)

## 📦 Getting Started

Follow the steps below to get a local copy of the project up and running on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eric-amorim/windows-xp-clone-react-typescript

2. **Navigate into the project directory:**
   ```bash
   cd windows-xp-clone-react-typescript

3. **Install the dependencies:
(Note: This project strictly locks Tailwind CSS to version 3 to ensure compatibility with custom keyframe configurations)**
   ```bash
   npm install   

4. **Start the local development server:**
   ```bash
   npm run dev   

## 📦 Development Notes

Autoplay Policies: Modern web browsers block automatic audio playback unless the user has interacted with the document first. Navigating through the Login Screen ensures that the user's click safely triggers the startup sound. 

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you wish.

Developed by [Eric Amorim](https://github.com/eric-amorim)
