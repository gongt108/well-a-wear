import { Link } from 'expo-router';
import { ScrollView, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }}>
        Go to Meals
      </Link>
      <Link href='/calendar' style={{ fontSize: 18, color: '#007bff', marginTop: 10 }}>
        Go to Calendar
      </Link>
    </ScrollView>
  );
}


