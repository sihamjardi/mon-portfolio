import { Helmet } from "react-helmet-async";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
        </h2>

        <hr className="border-t-2 border-border/70 w-full mb-4" />

        {/* --- Nouvelle Carte Stage Éducatif --- */}
        <Card className="p-4 shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Stage éducatif
            </CardTitle>
            <CardDescription>
              Lycée qualifiant Mhamid 9 — 2023/2024
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Ce stage avait pour objectif d’acquérir une expérience concrète du milieu éducatif
              en tant que future enseignante. J’y ai développé des compétences pratiques
              liées à l’enseignement, à la gestion de classe et à la compréhension des défis
              pédagogiques. Cette expérience m’a également permis d’améliorer mes aptitudes
              relationnelles, de comprendre le fonctionnement d’un établissement scolaire
              et d’observer le rôle essentiel de l’administration dans la gestion et le soutien
              aux enseignants. J’ai ainsi pu appliquer mes connaissances théoriques dans un
              contexte réel et me préparer activement à ma future carrière d’enseignante.
            </p>
          </CardContent>
        </Card>


      </section>
    </>
  );
}
