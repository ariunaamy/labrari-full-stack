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
      date_published: string;
      infoLink: string;
    };
  }

  

 