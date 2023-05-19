import { useState } from 'react'
import Search from './Search'
import Modal from './Modal'



const API = import.meta.env.VITE_API_URL

const ModalForm: React.FC = ({handleModal, open, list}) => {

  console.log(API)
  const handleSubmit = async (e) => {
    e.preventDefault();
 

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
      <form className='list-form' > 
          <label htmlFor="title">book title: </label>
          <input
            type="text"
            // value={Book.title}
            // onChange={handleTextChange}
            id="title"
            required
          />
          <label htmlFor="author">author: </label>
          <input
            type="text"
            // value={Book.image_url}
            // onChange={handleTextChange}
            id="image_url"
          />
          <label htmlFor="reader_notes">Notes: </label>
          <textarea
            name="reader_notes"
            // value={Book.brand}
            // onChange={handleTextChange}
            id="reader_notes"
          />
          <input type="submit"/>
          <br />
        </form>
      </Modal>
    </div>
  );
};



export default ModalForm;



