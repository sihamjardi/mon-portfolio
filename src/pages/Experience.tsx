import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Parcours — MonPortfolio</title>
        <meta name="description" content="Expériences professionnelles et académiques" />
      </Helmet>

      <section className="grid gap-6">

        <h2 className="text-4xl font-bold flex items-center gap-3 text-primary">
            Parcours
            <span className="text-3xl">  </span> {/* Icône de porte-documents pour le parcours */}
        </h2>

        <hr className="border-t-2 border-border/70 w-full mb-4" />

        <p className="text-muted-foreground mt-2">
            Dans le futur. {/* Contenu existant */}
        </p>
      </section>
    </>
  );
}