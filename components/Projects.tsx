import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { UpRightIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="label">Key projects</span>
          <h2 className="h2">Selected work.</h2>
          <p className="lede">Three platforms I designed and shipped end to end.</p>
        </div>
        <div className="pgrid">
          {PROJECTS.map((p, i) => (
            <article className="pcard reveal" key={p.slug} data-delay={Math.min(i, 3)}>
              <div className="pcard-img">
                {p.image ? (
                  <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="340px" />
                ) : (
                  <div className="pcard-ph" aria-hidden="true">
                    Screenshot
                  </div>
                )}
              </div>
              <div className="pcard-body">
                <div className="pcard-stack">{p.stack}</div>
                <h3 className="pcard-name">{p.name}</h3>
                <p className="pcard-desc">{p.desc}</p>
                <div className="pcard-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a className="pcard-link" href={p.href} target="_blank" rel="noreferrer">
                    View on GitHub <UpRightIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
