import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../FirebaseConfig';

function LibraryScreen({ navigation }) {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'books'), (querySnapshot) => {
      const bookArray = [];
      querySnapshot.forEach((document) => {
        bookArray.push({ ...document.data(), id: document.id });
      });
      setLibrary(bookArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <FlatList
        style={{ padding: 16 }}
        data={library}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ padding: 14, marginBottom: 12, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }} onPress={() => navigation.navigate('BookInfo', { bookId: item.id })}>
            <Text>{item.title}</Text>
            <Text>{item.writer}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default LibraryScreen;
