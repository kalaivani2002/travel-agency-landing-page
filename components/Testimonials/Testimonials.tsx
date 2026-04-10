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
    avatar: '/images/testimonials/sara.jpg',
  },
  {
    id: 3,
    quote:
      'An absolutely fantastic service. From choosing the destination to boarding the flight, everything was smooth and well-organised.',
    name: 'James Whitfield',
    location: 'London, UK',
    avatar: '/images/testimonials/james.jpg',
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

        {/* Left — Heading */}
        <div className={styles.left}>
          <p className={styles.tag}>TESTIMONIALS</p>
          <h2 className={styles.heading}>
            What People Say<br />About Us.
          </h2>

          {/* Dots */}
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

        {/* Right — Testimonial Card */}
        <div className={styles.right}>

          {/* Quote Card */}
          <div className={styles.card}>

            {/* Avatar */}
            <div className={styles.avatarWrapper}>
              <Image
                src={current.avatar}
                alt={current.name}
                width={72}
                height={72}
                className={styles.avatar}
              />
              {/* Decorative ring */}
              <span className={styles.ring} />
            </div>

            {/* Quote mark */}
            <div className={styles.quoteMark}>&ldquo;</div>

            {/* Quote text */}
            <p className={styles.quoteText} key={active}>
              {current.quote}
            </p>

            {/* Reviewer list */}
            <div className={styles.reviewerList}>
              {testimonials.map((t, i) => (
                <div
                  key={t.id}
                  className={`${styles.reviewer} ${i === active ? styles.reviewerActive : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className={styles.reviewerInfo}>
                    <p className={styles.reviewerName}>{t.name}</p>
                    <p className={styles.reviewerLocation}>{t.location}</p>
                  </div>
                  {/* Expand / Collapse icon */}
                  <button
                    className={styles.toggleBtn}
                    aria-label={i === active ? 'Collapse' : 'Expand'}
                  >
                    {i === active ? (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>

          </div>

          {/* Navigation Arrows */}
          <div className={styles.arrows}>
            <button
              className={styles.arrow}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <button
              className={styles.arrow}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className={styles.decorCircle} />
      <div className={styles.decorDot} />

    </section>
  );
}