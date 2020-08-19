import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import { getPosts } from '../lib/posts';

import utilStyles from '../styles/utils.module.css';

export default function Home({ allPosts }) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog na</h2>
        <ul className={utilStyles.list}>
          {allPosts.map((el) => (
            <li className={utilStyles.listItem} key={el.id}>
              <Link href="/posts/[id]" as={`/posts/${el.id}`}>
                <a>{el.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{el.date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getPosts();
  const struct = {
    props: {
      allPosts,
    },
  };

  return struct;
}
