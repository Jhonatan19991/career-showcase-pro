
import { ImageModal } from "./ImageModal";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <ImageModal 
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
            >
              <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer group">
                <img 
                  src={image} 
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 group-hover:brightness-110"
                />
              </div>
            </ImageModal>
          ))}
        </div>
      </div>
    </section>
  );
};
