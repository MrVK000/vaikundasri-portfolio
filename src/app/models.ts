export interface Education {
  level: string;
  institution: string;
  year: string;
  marks: string;
  icon: string;
}

export interface WorkExperience {
  company: string;
  duration: string;
  study: string;
}

export interface ProjectStat {
  value: string;
  label: string;
  icon: string;
}

export interface SummerProject {
  title: string;
  specialization: string;
  company: string;
  duration: string;
  period: string;
  objective: string;
  conclusion: string;
  stats: ProjectStat[];
}

export interface Certification {
  name: string;
  icon: string;
}

export interface PersonalDetail {
  label: string;
  value: string;
  icon: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  anchor: string;
}
