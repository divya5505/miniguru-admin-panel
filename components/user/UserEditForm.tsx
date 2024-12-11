import { useState } from 'react'
import { User } from '@/components/types/users'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserEditFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
}

export function UserEditForm({ user, onSave, onCancel }: UserEditFormProps) {
  const [editedUser, setEditedUser] = useState(user)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedUser(prev => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (value: string) => {
    setEditedUser(prev => ({ ...prev, role: value as 'USER' | 'ADMIN' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(editedUser)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit User: {user.name}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={editedUser.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={editedUser.email} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="age">Age</Label>
            <Input id="age" name="age" type="number" value={editedUser.age} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={handleRoleChange} defaultValue={editedUser.role}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USER">User</SelectItem>
                <SelectItem value="ADMIN">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" name="phoneNumber" value={editedUser.phoneNumber} onChange={handleChange} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit">Save Changes</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

