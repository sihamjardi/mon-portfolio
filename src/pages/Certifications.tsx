import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q],
  );

  return (
    <>
      <Helmet>
        <title>Certifications — MonPortfolio</title> {/* Correction du titre */}
        <meta
          name="description"
          content="Certifications et badges obtenus par Siham JARDI"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <section className="grid gap-6">
          <div className="flex items-end justify-between gap-4"> {/* items-end pour aligner le filtre en bas */}

            <h2 className="text-4xl font-bold flex items-center gap-3 text-primary">
                Certifications
                <span className="text-3xl">  </span>
            </h2>

            <div className="group w-72">
              <svg className="icon-search-styled" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Filtrer (ex: Java)"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="input-search-styled"
                aria-label="Filtrer les certifications"
              />
            </div>
          </div>

          <hr className="border-t-2 border-border/70 w-full mb-4" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((c) => (
              <CertificationCard key={c.title + c.issueDate} c={c} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}