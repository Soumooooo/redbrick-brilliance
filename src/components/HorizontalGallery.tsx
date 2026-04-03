import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";

const images = [
  { src: gallery6, label: "Luxury Office Lounge" },
  { src: gallery1, label: "Modern Café Interiors" },
  { src: gallery2, label: "Retail Atrium" },
  { src: gallery3, label: "Pharmacy Interior" },
  { src: gallery4, label: "Restaurant Ambiance" },
  { src: gallery5, label: "Pharmacy Interior" },
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
