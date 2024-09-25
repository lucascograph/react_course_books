import BookShow from "./BookShow";
import UseBookContext from "../hooks/useBooksContext";


function BookList() {
    const { books } = UseBookContext(); 

    const renderedBooks = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} />
        );
    })

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}

export default BookList; 