import React, {Component} from "react"
import { Router, Scene, Stack, Tabs } from "react-native-router-flux"
import { Icon } from 'native-base'

import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import ForgotPassword from "./components/ForgotPassword"
import Profile from './components/Profile'
import Champions from './components/Champions'

class RouterComponent extends Component{
    render() {
       return( 
        <Router>
            <Scene key="root">
                <Scene 
                    key="login"
                    component={LoginForm}
                    hideNavBar={false}
                    title="Login"
                />
                <Scene
                    key="register"
                    component={RegisterForm}
                    hideNavBar={false}
                    title="Register"
                />
                <Scene
                    key="forgotPassword"
                    component={ForgotPassword}
                    hideNavBar={false}
                    title="Forgot Password"
                />

                <Scene
                    key="main"
                    hideNavBar
                    panHandlers={null}
                >
                    <Tabs key="tabbar">
                        <Scene
                            key="profile"
                            title="Profile"
                            component={Profile}
                            icon={() => <Icon name="person" />}
                        />
                        <Scene
                            key="champions"
                            title="Champions"
                            component={Champions}
                            icon={() => <Icon name="people" />}
                        />
                    </Tabs>
                </Scene>

            </Scene>
        </Router>
       );
    }
}

export default RouterComponent;