import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.content}>
          <p className={styles.tag}>Best Destinations around the world</p>

          <h1 className={styles.heading}>
            Travel, <span className='enjoy-class'>enjoy</span><br />
            and live a new<br />
            and full life
          </h1>

          <p className={styles.description}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsman it engrossed listening. Pork gate
            sell they west hard for the.
          </p>

          <div className={styles.actions}>
            <Link href="#booking" className={styles.btnPrimary}>
              Find out more
            </Link>

            <button className={styles.btnPlay}>
              <span className={styles.playIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DF6951" />
                  <polygon points="10,8 16,12 10,16" fill="white" />
                </svg>
              </span>
              Play Demo
            </button>
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className={styles.imageWrapper}>
          {/* Decorative background blob */}
          {/* <div className={styles.blob} /> */}

          {/* Decorative plane icons */}
          <div className={`${styles.plane} ${styles.planeTop}`}>
            <Image
            src="/images/plane-1.svg"
            alt="Plane"
            width={120}
            height={80}
          />
          </div>
          <div className={`${styles.plane} ${styles.planeBottom}`}>
           <Image
            src="/images/plane-2.svg"
            alt="Plane"
            width={120}
            height={80}
          />
          </div>

          <Image
            src="/images/Hero-traveller.svg"
            alt="Happy traveler with backpack"
            width={500}
            height={600}
            priority
          />

          {/* Floating trip card */}
          {/* <div className={styles.tripCard}>
            <div className={styles.tripCardInner}>
              <Image
                src="/images/trip-thumbnail.png"
                alt="Trip to Greece"
                width={56}
                height={56}
                className={styles.tripThumb}
              />
              <div className={styles.tripInfo}>
                <p className={styles.tripTitle}>Trip To Greece</p>
                <p className={styles.tripDate}>14-29 June | by Robbin 5</p>
              </div>
            </div>
            <div className={styles.tripProgress}>
              <div className={styles.progressBar}>
                <span className={styles.progressFill} style={{ width: '40%' }} />
              </div>
              <p className={styles.progressLabel}>40% completed</p>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}