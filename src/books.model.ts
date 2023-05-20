import { ReactNode } from "react";

export interface ErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
  }
  
  export interface Book {
    id?: number;
    title: string;
    author: string;
    year_published: number;
    status: string;
    reader_notes: string;
    recommend_to: string;
  }
  
  
  export interface ListsProps {
    books: Book[];
  }

   
 export interface ListProps {
    listName: string;
    books: Book[]; // Update the prop type to Book[]
  }
  
  export interface ChosenBook {
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks: {
        smallThumbnail: string;
      };
      publishedDate: string;
      infoLink: string;
    };
  }

  export interface ModalProps {
    onClose?: () => void;
    children: ReactNode;
    isOpen: boolean;
  }

  export interface ModalFormProps {
    handleModal: () => void;
    isModelOpen: boolean;
    onSubmit: (book:Book)=>void;
    list: string;
    chosenBook: ChosenBook | null;
  }
  


  

 