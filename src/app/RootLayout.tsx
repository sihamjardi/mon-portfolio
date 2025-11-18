import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur z-10">
        <nav className="flex items-center justify-between py-4 px-4">

          <NavLink to="/" className="font-bold text-primary">
            Siham JARDI
          </NavLink>

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    // AJOUT : Soulignement bas (border-b-2) en couleur primaire
                    ? "font-semibold text-primary border-b-2 border-primary"
                    : "hover:text-primary transition"
                }
                end
              >
                Accueil
              </NavLink>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    // AJOUT : Soulignement bas (border-b-2) en couleur primaire
                    ? "font-semibold text-primary border-b-2 border-primary"
                    : "hover:text-primary transition"
                }
              >
                Projets
              </NavLink>

              <NavLink
                to="/experience"
                className={({ isActive }) =>
                    isActive
                      // AJOUT : Soulignement bas (border-b-2) en couleur primaire
                      ? "font-semibold text-primary border-b-2 border-primary"
                      : "hover:text-primary transition"
                }
                >
                Parcours
              </NavLink>

              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive
                    // AJOUT : Soulignement bas (border-b-2) en couleur primaire
                    ? "font-semibold text-primary border-b-2 border-primary"
                    : "hover:text-primary transition"
                }
              >
                Formations
              </NavLink>

              <NavLink
                to="/certifications"
                className={({ isActive }) =>
                  isActive
                    // AJOUT : Soulignement bas (border-b-2) en couleur primaire
                    ? "font-semibold text-primary border-b-2 border-primary"
                    : "hover:text-primary transition"
                }
              >
                Certifications
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    // AJOUT : Soulignement bas (border-b-2) en couleur primaire
                    ? "font-semibold text-primary border-b-2 border-primary"
                    : "hover:text-primary transition"
                }
              >
                Contact
              </NavLink>

            </div>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="py-6 px-4 flex-grow">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-primary">
        Portfolio | © {new Date().getFullYear()} • JARDI Siham
      </footer>
    </div>
  );
}