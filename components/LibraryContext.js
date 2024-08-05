import React, { createContext, useState } from 'react';

const LibraryContext = createContext();

function LibraryProvider({ children }) {
  const [borrowed, setBorrowed] = useState([]);

  const borrowBook = (book) => {
    setBorrowed([...borrowed, book]);
  };

  const returnBook = (bookId) => {
    setBorrowed(borrowed.filter(book => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ borrowed, borrowBook, returnBook }}>
      {children}
    </LibraryContext.Provider>
  );
}

export { LibraryContext, LibraryProvider };
