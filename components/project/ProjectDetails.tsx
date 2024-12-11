import { Project } from '@/components/types/project'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold">Description</h3>
            <p>{project.description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Status</h3>
            <p className="capitalize">{project.status}</p>
          </div>
          <div>
            <h3 className="font-semibold">Duration</h3>
            <p>{project.startDate.toLocaleDateString()} - {project.endDate.toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-semibold">Materials</h3>
            <ul className="list-disc list-inside">
              {project.materials.map((material) => (
                <li key={material.id}>{material.name} (Quantity: {material.quantity})</li>
              ))}
            </ul>
          </div>
          {project.videoUrl && (
            <div>
              <h3 className="font-semibold">Project Video</h3>
              <video src={project.videoUrl} controls className="w-full max-w-md mt-2" />
            </div>
          )}
          <div>
            <Image src={project.thumbnailUrl} alt={project.title} width={500} height={300} className="w-full max-w-md mt-2 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

