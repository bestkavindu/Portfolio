import { CV, CV_FILENAME, EMAIL, LINKS, STATS } from "@/lib/data";
import { DocIcon, DownloadIcon, FacebookIcon, GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="hero-sect">
      <div className="wrap hero">
        <div className="hero-l">
          <div className="label reveal" style={{ marginBottom: 18 }}>
            Data Engineer · Software Engineer · Statistical Programmer
          </div>
          <h1 className="hero-h1 reveal" data-delay="1">
            Sachin Kavindu
          </h1>
          <p className="hero-lede reveal" data-delay="1">
            I build end-to-end data platforms — medallion Lakehouse architectures in Microsoft
            Fabric, PySpark pipelines, and Power BI reporting — alongside scalable Laravel
            applications.
          </p>
          <div className="hero-btns reveal" data-delay="2">
            <a className="btn btn-p" href={CV} target="_blank" rel="noreferrer">
              <DocIcon /> View CV
            </a>
            <a className="btn btn-s" href={CV} download={CV_FILENAME}>
              <DownloadIcon /> Download
            </a>
            <a className="btn btn-s" href={`mailto:${EMAIL}`}>
              Contact me
            </a>
          </div>
          <div className="hero-links reveal" data-delay="3">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a href={LINKS.facebook} target="_blank" rel="noreferrer">
              <FacebookIcon /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="stats reveal" data-delay="3">
          {STATS.map(([value, label]) => (
            <div className="stat" key={label}>
              <div className="stat-a">{value}</div>
              <div className="stat-b">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
