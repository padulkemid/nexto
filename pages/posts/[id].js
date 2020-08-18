import Layout from '../../components/layout';
import { getPostsId, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const { title, id, date } = postData;
  return (
    <Layout>
      {title} <br />
      {id} <br />
      {date}
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
  const postData = getPostData(id);
  const struct = {
    props: {
      postData,
    },
  };

  return struct;
}
