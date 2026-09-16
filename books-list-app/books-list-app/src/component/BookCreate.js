import { useState } from "react"

function BookCreate({ onCreate }) {

    const [title, settitle] = useState('')

    const handleChange = (event) => {
        settitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        settitle('')
    }

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label >title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}
export default BookCreate