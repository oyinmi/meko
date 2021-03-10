/* jshint esversion: 6 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import brandImage from "../assets/brandImage.jpg";


const Launch = ({ navigation }) => {
    return(
        <View style={ styles.container }>

            <Image style={styles.brandImage} source={brandImage} />

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
        backgroundColor:"#EEFCFC",
        paddingTop: 250,
    },
    brandImage: {
        width: 300,
        height: 150,
        paddingTop: 100,
        paddingBottom:50,
    },
    brandName: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 25,
    },
    mottoWrapper: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        paddingBottom: 150,
    },
    motto: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    startButton: {
        backgroundColor: "#36DBE5",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 20,
        width: "85%"
    },
    startText: {
        color: "white",
        textAlign: "center",
        fontWeight: 'bold',
    },
});