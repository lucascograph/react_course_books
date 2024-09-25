import { useState } from "react";
import UseBookContext from "../hooks/useBooksContext";

function BookCreate() {
    const [title, setTitle] = useState("");
    const { createBook } = UseBookContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    };

    const handleChange = (event) => {
         setTitle(event.target.value);

    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={ handleSubmit }>
                <label>Title:</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create</button>
            </form>
        </div>
    );
}

export default BookCreate;