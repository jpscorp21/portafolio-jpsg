export type Locale = 'es' | 'en';

type LocalizedValue = Record<Locale, string>;

export const profile = {
  name: 'Jean Paul Saucedo',
  role: {
    es: 'Desarrollador FullStack Senior',
    en: 'Senior Full-Stack Developer',
  },
  location: 'Caacupé, Paraguay',
  email: 'jpscorp21@gmail.com',
  whatsapp: 'https://api.whatsapp.com/send?phone=595961383308',
  github: 'https://github.com/jpscorp21',
  linkedin: 'https://www.linkedin.com/in/jean-saucedo-a98a5b138/',
  cv: '/cv/jean-paul-saucedo.pdf',
};

export const skills: Array<{ title: LocalizedValue; items: string[] }> = [
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Vue.js', 'Ionic', 'Flutter'],
  },
  {
    title: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'C#', '.NET Core', 'PHP', 'REST APIs'],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: ['PostgreSQL', 'FirebirdSQL', 'SQL'],
  },
  {
    title: { es: 'Infraestructura y despliegues', en: 'Infrastructure & deployment' },
    items: ['Rocky Linux', 'Docker', 'Linux', 'AWS', 'CI/CD', 'Nginx'],
  },
  {
    title: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'Figma', 'Testing', 'Vite'],
  },
];

export const experience: Array<{
  company: string;
  role: LocalizedValue;
  period: LocalizedValue;
  description: LocalizedValue;
}> = [
  {
    company: 'Logica S.A · Asunción, Paraguay',
    role: { es: 'Desarrollador Senior Full Stack', en: 'Senior Full-Stack Developer' },
    period: { es: 'Abr 2023 — Actualidad*', en: 'Apr 2023 — Present*' },
    description: {
      es: 'Desarrollo y mantenimiento de un punto de venta utilizado por más de 100 locales gastronómicos. Trabajo con React, TypeScript, Vite y PHP, además de proyectos móviles, APIs y despliegues en servidores Linux.',
      en: 'Development and maintenance of a point-of-sale platform used by more than 100 food-service locations. Work includes React, TypeScript, Vite and PHP, plus mobile projects, APIs, and Linux server deployments.',
    },
  },
  {
    company: 'Freelance · Caacupé, Paraguay',
    role: { es: 'Desarrollador React y Flutter', en: 'React & Flutter Developer' },
    period: { es: 'Ene 2019 — Feb 2025', en: 'Jan 2019 — Feb 2025' },
    description: {
      es: 'E-commerce con Next.js integrado a un ERP, integraciones con pagos POS mediante Node.js y aplicaciones móviles orientadas a inventario, asistencia y operaciones comerciales.',
      en: 'Next.js e-commerce integrated with an ERP, POS payment integrations with Node.js, and mobile applications for inventory, attendance, and commercial operations.',
    },
  },
  {
    company: 'Rave S.A · Luque, Paraguay',
    role: { es: 'Desarrollador Full Stack', en: 'Full-Stack Developer' },
    period: { es: 'Ene 2021 — Dic 2023', en: 'Jan 2021 — Dec 2023' },
    description: {
      es: 'Construcción de soluciones con React, React Native, Node.js y C#, incluyendo aplicaciones de reservas, control de asistencia, automatización documental y APIs REST.',
      en: 'Built solutions with React, React Native, Node.js, and C#, including reservation apps, attendance tracking, document automation, and REST APIs.',
    },
  },
  {
    company: 'OYM S.A · Asunción, Paraguay',
    role: { es: 'Desarrollador Web Junior', en: 'Junior Web Developer' },
    period: { es: 'Ene 2018 — Mar 2020', en: 'Jan 2018 — Mar 2020' },
    description: {
      es: 'Desarrollo de sistemas administrativos, APIs REST, reportes con Jasper Reports, formularios web y aplicaciones móviles conectadas a un ERP.',
      en: 'Developed administrative systems, REST APIs, Jasper Reports, web forms, and mobile applications connected to an ERP.',
    },
  },
];
