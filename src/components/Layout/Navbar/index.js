import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Block from '../../UI/Block'
import Text from '../../UI/Text'
import { colors } from '../../../styles/theme'
import { Actions } from 'react-native-router-flux'
import { logoutService } from '../../../api/authentication'

export default ({ title, isHome, avatar }) => {


    const onPressLogout = async () => {
        await logoutService()
        await Actions.login()
    }

    return (
        <LinearGradient colors={[colors.SECONDARY, colors.PRIMARY]}>
            <Block width row center spaceBetween padding={[20, 15]}>
                <Block row center>
                    {
                        isHome ?
                            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} /> :
                            <TouchableOpacity onPress={() => Actions.pop()} style={styles.icon}>
                                <AntDesign name='left' color={colors.SECONDARY} size={18} />
                            </TouchableOpacity>
                    }

                    <Text white h3 style={styles.name}>{title}</Text>
                </Block>

                {
                    isHome &&
                    <Menu>
                        <MenuTrigger
                            children={
                                <Avatar.Image
                                    size={35}
                                    source={avatar ? { uri: avatar } : require('../../../assets/images/avatar.png')} />
                            } />
                        <MenuOptions style={styles.dropdownContainer}>
                            <MenuOption onSelect={() => Actions.contact()} >
                                <Text poppinsMedium>Contact</Text>
                            </MenuOption>
                            <MenuOption onSelect={() => Actions.article()} >
                                <Text poppinsMedium>Article</Text>
                            </MenuOption>
                            <MenuOption onSelect={onPressLogout} >
                                <Text poppinsBold>Logout</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                }
            </Block>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10,
    },
    name: {
        fontFamily: 'Poppins-Medium'
    },
    icon: {
        backgroundColor: colors.WHITE,
        marginRight: 10,
        padding: 4,
        borderRadius: 6,
    },
    dropdownContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})