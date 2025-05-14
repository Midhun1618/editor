// src/pages/Portfolio.js

import React, { useState } from 'react';
import './PortfolioPage.css';

const portfolioItems = [
  { id: 1, title: 'Logo Design', category: 'Graphic Design' },
  { id: 2, title: 'Product Promo Video', category: 'Video Editing' },
  { id: 3, title: 'Portrait Retouch', category: 'Photo Editing' },
  { id: 4, title: 'UI Mockup', category: 'Graphic Design' },
  { id: 5, title: 'Short Film Edit', category: 'Video Editing' },
];

const serviceItems = [
  { title: 'Graphic Design', description: 'Branding, posters, logos, and more.' },
  { title: 'Video Editing', description: 'Promo videos, short films, and reels.' },
  { title: 'Photo Editing', description: 'Retouching, manipulation, and correction.' },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <div className="container">
          <h1>My Portfolio</h1>
          <p>Explore a selection of my creative projects across various design and editing fields.</p>
        </div>
      </header>

      <section className="container">
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-thumb">
                <img src={`https://via.placeholder.com/300x200?text=${item.title}`} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-offered">
        <div className="container">
          <h2>Services I Offer</h2>
          <div className="services-list">
            {serviceItems.map((service, index) => (
              <div className="service-item" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
