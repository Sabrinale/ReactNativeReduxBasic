import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};
 const styles = {
     containerStyle: {
        padding: 5,
         borderBottomWidth: 1,
         backgroundColor: '#fff',
         justifyContent: 'flex-start',
         flexDirection: 'row',
         borderColor: '#ddd',
         position: 'relative',
     },
     
 };
 // export { CardSection : CardSection } nhung vi es6 nen bo
export { CardSection };
// props.children la thua huong gia tri cua ong noi ! chu ko phai tu ba ba