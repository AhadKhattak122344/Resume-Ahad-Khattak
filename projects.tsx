'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Movie Recommendation System',
    description: 'A personalized movie recommendation system using machine learning algorithms.',
    demo: '/demos/movie-recommendation',
    github: 'https://github.com/ahadkhattak/movie-recommendation',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
  },
  {
    title: 'Advanced Calculator Application',
    description: 'A feature-rich calculator application built with JavaFX.',
    demo: '/demos/calculator',
    github: 'https://github.com/ahadkhattak/advanced-calculator',
    technologies: ['Java', 'JavaFX', 'JUnit'],
  },
  {
    title: 'Weather Application',
    description: 'A real-time weather application fetching data from multiple APIs.',
    demo: '/demos/weather',
    github: 'https://github.com/ahadkhattak/weather-app',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express'],
  },
  {
    title: 'Students and Universities Application',
    description: 'A comprehensive application for managing student and university data.',
    demo: '/demos/students-universities',
    github: 'https://github.com/ahadkhattak/students-universities',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 gap-2">
                <Button asChild>
                  <Link href={project.demo}>Live Demo</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

