import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Mobile', href: '#' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Help/FAQ', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Affiliates', href: '#' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Airlinefees', href: '#' },
      { label: 'Airline', href: '#' },
      { label: 'Low fare tips', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    id: 'facebook',
    href: '#',
    label: 'Facebook',
    icon: '/images/Facebook-Icon.svg'
  },
  {
    id: 'instagram',
    href: '#',
    label: 'Instagram',
    icon: '/images/instagram-1.svg'
  },
  {
    id: 'twitter',
    href: '#',
    label: 'Twitter / X',
    icon: '/images/twitter.svg'
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Col 1 — Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/jadoo.svg"
              alt="Plane"
              width={120}
              height={80}
            />          </Link>
          <p className={styles.brandDesc}>
            Book your trip in minute, get full control for much longer.
          </p>

        </div>

        {/* Col 2, 3, 4 — Link Groups */}
        {footerLinks.map((group) => (
          <div key={group.heading} className={styles.linkGroup}>
            <h4 className={styles.groupHeading}>{group.heading}</h4>
            <ul className={styles.linkList}>
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}

        {/* Social Media */}
        <div className={styles.badgeandicons}>
          <div className={styles.socials}>
            {socialLinks.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                aria-label={s.label}
                className={styles.socialIcon}
                id={s.id}
              >
                <Image
                  src={s.icon}
                  width={18}
                  height={18}
                  alt={s.label}
                />
              </Link>
            ))}
          </div>

          {/* Col 5 — Discover App */}
          <div className={styles.appCol}>
            <h4 className={styles.groupHeading2}>Discover our app</h4>
            <div className={styles.appBadges}>
              <Link href="#" className={styles.appBadge} aria-label="Get it on Google Play">
                <Image
                  src="/images/Google Play.svg"
                  alt="Google Play"
                  width={107}
                  height={35}
                />
              </Link>
              <Link href="#" className={styles.appBadge} aria-label="Download on the App Store">
                <Image
                  src="/images/apple-store.svg"
                  alt="App Store"
                  width={107}
                  height={35}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          All rights reserved&nbsp;&copy;&nbsp;jadoo.co
        </p>
      </div>

    </footer>
  );
}