import { CV, LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-in">
        <span>© {new Date().getFullYear()} Sachin Kavindu</span>
        <span className="ft-links">
          <a href={CV} target="_blank" rel="noreferrer">
            CV
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKS.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </span>
      </div>
    </footer>
  );
}
