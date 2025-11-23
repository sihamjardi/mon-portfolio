export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string; // "Badge AWS SAA"
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAedu - Plateforme de Certification Professionnelle",
    issueDate: "2025-10",
    skills: [
      "Java",
      "Programmation Orientée Objet (POO)",
      "Concepts Avancés Java",
    ],
    tags: ["Programmation", "Java", "Développement"],
    image: "/certs/certificationJava.webp",
    imageAlt: "Certification Java MLIAedu",
    status: "active",
    credentialUrl:
          "https://mliaedu.toubkalit.com/verify-certificate/6-92d091e6-5d8b-44b8-8789-5bfc47adbaf5-156630",
  },
  {
    title: "Hibernate & JPA",
    issuer: "MLIAedu - Plateforme de Certification Professionnelle",
    issueDate: "2025-10",
    skills: [
      "Hibernate",
      "JPA (Java Persistence API)",
      "Mapping Objet-Relationnel (ORM)",
      "JEE",
    ],
    tags: ["Programmation", "Java", "JEE", "ORM"],
    image: "/certs/certificatHibernate.webp",
    imageAlt: "Certification Hibernate & JPA",
    status: "active",
    credentialUrl:
          "https://mliaedu.toubkalit.com/verify-certificate/28-92d091e6-5d8b-44b8-8789-5bfc47adbaf5-799161",
  },
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAedu - Plateforme de Certification Professionnelle",
    issueDate: "2025-11",
    skills: [
      "React",
      "JS",
      "Vite"
    ],
    tags: ["React", "Vite", "JSX", "Portfolio"],
    image: "/certs/certificatReact.webp",
    imageAlt: "Certification Front-End moderne avec React",
    status: "active",
    credentialUrl:
          "https://mliaedu.toubkalit.com/verify-certificate/26-92d091e6-5d8b-44b8-8789-5bfc47adbaf5-264220",
  },
];
