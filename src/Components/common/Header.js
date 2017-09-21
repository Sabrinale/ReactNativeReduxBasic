import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (<View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>);
};

const styles = {
    viewStyle: {
        paddingTop: 15,
        paddingBottom: 5,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5   
    },
    textStyle: {
        fontSize: 35,
        
    }
};
export { Header } ;
