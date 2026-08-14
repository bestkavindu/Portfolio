import { FACTS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="label">About</span>
          <h2 className="h2">Statistics background, engineering practice.</h2>
        </div>
        <div className="about">
          <div className="reveal" data-delay="1">
            <p className="about-lead">
              I&apos;m a Data Engineer and Software Engineer with a strong foundation in statistical
              programming and full-stack web development. My work sits where those two meet:
              designing the pipelines that make data trustworthy, then building the applications and
              reports people actually use.
            </p>
            <p className="about-body">
              I started at Zuse Technologies as an Associate Software Engineer, then spent nearly
              three years at Clindata Pvt Ltd as a statistical programmer — running EDA and
              hypothesis testing on clinical study data, applying linear and mixed models, and
              writing SAS and SQL to regulatory standards.
            </p>
            <p className="about-body">
              Today I&apos;m back at Zuse designing end-to-end medallion Lakehouse architectures in
              Microsoft Fabric. Most of what I do comes down to one thing: converting manual,
              spreadsheet-driven reporting into automated, governed pipelines that power decisions
              across HR, education, and finance.
            </p>
          </div>
          <dl className="facts reveal" data-delay="2">
            {FACTS.map(([k, v]) => (
              <div className="fact" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
