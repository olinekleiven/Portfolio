# Oline Kleiven Portfolio - React Refactor

A modern, accessible, and responsive portfolio built with React, showcasing frontend development skills and visual design expertise.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.com)

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **CSS Modules** - Scoped styling with CSS custom properties
- **Lucide React** - Beautiful icons

## ✨ Features

- **Dark/Light Mode** - Toggle between themes with localStorage persistence
- **Responsive Design** - Optimized for all device sizes
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML
- **Performance** - Lazy loading, optimized images, Lighthouse score >90
- **Modern Animations** - Smooth transitions with Framer Motion
- **Search Functionality** - Search across portfolio content
- **Circular Navigation** - Unique circular menu design preserved from original

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── BackButton.jsx
│   └── SearchComponent.jsx
├── hooks/              # Custom React hooks
│   └── useTheme.js
├── pages/              # Page components
│   ├── Welcome.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Skills.jsx
│   ├── Jobs.jsx
│   ├── Gallery.jsx
│   └── Hobbies.jsx
├── styles/             # CSS Modules
│   ├── globals.css
│   ├── Welcome.module.css
│   ├── Home.module.css
│   ├── About.module.css
│   ├── Page.module.css
│   ├── Gallery.module.css
│   ├── Search.module.css
│   └── BackButton.module.css
├── assets/             # Static assets
│   └── images/         # All portfolio images
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Design Philosophy

The portfolio maintains the original design philosophy:
- **White space** for clean, uncluttered layouts
- **Simple navigation** with intuitive user flow
- **Circular layout** for the main navigation menu
- **Light background** with subtle color variations
- **Consistent visual identity** across all pages

## 🔄 Refactoring Journey

### What Was Improved

#### 1. **Modern Component Architecture**
- **Before**: Multiple HTML files with inline JavaScript
- **After**: React functional components with hooks
- **Benefit**: Better maintainability, reusability, and state management

#### 2. **CSS Architecture**
- **Before**: Global CSS with potential conflicts
- **After**: CSS Modules with CSS custom properties for theming
- **Benefit**: Scoped styles, better organization, easier maintenance

#### 3. **Routing System**
- **Before**: Traditional page navigation with `window.location`
- **After**: React Router for client-side routing
- **Benefit**: Faster navigation, better UX, browser history support

#### 4. **Theme Management**
- **Before**: No theme switching capability
- **After**: Dark/light mode with localStorage persistence
- **Benefit**: Better user experience, modern web standards

#### 5. **Accessibility**
- **Before**: Basic HTML structure
- **After**: ARIA labels, semantic HTML, keyboard navigation
- **Benefit**: Better accessibility compliance, screen reader support

#### 6. **Performance Optimization**
- **Before**: No optimization strategies
- **After**: Lazy loading, image optimization, code splitting
- **Benefit**: Faster load times, better Lighthouse scores

#### 7. **Animation System**
- **Before**: CSS animations with limited control
- **After**: Framer Motion for smooth, performant animations
- **Benefit**: Better animation control, reduced motion support

### Key Learnings

1. **Component-Based Thinking**: Breaking down the UI into reusable components made the code more maintainable and easier to understand.

2. **CSS Custom Properties**: Using CSS variables for theming allowed for seamless dark/light mode switching while maintaining the original design aesthetic.

3. **Accessibility First**: Implementing accessibility features from the start is much easier than retrofitting them later.

4. **Performance Matters**: Modern web users expect fast, smooth experiences. Optimizing for performance should be a priority.

5. **Responsive Design**: The original portfolio had excellent responsive design, which was preserved and enhanced with modern CSS techniques.

6. **State Management**: React's built-in state management with hooks provided a clean way to handle theme switching and navigation state.

7. **Modern Build Tools**: Vite's fast development server and build process significantly improved the development experience.

### Challenges Overcome

1. **Preserving Visual Identity**: Maintaining the unique circular navigation and color scheme while modernizing the codebase.

2. **Asset Migration**: Successfully moving all images and assets to the new structure without breaking references.

3. **Animation Consistency**: Ensuring smooth transitions between pages while maintaining the original animation feel.

4. **Responsive Complexity**: The original CSS had extensive responsive breakpoints that needed to be preserved and enhanced.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio/src
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to Netlify, Vercel, or any static hosting service.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile phones** (320px - 600px)
- **Tablets** (601px - 1024px)
- **Desktop** (1025px - 1440px)
- **Large screens** (1441px+)

## ♿ Accessibility Features

- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Semantic HTML** structure
- **Focus management** for better UX
- **Reduced motion** support for users with vestibular disorders
- **High contrast** mode support
- **Screen reader** friendly content

## 🎯 Performance Metrics

- **Lighthouse Performance**: >90
- **Lighthouse Accessibility**: >95
- **Lighthouse Best Practices**: >90
- **Lighthouse SEO**: >90

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Vite will be auto-detected
3. Deploy!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: oline.kleiven@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

*Built with ❤️ by Oline Kleiven*