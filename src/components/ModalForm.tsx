import { useState } from 'react';
import Search from './Search';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Book} from '../App'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalFormProps {
  handleModal: () => void;
  open: boolean;
  list: string;
  book: Book;
}

const API = import.meta.env.VITE_API_URL;

const ModalForm: React.FC<ModalFormProps> = ({ handleModal, open, list, book }) => {
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState<Book>({
    title: book ? book.title : '',
    author: '',
    year_published: book ? book.year_published : 0,
    status: list,
    reader_notes: '',
    recommend_to: '',
  });

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewBook({
      ...newBook,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBook(newBook);
  };

  const addBook = (newBook: Book) => {
    axios
      .post(`${API}/books`, newBook)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  const modalProps: ModalProps = {
    isOpen: open,
    onClose: handleModal,
  };

  return (
    <div>
      <Modal {...modalProps}>
        <form className="list-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" value={newBook.title} onChange={handleTextChange} id="title" />
          <label htmlFor="author">Author: </label>
          <input value={newBook.author} onChange={handleTextChange} id="author" />
          <label htmlFor="reader_notes">Notes: </label>
          <textarea value={newBook.reader_notes} onChange={handleTextChange} id="reader_notes" />
          <label htmlFor="recommend_to">Recommend to: </label>
          <input type="text" value={newBook.recommend_to} onChange={handleTextChange} id="recommend_to" />
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;


// import { useState } from 'react'
// import Search from './Search'
// import Modal from './Modal'
// import { useNavigate } from 'react-router-dom'

// interface Book {
//   title: string;
//   author: string;
//   year_published: number;
//   status: string;
//   reader_notes: string;
//   recommend_to: string;
// }

// interface ModalFormProps {
//   handleModal: () => void;
//   open: boolean;
//   list: string;
//   book: object | Book;
// }



// const API = import.meta.env.VITE_API_URL

// const ModalForm: React.FC<ModalFormProps> = ({ handleModal, open, list, book }) => {


//   // let d = book.volumeInfo.title
//   console.log(list)

//   const [newBook, setNewBook] = useState({
//     title: (!book ? "" : book.volumeInfo.title),
//     author: "",
//     year_piblished: (!book ? "" : book.volumeInfo.publishedDate),
//     status: list,
//     reader_notes: "",
//     recommend_to: ""
//   })

//   function handleTextChange(e) {
//     setNewBook({
//       ...newBook,
//       [e.target.id]: e.target.value,
//     });
//   }

//   // const handleCheckboxChange = () => {
//   //   setSupply({ ...supply, in_stock: !supply.in_stock });
//   // };


//   console.log(newBook)


//   // let navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     addBook(newBook)
 

//   }

//   const addBook = (newBook) => {
//     axios
//       .post(`${API}/books`, newBook)
//       .then(
//         () => {
//           navigate('/');
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

  
//   return (
//     <div>
    
//       <Modal isOpen={open} onClose={handleModal}>
//         {/* <h1>{!book ? "" : book.volumeInfo.title}</h1>
//         <p>published in {!book ? "" : book.volumeInfo.publishedDate}</p>
//         <p>by {!book ? "" : book.volumeInfo.authors[0]}</p> */}
//         <form className='list-form'>
//           <label htmlFor="title">Title: </label>
//           <input
//             type='text'
//             value={newBook.title}
//             onChange={handleTextChange}
//             id="title"
//           />
//           <label htmlFor="author">Author: </label>
//           <input
//             value={newBook.author}
//             onChange={handleTextChange}
//             id="author"
//           />

//           <label htmlFor="reader_notes">Notes: </label>
//           <textarea
//             value={newBook.reader_notes}
//             onChange={handleTextChange}
//             id="reader_notes"
//           />
//           <label htmlFor="recommend_to">Recommend to: </label>
//           <input
//             type='text'
//             value={newBook.recommend_to}
//             onChange={handleTextChange}
//             id="recommend_to"
//           />
//           <input type="submit"/>
//           <br />
//         </form>
//       </Modal>
//     </div>
//   );
// };



// export default ModalForm;



