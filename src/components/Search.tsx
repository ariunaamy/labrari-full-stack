import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { ChosenBook } from 'books.model';

//import Button from './button/Button';




interface SearchProps {
  setModal: (value: boolean) => void;
  open: boolean;
  setList: (value: string) => void;
  chosenBook: ChosenBook | null;
  setChosenBook: Dispatch<SetStateAction<ChosenBook | null>>; // Update the type here
}


const GOOGLE_API_KEY: string = import.meta.env.VITE_API_KEY as string;

const Search: React.FC<SearchProps> = ({ setModal, open, setList, chosenBook, setChosenBook }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=1${GOOGLE_API_KEY}`
      );
      setChosenBook(response.data.items[0] || null);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
    setIsLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setList(selectedOption);
  };

  return (
    <div className="search-box">
      <h1>find a book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" title="search" placeholder="Search a book ..." onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : chosenBook && (  
            <div>
              <h2>{chosenBook ? chosenBook.volumeInfo.title : null}</h2>
              <p>{chosenBook ? chosenBook.volumeInfo.authors[0] : null}</p>
              <button onClick={() => setModal(!open)} className="open-modal-button">
                Add to List
              </button>
              <br></br>
              <img src={chosenBook?.volumeInfo.imageLinks.smallThumbnail} width="100" alt="Book cover" />
              <br />
              <a href={chosenBook?.volumeInfo.infoLink}>Buy</a>
              <br />
              <div className="select-wrapper">
                <label htmlFor="modal-select">Add to list: </label>
                <select id="modal-select" className="modal-select" onChange={handleOptionChange}>
                  <option value="read">read</option>
                  <option value="reading">reading</option>
                  <option value="wish">wish list</option>
                </select>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Search;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Button from './button/Button';

// const API_KEY = import.meta.env.VITE_API_KEY

// const Search = ({setModal, open, setList, book, setBook}) => {
    
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isLoading, setIsLoading] = useState(false);




//     const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         setIsLoading(true);
//         try {
//             const response = await axios.get(
//                 `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=1${API_KEY}`
//             );
//             setBook(response.data.items[0] || null);
//         } catch (error) {
//             console.error('Error fetching book:', error);
//         }
//         setIsLoading(false);
//     };


//     const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
//         setSearchQuery(e.target.value);
//     };

//     // const handleButtonClick = () => {
//     //     setModalOpen(true);
//     //   };
//     const handleOptionChange = (e: React.ChangeEvent<HTMLFormElement>) => {
//         const selectedOption = e.target.value;
//         setList(selectedOption)
//     }
     

   
//     return (
//         <div className='search-box'>
//         <h1>find a book</h1>
//        <form onSubmit={handleSubmit}>
//            <input type='text' title='search' placeholder='Search a book ...' onChange={handleChange} />
//            <button type='submit'>Search</button>
//       </form>
//        <div>
//        {isLoading ? (
//            <p>Loading ...</p>
//       ) : (
//            book && (
//                <div>
//                    <h2>{book.volumeInfo.title}</h2>
//                    <p>{book.volumeInfo.authors[0]}</p>
//                    <img src={book.volumeInfo.imageLinks.smallThumbnail} width="100"/>
//                    {/* <p>{book.volumeInfo.description}</p> */}
//                    <br/>
//                                 <a href={book.volumeInfo.infoLink}>Buy</a>
//                    <br/>
//                                 <div className='select-wrapper'>
//                                     <label htmlFor="modal-select">Add to list: </label>
//                                     <select id="modal-select" className='modal-select' onChange={handleOptionChange}>
//                                         <option value="read">read</option>
//                                         <option value="reading">reading</option>
//                                         <option value="wish">wish list</option>
//                                     </select>
//                                 </div>
//                                 <button onClick={() => setModal(!open)} className="open-modal-button">
//                                     Add to List
//                                 </button>
//                </div>
//            )
//        )
//        }
//        </div>

//    </div>
//     );
//  };
 
//  export default Search;

