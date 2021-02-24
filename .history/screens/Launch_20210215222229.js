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

            <Text style={styles.brandName}> MEKO </Text>

            <View style={ styles.mottoWrapper }>
                <Text style={ styles.motto }> Let's help fix your vehicle </Text>
            </View>

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
        width: '100%',
        alignSelf: "center",
        backgroundColor:"#EEFCFC"
    },
    brandName: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: 70,
        height: 100,
        // borderRadius: 100,
    },
    mottoWrapper: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    motto: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 90,
    },
    startButton: {
        backgroundColor: "#4476F6",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 15,
        width: "85%"
    },
    startText: {
        color: "white",
        textAlign: "center"
    },
});