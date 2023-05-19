import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalForm from 'components/ModalForm';
import Search from 'components/Search';
import List from 'components/List';
import Profile from 'components/Profile';
import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

const URL: string = import.meta.env.VITE_API_URL as string;

interface Book {
  title: string;
  author: string;
  year_published: number;
  status: string;
  reader_notes: string;
  recommend_to: string;
}

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
}

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
  const [selectedList, setSelectedList] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [chosenBook, setChosenBook] = useState<Book | null>(null);

  useEffect(() => {
    axios
      .get<Book[]>(`${URL}/books`)
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

  return (
    <ErrorBoundary fallback={<div>Something went wrong.</div>}>
      <div className="app">
        <Router>
          <div className="sidebar">
            <Profile />
            <Search setModal={setModalOpen} open={isModalOpen} setList={setSelectedList} book={chosenBook} setBook={setChosenBook} />
            <ModalForm handleModal={handleCloseModal} open={isModalOpen} list={selectedList} book={chosenBook} />
          </div>
          <main>
            <Header />
            <div className="main-bottom">
              <Routes>
                <Route path="/" element={<List listName="Have Read" books={books.filter((book) => book.status === 'read')} />} />
                <Route path="/" element={<List listName="Reading" books={books.filter((book) => book.status === 'reading')} />} />
                <Route path="/" element={<List listName="Wish to Read" books={books.filter((book) => book.status === 'wish')} />} />
              </Routes>
            </div>
          </main>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
export type { Book };
