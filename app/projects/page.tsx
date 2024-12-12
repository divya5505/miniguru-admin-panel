'use client'

import { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { ProjectList } from '@/components/project/ProjectList'
import { SkeletonCard } from '@/components/SkeletonCard'  // Import the Skeleton component
import { ErrorDisplay } from '@/components/ErrorDisplay'  // Import the ErrorDisplay component
import { Project } from '@/types/project'
import { getAllProjects } from '@/utils/api/projectApi'

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)  // Reset error before fetching
        const allProjects = await getAllProjects()
        setProjects(allProjects.projects)
      } catch (error) {
        setError(error.message || 'An error occurred while fetching projects.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter(project => project.id !== projectId))
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="space-y-4">
          {/* Show Skeleton while loading */}
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </AdminLayout>
    )
  }

  if (error) {
    return (
      <AdminLayout>
        <ErrorDisplay message={error} />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectList projects={projects} onDeleteProject={handleDeleteProject} />
    </AdminLayout>
  )
}
