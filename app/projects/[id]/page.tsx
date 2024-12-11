'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AdminLayout } from '@/components/AdminLayout'
import { ProjectDetails } from '@/components/project/ProjectDetails'
import { Button } from "@/components/ui/button"
import { dummyProjects } from '@/data/dummyData'
import { Project } from '@/components/types/project'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const foundProject = dummyProjects.find(p => p.id === params.id)
    setProject(foundProject || null)
  }, [params.id])

  if (!project) {
    return (
      <AdminLayout>
        <div>Project not found</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-4">
        <Button onClick={() => router.back()} className="mb-4">Back</Button>
        <h1 className="text-3xl font-bold mb-6">Project Details</h1>
        <ProjectDetails project={project} />
      </div>
    </AdminLayout>
  )
}

