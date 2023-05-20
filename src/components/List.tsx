import React from 'react';
//import buttonStyles from 'components/button/Button.module.scss';
//import Button from "./button/Button";
import { ListProps } from 'books.model';
import { useState } from 'react';
import axios from 'axios';



const API: string = import.meta.env.VITE_API_URL as string;

// const AlertWindow: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
//    return (
//      <div className="alert-window">
//        <h2>Are you sure?</h2>
//        <p>This action cannot be undone.</p>
//        <button onClick={onConfirm}>Confirm</button>
//      </div>
//    );
//  };

const List: React.FC<ListProps> = ({ listName, books}) => {


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
      {books.map((book,index) => {
         return (
            <div key={index} className='list-item'>
               <h3>{book.title}</h3>
               <p className='author'><i>by {book.author}</i></p>
               <div className='item-buttons'>
               <button  onClick={() => setModal(!open)}>Edit</button>
               <button onClick={()=>handleDelete(book.id)}>Delete</button>
               </div>
            </div>
         );
      })}
      {/* <Button value="add"/> */}
    </div>
  );
};

export default List;
