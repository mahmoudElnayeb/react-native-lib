import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../config';
import { AppIcon } from './AppIcon';

export default function UserItem({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  size,
}: {
  image?: any;
  title?: string;
  subTitle?: string;
  IconComponent?: React.ReactNode;
  size?: number;
  onPress?: (item: any) => void;
}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor={colors.lightGray}
    >
      <>
        {image && <AppIcon image={image} size={size} />}
        {IconComponent}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subTitle: {
    color: colors.gray,
    fontSize: 17,
  },
});
