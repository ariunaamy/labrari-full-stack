//components 
import Button from 'components/button/Button.tsx'
import ModalForm from 'components/ModalForm'
import Search from 'components/Search'
import List from 'components/List'
import Profile from 'components/Profile'
import Header from 'components/Header'
//scss
import './App.scss' 
//configs  
import { useState, useEffect } from 'react'
import axios from 'axios'


const URL = import.meta.env.VITE_API_URL

function App() {
  const [selectedList, setSelectedList] = useState("")
  const [isModalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState([])
  const [chosenBook, setChosenBook] = useState(null)

  console.log(chosenBook)

  useEffect(()=>{
    axios
    .get(`${URL}/books`)
    .then((res) =>{
      setBooks(res.data)
    })
    .catch((e)=>{
      console.warn("catch", e)
    })
   
  },[])



  const handleCloseModal = () => {
    setModalOpen(false);
  };




  return (
    <>
      <div className='app'>
        <div className='sidebar'>
        <Profile/>
        <Search setModal={setModalOpen} open={isModalOpen} setList={setSelectedList} book={chosenBook} setBook={setChosenBook}/>
        <ModalForm handleModal={handleCloseModal} open={isModalOpen} list={selectedList} book={chosenBook}/>
        </div>
        <main>
          <Header/>
          <div className='main-bottom'>
            <List listName="Have Read" books={books.filter(book => book.status === "read")}/>
            <List listName="Reading" books={books.filter(book => book.status === "reading")}/>
            <List listName="Wish to Read" books={books.filter(book => book.status === "wish")}/>
          </div>
        </main>
        
      </div>
    </>
  )
}

export default App
