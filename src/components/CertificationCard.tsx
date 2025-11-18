import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { useState } from "react";


function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold p-2 leading-none bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
          aria-label="Fermer la fenêtre"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default function CertificationCard({ c }: { c: Certification }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isExpired =
   c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  const openModal = () => c.image && setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <article
      className={clsx(
        "border rounded-2xl p-4 hover:shadow transition",
        isExpired && "opacity-80",
      )}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={256}
          height={256}
          loading="lazy"
          onClick={openModal}
          className="w-full h-auto object-contain rounded mb-3 max-h-48 cursor-pointer hover:opacity-90 transition" // Ajout de cursor-pointer et hover pour l'UX
        />
      )}

      <h3 className="font-semibold leading-snug">{c.title}</h3>
      <p className="text-sm text-muted-foreground">
          {c.issuer} • {mmYYYY(c.issueDate)}
          {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
          {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
          <p className="mt-2 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-3 flex items-center gap-3 text-sm">
        {c.credentialUrl && (
          <a
            className="underline"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat
          </a>
        )}
        {isExpired && <span className="text-amber-600">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-600">Révoquée</span>
        )}
      </div>

      {isModalOpen && c.image && (
        <ImageModal
          src={c.image}
          alt={c.imageAlt ?? c.title}
          onClose={closeModal}
        />
      )}
    </article>
  );
}