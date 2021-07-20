import Link from "next/link"
import { Container, Grid, Typography } from "@material-ui/core"
import CustomAppbar from "../../src/CustomAppbar"
import Hero from "../../src/Hero"

//const puppy  = require  "./../../public/images/puppy.jpeg"

const heroTestPage = () => {
    return(
        <>
        <CustomAppbar />
        <Hero filter responsive image={"/images/puppy.webp"}>
           
            <Grid container>
                <Grid item xs={12 }md={6}>
                    <p>LADO A</p>
                </Grid>
                <Grid item xs={12 }md={6}>
                    <p>LADO B</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat quis autem voluptas reiciendis nobis repudiandae similique odio aut temporibus mollitia, accusamus, impedit iusto deserunt expedita laudantium hic! Ad enim dolor, tempora corrupti nihil dolore iste quo quas numquam eum consequuntur veritatis eius adipisci architecto minima consectetur asperiores! Molestiae itaque dolorem, dolore officiis est ut, sed eos qui facere similique architecto repellat dignissimos possimus vel, rerum in aperiam hic aut unde ea! Reiciendis sint corporis dolores exercitationem autem harum a nisi, accusantium omnis, debitis nobis laudantium reprehenderit delectus nihil alias iure sequi quibusdam enim architecto voluptas aspernatur explicabo similique! Temporibus.</p>
                </Grid>
            </Grid>
        </Hero>
        <Container maxWidth="xl" disableGutters>
            <Typography component="div" style={{ backgroundColor: '#afa8fa', height: '10vh' }}  />
        </Container>
        <Link href="/materialUI">back to materialUI index</Link>
        </>
    )
}

export default heroTestPage