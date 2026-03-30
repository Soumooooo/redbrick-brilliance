import projectOffice from "@/assets/project-office.jpg";
import projectPharmacy from "@/assets/project-pharmacy.jpg";
import projectDarkstore from "@/assets/project-darkstore.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectCafeteria from "@/assets/project-cafeteria.jpg";
import projectMall from "@/assets/project-mall.jpg";
import broaster1 from "@/assets/broaster-1.jpg";
import broaster2 from "@/assets/broaster-2.jpg";
import broaster3 from "@/assets/broaster-3.jpg";
import broaster4 from "@/assets/broaster-4.jpg";
import dava1 from "@/assets/dava-1.jpg";
import dava2 from "@/assets/dava-2.jpg";
import dava3 from "@/assets/dava-3.jpg";
import dava4 from "@/assets/dava-4.jpg";
import dava5 from "@/assets/dava-5.jpg";
import dava6 from "@/assets/dava-6.jpg";
import dava7 from "@/assets/dava-7.jpg";
import darkstore1 from "@/assets/darkstore-1.jpg";
import darkstore2 from "@/assets/darkstore-2.jpg";
import darkstore3 from "@/assets/darkstore-3.jpg";

export type ProjectCategory = "All" | "Commercial" | "Retail" | "Logistics" | "F&B";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  details: string;
  images: string[];
  videoUrl?: string;
  year: string;
  location: string;
  area: string;
}

export const categories: ProjectCategory[] = ["All", "Commercial", "Retail", "Logistics", "F&B"];

export const projects: Project[] = [
  {
    id: "apollo-office",
    name: "Apollo Office Space",
    category: "Commercial",
    description: "A modern corporate workspace designed for productivity and collaboration.",
    details: "This premium office space was designed with an open-plan philosophy, integrating natural light corridors, acoustic zoning, and biophilic design elements. The project features modular workstations, executive cabins with smart glass partitions, and a rooftop recreation zone.",
    images: [projectOffice, projectMall, projectCafeteria],
    year: "2024",
    location: "Kolkata, India",
    area: "12,000 sq ft",
  },
  {
    id: "dava-india",
    name: "Dava India Pharmacy",
    category: "Retail",
    description: "Clean, accessible pharmacy retail design with modern shelving systems.",
    details: "A fully branded pharmacy retail space featuring custom gondola shelving, LED-lit product displays, a dedicated consultation counter, and an ergonomic billing zone. The design prioritizes customer flow and regulatory compliance.",
    images: [dava2, dava1, dava3, dava4, dava5, dava6, dava7, projectPharmacy],
    year: "2024",
    location: "Delhi NCR, India",
    area: "2,500 sq ft",
  },
  {
    id: "blinkit-darkstore",
    name: " Dark Store",
    category: "Logistics",
    description: "High-efficiency dark store optimized for rapid order fulfillment.",
    details: "Engineered for speed—this dark store features optimized rack placement for pick-path efficiency, climate-controlled zones for perishables, a high-throughput dispatch bay, and industrial-grade epoxy flooring. Completed in a record 18-day turnaround.",
    images: [darkstore1, darkstore3, darkstore2, projectDarkstore, projectMall, projectPharmacy],
    year: "2023",
    location: "Mumbai, India",
    area: "4,000 sq ft",
  },
  {
    id: "zepto-darkstore",
    name: "Zepto Dark Store",
    category: "Logistics",
    description: "Scalable dark store infrastructure built for quick commerce operations.",
    details: "A template-driven dark store build featuring standardized racking systems, automated inventory zones, cold-chain infrastructure, and energy-efficient LED lighting throughout. Designed for rapid replication across multiple locations.",
    images: [projectMall, projectDarkstore, projectOffice],
    year: "2023",
    location: "Bangalore, India",
    area: "3,500 sq ft",
  },
  {
    id: "tata-1mg",
    name: "Tata 1MG Pharmacy",
    category: "Retail",
    description: "Premium branded pharmacy with a focus on customer experience.",
    details: "A flagship pharmacy outlet featuring Tata 1MG brand guidelines, digital display integration, a wellness consultation corner, and a streamlined prescription pickup counter. Premium finishes with durable commercial-grade materials.",
    images: [projectPharmacy, projectCafeteria, projectRestaurant],
    year: "2024",
    location: "Hyderabad, India",
    area: "3,000 sq ft",
  },
  {
    id: "broaster-chicken",
    name: "Broaster Chicken",
    category: "F&B",
    description: "Vibrant QSR restaurant interior with industrial-chic design elements.",
    details: "A quick-service restaurant featuring an open kitchen concept, industrial exposed-brick accent walls, custom booth seating, ambient pendant lighting, and branded environmental graphics. Optimized for high footfall and fast table turnover.",
    images: [broaster1, broaster2, broaster3, broaster4, projectRestaurant],
    year: "2023",
    location: "Kolkata, India",
    area: "1,800 sq ft",
  },
  {
    id: "cafeteria-project",
    name: "Cafeteria",
    category: "F&B",
    description: "A warm, inviting cafeteria space designed for relaxation and dining.",
    details: "This cafeteria features a warm material palette with wooden accents, terrazzo flooring, and lush indoor planters. The layout includes communal seating, cozy nooks, a live counter, and a dessert bar—all wrapped in soft ambient lighting.",
    images: [projectCafeteria, projectRestaurant, projectMall],
    year: "2024",
    location: "Pune, India",
    area: "2,200 sq ft",
  },
];
