import React from 'react'
import Link from "next/link"
import MaskedInput from 'react-text-mask'

import Layout from '../../src/Layout';
import Layout2, {siteTile2} from '../../src/DraweAndAppBarLayout'

export default function materialComponents(){
    return(
        <Layout2>
            <h3>This is the material components test page</h3>

            <section>
                <label>maskedinput: </label>
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                />
            </section>

            <section>
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-control"
                    placeholder="Enter a phone number"
                    guide={false}
                    id="my-input-id"
                    onBlur={() => {}}
                    onChange={() => {}}
                />
            </section>

            <Link href="/materialUI">back to materialUI index</Link>
        </Layout2>
    )
}