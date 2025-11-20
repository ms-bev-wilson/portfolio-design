import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { 
  Code2, 
  Database, 
  RefreshCcw, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail,
  Send,
  Menu,
  X,
  Server,
  Users,
  Layout,
  Workflow
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Interior Designer Website",
      description: "Created dynamic site with JavaScript and API integration.",
      image: "src/images/interior.png",
      tags: ["HTML", "JavaScript", "DOM", "API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Photographer's Website",
      description: "Debugged code and optimized SEO and accessibility.",
      image: "src/images/wedding.png",
      tags: ["SEO", "Accessibility", "Optimization"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Rental Property Application",
      description: "Developed React-based SPA with routing and animations.",
      image: "src/images/kasa.png",
      tags: ["React", "Sass", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = {
    frontend: [
      { name: "HTML", color: "fuchsia" as const },
      { name: "CSS", color: "fuchsia" as const },
      { name: "JavaScript", color: "fuchsia" as const },
      { name: "React", color: "fuchsia" as const },
      { name: "Sass", color: "fuchsia" as const },
      { name: "Responsive Design", color: "fuchsia" as const },
      { name: "CSS Animations", color: "fuchsia" as const },
      { name: "DOM Manipulation", color: "fuchsia" as const }
    ],
    backend: [
      { name: "Node.js", color: "peach" as const },
      { name: "Express.js", color: "peach" as const },
      { name: "MongoDB", color: "peach" as const },
      { name: "CRUD Operations", color: "peach" as const },
      { name: "REST APIs", color: "peach" as const },
      { name: "Data Modeling", color: "peach" as const },
      { name: "Secure Data Storage", color: "peach" as const }
    ],
    devtools: [
      { name: "Git & GitHub", color: "rose" as const },
      { name: "Chrome DevTools (Debugging)", color: "rose" as const },
      { name: "SEO Optimization", color: "rose" as const },
      { name: "Accessibility Best Practices", color: "rose" as const },
      { name: "Performance Optimization", color: "rose" as const },
      { name: "Acceptance Testing", color: "rose" as const }
    ],
    uxui: [
      { name: "User Research", color: "fuchsia" as const },
      { name: "Wireframing", color: "fuchsia" as const },
      { name: "Prototyping", color: "fuchsia" as const },
      { name: "Usability Testing", color: "fuchsia" as const },
      { name: "Interaction Design", color: "fuchsia" as const }
    ],
    software: [
      { name: "Figma", color: "peach" as const },
      { name: "Sketch", color: "peach" as const },
      { name: "Adobe", color: "peach" as const }
    ],
    sharepoint: [
      { name: "SharePoint Framework", color: "rose" as const },
      { name: "Power Automate", color: "rose" as const },
      { name: "Power Apps", color: "rose" as const },
      { name: "Custom Web Parts", color: "rose" as const },
      { name: "Branding & UI Customization", color: "rose" as const }
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Bev Wilson</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-zinc-300 hover:text-fuchsia-400 transition-colors">Home</a>
              <a href="#about" className="text-zinc-300 hover:text-fuchsia-400 transition-colors">About</a>
              <a href="#projects" className="text-zinc-300 hover:text-fuchsia-400 transition-colors">Projects</a>
              <a href="#skills" className="text-zinc-300 hover:text-fuchsia-400 transition-colors">Skills</a>
              <a href="#contact" className="text-zinc-300 hover:text-fuchsia-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-zinc-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#home" className="block text-zinc-300 hover:text-fuchsia-400 transition-colors">Home</a>
              <a href="#about" className="block text-zinc-300 hover:text-fuchsia-400 transition-colors">About</a>
              <a href="#projects" className="block text-zinc-300 hover:text-fuchsia-400 transition-colors">Projects</a>
              <a href="#skills" className="block text-zinc-300 hover:text-fuchsia-400 transition-colors">Skills</a>
              <a href="#contact" className="block text-zinc-300 hover:text-fuchsia-400 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-fuchsia-400 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                Web + UX Developer
              </h1>
              <p className="text-xl text-zinc-400">
                UX‑focused Web Developer skilled in building polished, user‑friendly applications with React, TypeScript, and Node.js. Experienced across front‑end and back‑end development, responsive design, SEO optimization, and full project lifecycle management while delivering performant solutions that balance design and engineering.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-fuchsia-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-rose-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:alex@example.com" className="text-zinc-400 hover:text-orange-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 rounded-lg opacity-20 blur-2xl" />
              <img 
                src="src/images/portfolioHome.png"
                alt="Working"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">
            About <span className="text-fuchsia-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-fuchsia-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="mb-3">Full-Stack Expertise</h3>
              <p className="text-zinc-400">
                I specialize in building responsive, dynamic web applications using modern technologies like React for the front end and Node.js with Express for the back end.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="mb-3">API & Database Integration</h3>
              <p className="text-zinc-400">
                Experienced in creating secure REST APIs and managing data with MongoDB, enabling robust and scalable solutions for complex projects.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-orange-400/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-400/10 flex items-center justify-center mb-4">
                <RefreshCcw className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="mb-3">Project Management & Agile Delivery</h3>
              <p className="text-zinc-400">
                Skilled in planning, writing technical specifications, and managing projects from concept to deployment using Agile and Scrum methodologies.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-fuchsia-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="mb-3">UX Development</h3>
              <p className="text-zinc-400">
                I focus on translating design concepts into functional interfaces using clean, efficient, and reusable code. My approach ensures seamless integration of graphics, layouts, and navigation while maintaining performance and scalability.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="mb-3">UI Design</h3>
              <p className="text-zinc-400">
                I create intuitive interfaces with clean layouts, icons, and navigation, ensuring a seamless user experience. My work includes delivering clear design specifications for graphics and templates that enhance usability and visual appeal.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-orange-400/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-400/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="mb-3">Business & Customer Focus</h3>
              <p className="text-zinc-400">
                I analyze requirements to align solutions with user needs and business goals. This includes managing the posting of data, forms, and graphics for applications while building customer-centric experiences that drive engagement and satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-4 text-center">
            Featured <span className="text-rose-400">Projects</span>
          </h2>
          <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
            A selection of recent work:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">
            Skills & <span className="text-orange-300">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4 text-fuchsia-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-orange-300">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-rose-400">Dev Tools/Practices</h3>
              <div className="flex flex-wrap gap-2">
                {skills.devtools.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-fuchsia-400">UX/UI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.uxui.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-orange-300">Software</h3>
              <div className="flex flex-wrap gap-2">
                {skills.software.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-rose-400">SharePoint</h3>
              <div className="flex flex-wrap gap-2">
                {skills.sharepoint.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4 text-center">
            Let's <span className="text-fuchsia-400">Connect</span>
          </h2>
          <p className="text-center text-zinc-400 mb-12">
            Have a project in mind? Let's discuss how we can work together
          </p>
          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-zinc-300">Name</label>
                  <Input 
                    id="name"
                    placeholder="Your name" 
                    className="bg-zinc-950 border-zinc-700 focus:border-fuchsia-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-zinc-300">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com" 
                    className="bg-zinc-950 border-zinc-700 focus:border-fuchsia-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-zinc-300">Subject</label>
                <Input 
                  id="subject"
                  placeholder="What's this about?" 
                  className="bg-zinc-950 border-zinc-700 focus:border-fuchsia-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-zinc-300">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..." 
                  rows={6}
                  className="bg-zinc-950 border-zinc-700 focus:border-fuchsia-500 resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-rose-600 hover:from-fuchsia-700 hover:to-rose-700 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <Separator className="mb-8 bg-zinc-800" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500">© 2025 Bev Wilson. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com" className="text-zinc-500 hover:text-fuchsia-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-zinc-500 hover:text-rose-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:alex@example.com" className="text-zinc-500 hover:text-orange-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
