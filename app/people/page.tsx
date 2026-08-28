import type { Metadata } from "next";

export const metadata: Metadata = { title: "People", description: "Meet the research and development team behind Science Inquiry Studio." };

type Person = { name: string; role: string; institution: string; bio: string; image?: string; links: { label: string; href: string }[] };

const people: Person[] = [
  { name: "Mark Warschauer", role: "Distinguished Professor of Education", institution: "UC Irvine", image: "/people/mark-warschauer.webp", bio: "Mark Warschauer directs UC Irvine’s Digital Learning Lab. His research examines digital and AI-supported learning, literacy, and educational equity, with a focus on designing technologies that strengthen how students think and learn.", links: [{ label: "Personal website", href: "https://markwarschauer.com/" }, { label: "Digital Learning Lab", href: "https://www.digitallearninglab.org/people.html" }] },
  { name: "Dana Saito-Stehberger", role: "Director of Curriculum and Instruction", institution: "UC Irvine Digital Learning Lab", image: "/people/dana-saito-stehberger.jpg", bio: "Dana Saito-Stehberger leads curriculum and instruction for the Digital Learning Lab. Her work centers on research-based learning design, teacher professional learning, and practical approaches to AI-enhanced teaching.", links: [{ label: "UCI Teacher Academy", href: "https://teacheracademy.uci.edu/ai-in-education/" }, { label: "DLL profile", href: "https://www.digitallearninglab.org/people.html" }] },
  { name: "Tina Zhao", role: "Researcher", institution: "UC Irvine Digital Learning Lab", bio: "Tina Zhao contributes to research and development for Science Inquiry Studio, supporting the study and design of AI-assisted inquiry experiences for middle school learners.", links: [{ label: "Digital Learning Lab", href: "https://www.digitallearninglab.org/" }] },
  { name: "Jon Kovach", role: "Executive Director", institution: "California Science Project", bio: "Jon Kovach leads the California Science Project, a statewide network that strengthens science teaching through partnerships, professional learning, and research-informed classroom practice.", links: [{ label: "California Science Project", href: "https://californiascienceproject.org/" }] },
  { name: "Tamara Tate", role: "Associate Director", institution: "UC Irvine Digital Learning Lab", image: "/people/tamara-tate.webp", bio: "Tamara Tate leads work on generative AI, writing, and digital learning at UC Irvine. Her research focuses on technology-supported learning, digital literacy, and the thoughtful integration of AI into secondary and postsecondary education.", links: [{ label: "UCI profile", href: "https://education.uci.edu/researcher-tate-t.html" }, { label: "Personal website", href: "https://www.tptate.com/" }] },
  { name: "Avni Doshi", role: "Undergraduate Researcher", institution: "UC Irvine", image: "/people/avni-doshi.webp", bio: "Avni Doshi works across software engineering, interface design, and research to build human-centered educational technology. She studies Informatics at UC Irvine, with interests in AI, human-computer interaction, and accessible digital experiences.", links: [{ label: "Personal website", href: "https://www.avni-doshi.com/" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/avni-doshi/" }] },
  { name: "Artus Yeh", role: "Undergraduate Researcher", institution: "New York University", bio: "Artus Yeh is an undergraduate researcher at New York University contributing to Science Inquiry Studio’s design and development work at the intersection of technology and learning.", links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/artus-yeh" }, { label: "New York University", href: "https://www.nyu.edu/" }] },
  { name: "Jackie Liu", role: "Master’s Student", institution: "University of Southern California", bio: "Jackie Liu is a master’s student at the University of Southern California contributing to the project’s research and development work in science learning and AI-supported inquiry.", links: [{ label: "University of Southern California", href: "https://www.usc.edu/" }] },
  { name: "Ivan Shishkin", role: "Undergraduate Researcher", institution: "UC Irvine", bio: "Ivan Shishkin is a UC Irvine undergraduate researcher working on educational technology and AI literacy. His interests include building tools that help students engage with AI while retaining ownership of their thinking.", links: [{ label: "Personal website", href: "https://ivanshishkin.com/" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/ivan-shishkin-dev" }] },
];

function initials(name: string) { return name.split(" ").map((part) => part[0]).join(""); }

export default function PeoplePage() {
  return (
    <main id="main-content" className="people-page">
      <section className="people-hero"><div className="shell"><p className="eyebrow"><span /> Research team</p><h1>Many disciplines.<br /><em>One shared question.</em></h1><p>How can technology help students become more capable, curious, and independent scientific thinkers?</p></div></section>
      <section className="people-section section-pad"><div className="shell">
        <div className="people-intro"><p className="section-number">The team</p><p>Science Inquiry Studio brings together researchers, curriculum leaders, engineers, and science education partners.</p></div>
        <div className="people-grid">{people.map((person, index) => (
          <article className="person-card" key={person.name}>
            <div className="person-visual">{person.image ? <img src={person.image} alt={`${person.name} headshot`} /> : <div className={`initials tone-${(index % 4) + 1}`} aria-label={`${person.name} profile placeholder`}>{initials(person.name)}</div>}<span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="person-content"><p className="person-institution">{person.institution}</p><h2>{person.name}</h2><h3>{person.role}</h3><p>{person.bio}</p><div className="person-links">{person.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div></div>
          </article>
        ))}</div>
      </div></section>
    </main>
  );
}
