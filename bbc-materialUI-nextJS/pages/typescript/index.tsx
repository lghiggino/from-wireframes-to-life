import Link from "next/link"
import Layout2 from "../../src/DraweAndAppBarLayout"

export default function index() {

    return (
        <Layout2 home={false}>
            <ul>
                <li><Link href="/typescript/formPOC">Teste de Forms</Link></li>
            </ul>
        </Layout2>
    )
}