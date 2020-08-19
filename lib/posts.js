import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const dir = path.join(process.cwd(), 'posts');

export function getPosts() {
  const files = fs.readdirSync(dir);
  const allPosts = files.map((el) => {
    // ilangin md
    const id = el.replace('.md', '');

    // dapetin path
    const filePath = path.join(dir, el);
    const content = fs.readFileSync(filePath, 'utf8');

    // parse pake gray-matter buat dapetin metadata
    const coblos = matter(content);

    const struct = {
      id,
      ...coblos.data,
    };

    return struct;
  });

  const sortedPosts = allPosts.sort((a, b) => {
    // yang baru yg duluan
    if (a.date < b.date) return 1;

    // kalo kaga ya kurangin
    return -1;
  });

  return sortedPosts;
}

export function getPostsId() {
  const files = fs.readdirSync(dir);
  const allFiles = files.map((el) => ({
    params: {
      id: el.replace('.md', ''),
    },
  }));

  return allFiles;
}

export async function getPostData(id) {
  const fullPath = path.join(dir, `${id}.md`);
  const content = fs.readFileSync(fullPath, 'utf8');

  // matter parse ceunah
  const result = matter(content);

  // remarked dudee
  const mdContent = await remark().use(html).process(result.content);
  const contentAsli = mdContent.toString();

  // combine
  const struct = {
    id,
    contentAsli,
    ...result.data,
  };

  return struct;
}
