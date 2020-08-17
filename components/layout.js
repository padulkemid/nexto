import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = `Padulkemid`;

// meta
export const siteTitle = `padoel ceunah`;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* SEO */}
      <Head>
        <link rel="icon" href="/favicon.io" />
        <meta name="description" content="ceunah padoel" />
        <meta
          property="og:image"
          content="https://og-image.now.sh/**padoel**%20kemid.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>{`<-- Balik ceunah`}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
