import React from 'react'
import { Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SingleItem from '../../components/Home/SingleItem'
import Block from '../../components/UI/Block'
import Navbar from '../../components/Layout/Navbar'
import styles from './styles'

export default () => {

  return (
    <Block>
      <Navbar title="Home" isHome={true} avatar={null} />

      <Image style={styles.imgBg} source={require('../../assets/images/home-bg.jpg')} />


      <Block row spaceBetween wrap padding={[15, 5]} style={styles.mainWrapper}>
        <SingleItem
          text="Contact Us"
          iconName="address-card-o"
          onPress={() => Actions.contact()}
        />

        <SingleItem
          text="News"
          iconName="wpforms"
          onPress={() => Actions.article()}
        />
        
        <SingleItem
          text="Voucher Code"
          iconName="file-text-o"
          onPress={() => Actions.deal()}
        />

        <SingleItem
          text="Faq"
          iconName="question-circle-o"
          onPress={() => Actions.faq()}
        />

        <SingleItem
          text="Your Organiser"
          iconName="calendar"
          onPress={() => Actions.organizers()}
        />
      </Block>

    </Block>
  )
}