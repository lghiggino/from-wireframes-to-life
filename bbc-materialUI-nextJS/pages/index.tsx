import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../src/Layout'
import Layout2, { siteTitle2 } from '../src/DraweAndAppBarLayout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
//components section
import ControlledAccordion from '../src/ControlledAccordion'
import CustomRadio from '../src/CustomRadio'

export default function Home({ allPostsData, pokeData }) {
  
  return (
    <Layout2 home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>TypeScript, UX, MaterialUI - by LNG</p>
        
        <h3 >
          Read{' '}
          <Link href="/materialUI/material">
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
          <Link href="/materialUI/materialComponents">
            <a>the materialUI Masked Components Test!</a>
          </Link>
        </h3>
        <h3 >
          Read{' '}
          <Link href="/materialUI/parallaxTestPage">
            <a>This is the hero component/ parallax component test page!</a>
          </Link>
        </h3>
        <h3 >
          Read{' '}
          <Link href="/materialUI/containerTest">
            <a>This is the container hero test page!</a>
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
      <section>
        <h2>Components Section</h2>
        <ControlledAccordion />
        <br/>
        <CustomRadio/>
      </section>
    </Layout2>
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
