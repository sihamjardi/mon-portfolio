import { Helmet } from "react-helmet-async";
import { AtSign, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";

type SocialIconProps = {
  Icon: React.ElementType;
  href: string;
  label: string;
};


const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:underline"
  >
    <Icon size={20} /> {label}
  </a>
);

export default function Contact() {
  const contactInfo = {
    address: "MARRAKECH, MAROC",
    email: "sihamjardi2@gmail.com",
    phone1: "+212614242210",
  };

  const socialLinks = {
    github: "https://github.com/sihamjardi",
    linkedin: "https://www.linkedin.com/in/siham-jardi-1035a6299/",
    instagram: "https://www.instagram.com/sihamjardi/",
  };

  const descriptionText =
    "Bonjour ! Je suis JARDI Siham, développeur Full-Stack passionné par la création d'interfaces utilisateur élégantes et d'applications robustes. J'aime transformer des idées complexes en solutions simples et performantes. Découvrez mes projets et connectons-nous !";

  return (
    <>
      <Helmet>
        <title>Contact — MonPortfolio</title>
        <meta
          name="description"
          content="Contactez Nom Prénom via les réseaux sociaux ou par email."
        />
      </Helmet>

      {/* Styles CSS personnalisés pour l'effet Blob (carte animée) */}
      <style>{`
        /* Conteneur de la carte, prend la couleur de fond et le coin arrondi */
        .contact-card {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 14px;
            background-color: #DC2626; /* bg-red-600 */
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            z-index: 10;
        }

        /* Le blob animé, pour créer le flou dynamique */
        .contact-blob {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;
            /* Tailles relatives pour remplir l'espace quel que soit l'écran */
            width: 150%;
            padding-top: 150%; /* Crée une forme circulaire */
            border-radius: 50%;
            background-color: #FFFFFF; /* CHANGEMENT : Mis en Blanc pour la lueur */
            opacity: 0.25; /* Légère augmentation de l'opacité pour que le blanc ressorte sur le rouge */
            filter: blur(40px);
            animation: blob-bounce 15s infinite ease-in-out;
        }

        /* Animation du mouvement du blob */
        @keyframes blob-bounce {
            0%, 100% {
                transform: translate(-100%, -100%) scale(1);
            }
            25% {
                transform: translate(0%, -100%) scale(1.1);
            }
            50% {
                transform: translate(0%, 0%) scale(0.9);
            }
            75% {
                transform: translate(-100%, 0%) scale(1.1);
            }
        }
      `}</style>

      {/* Conteneur principal avec un fond rose clair */}
      <div className="relative p-4 md:p-8 bg-pink-50/50 min-h-[500px] flex items-center justify-center font-sans">

        {/* Le grand div blanc (conteneur unique) */}
        <div className="max-w-4xl w-full mx-auto shadow-2xl rounded-lg overflow-hidden bg-white p-6 md:p-10 flex flex-col items-center">

          {/* Nouveau conteneur pour la disposition côte à côte du bloc rouge et du contenu principal */}
          <div className="flex flex-col md:flex-row w-full gap-8">

            {/* BLOC ROUGE : Utilisation de la nouvelle classe .contact-card */}
            <div className="w-full md:w-1/3 relative" style={{ minHeight: '300px' }}>
              <div className="contact-card">

                {/* L'élément Blob animé (z-index 1) */}
                <div className="contact-blob"></div>

                {/* Le contenu (z-index 20) pour assurer la lisibilité */}
                <div className="relative z-20 p-6 md:p-10 text-white flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-3xl font-bold mb-10 tracking-wide border-b border-red-400 pb-2">
                      Contact Us
                    </h2>

                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <MapPin className="w-6 h-6 mr-4 flex-shrink-0" />
                        <span>{contactInfo.address}</span>
                      </li>
                      <li className="flex items-start">
                        <AtSign className="w-6 h-6 mr-4 flex-shrink-0" />
                        <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                          {contactInfo.email}
                        </a>
                      </li>
                      <li className="flex items-start">
                        <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                        <a href={`tel:${contactInfo.phone1}`} className="hover:underline">
                          {contactInfo.phone1}
                        </a>
                      </li>
                      <li className="flex items-start">
                        <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                        <a href={`tel:${contactInfo.phone1}`} className="hover:underline">
                          {contactInfo.phone1}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* La section "À Propos de Moi" et les liens sociaux (à droite du bloc rouge) */}
            <div className="w-full md:w-2/3 flex flex-col justify-center">

              <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                À Propos de Moi
              </h1>
              <p className="text-gray-500 mb-8 text-lg">
                Découvrez mon parcours et mes projets
              </p>

              <p className="text-gray-600 mb-10 leading-relaxed">
                {descriptionText}
              </p>

              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Connectons-nous
              </h2>
              <div className="flex space-x-4">
                <SocialIcon
                  Icon={Github}
                  href={socialLinks.github}
                  label="Mon profil GitHub"
                />
                <SocialIcon
                  Icon={Linkedin}
                  href={socialLinks.linkedin}
                  label="Mon profil LinkedIn"
                />
                <SocialIcon
                  Icon={Instagram}
                  href={socialLinks.instagram}
                  label="Mon profil Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}