import Head from "next/head"
import Layout2, { siteTitle2 } from '../../src/DraweAndAppBarLayout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from "../../src/Date"

//styling
import utilStyles from "../../styles/utils.module.css"

export default function Post({ postData }) {
  return (
    <Layout2>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2 className={utilStyles.headingXl}>
        {postData.title}
      </h2>
      
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout2>
  )
}


export async function getStaticPaths(){
  const paths = getAllPostIds()
  return{
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}