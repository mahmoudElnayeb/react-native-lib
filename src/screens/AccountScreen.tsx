import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import UserItem from '../components/UserItem';
import { AppIcon } from '../components/AppIcon';
import { ListItemSeparator } from '../components/ListItemSeparator';

export const AccountScreen = () => {
  const Categories = [
    {
      id: 1,
      title: 'My Listings',
      icon: {
        name: 'format-list-bulleted',
        backgroundColor: 'blue',
      },
    },
    {
      id: 2,
      title: 'My Messages',
      icon: {
        name: 'email',
        backgroundColor: 'green',
      },
    },
  ];

  return (
    <View>
      <UserItem
        image={require('../assets/mosh.jpg')}
        title="Mahmoud Elnayeb "
        subTitle="mahmoudElnayeb2014@yahoo.com"
      />

      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={Categories}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={item => (
            <UserItem
              title={item.item.title}
              onPress={item => {
                console.log(item);
              }}
              IconComponent={
                <AppIcon
                  icon={item.item.icon.name}
                  backgroundColor={item.item.icon.backgroundColor}
                  size={50}
                />
              }
            />
          )}
        />
      </View>
      <UserItem
        title="Log Out"
        onPress={item => {
          console.log(item);
        }}
        IconComponent={
          <AppIcon icon="logout" backgroundColor="red" size={50} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});
