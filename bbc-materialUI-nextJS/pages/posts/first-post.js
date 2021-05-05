import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

const YourImageComponent = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id maxime modi, nesciunt, a sed iusto aliquid necessitatibus non nobis consequuntur inventore excepturi libero, tempore blanditiis. Voluptas maiores ipsa adipisci dolorem soluta fuga hic? Quam assumenda dolores ad veniam, commodi temporibus, culpa reiciendis molestias voluptas esse maxime natus placeat ab. Repellat dolore totam quisquam nulla modi neque pariatur consectetur, voluptatibus autem voluptatem sit corrupti commodi amet facere numquam sunt, sint esse itaque minus soluta ad exercitationem. Unde voluptas nihil eos velit, facilis nemo iusto assumenda maiores in earum sequi, aut temporibus eveniet aperiam expedita dolorem sint nam, consectetur repudiandae eius! Cum eligendi fuga fugit officia, facilis libero natus voluptates, accusamus amet doloremque debitis quisquam rem expedita architecto corrupti maxime nulla saepe alias ex voluptas omnis repellendus ea at quaerat. Possimus molestias voluptatibus odit commodi tempore soluta quasi ipsa alias iste earum, corporis molestiae dolore repudiandae? Aut praesentium libero saepe, facilis in voluptate consequatur culpa facere corporis molestiae reprehenderit, odit a rerum magnam optio aspernatur similique magni tempora. Ex adipisci vitae optio! Recusandae neque eligendi iure, soluta ipsum asperiores. Dolorem dignissimos explicabo provident molestias assumenda quae saepe temporibus! Numquam minima dignissimos in est commodi dolore? Libero itaque assumenda non ad odio.</p>
        </Layout>
    )
}
