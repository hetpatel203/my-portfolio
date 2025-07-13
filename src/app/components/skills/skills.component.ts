import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '🚀',
      skills: [
        { name: 'Angular', level: 90, color: 'bg-blue-600' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 88, color: 'bg-blue-600' },
        { name: 'HTML/CSS', level: 92, color: 'bg-blue-600' }
      ]
    },
    {
      title: 'Backend & Languages',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 85, color: 'bg-yellow-600' },
        { name: 'Node.js', level: 80, color: 'bg-yellow-600' },
        { name: 'Express.js', level: 78, color: 'bg-yellow-600' },
        { name: 'JavaScript', level: 88, color: 'bg-yellow-600' }
      ]
    },
    {
      title: 'Cloud & AWS',
      icon: '☁️',
      skills: [
        { name: 'AWS Lambda', level: 82, color: 'bg-orange-600' },
        { name: 'AWS API Gateway', level: 80, color: 'bg-orange-600' },
        { name: 'AWS Services', level: 85, color: 'bg-orange-600' }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 85, color: 'bg-indigo-600' },
        { name: 'MongoDB', level: 80, color: 'bg-indigo-600' }
      ]
    },
    {
      title: 'Styling',
      icon: '🎨',
      skills: [
        { name: 'Tailwind CSS', level: 85, color: 'bg-green-600' },
        { name: 'Bootstrap', level: 80, color: 'bg-green-600' },
        { name: 'SCSS/Sass', level: 75, color: 'bg-green-600' },
        { name: 'Material UI', level: 70, color: 'bg-green-600' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🔧',
      skills: [
        { name: 'Git/GitHub', level: 85, color: 'bg-purple-600' },
        { name: 'VS Code', level: 90, color: 'bg-purple-600' },
        { name: 'npm/yarn', level: 80, color: 'bg-purple-600' },
        { name: 'Figma', level: 65, color: 'bg-purple-600' }
      ]
    }
  ];

  competencies = [
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'AWS serverless architecture'
    },
    {
      icon: '🔗',
      title: 'Full Stack',
      description: 'End-to-end development'
    },
    {
      icon: '🗄️',
      title: 'Database Design',
      description: 'SQL & NoSQL expertise'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Mobile-first design'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimized applications'
    },
    {
      icon: '🎯',
      title: 'User-Focused',
      description: 'Great user experience'
    }
  ];
}
