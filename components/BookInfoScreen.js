import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../FirebaseConfig';
import { LibraryContext } from './LibraryContext';

function BookInfoScreen({ route }) {
  const { bookId } = route.params;
  const [bookDetail, setBookDetail] = useState(null);
  const { borrowed, borrowBook } = useContext(LibraryContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(firestore, 'books', bookId), (document) => {
      setBookDetail(document.data());
    });

    return () => unsubscribe();
  }, [bookId]);

  const handleBorrow = () => {
    if (borrowed.length >= 3) {
      Alert.alert('Borrowing Limit', 'You can borrow up to 3 books at a time.');
    } else {
      borrowBook(bookDetail);
    }
  };

  if (!bookDetail) {
    return <Text>Fetching data</Text>;
  }

  return (
    <View style={{padding: 14}}>
      <Text>{bookDetail.title}</Text>
      <Text>{"\n"}</Text>
        <Text>{bookDetail.rating}</Text>
        <Text>{"\n"}</Text>
      <Text>{bookDetail.writer}</Text>
      <Text>{"\n"}</Text>
      <Text>{bookDetail.summary}</Text>
      <Text>{"\n"}</Text>
      <Button title="Borrow" onPress={handleBorrow} />
    </View>
  );
}

export default BookInfoScreen;
