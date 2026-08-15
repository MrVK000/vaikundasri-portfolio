import {
  Certification,
  ContactItem,
  Education,
  NavItem,
  PersonalDetail,
  SummerProject,
  WorkExperience,
} from './models';

export const NAME = 'Vaikunda Sri';
export const ROLE = 'MBA Student · Marketing & Finance';
export const RESUME_PATH = '/resume/Vaikunda_sri_N_Resume.pdf';
export const RESUME_FILENAME = 'Vaikunda_sri_N_Resume.pdf';

export const CAREER_OBJECTIVE =
  'To obtain a challenging position where I can apply my academic knowledge, technical skills, and problem-solving abilities to contribute to organizational success while continuing to grow professionally.';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', anchor: 'about' },
  { label: 'Academic', anchor: 'academic' },
  { label: 'Experience', anchor: 'experience' },
  { label: 'Project', anchor: 'project' },
  { label: 'Skills', anchor: 'skills' },
  { label: 'Certifications', anchor: 'certifications' },
  { label: 'Contact', anchor: 'contact' },
];

export const EDUCATION: Education[] = [
  {
    level: 'SSLC',
    institution: 'Valluvar Vidhyalaya Matric.Hr.Sec.School',
    year: '2020',
    marks: '73%',
    icon: '🏫',
  },
  {
    level: 'HSC',
    institution: 'PNUP Kamarajar Matric Higher Secondary School, Srivilliputtur',
    year: '2022',
    marks: '63.2%',
    icon: '📚',
  },
  {
    level: 'BBA',
    institution: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    year: '2025',
    marks: '79.5%',
    icon: '🎓',
  },
  {
    level: 'MBA',
    institution: 'MEPCO Schlenk Engineering College, Sivakasi',
    year: 'Pursuing',
    marks: '66%',
    icon: '🏆',
  },
];

export const WORK_EXPERIENCE: WorkExperience = {
  company: 'Sri Ram Oil',
  duration: '1 Month (08.06.2026 – 07.07.2026)',
  study: 'A Study on Consumer Preference Towards Edible Oil in the Local Market',
};

export const SUMMER_PROJECT: SummerProject = {
  title: 'A Study on Consumer Preference Towards Edible Oil in the Local Market',
  specialization: 'Marketing',
  company: 'Sri Ram Oil Mill',
  duration: '1 Month',
  period: '08.06.2026 – 07.07.2026',
  objective:
    'To analyse consumer preferences, purchase behaviour, satisfaction, brand preference and health awareness regarding edible oils in the local market.',
  conclusion:
    'Consumers prefer Groundnut oil and Sri Ram Oil Mill due to quality, affordability and trust. Price and quality are the major factors influencing purchase decisions, while overall consumer satisfaction is high. Awareness of the health and nutritional benefits of edible oils is relatively low, indicating a need for greater consumer education.',
  stats: [
    { value: '241', label: 'Consumers Surveyed', icon: '👥' },
    { value: 'Marketing', label: 'Specialization', icon: '📊' },
    { value: 'Structured', label: 'Questionnaire Tool', icon: '📋' },
    { value: 'Convenience', label: 'Sampling Method', icon: '🎯' },
    { value: '1 Month', label: 'Duration', icon: '📅' },
    { value: 'Price & Quality', label: 'Key Factors', icon: '⭐' },
    { value: 'Groundnut Oil', label: 'Preferred Brand', icon: '🌿' },
    { value: 'High', label: 'Consumer Satisfaction', icon: '✅' },
  ],
};

export const TECHNICAL_SKILLS: string[] = [
  'MS Office Suite',
  'Microsoft Word',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'Data Presentation',
  'Report Writing',
];

export const FINANCE_SKILLS: string[] = [
  'Financial Management',
  'Cost & Management Accounting',
  'Financial Statement Analysis',
  'Budgeting & Forecasting',
  'Working Capital Management',
  'Investment & Portfolio Basics',
];

export const MARKETING_SKILLS: string[] = [
  'Consumer Behaviour Analysis',
  'Market Research',
  'Brand Management',
  'Digital Marketing Fundamentals',
  'Sales & Distribution',
  'Marketing Strategy',
];

export const KEY_SKILLS: string[] = [
  'Leadership & Teamwork',
  'Communication & Interpersonal Skills',
  'Analytical Thinking',
  'Problem Solving',
  'Time Management',
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Certificate Course in Marketing Management', icon: '📈' },
  { name: 'Diploma Course in Cyberpsychology, Counselling Psychology', icon: '🧠' },
  { name: 'NPTEL Course in HR Analytics', icon: '📉' },
];

export const PERSONAL_DETAILS: PersonalDetail[] = [
  { label: 'Date of Birth', value: '17-09-2004', icon: '🎂' },
  { label: 'Father', value: 'Nataraja Kannan', icon: '👨' },
  { label: 'Mother', value: 'Mythili', icon: '👩' },
  {
    label: 'Address',
    value: '38/1 Aaladipatti Street, Mangapuram, Srivilliputhur – 626 125',
    icon: '📍',
  },
  { label: 'Languages', value: 'English, Tamil', icon: '🗣️' },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { label: 'Mobile', value: '6379727748', href: 'tel:6379727748', icon: '📱' },
  { label: 'Email', value: 'royalvks17@gmail.com', href: 'mailto:royalvks17@gmail.com', icon: '✉️' },
  { label: 'Location', value: 'Tamil Nadu, India', href: '#', icon: '📍' },
];

export const FOOTER_TAGLINE = 'MBA · Marketing & Finance · Driven by Strategy, Inspired by People';
