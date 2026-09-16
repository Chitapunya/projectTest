import { useState } from "react"
import BookEdit from "./BookEdit"
function BookShow({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = (id) => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, title) => {
        onEdit(id, title)
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit == true) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className="book-show">
            <div className="action">
                <button className="edit" onClick={handleEditClick}>
                    edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    delete
                </button>
            </div>
            {content}
        </div>
    )
}
export default BookShow