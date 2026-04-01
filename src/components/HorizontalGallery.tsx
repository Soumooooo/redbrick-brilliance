import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";

const images = [
  { src: gallery6, label: "​" },
  { src: gallery1, label: "​" },
  { src: gallery2, label: "​" },
  { src: gallery3, label: "​" },
  { src: gallery4, label: "​" },
  { src: gallery5, label: "​" },
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
            className="relative rounded-xl overflow-hidden aspect-[3/2] group"
          >
            <img
              src={img.src}
              alt="Gallery"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalGallery;
