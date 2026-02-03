export interface Project {
  id: string;
  title: string;
  category: 'SOC' | 'Security' | 'Enterprise' | 'Web' | 'AI';
  description: string;
  technologies: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'cyberai',
    title: 'CyberAI – AI Powered SOC Automation Platform',
    category: 'AI',
    description:
      'AI-powered SOC automation platform integrating QRadar, ML models, and threat intelligence to automate detection and incident response.',
    technologies: [
      'Spring Boot',
      'Python ML',
      'Angular',
      'React',
      'RabbitMQ',
      'Redis',
      'Grafana',
      'QRadar'
    ],
    highlights: [
      'Microservices architecture',
      'ML-based phishing detection',
      'Threat intelligence enrichment',
      'Automated IRMS incident creation',
      'SOC workflow automation'
    ]
  },
  {
    id: 'irms',
    title: 'Incident Response Management System (IRMS)',
    category: 'SOC',
    description:
      'Enterprise SOC platform for incident tracking, response coordination, and alert correlation.',
    technologies: ['Spring Boot', 'Angular', 'Grafana', 'PostgreSQL'],
    highlights: [
      'Centralized SOC incident tracking',
      'Automated alert ingestion',
      'Grafana integration',
      'Enterprise-grade access control'
    ]
  },
  {
    id: 'soc-scheduler',
    title: 'SOC Scheduler System',
    category: 'SOC',
    description:
      '24/7 SOC shift scheduling system ensuring operational readiness and analyst availability.',
    technologies: ['Spring Boot', 'Angular', 'PostgreSQL'],
    highlights: [
      'Automated shift rotation',
      'Leave & holiday planning',
      'SOC operational analytics'
    ]
  },
  {
    id: 'internal-control',
    title: 'Internal Control Automation System',
    category: 'Enterprise',
    description:
      'Enterprise automation platform integrating banking operational workflows.',
    technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'REST APIs'],
    highlights: [
      'Insurance monitoring',
      'Cheque management',
      'Fraud detection',
      'Trade service management',
      'Procurement automation',
      'Share management',
      'Daily activity analytics'
    ]
  },
  {
    id: 'ethioh',
    title: 'EthioH – WooCommerce E-Commerce Platform',
    category: 'Web',
    description:
      'Large-scale WooCommerce platform with custom integrations and SEO optimization.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'SEO', 'MySQL'],
    highlights: [
      'Scalable e-commerce platform',
      'Custom plugins',
      'Payment & logistics integrations',
      'SEO optimization'
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'University E-Commerce Platform',
    category: 'Web',
    description:
      'Full stack e-commerce platform built using Spring Boot and Angular.',
    technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'PrimeNG'],
    highlights: [
      'Modular backend architecture',
      'Dynamic frontend UI',
      'Secure authentication',
      'Order management system'
    ]
  }
];
