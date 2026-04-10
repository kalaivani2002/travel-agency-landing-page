import styles from './Services.module.scss';

const services = [
  {
    id: 1,
    icon: '/images/icons/weather.png',
    title: 'Calculated Weather',
    description:
      'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    id: 2,
    icon: '/images/icons/flights.png',
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    featured: true, // has the red blob accent
  },
  {
    id: 3,
    icon: '/images/icons/events.png',
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
  },
  {
    id: 4,
    icon: '/images/icons/customize.png',
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers',
  },
];

export default function Services() {
  return (
    <section id="flights" className={styles.services}>
      {/* Decorative Plus Pattern */}
      <div className={styles.plusGroup}>
        <img src="/images/plus-group-img.webp" alt="decorative pattern" />
      </div>

      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <p className={styles.tag}>CATEGORY</p>
          <h2 className={styles.heading}>We Offer Best Services</h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.cardWrapper}>
              <div
                className={`${styles.card} ${service.featured ? styles.featured : ''}`}
              >
                {/* Icon Box */}
                <div
                  className={styles.iconBox}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className={styles.icon}
                    width={85}
                    height={85}
                  />
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>

              {/* Decorative blob on featured card (sibling to card) */}
              {service.featured && <span className={styles.blob} />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}