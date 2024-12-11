'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AdminLayout } from '@/components/AdminLayout'
import { UserDetails } from '@/components/user/UserDetails'
import { UserEditForm } from '@/components/user/UserEditForm'
import { Button } from "@/components/ui/button"
import { dummyUsers } from '@/data/dummyUsers'
import { User } from '@/components/types/users'

export default function UserDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const foundUser = dummyUsers.find(u => u.id === params.id)
    setUser(foundUser || null)
  }, [params.id])

  const handleSave = (updatedUser: User) => {
    setUser(updatedUser)
    setIsEditing(false)
  }

  if (!user) {
    return (
      <AdminLayout>
        <div>User not found</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-4">
        <Button onClick={() => router.back()}>Back</Button>
        <h1 className="text-3xl font-bold">User Details</h1>
        {isEditing ? (
          <UserEditForm
            user={user}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <UserDetails user={user} />
            <Button onClick={() => setIsEditing(true)}>Edit User</Button>
          </>
        )}
      </div>
    </AdminLayout>
  )
}

