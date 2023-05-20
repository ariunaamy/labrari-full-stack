import { useEffect, useState, useCallback } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChosenBook {
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
    };
    publishedDate: string;
  };
}

interface Book {
  title: string;
  author: string;
  year_published: number;
  status: string;
  reader_notes: string;
  recommend_to: string;
}

interface ModalFormProps {
  handleModal: () => void;
  isModelOpen: boolean;
  onSubmit: (book:Book)=>void;
  list: string;
  chosenBook: ChosenBook | null;
}



const ModalForm: React.FC<ModalFormProps> = ({ onSubmit, isModelOpen, handleModal, list, chosenBook }) => {
  const navigate = useNavigate();

  console.log(chosenBook)

  const getBook = useCallback(
    function getBook(book:ChosenBook|null):Book{
      return {
        title: book ? book.volumeInfo.title : '',
        author: book ? book.volumeInfo.authors[0] : '',
        year_published: book ? Number(book.volumeInfo.publishedDate.slice(0,-6)) : 0,
        status: list,
        reader_notes: '',
        recommend_to: '',
      }
    }, [list]
  ) 

  const [newBook, setNewBook] = useState<Book>(getBook(chosenBook));


  useEffect(()=>{
    setNewBook(getBook(chosenBook))
  },[chosenBook,getBook])

  

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewBook({
      ...newBook,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(newBook)
  };

  


  return (
    <div>
      <Modal isOpen={isModelOpen}>
        <form className="list-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input 
          type="text"
           value={newBook.title} 
           onChange={handleTextChange} 
           id="title" />
          <label htmlFor="author">Author: </label>
          <input 
          type='text'
          value={newBook.author} 
          onChange={handleTextChange} 
          id="author" />
           <label htmlFor="year">Published in: </label>
          <input 
          type='number'
          value={newBook.year_published} 
          onChange={handleTextChange} 
          id="year" />
            <label htmlFor="status">Add to list: </label>
          <input 
          type='text'
          value={newBook.status} 
          onChange={handleTextChange} 
          id="status" />
          <label htmlFor="reader_notes">Notes: </label>
          <textarea 
          value={newBook.reader_notes} 
          onChange={handleTextChange} 
          id="reader_notes" />
          <label htmlFor="recommend_to">Recommend to: </label>
          <input 
          type="text" 
          value={newBook.recommend_to} 
          onChange={handleTextChange} 
          id="recommend_to" />
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;
