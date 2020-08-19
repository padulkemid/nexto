import Head from 'next/head';

import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getPostsId, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const { title, date, contentAsli } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>{date}</div>
        <div dangerouslySetInnerHTML={{ __html: contentAsli }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsId();
  const struct = {
    paths,
    fallback: false,
  };

  return struct;
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await getPostData(id);
  const struct = {
    props: {
      postData,
    },
  };

  return struct;
}
