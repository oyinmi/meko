import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';


const Launch = ({ navigation }) => {
    return(
        <View style={ styles.container }>

            <Image source={ require('../assets/car 1.jpg') } style={ styles.image} />

            <Text style={ styles.motto }> Let's help fix your vehicle </Text>

            <TouchableOpacity 
        </View>
    );
}