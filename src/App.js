import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import UseBookContext from "./hooks/useBooksContext";

function App() {
    const { fetchBooks } = UseBookContext();
    useEffect(() => {
        fetchBooks();
    }, []);


    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;