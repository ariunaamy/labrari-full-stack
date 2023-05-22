import React from 'react';
import { ListProps } from 'books.model';
import { useState } from 'react';
import axios from 'axios';
import ModalEditForm from './ModalEditForm';
import { API } from 'books.model';

const List: React.FC<ListProps> = ({ listName, books}) => {
   const [isModalOpen, setModalOpen] = useState(false);
   const [showMore, setShowMore] = useState(false)

   
const handleDelete = (id: number | undefined) =>{
   if(id!== undefined){
      const confirmDelete = window.confirm("Are you sure you want to delete this book?");
      if(confirmDelete){
         deleteBook(id)
      }   
   }  
}

const deleteBook = (id: number) => {
   axios.delete(`${API}/books/${id}`)
   .then(()=>{
      window.location.reload();
      console.log('Book deleted successfully');
   })
   .catch((e)=>{
      console.warn("catch:", e)
   })
   

}
  return (
   <div className="list">
      <h1 className='list-title'>{listName}</h1>
     {books.length === 1 ? (<p className='books-quantity'><strong>one</strong> book in this list</p>) : (<p className='books-quantity'><strong>{books.length}</strong> books in this list</p>) }
      {books.map((book,index) => {
         return (
            <div key={index} className='list-item'>
               <button className='book-title' onClick={()=>setShowMore(!showMore)}>{book.title}</button>
               <p className='author'><i>by {book.author}</i></p>
               {showMore ? (<section className='book-info'>
                  <p>{book.reader_notes}</p>
                  </section>)
                   : null}
               <div className='item-buttons'>
               <button  onClick={() => setModalOpen(!isModalOpen)} className="open-modal-button">Edit</button>
               <button onClick={()=>handleDelete(book.id)}>Delete</button>
               </div>
               <ModalEditForm book={book} isModelOpen={isModalOpen} />
            </div>
         );
      })}
    </div>
  );
};

export default List;
