import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalNewForm from 'components/ModalNewForm';
import Search from 'components/Search';
import Profile from 'components/Profile';
import Lists from 'components/Lists';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Book, ChosenBook, ErrorBoundaryProps } from 'books.model';


const API: string = import.meta.env.VITE_API_URL as string;

class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function App() {
  const [selectedList, setSelectedList] = useState('read');
  const [isModalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [chosenBook, setChosenBook] = useState<ChosenBook | null>(null);

  useEffect(() => {
    axios
      .get<Book[]>(`${API}/books`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((e) => {
        console.warn('catch', e);
      });
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const handleSubmit = (newBook: Book) => {
      axios
        .post(`${API}/books`, newBook)
        .then(() => {
         setModalOpen(false)
  
        })
        .catch((error) => console.error(error));
  }


  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <div className="app">
        <Router>
          <div className="sidebar">
            <Search setModal={setModalOpen} open={isModalOpen} setList={setSelectedList} chosenBook={chosenBook} setChosenBook={setChosenBook} />
            <ModalNewForm onSubmit={handleSubmit} handleModal={handleCloseModal} isModelOpen={isModalOpen} list={selectedList} chosenBook={chosenBook} />
            <Profile />
          </div>
          <main className="main-bottom">
              <Routes>   
                <Route path="/" element={<Lists books={books}/>} />
              </Routes>
          </main>    
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;

