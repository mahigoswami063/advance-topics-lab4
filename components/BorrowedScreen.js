import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { LibraryContext } from './LibraryContext';

function BorrowedScreen() {
  const { borrowed, returnBook } = useContext(LibraryContext);

  return (
    <View style={{ margin: 14 }}>
      <FlatList
        data={borrowed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{"\n"}</Text>
            <Text>{item.writer}</Text>
            <Text>{"\n"}</Text>
            <Button title="Return" onPress={() => returnBook(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

export default BorrowedScreen;
