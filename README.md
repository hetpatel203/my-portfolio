# Het Patel - Portfolio Website

A modern, responsive portfolio website built with Angular 19 and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Engaging user interface with hover effects and transitions
- **Fast**: Optimized for performance with lazy loading and efficient code
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📋 Sections

1. **Home**: Hero section with introduction and call-to-action
2. **About**: Personal information, experience, and education
3. **Skills**: Technical skills with progress bars and competencies
4. **Projects**: Portfolio of projects with descriptions and links
5. **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hetpatel/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── home/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── contact/
│   │   ├── footer/
│   │   └── loading/
│   ├── app.component.*
│   ├── app.config.*
│   └── app.routes.ts
├── styles.css
└── index.html
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/app/components/home/home.component.ts`
- `src/app/components/about/about.component.html`
- `src/app/components/contact/contact.component.ts`

### Projects
Add your projects in `src/app/components/projects/projects.component.ts`:
```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['Angular', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://your-demo-url.com',
    githubUrl: 'https://github.com/yourusername/project',
    icon: '🚀',
    gradient: 'from-blue-400 to-blue-600'
  }
  // Add more projects...
];
```

### Skills
Update your skills in `src/app/components/skills/skills.component.ts`:
```typescript
skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🚀',
    skills: [
      { name: 'Angular', level: 90, color: 'bg-blue-600' },
      // Add more skills...
    ]
  }
  // Add more categories...
];
```

### Colors and Styling
The project uses Tailwind CSS. You can customize colors in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance Optimizations

- Lazy loading of components
- Optimized images and assets
- Minified CSS and JavaScript
- Efficient Angular change detection
- Smooth animations with CSS transforms

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `npm run lint` - Run linting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Het Patel - [het.patel@email.com](mailto:het.patel@email.com)

Project Link: [https://github.com/hetpatel/portfolio](https://github.com/hetpatel/portfolio)

## 🙏 Acknowledgments

- [Angular](https://angular.io/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Heroicons](https://heroicons.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - For typography