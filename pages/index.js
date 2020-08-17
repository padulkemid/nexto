import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>yo wasap</p>
        <p>
          tai ajg, main main sini la{' '}
          <a
            href="https://twitter.com/padulkemid"
            target="_blank"
            rel="noopener noreferrer">
            twt
          </a>
        </p>
      </section>
    </Layout>
  );
}
