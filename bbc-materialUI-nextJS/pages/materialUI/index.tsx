import Layout2 from "../../src/DraweAndAppBarLayout"
import Link from "next/link"

export default function index() {

    return (
        <Layout2 home={false}>
            <ul>
                <li><Link href="/materialUI/containerTest">Teste de Containers do Material UI</Link></li>
                <li><Link href="/materialUI/appBarTestTopDrawer">appBarTestTopDrawer</Link></li>
                <li><Link href="/materialUI/material">material</Link></li>
                <li><Link href="/materialUI/materialComponents">materialComponents</Link></li>
                <li><Link href="/materialUI/new-swr-hook">new-swr-hook</Link></li>
                <li><Link href="/materialUI/parallaxTestPage">parallaxTestPage</Link></li>
                <li><Link href="/materialUI/swr-hook">swr-hook</Link></li>
            </ul>



            <Link href="/materialUI">back to materialUI index</Link>
        </Layout2>
    )
}
