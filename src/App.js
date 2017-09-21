import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    // a hook . first firebase setup before the app render
    //mark one of the quotation marks and click command + d a couple times to mark all of them
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAo-7VyHuNmFLOvMCq2W8W530cqnDcov2U',
            authDomain: 'authentication-e2e31.firebaseapp.com',
            databaseURL: 'https://authentication-e2e31.firebaseio.com',
            projectId: 'authentication-e2e31',
            storageBucket: 'authentication-e2e31.appspot.com',
            messagingSenderId: '265219403955'
        });
        // whether or not user sing in or out
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            } 
        });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
        return (
            <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
        );
            case false:
            return <LoginForm />;
            default: 
            return <Spinner />;
        }     
    }

    render() {
        return (
            <View>
                <Header headerText='authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
