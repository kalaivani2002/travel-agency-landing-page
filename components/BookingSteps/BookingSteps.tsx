import Image from 'next/image';
import styles from './BookingSteps.module.scss';

const steps = [
  {
    id: 1,
    title: 'Choose Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#F0BB62',
    icon: '/images/booking/choose-destination.svg',
  },
  {
    id: 2,
    title: 'Make Payment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#F15A2B',
    icon: '/images/booking/make-payment.svg',
  },
  {
    id: 3,
    title: 'Reach Airport on Selected Date',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    bgColor: '#006380',
    icon: '/images/booking/reacth-airport.svg',
  },
];


export default function BookingSteps() {
  return (
    <section id="bookings" className={styles.booking}>
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

                {/* Icon Badge */}
                <div
                  className={styles.badge}
                  style={{ backgroundColor: step.bgColor }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={28}
                    height={28}
                  />
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

          {/* Decorative background blob */}
          <div className={styles.bgBox} />

          {/* White outer card */}
          <div className={styles.tripCard}>

            {/* Trip image */}
            <div className={styles.imageWrap}>
              <Image
                src="/images/booking/greece.png"
                alt="Trip to Greece"
                fill
                className={styles.tripImage}
              />
            </div>

            {/* Info row below image */}
            <div className={styles.cardBody}>
              <div className={styles.cardBodyTop}>
                <div>
                  <p className={styles.tripTitle}>Trip To Greece</p>
                  <p className={styles.tripMeta}>14-29 June &nbsp;|&nbsp; by Robbin jo</p>
                </div>
              </div>

              <div className={styles.cardBodyIcons}>
                {/* Leaf */}
                <div className={styles.iconChip}>
                  <Image src="/images/booking/leaf.svg" alt="Leaf" width={16} height={16} />
                </div>
                {/* Map */}
                <div className={styles.iconChip}>
                  <Image src="/images/booking/map.svg" alt="Map" width={16} height={16} />
                </div>
                {/* Send */}
                <div className={styles.iconChip}>
                  <Image src="/images/booking/send.svg" alt="Send" width={16} height={16} />
                </div>
              </div>

              <div className={styles.cardBodyBottom}>
                <div className={styles.goingRow}>
                  <Image src="/images/booking/building.svg" alt="Building" width={16} height={16} className={styles.buildingIcon} />
                  <p className={styles.goingCount}>24 people going</p>
                </div>

                {/* Heart */}
                <div className={styles.heartBtn}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                      stroke="#4152CA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating mini card — top right */}
          <div className={styles.floatCard}>
            <div className={styles.floatIcon}>
              <Image
                src="/images/booking/rome-thumb.jpg"
                alt="Trip to Rome"
                fill
                className={styles.floatImg}
                sizes="40px"
              />
            </div>
            <div className={styles.floatContent}>
              <p className={styles.floatOngoing}>Ongoing</p>
              <p className={styles.floatTitle}>Trip to rome</p>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '40%' }} />
              </div>
              <p className={styles.floatSub}><span>40%</span> completed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}