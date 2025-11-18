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
  },
];
