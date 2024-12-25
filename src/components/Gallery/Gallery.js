import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './Gallery.css';

// Import images
import image1 from '../../assets/gallery/image1.JPG';
import image2 from '../../assets/gallery/image2.JPG';
import image3 from '../../assets/gallery/image3.JPG';
import image4 from '../../assets/gallery/image4.jpg';
import image5 from '../../assets/gallery/image5.jpg';
import image6 from '../../assets/gallery/image6.jpg';
import image7 from '../../assets/gallery/image7.JPG';
import image8 from '../../assets/gallery/image8.jpg';
import image9 from '../../assets/gallery/image9.jpg';

function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('IEEE Events');

  const galleryImages = [
    {
      id: 1,
      src: image1,
      alt: "IEEE TEMS Inauguration",
      category: "IEEE Events"
    },
    {
      id: 2,
      src: image2,
      alt: "IEEE TEMS Inauguration",
      category: "IEEE Events"
    },
    {
      id: 3,
      src: image3,
      alt: "IEEE TEMS Inauguration",
      category: "IEEE Events"
    },
    {
      id: 4,
      src: image4,
      alt: "UiPath Hack-a-bot",
      category: "UiPhoria"
    },
    {
      id: 5,
      src: image5,
      alt: "Guest Lecture",
      category: "UiPhoria"
    },
    {
      id: 6,
      src: image6,
      alt: "UiPath Hack-a-bot",
      category: "UiPhoria"
    },
    {
      id: 7,
      src: image7,
      alt: "UiPhoria Inauguration 2.0",
      category: "UiPhoria"
    },
    {
      id: 8,
      src: image8,
      alt: "Personal Moment 1",
      category: "Personal"
    },
    {
      id: 9,
      src: image9,
      alt: "Personal Moment 2",
      category: "Personal"
    }
  ];

  const categories = [
    { id: 'IEEE Events', label: 'IEEE Events' },
    { id: 'UiPhoria', label: 'UiPhoria' },
    { id: 'Personal', label: 'Personal' }
  ];

  const filteredImages = galleryImages.filter(img => img.category === activeCategory);

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section className="gallery" id="gallery">
      <motion.div 
        className="gallery-container"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gallery-header">
          <span className="section-subtitle">Gallery</span>
          <h2 className="section-title">My Gallery</h2>
          <p className="section-description">
            A collection of moments from my journey in tech and leadership
          </p>
        </div>

        <div className="gallery-categories">
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode='wait'>
          <Masonry
            breakpointCols={breakpointColumns}
            className="gallery-grid"
            columnClassName="gallery-grid-column"
          >
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                layout
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <p>{image.alt}</p>
                  <span>{image.category}</span>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </AnimatePresence>

        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <TransformWrapper>
              <TransformComponent>
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </TransformComponent>
            </TransformWrapper>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              ×
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Gallery; 