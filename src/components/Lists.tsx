import { ListsProps } from "books.model";
import List from "./List";


const Lists: React.FC<ListsProps> = ({books}) => {
   

   return (
     <div className="lists">
        <List listName="Have Read"   books={books.filter((book) => book.status === 'read')} />
        <List listName="Reading" books={books.filter((book) => book.status === 'reading')} />
        <List listName="Wish to Read"  books={books.filter((book) => book.status === 'wish')} />
     </div>
   );
 };
 
 export default Lists;