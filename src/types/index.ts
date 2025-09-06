export interface ExperienceItem {
    company: string;
    companyUrl?: string;
    role: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
  }

export interface ProjectItem {
    name: string;
    description: string;
    skills: string[];
    url?: string;
  }
  