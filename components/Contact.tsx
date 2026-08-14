import { CV, CV_FILENAME, EMAIL, LINKS, PHONE } from "@/lib/data";
import CopyEmailButton from "./CopyEmailButton";
import {
  DocIcon,
  DownloadIcon,
  FacebookIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  PhoneIcon,
  UpRightIcon,
} from "./icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sect-head reveal">
          <span className="label">Contact</span>
          <h2 className="h2">Open to new opportunities.</h2>
          <p className="lede">
            I&apos;m looking for a Data Engineer, Analytics Engineer, or Software Engineer role —
            full-time or contract, on-site in Sri Lanka or remote. If that sounds like a fit, my CV
            is below and my inbox is open.
          </p>
        </div>

        <div className="cgrid">
          <div className="cbox reveal" data-delay="1">
            <div className="cbox-k">Curriculum vitae</div>
            <div className="cvrow">
              <span className="cvicon">
                <DocIcon />
              </span>
              <span>
                <span className="cvname">{CV_FILENAME}</span>
                <span className="cvmeta">2 pages · updated August 2026</span>
              </span>
            </div>
            <div className="cvbtns">
              <a className="btn btn-p" href={CV} target="_blank" rel="noreferrer">
                View CV
              </a>
              <a className="btn btn-s" href={CV} download={CV_FILENAME}>
                <DownloadIcon /> Download
              </a>
            </div>
          </div>

          <div className="cbox reveal" data-delay="2">
            <div className="cbox-k">Get in touch</div>
            <div className="clist">
              <CopyEmailButton email={EMAIL} />
              <a className="cli" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <PhoneIcon />
                <span>{PHONE}</span>
                <span className="cli-a">call</span>
              </a>
              <a className="cli" href={LINKS.site} target="_blank" rel="noreferrer">
                <GlobeIcon />
                <span>sachin.rajapaksha.me</span>
                <span className="cli-a">
                  <UpRightIcon />
                </span>
              </a>
              <a className="cli" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon />
                <span>LinkedIn</span>
                <span className="cli-a">
                  <UpRightIcon />
                </span>
              </a>
              <a className="cli" href={LINKS.github} target="_blank" rel="noreferrer">
                <GithubIcon />
                <span>GitHub</span>
                <span className="cli-a">
                  <UpRightIcon />
                </span>
              </a>
              <a className="cli" href={LINKS.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon />
                <span>Facebook</span>
                <span className="cli-a">
                  <UpRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
