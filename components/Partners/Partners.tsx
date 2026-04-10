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
      <div className={styles.inner}>
        {partners.map((partner) => (
          <div key={partner.id} className={styles.logoItem}>
            <img
              src={partner.logo}
              alt={partner.name}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}