
export type Project = {
    id: string;                  // Unique identifier for the project
    title: string;               // Title of the project
    description: string;         // Detailed description
    startDate: Date;             // Project start date
    endDate: Date;               // Project end date
    thumbnailUrl: string;        // URL for the thumbnail image
    videoUrl?: string;           // URL for the video (optional)
    materials: Material[];       // Array of materials required for the project
    status: 'active' | 'completed' | 'archived'; // Status of the project
    createdAt: Date;             // Timestamp when the project was created
    updatedAt: Date;             // Timestamp for the last update
  };
  
  export type Material = {
    id: string;                 // Unique identifier for the material
    name: string;               // Name of the material
    quantity: number;           // Quantity of the material
  };
  


  export interface ProjectCategory {
    id: string;
    name: string;
    icon: string;
  }