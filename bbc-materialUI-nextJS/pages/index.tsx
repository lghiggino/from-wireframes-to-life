import Head from 'next/head'
import Link from 'next/link'
import Layout2, { siteTitle2 } from '../src/DraweAndAppBarLayout'
import classNames from "classnames"
import { getSortedPostsData } from '../lib/posts'
import Date from "../src/Date"

//components section
import ControlledAccordion from '../src/ControlledAccordion'
import CustomRadio from '../src/CustomRadio'
import { Button, Typography } from '@material-ui/core'
import ButtonsSection from "../src/ButtonsSection"
import CustomButton from "../src/CustomButton"

//styles
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData, pokeData }) {
  
  return (
    <Layout2 home>
      <Head>
        <title>{siteTitle2}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={classNames(utilStyles.headingMd, utilStyles.sectionMB)}>
        <p>Destaques</p>
        
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
      <section className={classNames(utilStyles.headingMd, utilStyles.sectionMB, utilStyles.padding1px)}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
              
            </li>
          ))}
        </ul>
      </section>
      <section className={classNames(utilStyles.headingMd, utilStyles.sectionMB)}>
        <h2>Components Section</h2>
        
        <p className="primary"> Is this text bold and purple? </p>
        <Typography color="primary" >This is a primary paragraph banana</Typography>
        <Typography color="secondary" >This is a secondary paragraph banana</Typography>
        <Typography color="textPrimary" >This is a textPrimary paragraph banana</Typography>
        <Typography color="textSecondary" >This is a textSecondary paragraph banana</Typography>
        <button className="themed"> click me</button>
        <Button className="themed"> This is a MuiButton</Button>
        
        <ControlledAccordion />
        <br/>
        <CustomRadio/>
        <br/>
        <ButtonsSection/>
        <br/>
        <CustomButton> text </CustomButton>
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
