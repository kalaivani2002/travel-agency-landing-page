'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    quote:
      'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.',
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    avatar: '/images/testimonials/mike.jpg',
  },
  {
    id: 2,
    quote:
      'Enjoyed the seamless booking experience. Every detail was taken care of and the trip exceeded all our expectations. Highly recommend!',
    name: 'Sara Ahmed',
    location: 'Dubai, UAE',
    avatar: '/images/testimonials/mike.jpg',
  },
  {
    id: 3,
    quote:
      'An absolutely fantastic service. From choosing the destination to boarding the flight, everything was smooth and well-organised.',
    name: 'James Whitfield',
    location: 'London, UK',
    avatar: '/images/testimonials/mike.jpg',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[active];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>

        {/* Left — Heading & Pagination Dots */}
        <div className={styles.left}>
          <p className={styles.tag}>TESTIMONIALS</p>
          <h2 className={styles.heading}>
            What People Say<br />About Us.
          </h2>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right — Stacked Testimonial Cards */}
        <div className={styles.right}>
          <div className={styles.stackWrapper}>

            {/* Background Card */}
            <div className={styles.backCard}>
              <p className={styles.quoteText}>
                {testimonials[(active + 1) % testimonials.length].quote}
              </p>
              <div className={styles.meta}>
                <p className={styles.name}>{testimonials[(active + 1) % testimonials.length].name}</p>
                <p className={styles.location}>{testimonials[(active + 1) % testimonials.length].location}</p>
              </div>
            </div>

            {/* Foreground Card */}
            <div className={styles.frontCard} key={active}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={68}
                  height={68}
                  className={styles.avatar}
                />
              </div>

              <p className={styles.quoteText}>
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className={styles.meta}>
                <p className={styles.name}>{current.name}</p>
                <p className={styles.location}>{current.location}</p>
              </div>
            </div>

            {/* Vertical Controls (Prev/Next) */}
            <div className={styles.controls}>
              <button
                className={styles.arrowBtn}
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className={styles.arrowBtn}
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Background decoration */}
      <div className={styles.bgDecor} />
    </section>
  );
}