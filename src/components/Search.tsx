import axios from 'axios'
import Button from './button/Button'
import { useState } from 'react';


const API_KEY = import.meta.env.VITE_API_KEY

const Search = ({setModal, open, setList}) => {
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

    // const handleButtonClick = () => {
    //     setModalOpen(true);
    //   };
    const handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        setList(selectedOption)
    }
     

   
    return (
        <div className='search-box'>
        <h1>find a book</h1>
       <form onSubmit={handleSubmit}>
           <input type='text' title='search' placeholder='Search a book ...' onChange={handleChange} />
           <button type='submit'>Search</button>
      </form>
       <div>
       {isLoading ? (
           <p>Loading ...</p>
      ) : (
           book && (
               <div>
                   <h2>{book.volumeInfo.title}</h2>
                   <p>{book.volumeInfo.authors[0]}</p>
                   <img src={book.volumeInfo.imageLinks.smallThumbnail} width="100"/>
                   {/* <p>{book.volumeInfo.description}</p> */}
                   <br/>
                   <a href={book.volumeInfo.infoLink} alt="link">Buy</a>
                   <br/>
                                <div className='select-wrapper'>
                                    <label htmlFor="modal-select">Add to list: </label>
                                    <select id="modal-select" className='modal-select' onChange={handleOptionChange}>
                                        <option value="read">read</option>
                                        <option value="reading">reading</option>
                                        <option value="wish">wish list</option>
                                    </select>

                                </div>
                                <Button onClick={() =>setModal(!open)} classtitle="open-modal-button">
                                    Add to List
                                </Button>
               </div>
           )
       )
       }
       </div>

   </div>
    );
 };
 
 export default Search;

