import { useEffect, useState } from "react"
import BookCreate from "./component/BookCreate"
import BookList from "./component/BookList"
import axios from "axios"

function App() {

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const editBookById = async (id, newTitle) => {

        const reaponse = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const updateBook = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...reaponse.data }
            }
            return book
        })
        setBooks(updateBook)
    }

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3001/books',
            { title }
        )

        const updateBooks = [
            ...books, response.data


        ]
        setBooks(updateBooks)

    }

    const deleteBookid = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`)

        const updateBooks = books.filter((book) => {
            return book.id != id
        })

        setBooks(updateBooks)
    }


    return (
        <div className="app">
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookid} />

            <BookCreate onCreate={createBook} />

        </div>
    )
}
export default App