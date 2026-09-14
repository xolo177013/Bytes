import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { site } from "../data/site";

export default function Contact() {
  return (
    <>
      <section className="section shell page-head">
        <div className="section-kicker">CONTACT / START A PROJECT</div>
        <div className="intro-grid">
          <Reveal>
            <h1 className="display">
              Tell us what
              <br />
              needs building.
            </h1>
          </Reveal>
          <div>
            <Reveal>
              <p className="body-xl">
                Share the problem, the constraints, and what "done" looks
                like. We reply from a real inbox, not a ticket queue.
              </p>
            </Reveal>
            <div className="manifest">
              <div className="manifest-row">
                <small>EMAIL</small>
                <strong><a href={`mailto:${site.email}`}>{site.email}</a></strong>
              </div>
              <div className="manifest-row">
                <small>BASE</small>
                <strong>{site.location}</strong>
              </div>
              <div className="manifest-row">
                <small>GITHUB</small>
                <strong><a href="https://github.com/xolo177013" target="_blank" rel="noopener noreferrer">github.com/xolo177013 ↗</a></strong>
              </div>
              <div className="manifest-row">
                <small>REPLY TIME</small>
                <strong>Usually within one business day</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section architecture">
        <div className="shell">
          <div className="section-kicker">01 / SEND AN ENQUIRY</div>
          <div className="arch-grid">
            <Reveal>
              <h2 className="display">
                Skip the call.
                <br />
                Send the brief.
              </h2>
              <p className="body-copy">
                The form below hits our API directly. If something looks
                broken on your end, email us — the address above always
                works.
              </p>
            </Reveal>
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
