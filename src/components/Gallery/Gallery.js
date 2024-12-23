import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [slideshowInterval, setSlideshowInterval] = useState(null);

  // Define filters array
  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  // Simulated gallery items fetch
  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newItems = Array.from({ length: 6 }, (_, i) => ({
      id: items.length + i + 1,
      image: `/gallery/image${(items.length + i + 1) % 10 + 1}.jpg`,
      category: ['web', 'mobile', 'branding'][Math.floor(Math.random() * 3)],
      title: `Project ${items.length + i + 1}`,
      description: 'Project description goes here'
    }));

    setItems(prev => [...prev, ...newItems]);
    setHasNextPage(page < 3); // Limit to 3 pages for demo
    setIsLoading(false);
    setPage(prev => prev + 1);
  }, [items.length, page]);

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: fetchItems,
    disabled: !hasNextPage,
    rootMargin: '0px 0px 200px 0px',
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const toggleSlideshow = () => {
    if (isSlideshow) {
      clearInterval(slideshowInterval);
      setSlideshowInterval(null);
      setIsSlideshow(false);
    } else {
      setIsSlideshow(true);
      const interval = setInterval(() => {
        setSelectedImage(current => {
          const currentIndex = filteredItems.findIndex(item => item.id === current?.id);
          const nextIndex = (currentIndex + 1) % filteredItems.length;
          return filteredItems[nextIndex];
        });
      }, 3000);
      setSlideshowInterval(interval);
    }
  };

  useEffect(() => {
    return () => {
      if (slideshowInterval) clearInterval(slideshowInterval);
    };
  }, [slideshowInterval]);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-subtitle">Gallery</span>
          <h2 className="section-title">My Work Gallery</h2>
          <p className="section-description">
            Explore my latest works and creative projects
          </p>
        </div>

        <div className="gallery-filters">
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <motion.div className="filter-underline" layoutId="underline" />
              )}
            </motion.button>
          ))}
        </div>

        <Masonry
          breakpointCols={{
            default: 3,
            1100: 2,
            700: 1
          }}
          className="gallery-grid"
          columnClassName="gallery-grid-column"
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className="gallery-item"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-item-image">
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  effect="blur"
                  width="100%"
                  height="100%"
                />
                <div className="gallery-item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {hasNextPage && (
          <div ref={sentryRef} className="loading-more">
            {isLoading && <div className="loader">Loading...</div>}
          </div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="lightbox-controls">
                <button 
                  className="lightbox-button"
                  onClick={() => setSelectedImage(
                    filteredItems[
                      (filteredItems.findIndex(item => item.id === selectedImage.id) - 1 + filteredItems.length) 
                      % filteredItems.length
                    ]
                  )}
                >
                  ←
                </button>
                <button 
                  className="lightbox-button"
                  onClick={toggleSlideshow}
                >
                  {isSlideshow ? '⏸' : '▶'}
                </button>
                <button 
                  className="lightbox-button"
                  onClick={() => setSelectedImage(
                    filteredItems[
                      (filteredItems.findIndex(item => item.id === selectedImage.id) + 1) 
                      % filteredItems.length
                    ]
                  )}
                >
                  →
                </button>
                <button 
                  className="lightbox-close"
                  onClick={() => {
                    setSelectedImage(null);
                    setIsSlideshow(false);
                    if (slideshowInterval) clearInterval(slideshowInterval);
                  }}
                >
                  ×
                </button>
              </div>
              
              <TransformWrapper>
                <TransformComponent>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="lightbox-image"
                  />
                </TransformComponent>
              </TransformWrapper>

              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery; 