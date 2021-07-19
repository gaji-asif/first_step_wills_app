import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../containers/Auth/Login'
import Register from '../containers/Auth/Register'
import ResetPassword from '../containers/Auth/ResetPassword'
import ForgotPassword from '../containers/Auth/ForgotPassword'
import PasswordVerify from '../containers/Auth/PasswordVerify'
import Home from '../containers/Home'
import Contact from '../containers/Contact'
import Article from '../containers/Article'
import Deal from '../containers/Deal'
import Faq from '../containers/Faq'
import Organizers from '../containers/Organizers'
import MyWill from '../containers/MyWill'
import PensionDetails from '../containers/PensionDetails'
import LifePolicyDetails from '../containers/LifePolicyDetails'
import Mortgage from '../containers/Mortgage'
import HomeInsurance from '../containers/HomeInsurance'

export default ({ backAndroidHandler }) => {
    return (
        <Router backAndroidHandler={backAndroidHandler}>
            <Scene key="root">
                <Scene
                    
                    key="login"
                    component={Login}
                    hideNavBar
                />
                
                <Scene
                    
                    key="register"
                    component={Register}
                    hideNavBar
                />

                <Scene
                
                    key="resetPassword"
                    component={ResetPassword}
                    hideNavBar
                />

                <Scene
                    
                    key="forgotPassword"
                    component={ForgotPassword}
                    hideNavBar
                />

                <Scene
                
                    key="passwordVerify"
                    component={PasswordVerify}
                    hideNavBar
                />

                <Scene
                    
                    key="home"
                    component={Home}
                    hideNavBar
                />

                <Scene
                    
                    key="contact"
                    component={Contact}
                    hideNavBar
                />

                <Scene
                    
                    key="article"
                    component={Article}
                    hideNavBar
                />

                <Scene
                    
                    key="deal"
                    component={Deal}
                    hideNavBar
                />

                <Scene
                    
                    key="faq"
                    component={Faq}
                    hideNavBar
                />

                <Scene
                    
                    key="organizers"
                    component={Organizers}
                    hideNavBar
                />

                <Scene
                    
                    key="myWill"
                    component={MyWill}
                    hideNavBar
                />

                <Scene
                    
                    key="pensionDetails"
                    component={PensionDetails}
                    hideNavBar
                />

                <Scene

                    key="lifePolicyDetails"
                    component={LifePolicyDetails}
                    hideNavBar
                />

                <Scene
                    
                    key="mortgage"
                    component={Mortgage}
                    hideNavBar
                />

                <Scene
                    
                    key="homeInsurance"
                    component={HomeInsurance}
                    hideNavBar
                />
            </Scene>
        </Router>
    )
}