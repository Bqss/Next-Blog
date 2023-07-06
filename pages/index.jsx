import Head from 'next/head';
import utilStyles from '/styles/util.module.css'
import Layout from '/components/layout';
import Link from 'next/link';
import { getSortedPostsData } from '../libs/posts';


export async function getStaticProps(){
    const allPostsData =  getSortedPostsData();
    return {
        props : {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    console.log(allPostsData)
    return (
        <Layout home>
            <Head>
                <title>Home</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi, I'm Bass. I'm a software engineer and a teacher. You can contact me on <a href="https://twitter.com/basofi">Twitter</a></p>
                <p>i'm is a at 2th year college student of Kanjuruhan university Malang, now i'm currently searching for intern mitra </p>
            </section>
            <section className={utilStyles.headingMd}>
                <h3 className={utilStyles.headingLg}>Blog</h3>
                <ul className={utilStyles.list}>
                    {allPostsData?.map((postData, i) =>(
                    <li className={utilStyles.listItem}>
                        <article className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                            <Link className={`${utilStyles.link} ${utilStyles.headingMd}`} href={`posts/${postData.id}`}>{postData.title}</Link>
                            <time className={utilStyles.date}>{postData.date}</time>
                        </article>
                    </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
