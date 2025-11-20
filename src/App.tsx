import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail,
  Send,
  Menu,
  X
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MzY0MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for workout tracking and nutrition planning with social features.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzNTk3MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Developer Portfolio CMS",
      description: "Content management system built specifically for developers to showcase projects and blog posts.",
      image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzNTUyMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = {
    frontend: [
      { name: "React", color: "fuchsia" as const },
      { name: "TypeScript", color: "fuchsia" as const },
      { name: "Next.js", color: "fuchsia" as const },
      { name: "Tailwind CSS", color: "fuchsia" as const },
      { name: "Vue.js", color: "fuchsia" as const }
    ],
    backend: [
      { name: "Node.js", color: "peach" as const },
      { name: "Python", color: "peach" as const },
      { name: "PostgreSQL", color: "peach" as const },
      { name: "MongoDB", color: "peach" as const },
      { name: "GraphQL", color: "peach" as const }
    ],
    tools: [
      { name: "Git", color: "rose" as const },
      { name: "Docker", color: "rose" as const },
      { name: "AWS", color: "rose" as const },
      { name: "Figma", color: "rose" as const },
      { name: "CI/CD", color: "rose" as const }
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-fuchsia-400" />
              <span className="font-semibold">Alex Chen</span>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span className="text-fuchsia-300">Available for freelance work</span>
              </div>
              <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-fuchsia-400 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                Full-Stack Developer
              </h1>
              <p className="text-xl text-zinc-400">
                Crafting beautiful, performant web applications with modern technologies. 
                Specialized in React, Node.js, and cloud architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white">
                  <a href="#contact" className="flex items-center gap-2">
                    Get in Touch
                    <Send className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" className="border-zinc-700 hover:border-fuchsia-500 hover:bg-fuchsia-500/10">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
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
                src="https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYzNjA1NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workspace"
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
                <Code2 className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="mb-3">Clean Code</h3>
              <p className="text-zinc-400">
                Writing maintainable, scalable code following best practices and industry standards.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-rose-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="mb-3">Beautiful Design</h3>
              <p className="text-zinc-400">
                Creating pixel-perfect, responsive interfaces that users love to interact with.
              </p>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-orange-400/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-400/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-orange-300" />
              </div>
              <h3 className="mb-3">Mobile First</h3>
              <p className="text-zinc-400">
                Building applications that work seamlessly across all devices and screen sizes.
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
            A selection of recent work showcasing my expertise in full-stack development
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
              <h3 className="mb-4 text-rose-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
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
            <p className="text-zinc-500">© 2025 Alex Chen. All rights reserved.</p>
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
