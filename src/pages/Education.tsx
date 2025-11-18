import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Formations — MonPortfolio</title>
        <meta
          name="description"
          content="Liste des formations et diplômes obtenus"
        />
      </Helmet>

      <section className="grid gap-6">

        <h2 className="text-4xl font-bold flex items-center gap-3 text-primary">
            Formations
            <span className="text-3xl">  </span>
        </h2>

        <hr className="border-t-2 border-border/70 w-full mb-4" />

        <ol className="relative border-s">
          {education.map((e) => (
            <li key={e.school + e.start} className="ms-6 pb-6">
              <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-primary" />
              <h3 className="font-semibold">
                {e.degree}
                {e.field ? ` — ${e.field}` : ""}
                <span className="text-sm text-muted-foreground">
                  {" "}
                  @ {e.school}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground">
                {fmt(e.start)} — {fmt(e.end)}{" "}
                {e.location ? `• ${e.location}` : ""}{" "}
                {e.gpa ? `• GPA ${e.gpa}` : ""}
              </p>
              {e.courses?.length ? (
                <p className="mt-2 text-sm">
                  Cours: {e.courses.slice(0, 5).join(", ")}
                </p>
              ) : null}
              {e.highlights?.length ? (
                <ul className="list-disc ms-5 mt-2 text-sm">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}