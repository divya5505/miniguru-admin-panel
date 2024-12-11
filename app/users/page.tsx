'use client'

import { useState } from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { UserList } from '@/components/user/UserList'
import { dummyUsers } from '@/data/dummyUsers'
import { User } from '@/components/types/users'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(dummyUsers)

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </AdminLayout>
  )
}

