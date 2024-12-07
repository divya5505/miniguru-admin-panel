import { Project, Material, Order, Product, ProductCategory, ProjectCategory } from '../types/types';

export const dummyProjects: Project[] = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Redesign the company website with a modern look and improved UX",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-03-31"),
    thumbnailUrl: "/placeholder.svg?height=100&width=100",
    videoUrl: "https://example.com/project-video.mp4",
    materials: [
      { id: "m1", name: "Figma License", quantity: 1 },
      { id: "m2", name: "Stock Photos", quantity: 50 },
    ],
    status: "completed",
    createdAt: new Date("2022-12-15"),
    updatedAt: new Date("2023-03-31"),
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Develop a new mobile app for customer engagement",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-09-30"),
    thumbnailUrl: "/placeholder.svg?height=100&width=100",
    materials: [
      { id: "m3", name: "React Native Developer", quantity: 2 },
      { id: "m4", name: "UI/UX Designer", quantity: 1 },
    ],
    status: "active",
    createdAt: new Date("2023-03-15"),
    updatedAt: new Date("2023-06-01"),
  },
];

export const dummyOrders: Order[] = [
  {
    id: "1",
    userId: "u1",
    totalAmount: 199.99,
    paymentStatus: "COMPLETED",
    createdAt: "2023-05-01T10:00:00Z",
    updatedAt: "2023-05-01T10:05:00Z",
    transactionId: "t1",
    deliveryAddress: "123 Main St, City, Country",
    products: [
      { productId: "p1", quantity: 2 },
      { productId: "p2", quantity: 1 },
    ],
    user: { name: "John Doe", email: "john@example.com" },
    transaction: {
      id: "t1",
      walletId: "w1",
      amount: 199.99,
      type: "DEBIT",
      status: "COMPLETED",
      createdAt: "2023-05-01T10:00:00Z",
    },
  },
  {
    id: "2",
    userId: "u2",
    totalAmount: 99.99,
    paymentStatus: "PENDING",
    createdAt: "2023-05-02T14:00:00Z",
    updatedAt: "2023-05-02T14:01:00Z",
    transactionId: "t2",
    deliveryAddress: "456 Elm St, Town, Country",
    products: [
      { productId: "p3", quantity: 1 },
    ],
    user: { name: "Jane Smith", email: "jane@example.com" },
    transaction: {
      id: "t2",
      walletId: "w2",
      amount: 99.99,
      type: "DEBIT",
      status: "PENDING",
      createdAt: "2023-05-02T14:00:00Z",
    },
  },
];

export const dummyProducts: Product[] = [
  {
    id: "p1",
    name: "Smartphone",
    description: "Latest model smartphone with advanced features",
    price: 799.99,
    inventory: 100,
    categoryId: "c1",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-05-01T00:00:00Z",
  },
  {
    id: "p2",
    name: "Laptop",
    description: "High-performance laptop for professionals",
    price: 1299.99,
    inventory: 50,
    categoryId: "c1",
    images: ["/placeholder.svg?height=100&width=100"],
    createdAt: "2023-02-01T00:00:00Z",
    updatedAt: "2023-05-01T00:00:00Z",
  },
];

export const dummyProductCategories: ProductCategory[] = [
  {
    id: "c1",
    name: "Electronics",
    icon: "laptop",
  },
  {
    id: "c2",
    name: "Clothing",
    icon: "shirt",
  },
];

export const dummyProjectCategories: ProjectCategory[] = [
  {
    id: "pc1",
    name: "Web Development",
    icon: "globe",
  },
  {
    id: "pc2",
    name: "Mobile App Development",
    icon: "smartphone",
  },
];

