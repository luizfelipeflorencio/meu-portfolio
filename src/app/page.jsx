"use client"

import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileCode,
  Atom,
  LayoutTemplate,
  GitBranch,
  CloudCog,
  Server,
  Database,
  PanelTopClose,
  Boxes,
  Wind,
  Braces,
  MonitorSmartphone,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Componente de partículas de fundo
const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-500/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Componente de botão animado
const AnimatedButton = ({ children, variant = "default", href, download, target, ...props }) => {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
        ${variant === "outline"
          ? "border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
        }
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
      `}
      {...(href ? { href, ...(download && { download }), ...(target && { target }) } : {})}
      {...props}
    >
      {children}
    </Component>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const skillsInView = useInView(skillsRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })
  const skills = [
    { name: "JavaScript", icon: FileCode, level: "Avançado" },
    { name: "React", icon: Atom, level: "Avançado" },
    { name: "NextJS", icon: LayoutTemplate, level: "Avançado" },
    { name: "Git", icon: GitBranch, level: "Avançado" },
    { name: "API Rest", icon: CloudCog, level: "Intermediário" },
    { name: "Node.js", icon: Server, level: "Intermediário" },
    { name: "MongoDB", icon: Database, level: "Intermediário" },
    { name: "MySQL", icon: Database, level: "Intermediário" },
    { name: "ShadCN", icon: PanelTopClose, level: "Intermediário" },
    { name: "Bootstrap", icon: Boxes, level: "Intermediário" },
    { name: "TailwindCSS", icon: Wind, level: "Intermediário" },
    { name: "Figma", icon: MonitorSmartphone, level: "Intermediário" },
    { name: "PHP", icon: Braces, level: "Básico" },
  ]

  const projects = [
    {
      title: "Landing Page",
      description: "Landing Page para uma empresa de ar condicionado poder mostrar os seus serviços",
      technologies: ["React", "NextJS", "TailwindCSS", "ShadCN"],
      github: "https://github.com/luizfelipeflorencio/aciolifaculdade",
      demo: "https://acioli.vercel.app/",
      image: "./image.png",
    },
    {
      title: "LinkTree",
      description: "LinkTree feito para uma cliente usar na Biografia do seu Instragram",
      technologies: ["React", "NextJS", "TailwindCSS", "ShadCN"],
      github: "https://github.com/luizfelipeflorencio/linktree",
      demo: "https://flaviadepilacaolinktree.vercel.app/",
      image: "./image2.png",
    },
    {
      title: "API REST e REACT",
      description: "Sistema para controle de projeto, onde fiz para aprender React e API REST",
      technologies: ["React", "API REST", "JavaScript"],
      github: "https://github.com/luizfelipeflorencio/React-Cost",
      demo: "https://github.com/luizfelipeflorencio/React-Cost",
      image: "/image3.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        id="sobre"
        className="relative container mx-auto px-4 py-24 md:py-32 min-h-screen flex items-center"
        style={{ y }}
      >
        <div className="flex flex-col items-center text-center space-y-8 w-full">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-white/90">Olá, eu sou </span>
                <br />
                <span className="text-cyan-400 relative">
                  Luiz Felipe
                </span>
              </h1>
              <motion.div
                className="absolute top-0 right-0 text-cyan-400"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
            </motion.div>

            <motion.p
              className="mx-auto max-w-[800px] text-slate-300 md:text-xl lg:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Code2 className="inline h-6 w-6 mr-2 text-cyan-400" />
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
              <br className="hidden md:block" />
              Especializado em tecnologias web modernas e sempre em busca de novos desafios.
              <Zap className="inline h-6 w-6 ml-2 text-yellow-400" />
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <AnimatedButton href="/Luiz_Felipe_Curriculo.docx" download="Luiz_Felipe_Curriculo.docx">
              <FileCode className="h-5 w-5" />
              Baixar Currículo
            </AnimatedButton>
            <AnimatedButton variant="outline" href="#contato">
              <Mail className="h-5 w-5" />
              Entre em Contato
            </AnimatedButton>
          </motion.div>

          <motion.div
            className="flex gap-6 pt-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { href: "https://github.com/luizfelipeflorencio", icon: Github, color: "hover:text-gray-300" },
              { href: "https://www.linkedin.com/in/luiz-felipe-florencio-444901300/", icon: Linkedin, color: "hover:text-blue-400" },
              { href: "mailto:contato.luizfelipefm@gmail.com", icon: Mail, color: "hover:text-red-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 transition-all duration-300 ${social.color}`}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        id="skills"
        className="relative container mx-auto px-4 py-24"
        initial={{ opacity: 0 }}
        animate={skillsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-pink-400">
            Minhas Skills
          </h2>
          <p className="max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
            Tecnologias e ferramentas que domino e utilizo no desenvolvimento de projetos inovadores
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={skillsInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform-gpu">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Content */}
                <div className="relative z-10 text-center space-y-4">
                  <motion.div
                    className="relative mx-auto w-16 h-16 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <skill.icon className="h-8 w-8 text-cyan-400 relative z-10" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {skill.name}
                  </h3>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={skillsInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    <Badge
                      className={`
                        px-3 py-1 text-sm font-medium rounded-full border transition-all duration-300
                        ${skill.level === 'Avançado'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 group-hover:bg-emerald-500/30'
                          : skill.level === 'Intermediário'
                            ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30 group-hover:bg-yellow-500/30'
                            : 'bg-blue-500/20 text-blue-300 border-blue-500/30 group-hover:bg-blue-500/30'
                        }
                      `}
                    >
                      {skill.level}
                    </Badge>
                  </motion.div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-cyan-500/50 via-transparent to-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3) 0%, transparent 50%, rgba(37, 99, 235, 0.3) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'subtract',
                    maskComposite: 'subtract'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        id="projetos"
        className="relative container mx-auto px-4 py-24"
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-normal text-purple-400">
            Meus Projetos
          </h2>
          <p className="max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas e criatividade
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={projectsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Image container */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Dark background for buttons visibility */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Action buttons overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 cursor-pointer group/github"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        title="Ver código no GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 cursor-pointer group/demo"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        title="Ver demonstração"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-4">
                  <motion.h3
                    className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-slate-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + 0.6 + techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-500/50 via-transparent to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, transparent 50%, rgba(219, 39, 119, 0.3) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'subtract',
                    maskComposite: 'subtract'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        id="contato"
        className="relative container mx-auto px-4 py-24 pb-32"
        initial={{ opacity: 0 }}
        animate={contactInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={contactInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-emerald-400">
              Entre em Contato
            </h2>
            <p className="max-w-[700px] text-slate-300 md:text-xl leading-relaxed">
              Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto e criar algo incrível!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AnimatedButton href="mailto:contato.luizfelipefm@gmail.com">
              <Mail className="h-5 w-5" />
              Enviar Email
            </AnimatedButton>
            <AnimatedButton variant="outline" href="https://www.linkedin.com/in/luiz-felipe-florencio-444901300/" target="_blank">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </AnimatedButton>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-10 left-10 text-cyan-400/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Code2 className="h-12 w-12" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10 text-purple-400/30"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="h-16 w-16" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}