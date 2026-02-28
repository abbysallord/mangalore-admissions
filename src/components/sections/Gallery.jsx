// src/components/sections/Gallery.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import galleryImages from '../../data/galleryImages';
import SectionHeader from '../ui/SectionHeader';
import Lightbox from '../ui/Lightbox';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState({});

  return (
    <section id="gallery" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          title="Campus Life & Success Stories"
          light
          subtitle="A glimpse into the vibrant academic life across Mangalore's finest institutions."
        />

        {/* Masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => (
            <motion.button
              key={image.id}
              className="group relative mb-4 block w-full cursor-pointer overflow-hidden rounded-2xl break-inside-avoid focus:outline-none focus:ring-2 focus:ring-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Blur-up placeholder */}
              <div
                className={`transition-all duration-700 ${
                  loaded[image.id] ? 'blur-0' : 'blur-lg scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onLoad={() =>
                    setLoaded((prev) => ({ ...prev, [image.id]: true }))
                  }
                />
              </div>

              {/* Frosted glass caption overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full p-4 backdrop-blur-sm">
                  <p className="font-sans text-sm text-cream">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
