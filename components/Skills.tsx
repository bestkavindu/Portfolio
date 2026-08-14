import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="label">Technical skills</span>
          <h2 className="h2">What I work with.</h2>
        </div>
        <div className="skill-rows">
          {SKILLS.map(([cat, ...items], i) => (
            <div className="srow reveal" key={cat} data-delay={Math.min(i, 3)}>
              <div className="srow-cat">{cat}</div>
              <div className="srow-tags">
                {items.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
