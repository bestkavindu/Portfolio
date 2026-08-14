import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="label">Experience</span>
          <h2 className="h2">Where I&apos;ve worked.</h2>
        </div>
        <div className="exp">
          {EXPERIENCE.map((e, i) => (
            <div className="erow reveal" key={`${e.org}-${e.period}`} data-delay={Math.min(i, 3)}>
              <div className="erow-when">{e.period}</div>
              <div>
                <h3 className="erow-role">{e.role}</h3>
                <div className="erow-org">{e.org}</div>
                <ul className="erow-bul">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="erow-tags">
                  {e.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
