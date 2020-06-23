import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import B from '../../lib/basepath';
import Date from '../components/date';
import { getSortedPostsData } from '../../lib/posts';

export default function Posts({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={B('/posts/[id]')} as={B('/posts/' + id)}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}