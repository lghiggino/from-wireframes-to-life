import React from 'react'
import MaskedInput from 'react-text-mask'

import Layout from "../../components/layout"

export default function materialComponents(){
    return(
        <Layout>
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

        </Layout>
    )
}