import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function MiniCalendar({ markedDates }) {

  const [datesWithOutfits, setDatesWithOutfits] = useState();

  useEffect(() => {
    const retrievedDatesWithOutfits = markedDates.reduce((acc, date) => {
      acc[date] = { 
        marked: true, 
        color: '#4fc3f7', 
        textColor: 'white', 
        startingDay: true, 
        endingDay: true
      };
      return acc;
    }, {});

    setDatesWithOutfits(retrievedDatesWithOutfits);
  }, [markedDates]);

  return (
    <View style={styles.container}>
      <Calendar
        markingType={'period'}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
          width: 350,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
      
        }}
        markedDates={datesWithOutfits}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markedDate: {
    backgroundColor: '#4fc3f7',
    color: 'white',
  }
});