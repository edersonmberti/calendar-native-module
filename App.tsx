import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CalendarModule from './src/CalendarModule';

const App: React.FC = () => {
  const [text, setText] = useState<String>('');

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button
        title="getName"
        onPress={() => {
          CalendarModule.createCalendarEvent('Aula de inglês', 'English Now');
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
