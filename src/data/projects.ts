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
import darkstore4 from "@/assets/darkstore-4.jpeg";
import darkstore5 from "@/assets/darkstore-5.jpeg";
import darkstore6 from "@/assets/darkstore-6.jpeg";
import darkstore7 from "@/assets/darkstore-7.jpeg";
import darkstore8 from "@/assets/darkstore-8.jpeg";
import darkstore9 from "@/assets/darkstore-9.jpeg";
import darkstore10 from "@/assets/darkstore-10.jpeg";
import cafeteria1 from "@/assets/cafeteria-1.jpg";
import cafeteria2 from "@/assets/cafeteria-2.jpg";
import cafeteria3 from "@/assets/cafeteria-3.jpg";
import cafeteria4 from "@/assets/cafeteria-4.jpg";
import cafeteria5 from "@/assets/cafeteria-5.jpg";
import cafeteriaNew1 from "@/assets/cafeteria-new-1.jpeg";
import cafeteriaNew2 from "@/assets/cafeteria-new-2.jpeg";
import cafeteriaNew3 from "@/assets/cafeteria-new-3.jpeg";
import cafeteriaNew4 from "@/assets/cafeteria-new-4.jpeg";
import tata1mg1 from "@/assets/tata1mg-1.jpg";
import tata1mg2 from "@/assets/tata1mg-2.jpg";
import tata1mg3 from "@/assets/tata1mg-3.jpg";
import tata1mg4 from "@/assets/tata1mg-4.jpg";
import tata1mg5 from "@/assets/tata1mg-5.jpg";
import tata1mg6 from "@/assets/tata1mg-6.jpg";
import tata1mg7 from "@/assets/tata1mg-7.jpg";
import tata1mg8 from "@/assets/tata1mg-8.jpg";
import zeptoCafe1 from "@/assets/zepto-cafe-1.jpg";
import zeptoCafe2 from "@/assets/zepto-cafe-2.jpg";
import zeptoCafe3 from "@/assets/zepto-cafe-3.jpg";
import zeptoCafe4 from "@/assets/zepto-cafe-4.jpg";
import zeptoCafe5 from "@/assets/zepto-cafe-5.jpg";
import zeptoCafe6 from "@/assets/zepto-cafe-6.jpg";
import zeptoCafe7 from "@/assets/zepto-cafe-7.jpg";
import zeptoCafe8 from "@/assets/zepto-cafe-8.jpg";
import zeptoCafe9 from "@/assets/zepto-cafe-9.jpg";
import zeptoCafe10 from "@/assets/zepto-cafe-10.jpg";
import apnamart1 from "@/assets/apnamart-1.jpeg";
import apnamart2 from "@/assets/apnamart-2.jpeg";
import apnamart3 from "@/assets/apnamart-3.jpeg";
import apnamart4 from "@/assets/apnamart-4.jpeg";
import apnamart5 from "@/assets/apnamart-5.jpeg";

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
    id: "dava-india",
    name: "Dava India Pharmacy",
    category: "Retail",
    description: "Clean, accessible pharmacy retail design with modern shelving systems.",
    details: "A fully branded pharmacy retail space featuring custom wooden modular gondola shelving, slotted angle rack display, CCTV setup, false ceiling work with spot light fittings, toughened glass partition, anti skit tile flooring, LED-lit product displays, a dedicated consultation counter, and an ergonomic billing zone. The design prioritizes customer flow and regulatory compliance.",
    images: [dava2, dava1, dava3, dava4, dava5, dava6, dava7],
    year: "2024",
    location: "Delhi NCR, India",
    area: "2,500 sq ft",
  },
  {
    id: "blinkit-darkstore",
    name: " Dark Store",
    category: "Logistics",
    description: "High-efficiency dark store optimized for rapid order fulfillment.",
    details: "Engineered for speed—this dark store features optimized racking,  organised cable tray layout for proper lighting system, zero level kotha flooring, high-throughput dispatch bay, industrial-grade epoxy flooring, MS fabrication work for Cable Tray Hanging and ODU Hanging Completed in a record 18-day turnaround.",
    images: [darkstore1, darkstore3, darkstore2, darkstore4, darkstore5, darkstore6, darkstore7, darkstore8, darkstore9, darkstore10],
    year: "2023",
    location: "Mumbai, India",
    area: "4,000 sq ft",
  },
  {
    id: "zepto-darkstore",
    name: "Bar",
    category: "Logistics",
    description: "Scalable dark store infrastructure built for quick commerce operations.",
    details: "This cafeteria features a warm material palette with wooden accents, terrazzo flooring, Burmese wooden wall finishing,  LED-lit product system, moduler bar counter and lush indoor planters. The layout includes communal seating, cozy nooks, a live counter, and a dessert bar—all wrapped in soft ambient lighting.",
    images: [zeptoCafe1, zeptoCafe2, zeptoCafe3, zeptoCafe4, zeptoCafe5, zeptoCafe6, zeptoCafe7, zeptoCafe8, zeptoCafe9, zeptoCafe10],
    year: "2024",
    location: "Bangalore, India",
    area: "3,500 sq ft",
  },
  {
    id: "tata-1mg",
    name: "Retail Pharmacy",
    category: "Retail",
    description: "Premium branded pharmacy with a focus on customer experience.",
    details: "A fully branded pharmacy retail space featuring custom wooden modular gondola shelving, slotted angle rack display, CCTV setup, false ceiling work with spot light fittings, toughened glass partition, anti skit tile flooring, LED-lit product displays, a dedicated consultation counter, and an ergonomic billing zone. The design prioritizes customer flow and regulatory compliance.",
    images: [tata1mg1, tata1mg2, tata1mg3, tata1mg4, tata1mg5, tata1mg6, tata1mg7, tata1mg8],
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
    images: [broaster1, broaster2, broaster3, broaster4],
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
    images: [cafeteriaNew1, cafeteriaNew2, cafeteriaNew3, cafeteriaNew4, cafeteria1, cafeteria5, cafeteria2, cafeteria3, cafeteria4],
    year: "2024",
    location: "Pune, India",
    area: "2,200 sq ft",
  },
  {
    id: "apnamart-retail",
    name: "F&B Retail Outlet",
    category: "Retail",
    description: "Modern retail outlet with organized shelving and branded storefront.",
    details: "A fully equipped retail outlet featuring modular gondola shelving, organized storage bins, LED tube lighting, CCTV surveillance setup, ceiling fan and ventilation infrastructure, and a clean branded exterior with illuminated signage. The space is designed for efficient product display and customer accessibility.",
    images: [apnamart1, apnamart2, apnamart3, apnamart4, apnamart5],
    year: "2024",
    location: "Delhi NCR, India",
    area: "2,000 sq ft",
  },
];
