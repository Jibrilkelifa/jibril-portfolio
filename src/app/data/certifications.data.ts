export interface Certification {
  title: string;
  issuer: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: 'CCPA – Check Point Certified Pen Testing Associate', issuer: 'Check Point' },
  { title: 'CCSA R81 – Check Point Certified Security Administrator', issuer: 'Check Point' },
  { title: 'API Penetration Testing', issuer: 'API University' },
  { title: 'Fundamentals of API Security', issuer: 'API University' },
  { title: 'LFD121 – Developing Secure Software', issuer: 'Linux Foundation' },
  { title: 'Jenkins DevOps Guru', issuer: 'Udemy' },
  { title: 'Vulnerability Assessment & Penetration Testing', issuer: 'Udemy' }
];
