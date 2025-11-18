import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets — MonPortfolio</title>
        <meta name="description" content="Liste des projets réalisés" />
      </Helmet>

      <section className="grid gap-6">

        <h2 className="text-4xl font-bold flex items-center gap-3 text-primary">
            Projets
            <span className="text-3xl">  </span>
        </h2>

        <hr className="border-t-2 border-border/70 w-full mb-4" />


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">

          {projects.map((p) => (

            <article key={p.title} className="card">

              <div className="card__image">
                <img
                  src={p.image}
                  alt={`Capture d'écran du projet ${p.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="card__content">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__description">{p.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="border border-border text-xs rounded px-2 py-0.5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="card__button">
                      Demo
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="card__button secondary">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}