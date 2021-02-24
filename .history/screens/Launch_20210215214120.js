/* jshint esversion: 6 */

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

            <TouchableOpacity style={ styles.startButton }>
               <Text style={ styles.startText } onPress={() => navigation.navigate('Signup')}> Get Started </Text>
            </TouchableOpacity>

        </View>
    );
}


export default Launch;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        alignSelf: "center",
    },
    image: {
        width: 100,
        height: 100,
        // borderRadius: 100,
    },
    : {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
});