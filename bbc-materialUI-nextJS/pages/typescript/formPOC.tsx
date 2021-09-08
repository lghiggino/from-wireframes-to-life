import { useState } from "react"
import Link from "next/link"
import Layout2 from "../../src/DraweAndAppBarLayout"

export default function index() {
    const [newName, setNewName] = useState("")
    const [name, setName] = useState("")

    const [object, setObject] = useState({
        color: "",
        shape: "",
        size: "",
        wight: ""
    })

    const handleSumbit = (event) => {
        event.preventDefault()
        setName(newName)
        setNewName("")
    }

    const doSubmit = () => { 
        console.log(object)
    }

    return (
        <Layout2 home={false}>
            <h2> This is a form test page </h2>
            <section>
                <form>
                    <label>Nome: </label>
                    <input
                        onChange={(event) => { setNewName(event.target.value) }}
                        value={newName}
                        placeholder="type a new name"
                    />
                    <button
                        type="submit"
                        onClick={(event) => { handleSumbit(event) }}
                    >
                        submit
                    </button>
                </form>
                <div>
                    this is newName - the temporary state: {newName}
                </div>
                <div>
                    this is the settled Name - the permanent value: {name}
                </div>
            </section>
            <section>
                <form onSubmit={doSubmit}>
                    <label for="color">Color: </label>
                    <input
                        type="text"
                        id="color"
                        // onChange={(event) => setObject({object.color: event.target.value})}
                        value={object.color}
                    >

                    </input>
                </form>
            </section>
        </Layout2>
    )
}