import { useState } from 'react'
import Search from './Search'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'




const API = import.meta.env.VITE_API_URL

const ModalForm: React.FC = ({ handleModal, open, list, book }) => {


  // let d = book.volumeInfo.title
  console.log(list)

  const [newBook, setNewBook] = useState({
    title: (!book ? "" : book.volumeInfo.title),
    author: "",
    year_piblished: (!book ? "" : book.volumeInfo.publishedDate),
    status: list,
    reader_notes: "",
    recommend_to: ""
  })

  function handleTextChange(e) {
    setNewBook({
      ...newBook,
      [e.target.id]: e.target.value,
    });
  }

  // const handleCheckboxChange = () => {
  //   setSupply({ ...supply, in_stock: !supply.in_stock });
  // };


  console.log(newBook)


  // let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    addBook(newBook)
 

  }

  const addBook = (newBook) => {
    axios
      .post(`${API}/books`, newBook)
      .then(
        () => {
          navigate('/');
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  
  return (
    <div>
    
      <Modal isOpen={open} onClose={handleModal}>
        {/* <h1>{!book ? "" : book.volumeInfo.title}</h1>
        <p>published in {!book ? "" : book.volumeInfo.publishedDate}</p>
        <p>by {!book ? "" : book.volumeInfo.authors[0]}</p> */}
        <form className='list-form'>
          <label htmlFor="title">Title: </label>
          <input
            type='text'
            value={newBook.title}
            onChange={handleTextChange}
            id="title"
          />
          <label htmlFor="author">Author: </label>
          <input
            value={newBook.author}
            onChange={handleTextChange}
            id="author"
          />

          <label htmlFor="reader_notes">Notes: </label>
          <textarea
            value={newBook.reader_notes}
            onChange={handleTextChange}
            id="reader_notes"
          />
          <label htmlFor="recommend_to">Recommend to: </label>
          <input
            type='text'
            value={newBook.recommend_to}
            onChange={handleTextChange}
            id="recommend_to"
          />
          <input type="submit"/>
          <br />
        </form>
      </Modal>
    </div>
  );
};



export default ModalForm;



