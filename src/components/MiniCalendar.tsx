import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function MiniCalendar() {
  return (
    <View>
      <Text>Mini Calendar</Text>
      <Calendar
        onDayPress={day => {
          console.log('selected day', day);
        }}
        style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 350,
    borderRadius: 10,
  }}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}