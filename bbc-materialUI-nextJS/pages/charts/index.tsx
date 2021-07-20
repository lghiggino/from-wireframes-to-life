import Layout2 from "../../src/DraweAndAppBarLayout"
import Link from "next/link"

export default function index() {

    return (
        <Layout2 home={false}>
            <ul>
                <li><Link href="/charts/rechartsPOC">POC Recharts</Link></li>
                <li><Link href="/charts/pieChart">Pie Chart</Link></li>
                <li><Link href="/charts/radialBar">Radial Bar Chart</Link></li>
            </ul>

            <Link href="/charts">back to charts index</Link>
        </Layout2>
    )
}

