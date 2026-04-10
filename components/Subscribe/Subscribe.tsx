'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Subscribe.module.scss';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className={styles.subscribe}>

      {/* Decorative background shapes */}
      {/* <div className={styles.blobLeft} />
      <div className={styles.blobRight} /> */}

      <div className={styles.container}>

        {/* Icon */}
        <div className={styles.iconWrapper}>
          <Image
            src="/images/send-icon.svg"
            alt="Google Play"
            width={35}
            height={35}
          />
        </div>

        {/* Heading */}
        <h2 className={styles.heading}>
          Subscribe to get information, latest news and other
          interesting offers about Jadoo
        </h2>

        {/* Input Row */}
        {submitted ? (
          <div className={styles.successMsg}>
            <svg viewBox="0 0 24 24" fill="none" className={styles.successIcon}>
              <circle cx="12" cy="12" r="12" fill="#F1A501" opacity="0.15" />
              <path
                d="M7 12l4 4 6-6"
                stroke="#F1A501"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Thank you for subscribing! We will keep you updated.</p>
          </div>
        ) : (
          <div className={styles.formRow}>
            <div className={styles.inputWrapper}>
              {/* Mail icon inside input */}
              <svg
                className={styles.inputIcon}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3 5l7 5 7-5"
                  stroke="#B0B0B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect
                  x="1"
                  y="3"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#B0B0B0"
                  strokeWidth="1.5"
                />
              </svg>

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className={styles.input}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                aria-label="Email address"
              />
            </div>

            <button
              className={styles.btn}
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
        )}

        {/* Error message */}
        {error && <p className={styles.errorMsg}>{error}</p>}

      </div>
    </section>
  );
}