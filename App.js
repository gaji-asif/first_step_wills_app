import React, { useEffect } from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { MenuProvider } from 'react-native-popup-menu'
import SplashScreen from 'react-native-splash-screen'
import Routes from './src/routes'
import auth from './src/utilities/auth'

let backButtonPressedOnceToExit = false

export default () => {

  useEffect(() => {
    checkIsLogin()
    BackHandler.addEventListener('hardwareBackPress', onBackPress)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }
  }, [])


  const checkIsLogin = async () => {
    const userDetails = await auth.getUserDetails('userDetails')

    if (userDetails && userDetails.token) {
      await Actions.home()
      setTimeout(() => {
        SplashScreen.hide()
      }, 500)
    } else {
      SplashScreen.hide()
    }

    // SplashScreen.hide()
  }



  const onBackPress = () => {
    if (backButtonPressedOnceToExit) BackHandler.exitApp()
    else {
      if (Actions.currentScene === 'login' || Actions.currentScene === 'home') {
        backButtonPressedOnceToExit = true
        ToastAndroid.show('Press back button again to exit', ToastAndroid.SHORT)
        setTimeout(() => { backButtonPressedOnceToExit = false }, 2000)
        return true
      }
    }
  }

  return (
    <MenuProvider>
      <Routes />
    </MenuProvider>
  )
}