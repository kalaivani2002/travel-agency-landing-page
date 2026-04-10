import Image from 'next/image';
import styles from './BookingSteps.module.scss';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Choose Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#F0BB62',
  },
  {
    id: 2,
    number: '02',
    title: 'Make Payment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#F15A2B',
  },
  {
    id: 3,
    number: '03',
    title: 'Reach Airport on Selected Date',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#006380',
  },
];

export default function BookingSteps() {
  return (
    <section className={styles.booking}>
      <div className={styles.container}>

        {/* Left — Steps */}
        <div className={styles.left}>
          <p className={styles.tag}>Easy and Fast</p>
          <h2 className={styles.heading}>
            Book Your Next Trip<br />
            In 3 Easy Steps
          </h2>

          <div className={styles.steps}>
            {steps.map((step) => (
              <div key={step.id} className={styles.step}>

                {/* Number Badge */}
                <div
                  className={styles.badge}
                  style={{ backgroundColor: step.bgColor }}
                >
                  {step.number}
                </div>

                {/* Step Text */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right — Trip Card Visual */}
        <div className={styles.right}>

          {/* Background decorative box */}
          <div className={styles.bgBox} />

          {/* Main trip image */}
          <div className={styles.imageCard}>
            <Image
              src="/images/booking/greece.jpg"
              alt="Trip to Greece"
              fill
              className={styles.tripImage}
              sizes="(max-width: 768px) 80vw, 40vw"
            />

            {/* Overlay info bar */}
            <div className={styles.imageOverlay}>
              <div className={styles.overlayLeft}>
                <p className={styles.overlayTitle}>Trip To Greece</p>
                <p className={styles.overlayDate}>14-29 June | by Robbin 5</p>
              </div>
              <div className={styles.overlayRight}>
                <div className={styles.avatarGroup}>
                  {[1, 2, 3].map((a) => (
                    <div key={a} className={styles.avatar} />
                  ))}
                </div>
                <p className={styles.goingCount}>24 people going</p>
              </div>
            </div>
          </div>

          {/* Floating mini card — top right */}
          <div className={styles.floatCard}>
            <div className={styles.floatIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#DF6951" />
                <path
                  d="M8 12l3 3 5-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className={styles.floatTitle}>Trip to rome</p>
              <p className={styles.floatSub}>40% completed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}