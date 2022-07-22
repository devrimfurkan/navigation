import React from 'react';
import {Button, View} from 'react-native';
import styles from '../utils/scaffold.styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.scaffold}>
      <Button  
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}