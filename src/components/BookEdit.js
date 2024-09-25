import { useState } from "react";
import UseBookContext from "../hooks/useBooksContext";


function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const { editBookById } = UseBookContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;