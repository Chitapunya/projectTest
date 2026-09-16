import BookShow from "./BookShow"

function BookList({ books, onDelete, onEdit }) {

    const renderBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    })



    return (
        <div>{renderBooks}</div>
    )
}
export default BookList