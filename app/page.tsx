import Link from "next/link";

const team = [
  ["Mark Warschauer", "Distinguished Professor of Education, UC Irvine"],
  ["Dana Saito-Stehberger", "Director of Curriculum and Instruction, Digital Learning Lab UC Irvine"],
  ["Tina Zhao", "Researcher, Digital Learning Lab, UC Irvine"],
  ["Jon Kovach", "Executive Director, California Science Project"],
  ["Tamara Tate", "Associate Director of the Digital Learning Lab, UC Irvine"],
  ["Avni Doshi", "Undergraduate Researcher, UC Irvine"],
  ["Artus Yeh", "Undergraduate Researcher, New York University"],
  ["Jackie Liu", "Master’s Student, University of Southern California"],
  ["Ivan Shishkin", "Undergraduate Researcher, UC Irvine"],
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero simple-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Science Inquiry Studio</p>
            <h1>Scientific inquiry and engineering design.</h1>
            <p className="hero-lede">Science Inquiry Studio is a web-based environment that supports middle school students’ engagement in scientific inquiry and engineering design.</p>
            <a className="button button-primary" href="https://sinq.studio" target="_blank" rel="noreferrer">Try Science Inquiry Studio now <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="hero-video"><video controls playsInline preload="metadata" poster="/video-poster.jpg"><source src="/sinq-overview.mp4" type="video/mp4" />Your browser does not support embedded video.</video></figure>
        </div>
      </section>

      <section id="how-it-works" className="audience-section section-pad"><div className="shell"><div className="audience-grid">
        <article><span>Teachers</span><p>Browse ready-to-use inquiry activities aligned with the Next Generation Science Standards, customize existing lessons, or create your own.</p></article>
        <article><span>Students</span><p>Direct specialized AI assistants to generate hypotheses, plan investigations, analyze evidence, critique solutions, and refine their thinking.</p></article>
      </div></div></section>

      <section id="people" className="home-people section-pad"><div className="shell">
        <div className="home-people-heading"><div><p className="section-number">Research Team</p><h2>People behind the project</h2></div><Link className="button button-secondary" href="/people">View people page <span aria-hidden="true">→</span></Link></div>
        <div className="home-team-list">{team.map(([name, role]) => <div key={name}><strong>{name}</strong><span>{role}</span></div>)}</div>
      </div></section>

      <section className="partners compact-partners section-pad"><div className="shell"><p className="section-number centered">A joint project</p><p className="partners-intro">Science Inquiry Studio represents a joint project of Terminus Technology, Inc., the UC Irvine <a href="https://www.digitallearninglab.org/" target="_blank" rel="noreferrer">Digital Learning Lab</a>, and the California Science Project.</p></div></section>
    </main>
  );
}
