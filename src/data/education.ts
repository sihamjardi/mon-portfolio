export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Université Cadi Ayyad",
    degree: "Master",
    field: "Technologies émérgentes ",
    location: "Marrakech",
    start: "2024-09",
    end: "2026-07",
    courses: [
      "Programmation Avancées ",
      "Bases de Données avancée",
      "IA",
      "BI",
      "Développement Web et multiplateforme ",
      "AR & VR",
      "Gouvernance des Systèmes d’Information et assurance qualité ",
      "Sécurité Réseaux et administration ",
    ],
  },
  {
        school: "Ecole normale supérieure",
        degree: "Licence",
        field: "Informatique ",
        location: "Marrakech",
        start: "2021-09",
        end: "2024-07",
        courses: [
          "Programmation C ",
          "Bases de Données",
          "UML",
          "SQL",
          "HTML/CSS/JS",
          "Réseaux",
          "C# ",
          "JAVA ",
        ],
  },
  {
            school: "Lycée Qualifiant EL FATH",
            degree: "Baccalauréat",
            field: "BAC - Sciences Physique et Chimie ",
            location: "DAKHLA",
            start: "2019-09",
            end: "2020-07",
  },
];
