"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
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
      demo: "#",
      image: "/image3.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="sobre" className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent whitespace-nowrap">
                Luiz Felipe
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes. Especializado em
              tecnologias web modernas e sempre em busca de novos desafios.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <a href="/Luiz_Felipe_Curriculo.docx" download="Luiz_Felipe_Curriculo.docx">
                Baixar Currículo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contato">Entre em Contato</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/luizfelipeflorencio" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/luiz-felipe-florencio-444901300/" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contato.luizfelipefm@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Minhas Skills</h2>
          <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
            Tecnologias e ferramentas que domino e utilizo no desenvolvimento de projetos
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4 mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-2">
                <skill.icon className="h-12 w-12 mx-auto text-green-600" />
                <CardTitle className="text-lg">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{skill.level}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projetos" className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meus Projetos</h2>
          <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contato" className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
          <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
            Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild>
              <Link href="mailto:contato.luizfelipefm@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://www.linkedin.com/in/luiz-felipe-florencio-444901300/" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}