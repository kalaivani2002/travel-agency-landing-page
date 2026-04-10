'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Destinations.module.scss';

const destinations = [
  {
    id: 1,
    image: '/images/destinations/rome.jpg',
    name: 'Rome, Italy',
    price: '$5,42k',
    days: '10 Days Trip',
  },
  {
    id: 2,
    image: '/images/destinations/london.jpg',
    name: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    id: 3,
    image: '/images/destinations/europe.jpg',
    name: 'Full Europe',
    price: '$15k',
    days: '28 Days Trip',
  },
];

export default function Destinations() {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Sync visibleCount with current breakpoint
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxActive = Math.max(0, destinations.length - visibleCount);

  const handlePrev = () => setActive((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setActive((prev) => Math.min(prev + 1, maxActive));

  // Card width as % of track (accounting for gap via CSS)
  const slidePercent = 100 / visibleCount;

  return (
    <section className={styles.destinations}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <p className={styles.tag}>Top Selling</p>
          <h2 className={styles.heading}>Top Destinations</h2>
        </div>

        {/* Cards + Nav Arrows */}
        <div className={styles.sliderWrapper}>

          {/* Arrow — Prev */}
          <button
            className={styles.arrow}
            onClick={handlePrev}
            disabled={active === 0}
            aria-label="Previous destination"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards */}
          <div className={styles.cardsTrack}>
            <div
              className={styles.cardsInner}
              style={{ transform: `translateX(-${active * slidePercent}%)` }}
            >
              {destinations.map((dest) => (
                <div key={dest.id} className={styles.card}>
                  <div className={styles.cardInner}>

                    {/* Image */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 30vw"
                      />
                    </div>

                    {/* Card Footer */}
                    <div className={styles.cardBody}>
                      <div className={styles.cardRow}>
                        <span className={styles.destName}>{dest.name}</span>
                        <span className={styles.destPrice}>{dest.price}</span>
                      </div>
                      <div className={styles.cardRow}>
                        <span className={styles.destDays}>
                          {/* Plane icon */}
                          <svg
                            className={styles.planeIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 17l7-4 1 4 3-7 7-1-4 3 4 1-7 1-1 4-4-3-6 2z"
                              fill="#F1A501"
                            />
                          </svg>
                          {dest.days}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow — Next */}
          <button
            className={styles.arrow}
            onClick={handleNext}
            disabled={active >= maxActive}
            aria-label="Next destination"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        {maxActive > 0 && (
          <div className={styles.dots}>
            {Array.from({ length: maxActive + 1 }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Decorative dashes right side */}
      <div className={styles.decorDashes}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={styles.dash} />
        ))}
      </div>

    </section>
  );
}