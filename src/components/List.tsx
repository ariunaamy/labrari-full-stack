import React from 'react';
//import buttonStyles from 'components/button/Button.module.scss';
//import Button from "./button/Button";
import { ListProps } from 'books.model';



 

const List: React.FC<ListProps> = ({ listName, books }) => {
 
  return (
    <div className="list">
      <h1>{listName}</h1>
      {books.map((book) => {
        return <p key={book.id}>{book.title}</p>;
      })}
      {/* <Button value="add"/> */}
    </div>
  );
};

export default List;
