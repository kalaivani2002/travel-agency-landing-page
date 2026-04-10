import styles from './Partners.module.scss';

const partners = [
  {
    id: 1,
    name: 'Axon Airlines',
    logo: '/images/partners/axon.png',
  },
  {
    id: 2,
    name: 'Jetstar',
    logo: '/images/partners/jetstar.png',
  },
  {
    id: 3,
    name: 'Expedia',
    logo: '/images/partners/expedia.png',
  },
  {
    id: 4,
    name: 'Qantas',
    logo: '/images/partners/qantas.png',
  },
  {
    id: 5,
    name: 'Alitalia',
    logo: '/images/partners/alitalia.png',
  },
];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <div className={styles.track}>
        <div className={styles.inner}>

          {/* First set */}
          {partners.map((partner) => (
            <div key={`a-${partner.id}`} className={styles.logoItem}>
              <img
                src={partner.logo}
                alt={partner.name}
                className={styles.logo}
              />
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {partners.map((partner) => (
            <div key={`b-${partner.id}`} className={styles.logoItem} aria-hidden="true">
              <img
                src={partner.logo}
                alt={partner.name}
                className={styles.logo}
              />
            </div>
          ))}

          {/* Third copy — ensures no gap on wide screens */}
          {partners.map((partner) => (
            <div key={`c-${partner.id}`} className={styles.logoItem} aria-hidden="true">
              <img
                src={partner.logo}
                alt={partner.name}
                className={styles.logo}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}