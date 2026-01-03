import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserItem from '../components/UserItem';
import { ListItemSeparator } from '../components/ListItemSeparator';

export const MessagesScreen = () => {
  const messages = [
    {
      id: '1',
      title: 'Message 1',
      description: 'This is the first message',
      Image: require('../assets/mosh.jpg'),
    },
    {
      id: '2',
      title: 'Message 2',
      description: 'This is the second message',
      Image: require('../assets/mosh.jpg'),
    },
    {
      id: '3',
      title: 'Message 3',
      description: 'This is the third message',
      Image: require('../assets/mosh.jpg'),
    },
  ];
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <UserItem
            title={item.title}
            subTitle={item.description}
            image={item.Image}
            onPress={() => console.log('Item is ', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </SafeAreaView>
  );
};
