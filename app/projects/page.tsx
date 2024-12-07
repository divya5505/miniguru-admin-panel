'use client'

import { useState } from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { ProjectList } from '@/components/project/ProjectList'
import { dummyProjects } from '@/data/dummyData'
import { Project } from '@/app/types/project'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(dummyProjects)

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter(project => project.id !== projectId))
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectList projects={projects} onDeleteProject={handleDeleteProject} />
    </AdminLayout>
  )
}

