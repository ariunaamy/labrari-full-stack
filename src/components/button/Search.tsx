import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

const Search = () => {
    const [book, setBook] = useState(null)
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=1${API_KEY}`
            );
            setBook(response.data.items[0] || null);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
        setIsLoading(false);
    };




    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };
    console.log(book)

    return (
        <div className='search-box'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Search a book ...' onChange={handleChange} />
                <button type='submit'>Search</button>
            </form>
            {isLoading ? (
                <p>Loading ...</p>
            ) : (
                book && (
                    <div>
                        <h2>{book.volumeInfo.title}</h2>
                        <p>{book.volumeInfo.description}</p>
                    </div>
                )
            )
            }
        </div>
    )

}

export default Search;
