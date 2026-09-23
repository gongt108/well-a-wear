import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function OutfitDisplay() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <View style={styles.container}>
            <Text>Outfit Display</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});