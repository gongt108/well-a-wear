import { ScrollView, Text } from "react-native";
import MiniCalendar from "../components/MiniCalendar";
import { globalStyles } from "../styles/global";

export default function CalendarScreen() {
  return (
    <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title}>Calendar</Text>
        <Text style={globalStyles.empty}>No upcoming events.</Text>
        <MiniCalendar />

    </ScrollView>
  );
}
