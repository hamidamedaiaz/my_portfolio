import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faJava, faAngular, faJs, faPython, faBootstrap, faGithubAlt, faDocker, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLeaf, faDatabase, faWrench, faFlask, faMagnifyingGlass, faDesktop, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Skill {
  name: string;
  level: number;
  icon: IconDefinition;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface Language {
  name: string;
  level: string;
  flag: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(library: FaIconLibrary) {
    // Ajout des icônes à la bibliothèque
    library.addIcons(
      faJava, faAngular, faJs, faPython, faBootstrap, faGithubAlt, faDocker,
      faCode, faLeaf, faDatabase, faWrench, faFlask, faMagnifyingGlass, faDesktop,
      faGithub, faLinkedin, faEnvelope
    );
  }

  name = 'Hamid AMEDIAZ';
  role = 'Étudiant Ingénieur Informatique';
  projectsCount = 8;
  studyYears = 3;
  languagesCount = 3;

  experiences: Experience[] = [
    {
      title: 'Diplôme d\'Ingénieur d\'État en Informatique',
      company: 'Polytech Nice-Sophia',
      period: '2024 - 2027',
      description: 'Formation d\'ingénieur en informatique avec spécialisation en développement logiciel et technologies web.',
      technologies: ['Java', 'Angular', 'Spring Boot', 'DevOps']
    },
    {
      title: 'Licence 3 Informatique',
      company: 'Université Claude Bernard Lyon 1',
      period: '2023 - 2024',
      description: 'Approfondissement des concepts informatiques, POO, développement web et bases de données.',
      technologies: ['Java', 'JavaScript', 'SQL', 'Git']
    },
    {
      title: 'Licence 2 Mathématiques',
      company: 'Université d\'Orléans',
      period: '2022 - 2023',
      description: 'Bases solides en mathématiques appliquées et logique algorithmique.'
    }
  ];

  skillCategories: SkillCategory[] = [
    {
      name: 'Langages & Frameworks',
      skills: [
        { name: 'Java', level: 90, icon: faJava },
        { name: 'Angular', level: 85, icon: faAngular },
        { name: 'JavaScript', level: 85, icon: faJs },
        { name: 'Python', level: 75, icon: faPython },
        { name: 'C++', level: 70, icon: faCode },
        { name: 'Spring Boot', level: 80, icon: faLeaf }
      ]
    },
    {
      name: 'Web & Frontend',
      skills: [
        { name: 'HTML', level: 95, icon: faCode },
        { name: 'CSS/SCSS', level: 90, icon: faCode },
        { name: 'Bootstrap', level: 85, icon: faBootstrap },
        { name: 'JavaFX', level: 80, icon: faDesktop }
      ]
    },
    {
      name: 'Bases de données & Outils',
      skills: [
        { name: 'PostgreSQL', level: 85, icon: faDatabase },
        { name: 'Git/GitHub', level: 90, icon: faGithubAlt },
        { name: 'Maven', level: 85, icon: faWrench },
        { name: 'Docker', level: 75, icon: faDocker },
        { name: 'JUnit', level: 80, icon: faFlask },
        { name: 'SonarQube', level: 75, icon: faMagnifyingGlass }
      ]
    }
  ];

  values: Value[] = [
    {
      icon: '🤝',
      title: 'Collaboratif',
      description: 'Travail en équipe efficace avec une communication claire et un esprit d\'entraide.'
    },
    {
      icon: '⚡',
      title: 'Organisé',
      description: 'Planification rigoureuse, respect des délais et gestion du temps optimisée.'
    },
    {
      icon: '🔄',
      title: 'Adaptable',
      description: 'Capacité d\'adaptation rapide aux nouvelles technologies et environnements de travail.'
    },
    {
      icon: '🎯',
      title: 'Rigoureux',
      description: 'Développement suivant les bonnes pratiques, tests unitaires et qualité du code.'
    }
  ];

  languages: Language[] = [
    { name: 'Français', level: 'Courant', flag: '🇫🇷' },
    { name: 'Anglais', level: 'Intermédiaire', flag: '🇬🇧' },
    { name: 'Tamazight', level: 'Maternelle', flag: '🏔️' }
  ];
}