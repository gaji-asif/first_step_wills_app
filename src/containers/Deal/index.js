import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-simple-toast'
import { PrimaryBtn } from '../../components/UI/Button'
import { InputWithLabel } from '../../components/UI/TextInput'
import Block from '../../components/UI/Block'
import Text from '../../components/UI/Text'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import { postDealCodeService, getDealCodeService } from '../../api/deal'
import { validateDeal } from './Validate'
import { FullPageLoader } from '../../components/UI/Loader'

export default () => {
  const [showAccessCode, setShowAccessCode] = useState(false)
  const [accessCode, setAccessCode] = useState('')

  const [dealNo, setDealNo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    getDealCodeService((res, err) => {

      setLoader(false)
      if(res.data && res.data.data) {
        setAccessCode(res.data.data)
        setShowAccessCode(true)
      }
    })
  }, [])


  const onPressSubmit = () => {
    if (validateDeal(dealNo)) {
      setIsLoading(true)
      postDealCodeService(dealNo, (res, err) => {

        setIsLoading(false)
        if (res.data.status = 401) {
          return Toast.show(res.data.data)
        } else if (res.data.status = 200) {
          setAccessCode(res.data.data)
          setShowAccessCode(true)
        } else if (err) {
          return Toast.show('Something went wrong')
        }

      })
    }
  }

  return (
    <Block block bgGray>
      <Navbar title='Voucher Code' />
      {
        !loader ?
          <ScrollView style={common.mainContainer}>

            {
              showAccessCode ?
                <Block center margin={[20, 15, 22]} bgWhite ra padding={[50, 10]}>
                  <Text h2 center>Your access code is</Text>
                  <Text h1 bold center style={{
                    marginTop: 8
                  }}>{accessCode}</Text>
                </Block> :
                <>
                  <Block margin={[0, 0, 10]}>
                    <InputWithLabel
                      placeholder="Enter your deal id"
                      label="Deal ID"
                      value={dealNo}
                      onChangeText={value => setDealNo(value)}
                    />
                  </Block>

                  <Block padding={[0, 0, 50]}>
                    <PrimaryBtn loading={isLoading} icon="check-bold" btnText="Submit" onPress={onPressSubmit} />
                  </Block>
                </>

            }
          </ScrollView> :
          <FullPageLoader />
      }
    </Block>
  )
}