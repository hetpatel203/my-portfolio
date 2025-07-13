import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application built with Angular, featuring product catalog, shopping cart, and user authentication.',
      technologies: ['Angular', 'TypeScript', 'Tailwind'],
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/hetpatel/ecommerce',
      icon: '🛒',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with drag-and-drop functionality, real-time updates, and team collaboration features.',
      technologies: ['Angular', 'RxJS', 'Material UI'],
      demoUrl: 'https://demo-taskmanager.com',
      githubUrl: 'https://github.com/hetpatel/taskmanager',
      icon: '📋',
      gradient: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using external APIs.',
      technologies: ['Angular', 'API Integration', 'Charts.js'],
      demoUrl: 'https://demo-weather.com',
      githubUrl: 'https://github.com/hetpatel/weather',
      icon: '🌤️',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      id: 4,
      title: 'Financial Chat Advisor',
      description: 'Real-time messaging application with user authentication, group chats, file sharing, and emoji support.',
      technologies: ['Angular', 'Socket.io', 'Firebase'],
      demoUrl: 'https://Ai-chat.com',
      githubUrl: 'https://github.com/hetpatel203/AI_CHATBOT',
      icon: '💬',
      gradient: 'from-red-400 to-red-600'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with interactive charts, data visualization, and real-time metrics for business analytics.',
      technologies: ['Angular', 'D3.js', 'REST API'],
      demoUrl: 'https://demo-analytics.com',
      githubUrl: 'https://github.com/hetpatel/analytics',
      icon: '📊',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 6,
      title: 'Music Player App',
      description: 'A modern music streaming application with playlist management, audio visualization, and social sharing features.',
      technologies: ['Angular', 'Web Audio API', 'PWA'],
      demoUrl: 'https://demo-music.com',
      githubUrl: 'https://github.com/hetpatel/music',
      icon: '🎵',
      gradient: 'from-indigo-400 to-indigo-600'
    }
  ];

  openDemo(url: string): void {
    window.open(url, '_blank');
  }

  openGithub(url: string): void {
    window.open(url, '_blank');
  }
}
