export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    title: "Restaurant",
    period: "2025",
    tags: [
      "Spring Boot",
      "Spring Data JPA",
      "Thymeleaf",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Chart.js",
    ],
    summary: "Application de gestion des réservations d’un restaurant.",
    repo: "https://github.com/sihamjardi/Mini-projet-Thymeleaf",
    image: "/projects/projet1.png",
    video: "https://youtu.be/XQd5ssVA0rY?si=irT2AdD20BillSn8"
  },
  {
    title: "BasketBall-Game",
    period: "2025",
    tags: [
      "Unity",
      "VR",
    ],
    summary: "Développement d'un jeu de basket-ball en 3D utilisant le style Voxel Art (ou Pixel Art), axé sur la physique du lancer et l'interaction simple dans un environnement de jeu immersif.",
    repo: "https://github.com/sihamjardi/Augmented-and-Virtual-Reality-TD1",
    image: "/projects/projet2.png",
    video: "https://youtu.be/tAexC_pYhfw"
  },
  {
    title: "Tri des déchets",
    period: "2025",
    tags: [
      "Unity",
      "VR",
    ],
    summary: "Jeu éducatif interactif développé avec Unity, simulant le tri des différents types de déchets (plastique, verre, métal, organique) via un mécanisme de glisser-déposer.",
    repo: "https://github.com/sihamjardi/AR-VR-Tri-des-d-chets",
    image: "/projects/projet3.png",
    video: "https://youtu.be/KvDBb9wlAds"
  },
  {
    title: "AR & Velociraptor",
    period: "2025",
    tags: [
      "Unity",
      "AR",
    ],
    summary: "Application AR développée avec Unity et Vuforia, affichant un Velociraptor animé et des sons lors de la détection d’une image cible sur Android.",
    repo: "https://github.com/sihamjardi/AR-Dinosaurs",
    image: "/projects/projet4.png",
    video: "https://youtu.be/j1pCxNkvVwA?si=Pq4M9TtNzRi5BN8j"
  },
];
