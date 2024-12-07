import { User, Wallet, ScoreHistory, Project } from '../types/users';

export const dummyUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    age: 30,
    role: 'USER',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-06-01T00:00:00Z',
    score: 75,
    wallet: {
      id: 'w1',
      userId: '1',
      balance: 100
    },
    scoreHistory: [
      { time: '2023-01-01T00:00:00Z', updatedScore: 50 },
      { time: '2023-03-01T00:00:00Z', updatedScore: 75 }
    ],
    phoneNumber: '+1234567890',
    projects: [
      { id: 'p1', title: 'Project A' },
      { id: 'p2', title: 'Project B' }
    ],
    totalProjects: 2
  },
  {
    id: '2',
    email: 'jane@example.com',
    name: 'Jane Smith',
    age: 28,
    role: 'ADMIN',
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2023-05-01T00:00:00Z',
    score: 90,
    wallet: {
      id: 'w2',
      userId: '2',
      balance: 200
    },
    scoreHistory: [
      { time: '2023-02-01T00:00:00Z', updatedScore: 80 },
      { time: '2023-04-01T00:00:00Z', updatedScore: 90 }
    ],
    phoneNumber: '+1987654321',
    projects: [
      { id: 'p3', title: 'Project C' }
    ],
    totalProjects: 1
  }
];

