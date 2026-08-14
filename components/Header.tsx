import { CV, NAV } from "@/lib/data";
import { DocIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr-in">
        <a className="hdr-name" href="#top">
          Sachin Kavindu
        </a>
        <nav className="hdr-nav">
          {NAV.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hdr-end">
          <ThemeToggle />
          <a className="btn btn-s hdr-cv" href={CV} target="_blank" rel="noreferrer">
            <DocIcon /> CV
          </a>
        </div>
      </div>
    </header>
  );
}
