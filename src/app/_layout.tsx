import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack screenOptions={{ 
    headerStyle: { backgroundColor: 'colors.header' },
    headerTintColor: 'colors.textPrimary'
   }} > 
    <Stack.Screen name="index" options={{ headerShown: false, title: 'Home'  }} />
    <Stack.Screen name="meals" options={{title: 'Meals'}} />
    <Stack.Screen name="calendar" options={{title: 'Calendar'}} />
    <Stack.Screen name="add-item" options={{title: 'Add Item'}} />
  </Stack>);
}
