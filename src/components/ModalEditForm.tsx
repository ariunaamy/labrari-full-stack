import { useEffect, useState, useCallback } from 'react';
import Modal from './Modal';
import { ChosenBook, Book, ModalFormProps} from 'books.model';
import axios from 'axios';
import { API } from 'books.model';




const ModalEditForm: React.FC<ModalFormProps> = ({ onSubmit, book, isModelOpen }) => {

  const [editedBook, setEditedBook] = useState({
    title: book.title,
    author: book.author,
    year_published: book.year_published,
    status: book.status,
    reader_notes: book.notes,
    recommend_to: book.recommend_to,
  })

  console.log(book.id)
     

  const  handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditedBook({
      ...editedBook,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
         .put(`${API}/books/${book.id}`, editedBook)
         .then(
           () => {
        //   setModalOpen(false)
   
         })
         .catch((error) => console.error(error));
    window.location.reload();
  };

  
  return (
    <div>
      <Modal isOpen={isModelOpen}>
        <form className="list-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input 
          type="text"
           value={editedBook.title} 
           onChange={handleTextChange} 
           id="title" />
          <label htmlFor="author">Author: </label>
          <input 
          type="text"
          value={editedBook.author} 
          onChange={handleTextChange} 
          id="author" />
           <label htmlFor="year_published">Published in: </label>
          <input 
          type="number"
          value={editedBook.year_published} 
          onChange={handleTextChange} 
          id="year_published" />
            <label htmlFor="status">Add to list: </label>
          <input 
          type='text'
          value={editedBook.status} 
          onChange={handleTextChange} 
          id="status" />
          <label htmlFor="reader_notes">Notes: </label>
          <textarea 
          value={editedBook.reader_notes} 
          onChange={handleTextChange} 
          id="reader_notes" />
          <label htmlFor="recommend_to">Recommend to: </label>
          <input 
          type="text" 
          value={editedBook.recommend_to} 
          onChange={handleTextChange} 
          id="recommend_to" />
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ModalEditForm;
