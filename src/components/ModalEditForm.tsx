import { useEffect, useState, useCallback } from 'react';
import Modal from './Modal';
import { ChosenBook, Book, ModalFormProps} from 'books.model';





const ModalEditForm: React.FC<ModalFormProps> = ({ onSubmit, isModelOpen, list, chosenBook }) => {

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
    onSubmit(newBook);
    window.location.reload();
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

export default ModalEditForm;
