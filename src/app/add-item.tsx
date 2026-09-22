import { globalStyles } from '@/styles/global';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function AddItemScreen() {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() === '') {
      Alert.alert('Error', 'Please enter an item name.');
      return;
    }

    // Here you would typically add the item to your state or database
    console.log('Item added:', itemName);
    setItemName('');
    router.back(); // Navigate back to the previous screen
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add New Item</Text>
      <TextInput
        // style={globalStyles.input}
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TouchableOpacity  onPress={handleAddItem}>
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}
