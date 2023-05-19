//import buttonStyles from 'components/button/Button.module.scss';
//import Button from "./button/Button";

const List = ({listName, books}) => {
   return (
      <div className="list">
        <h1>{listName}</h1>
        {books.map((book)=>{
         return (<p>{book.title}</p>)
        })}
        {/* <Button value="add"/>  */}
      </div> 
   );
};

export default List;