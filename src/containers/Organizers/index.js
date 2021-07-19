import React from 'react'
import { ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SingleItem from '../../components/Home/SingleItem'
import Block from '../../components/UI/Block'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'


export default () => {

  return (
    <Block block bgGray>
      <Navbar title='Your Organiser' />

      <ScrollView style={common.mainContainer}>

        <Block row spaceBetween wrap>
          <SingleItem
            text="My Will"
            iconName="list-alt"
            onPress={() => Actions.myWill()}
          />

          <SingleItem
            text="Pension"
            iconName="money"
            onPress={() => Actions.pensionDetails()}
          />

          <SingleItem
            text="Life Policy"
            iconName="file-powerpoint-o"
            onPress={() => Actions.lifePolicyDetails()}
          />

          <SingleItem
            text="Mortgage"
            iconName="home"
            onPress={() => Actions.mortgage()}
          />

          <SingleItem
            text="Home Insurance"
            iconName="key"
            onPress={() => Actions.homeInsurance()}
          />
        </Block>
      </ScrollView>

    </Block>
  )
}