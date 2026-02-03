export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: '2017 – 2022',
    title: 'Computer Science & Engineering',
    company: 'Adama Science & Technology University',
    description:
      'Graduated with strong foundations in software engineering and full stack development. Final year project ranked top 5.'
  },
  {
    year: '2021 – 2022',
    title: 'Full Stack Developer',
    company: 'Adama Science & Technology University',
    description:
      'Built enterprise-grade e-commerce platform using Spring Boot and Angular.'
  },
  {
    year: '2022 – 2024',
    title: 'Full Stack Developer',
    company: 'Cooperative Bank of Oromia',
    description:
      'Developed large-scale banking systems including fraud, trade, procurement, and SMS platforms.'
  },
  {
    year: '2024 – Present',
    title: 'Full Stack Developer & Penetration Tester',
    company: 'Cooperative Bank of Oromia',
    description:
      'Leading development of CyberAI, IRMS, SOC automation, and performing VAPT & SOC operations.'
  }
];
