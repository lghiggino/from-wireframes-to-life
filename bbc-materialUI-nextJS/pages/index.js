import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData, pokeData }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is the BBC (maybe)</p>
        <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
        <h3 >
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h3>

        <h3 >
          Read{' '}
          <Link href="/posts/material">
            <a>the materialUI Media Query page!</a>
          </Link>
        </h3>

        <h3 >
          Read{' '}
          <Link href="/posts/sandbox">
            <a>the typescript sandbox!</a>
          </Link>
        </h3>

        <h3 >
          Read{' '}
          <Link href="/posts/materialComponents">
            <a>the materialUI ComponentsTest!</a>
          </Link>
        </h3>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const pokeData = await res.json()

  return {
    props: {
      allPostsData, pokeData
    }
  }
}
