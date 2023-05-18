import { useState } from 'react'
import Search from './Search'
import Modal from './Modal'





const SideBar: React.FC = () => {
  
  const [isModalOpen, setModalOpen] = useState(false);

 

  const handleCloseModal = () => {
    setModalOpen(false);
  };




  return (
    <div>
      <Search setModal={setModalOpen} open={isModalOpen}/>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <form>
          <label htmlFor="title">book title: </label>
          <input
            type="text"
            // value={supply.title}
            // onChange={handleTextChange}
            id="title"
            required
          />
          <label htmlFor="author">author: </label>
          <input
            type="text"
            // value={supply.image_url}
            // onChange={handleTextChange}
            id="image_url"
          />
          <label htmlFor="reader_notes">Notes: </label>
          <input
            type="text"
            // value={supply.brand}
            // onChange={handleTextChange}
            id="reader_notes"
          />
          <select>
            <option>read</option>
            <option>reading</option>
            <option>wish list</option>
          </select>
         
          <input type="submit"/>
          <br />
        </form>
      </Modal>
    </div>
  );
};



export default SideBar;


// const Search = () => {
//     const [book, setBook] = useState(null)
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isLoading, setIsLoading] = useState(false);




//     const handleSubmit = async (e) => {
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


//     const handleChange = (e) => {
//         setSearchQuery(e.target.value);
//     };
   
//     return (
//         <div classtitle='search-box'>
//             <h1>find a book</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type='text' title='search' placeholder='Search a book ...' onChange={handleChange} />
//                 <button type='submit'>Search</button>
//             </form>
//             <div>
//             {isLoading ? (
//                 <p>Loading ...</p>
//             ) : (
//                 book && (
//                     <div>
//                         <h2>{book.volumeInfo.title}</h2>
//                         <p>{book.volumeInfo.authors[0]}</p>
//                         <img src={book.volumeInfo.imageLinks.smallThumbnail} width="100"/>
//                         {/* <p>{book.volumeInfo.description}</p> */}
//                         <br/>
//                         <a href={book.volumeInfo.infoLink} alt="link">Buy</a>
//                         <br/>
//                         <Button value="add"/>
//                     </div>
//                 )
//             )
//             }
//             </div>
   
//         </div>
//     )

// }

// MyComponent.tsx

