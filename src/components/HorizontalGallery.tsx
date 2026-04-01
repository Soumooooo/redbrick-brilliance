import projectOffice from "@/assets/project-office.jpg";
import projectPharmacy from "@/assets/project-pharmacy.jpg";
import projectDarkstore from "@/assets/project-darkstore.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectCafeteria from "@/assets/project-cafeteria.jpg";
import projectMall from "@/assets/project-mall.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: heroBg, label: "Executive Suite" },
  { src: projectOffice, label: "Open Workspace" },
  { src: projectMall, label: "Retail Atrium" },
  { src: projectPharmacy, label: "Pharmacy Interior" },
  { src: projectRestaurant, label: "Restaurant Ambiance" },
  { src: projectDarkstore, label: "Logistics Hub" },
  { src: projectCafeteria, label: "Cafeteria Design" },
];

const HorizontalGallery = () => {
  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-display text-3xl md:text-5xl font-bold">Gallery</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden aspect-[4/3] group"
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
              <span className="font-display text-sm font-medium text-primary-foreground">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
