import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
        </section>

      
    </Layout>
  )
}
