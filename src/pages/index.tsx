import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../../lib/posts';
import B from '../../lib/basepath';

export default function Home() {
  return (
    <Layout>
      <div>pullReq</div>
    </Layout>
  );
}
// export default function Home({ allPostsData }) {
//   // console.log(allPostsData);
//   return (
//     <Layout>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul>
//           {allPostsData.map(({ id, date, title }) => (
//             <li key={id}>
//               <Link href="/posts/[id]" as={B(`/posts/${id}`)}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
