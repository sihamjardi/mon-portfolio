import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} — MonPortfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>


      <div className="max-w-7xl mx-auto px-4 md:px-6 min-h-screen flex flex-col justify-center py-12 md:py-24">

        <section className="grid gap-6 md:grid-cols-2 md:gap-32 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              {profile.name}
            </h1>

            <p
              className="mt-2 text-xl font-semibold
                               bg-clip-text text-transparent
                               bg-gradient-to-r from-yellow-800 to-amber-700"
            >
              {profile.role}
            </p>

            <p className="mt-4 text-muted-foreground text-primary">
              {profile.about}
            </p>

            <div className="mt-6 flex gap-3">
              <Link to="/projects" className="fancy-button">
                Voir les projets
              </Link>
              <Link to="/contact" className="fancy-button">
                Contact
              </Link>
            </div>

            <div
              className="mt-6 flex flex-wrap gap-2 text-sm"
              aria-label="badges de parcours"
            >
              <span className="rounded-full border px-3 py-1">
                Master Technologie emergentes en education
              </span>
            </div>
          </div>

          <img
            src="/profile/pictureSiham.jpg"
            alt="Illustration de profil de Siham JARDI"
            className="w-full md:w-96 aspect-square object-cover justify-self-end image-frame"
          />
        </section>
      </div>
    </>
  );
}