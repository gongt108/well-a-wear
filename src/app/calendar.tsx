import { ScrollView, StyleSheet, Text } from "react-native";
import MiniCalendar from "../components/MiniCalendar";
import { globalStyles } from "../styles/global";

const markedDates = ['2026-08-01', '2026-08-05', '2026-09-10'];

export default function CalendarScreen() {
  return (
    <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title}>Calendar</Text>
        <Text style={globalStyles.empty}>No upcoming events.</Text>
        <MiniCalendar markedDates={markedDates} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markedDateColor: {
    backgroundColor: '#4fc3f7',

  }
});