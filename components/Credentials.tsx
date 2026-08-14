import { CERTS } from "@/lib/data";
import { CheckIcon } from "./icons";

export default function Credentials() {
  return (
    <section id="credentials" className="alt">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="label">Credentials</span>
          <h2 className="h2">Education &amp; certifications.</h2>
        </div>
        <div className="cred">
          <div className="reveal" data-delay="1">
            <div className="cred-sub">Education</div>
            <div className="edu">
              <div className="edu-item">
                <h3>BSc Physical Science — Statistics &amp; Mathematics</h3>
                <div className="edu-meta">University of Jaffna · 2018 – 2021</div>
              </div>
              <div className="edu-item">
                <h3>GCE Advanced Level</h3>
                <div className="edu-meta">
                  R/Ananda Maithriya Central College, Balangoda · 2016
                </div>
                <div className="edu-note">
                  Combined Mathematics (C), Chemistry (C), Physics (S)
                </div>
              </div>
            </div>
          </div>
          <div className="reveal" data-delay="2">
            <div className="cred-sub">Certifications</div>
            <ul className="certs">
              {CERTS.map((c) => (
                <li key={c.name}>
                  <span className={c.done ? "cmark done" : "cmark"}>
                    {c.done ? <CheckIcon /> : "·"}
                  </span>
                  <span>
                    <span className="cname">{c.name}</span>
                    <span className="cissuer">
                      {c.issuer}
                      {!c.done && <em> · in progress</em>}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
