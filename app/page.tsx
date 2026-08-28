import Link from "next/link";

const inquirySteps = [
  { n: "01", title: "Wonder", text: "Generate hypotheses and turn curiosity into questions that can be investigated." },
  { n: "02", title: "Investigate", text: "Plan fair tests, gather evidence, and make sense of what the data shows." },
  { n: "03", title: "Refine", text: "Critique ideas, improve solutions, and communicate stronger scientific explanations." },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Inquiry powered by student thinking</p>
            <h1>Science starts with a <em>question.</em></h1>
            <p className="hero-lede">Science Inquiry Studio helps middle school students investigate, design, analyze, and revise—with specialized AI assistants that support their thinking without taking it over.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://sinq.studio" target="_blank" rel="noreferrer">Try Science Inquiry Studio <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#watch">See it in action <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="inquiry-map" aria-label="A visual map of the inquiry process">
            <div className="map-note note-one"><span>01</span> Ask a testable question</div>
            <div className="map-note note-two"><span>02</span> Examine the evidence</div>
            <div className="map-note note-three"><span>03</span> Revise your model</div>
            <div className="map-center"><b>?</b><small>Start here</small></div>
            <span className="map-dot d1" /><span className="map-dot d2" /><span className="map-dot d3" />
          </div>
        </div>
        <div className="shell hero-footnote"><span>Built for middle school science</span><span>Aligned with the Next Generation Science Standards</span></div>
      </section>

      <section className="statement section-pad"><div className="shell statement-grid"><p className="section-number">01 / The studio</p><div><h2>A place to practice how scientists <em>really think.</em></h2><p>Teachers can browse ready-to-use inquiry activities aligned with the Next Generation Science Standards, customize existing lessons, or create their own. Students stay in the driver’s seat while focused AI assistants help them move through the work of science and engineering.</p></div></div></section>

      <section id="how-it-works" className="process section-pad"><div className="shell">
        <div className="section-heading"><div><p className="section-number light">02 / The inquiry path</p><h2>From curiosity to<br /><em>clearer thinking.</em></h2></div><p>Each assistant has a specialized role. Together, they help students make progress while preserving the productive struggle that makes learning meaningful.</p></div>
        <div className="step-grid">{inquirySteps.map((step) => <article className="step-card" key={step.n}><div className="step-top"><span>{step.n}</span><i aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div></section>

      <section id="watch" className="video-section section-pad"><div className="shell video-grid">
        <div className="video-copy"><p className="section-number">03 / Inside SINQ</p><h2>See inquiry<br /><em>take shape.</em></h2><p>A short look at how Science Inquiry Studio supports teachers and students across investigation and design.</p><a className="text-link dark" href="https://sinq.studio" target="_blank" rel="noreferrer">Explore the live platform <span aria-hidden="true">↗</span></a></div>
        <figure className="video-frame"><video controls playsInline preload="metadata" poster="/video-poster.jpg"><source src="/sinq-overview.mp4" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>Science Inquiry Studio overview</figcaption></figure>
      </div></section>

      <section className="partners section-pad"><div className="shell">
        <p className="section-number centered">04 / A joint project</p><h2>Research, technology, and classroom practice—<em>together.</em></h2><p className="partners-intro">Science Inquiry Studio is a joint project of Terminus Technology, Inc., the UC Irvine Digital Learning Lab, and the California Science Project.</p>
        <div className="partner-grid"><div><span>Technology partner</span><strong>Terminus<br />Technology, Inc.</strong></div><a href="https://www.digitallearninglab.org/" target="_blank" rel="noreferrer"><span>Research partner</span><strong>UC Irvine<br />Digital Learning Lab</strong></a><a href="https://californiascienceproject.org/" target="_blank" rel="noreferrer"><span>Practice partner</span><strong>California<br />Science Project</strong></a></div>
        <Link className="button button-secondary" href="/people">Meet the research team <span aria-hidden="true">→</span></Link>
      </div></section>

      <section className="final-cta"><div className="shell final-inner"><div><p className="eyebrow"><span /> Ready to investigate?</p><h2>Put curiosity<br />to work.</h2></div><a className="button button-light" href="https://sinq.studio" target="_blank" rel="noreferrer">Launch SINQ Studio <span aria-hidden="true">↗</span></a></div></section>
    </main>
  );
}
