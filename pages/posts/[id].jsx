import { getAllPostIds, getPostData } from "../../libs/posts"
import Layout from "/components/layout"
import utilStyles  from "/styles/util.module.css"
import Date from "/components/date"
import Head from "next/head";

export async function getStaticPaths(){
  const paths = getAllPostIds();
  return {
    paths,
    fallback : false
  }
}

export async function getStaticProps ({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

const PostDetail = ({postData}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <Date dateString={postData.date}></Date>
        <div className={utilStyles.lightText} dangerouslySetInnerHTML={{__html : postData.content}}></div>
      </section>
    </Layout>
  )
}

export default PostDetail