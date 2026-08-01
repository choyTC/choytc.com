import { useState, useEffect, useRef } from 'react';
import { 
  Globe as Github, 
  Share2 as Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Layers, 
  ChevronRight,
  Download,
  Briefcase,
  GraduationCap
} from 'lucide-react';

// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); 
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

// --- ANIMATED WRAPPER COMPONENT ---
const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  
  let translateClass = 'translate-y-10';
  if (direction === 'left') translateClass = '-translate-x-10';
  if (direction === 'right') translateClass = 'translate-x-10';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- MAIN APPLICATION ---
export default function App() {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const personalInfo = {
    name: "TC Choy",
    title: "Software Engineering Student & IT Technician",
    tagline: "Software Engineering Higher Diploma student with a focus on Software Project Management.",
    bio: "I am looking for an entry-level position in a professional environment where I can utilize my skills as a team player and integrate strategies to develop and expand my interpersonal and teamwork abilities.",
    email: "osmentchoyqcb@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/"
  };

  const experience = [
    {
      id: 1,
      type: "work",
      role: "Part-time IT Technician",
      company: "Ma On Shan Tsung Tsin Secondary School",
      period: "Sep 2025 - Present",
      description: "Carrying out inventory work to ensure archive consistency, configuring devices, assembling equipment, and setting up network gears."
    },
    {
      id: 2,
      type: "work",
      role: "IT Technician Intern",
      company: "Ma On Shan Tsung Tsin Secondary School",
      period: "Jun 2025 - Aug 2025",
      description: "Reset and configured computers and tablets for staff and students. Assembled equipment and set up network gears for smooth connection."
    },
    {
      id: 3,
      type: "edu",
      role: "Higher Diploma in Software Engineering",
      company: "Hong Kong Institute of Information Technology",
      period: "Sep 2024 - Jul 2026",
      description: "Currently studying as a Year 2 student. Achieved a CGPA score of 3.77 until Sem 4. Attained A grade in 11 subjects including Programming & Software Project Management."
    },
    {
      id: 4,
      type: "work",
      role: "Shop Assistant",
      company: "FOOD & LIFE COMPANIES LTD.",
      period: "Dec 2022 - Jul 2023",
      description: "Carried general shroff and cashier work. Responded to customer enquires politely and professionally with excellent customer service quality."
    },
    {
      id: 5,
      type: "edu",
      role: "Higher Diploma in Software Engineering",
      company: "Hong Kong Institute of Vocational Education",
      period: "Sep 2021 - Jul 2022",
      description: "Completed Year 1 studies in Software Engineering."
    },
    {
      id: 6,
      type: "edu",
      role: "Bachelor's Degree in Electrical Engineering",
      company: "City University of Hong Kong",
      period: "Sep 2019 - Jan 2021",
      description: "Studied for 2 years before pivoting to software engineering."
    },
    {
      id: 7,
      type: "work",
      role: "Branch Service Associate",
      company: "Hong Kong Jockey Club",
      period: "Aug 2019 - Mar 2021",
      description: "Introduced products and services to customers, handled general shroff and cashier work, and assisted customers with care."
    }
  ];

  const projects = [
    {
      id: 1,
      title: "choyTC.com",
      description: "My personal portfolio and digital resume, showcasing my projects, skills, and professional journey with a modern, animated interface.",
      tags: ["React", "Tailwind CSS", "Frontend"],
      links: { github: "https://github.com/", live: "https://choytc.com", isComingSoon: false },
      colSpan: "col-span-1 md:col-span-2",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "GPA Calculator+",
      description: "An intuitive web application designed to help students calculate, track, and forecast their GPA with advanced grading scale customizations.",
      tags: ["JavaScript", "Web App", "Utility"],
      links: { github: "https://github.com/", live: "https://gpa.choytc.com", isComingSoon: false },
      colSpan: "col-span-1",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "PDF Pager",
      description: "A web app that processes scanned A3 book spreads and automatically slices, crops, and organizes them into a clean A4 PDF format.",
      tags: ["Python", "PDF Processing", "Automation"],
      links: { github: "https://github.com/", live: "#", isComingSoon: true },
      colSpan: "col-span-1",
      image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Windows 7 Minesweeper",
      description: "A retro recreation of the classic Windows 7 Minesweeper game, featuring authentic graphics, sound effects, and game logic.",
      tags: ["HTML5", "CSS", "Game Dev"],
      links: { github: "https://github.com/", live: "#", isComingSoon: true },
      colSpan: "col-span-1 md:col-span-2",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "jQuery"] },
    { category: "Backend & DB", items: ["Java", "Python", "C#", "PHP", "SQL", "MySQL"] },
    { category: "Tools & Skills", items: ["PC Assembling", "MS Office", "Software Project Management"] }
  ];

  // REPLACE THIS WITH YOUR ACTUAL PNG URL/PATH
  //const pngLogoUrl = '/TC-logo.png'; 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30 overflow-hidden relative">
      
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .themed-png-logo {
          background: linear-gradient(135deg, #2dd4bf 0%, #a855f7 100%);
          mask-image: url('/TC-logo.png');
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-position: center;
          -webkit-mask-image: url('/TC-logo.png');
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-position: center;
          width: 50px;
          height: 40px;
          display: inline-block;
          transition: transform 0.3s ease;
          }
      `}} />

      {}
      <div 
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <div className="bg-slate-900/90 backdrop-blur-md text-teal-400 px-6 py-3 rounded-full border border-teal-500/50 shadow-lg shadow-teal-500/20 font-mono text-sm flex items-center gap-2">
          <Terminal size={16} />
          {toastMessage}
        </div>
      </div>

      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* This is your new PNG Logo Link */}
          <a href="#about" className="flex items-center group" aria-label="Home">
            <div className="themed-png-logo group-hover:scale-110" />
          </a>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">CV</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-32">
        <section id="about" className="min-h-[80vh] flex flex-col justify-center scroll-mt-24">
          <FadeIn delay={100}>
            <p className="text-teal-400 font-mono mb-4">Hi, my name is</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-4">
              {personalInfo.name}.
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-500 mb-6">
              I build things for the web.
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
              {personalInfo.tagline} {personalInfo.bio}
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/50 hover:bg-teal-500 hover:text-slate-950 transition-all font-medium flex items-center gap-2 group">
                View My Work
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experience" className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium flex items-center gap-2">
                <Download size={18} />
                Download CV
              </a>
            </div>
          </FadeIn>
        </section>

        <section id="experience" className="scroll-mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-teal-400 font-mono text-xl">01.</span> Career & Education
              <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
            </h3>
          </FadeIn>
          
          <div className="relative border-l border-slate-700 ml-3 md:ml-4 space-y-12">
            {experience.map((item, index) => (
              <FadeIn key={item.id} delay={index * 150}>
                <div className="relative pl-8 md:pl-10">
                  <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-teal-500">
                    {item.type === 'work' ? <Briefcase size={14} className="text-teal-400" /> : <GraduationCap size={14} className="text-purple-400" />}
                  </span>
                  
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h4 className="text-xl font-bold text-slate-200">{item.role}</h4>
                      <span className="text-sm font-mono text-teal-400 mt-1 md:mt-0">{item.period}</span>
                    </div>
                    <p className="text-lg font-medium text-slate-400 mb-4">{item.company}</p>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-teal-400 font-mono text-xl">02.</span> Tech Stack
              <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <FadeIn key={skillGroup.category} delay={index * 100}>
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    {index === 0 && <Code2 className="text-teal-400" />}
                    {index === 1 && <Terminal className="text-purple-400" />}
                    {index === 2 && <Layers className="text-blue-400" />}
                    <h4 className="text-xl font-bold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <FadeIn>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-teal-400 font-mono text-xl">03.</span> Featured Projects
              <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 100} className={project.colSpan}>
                <div className="group h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl flex flex-col justify-between hover:bg-slate-800/50 hover:border-teal-500/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                  
                  {}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 group-hover:border-teal-500/50 transition-colors shrink-0">
                        <Terminal size={24} className="text-teal-400" />
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors bg-slate-900/50 px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500"
                          >
                            <Github size={16} /> GitHub
                          </a>
                        )}
                        <button 
                          onClick={(e) => {
                            if (project.links.isComingSoon) {
                              e.preventDefault();
                              showToast("Project coming soon!");
                            } else if (project.links.live && project.links.live !== "#") {
                              window.open(project.links.live, "_blank", "noopener,noreferrer");
                            }
                          }}
                          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors bg-slate-900/50 px-3 py-2 rounded-lg border border-slate-700 ${project.links.isComingSoon ? 'text-slate-500 cursor-not-allowed hover:bg-slate-800' : 'text-teal-400 hover:text-teal-300 hover:border-teal-500 hover:bg-teal-500/10'}`}
                        >
                          <ExternalLink size={16} /> {project.links.isComingSoon ? "Soon" : "Live URL"}
                        </button>
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    {}
                    <div 
                      className={`w-full h-48 mb-6 rounded-xl overflow-hidden border border-slate-700/50 relative ${project.links.isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      onClick={(e) => {
                        if (project.links.isComingSoon) {
                          e.preventDefault();
                          showToast("Project coming soon!");
                        } else if (project.links.live && project.links.live !== "#") {
                          window.open(project.links.live, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      {/* Interactive overlay for images */}
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                      <img 
                        src={project.image} 
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  
                  {}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-purple-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pb-20">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-teal-500/10 blur-[50px] -z-10"></div>
              <h3 className="text-4xl font-bold mb-6 text-slate-200">Get In Touch</h3>
              <p className="text-slate-400 mb-10 text-lg">
                Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href={`mailto:${personalInfo.email}`} className="px-8 py-4 rounded-xl bg-teal-500 text-slate-950 font-bold hover:bg-teal-400 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <Mail size={20} />
                  Say Hello
                </a>
                <div className="flex items-center justify-center gap-4">
                  <a href={personalInfo.github} className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-400 transition-all hover:-translate-y-1">
                    <Github size={24} />
                  </a>
                  <a href={personalInfo.linkedin} className="p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-400 transition-all hover:-translate-y-1">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="relative z-10 border-t border-slate-800/50 bg-slate-950 text-center py-8">
        <p className="text-slate-500 text-sm font-mono">
          Designed & Built by {personalInfo.name} <br/>
          <span className="text-slate-600 text-xs mt-2 inline-block">Powered by React & Tailwind CSS</span>
        </p>
      </footer>
    </div>
  );
}