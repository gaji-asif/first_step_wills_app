import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Toast from 'react-native-simple-toast'
import ImagePicker from 'react-native-image-crop-picker'
import { PrimaryBtn } from '../../components/UI/Button'
import { InputWithLabel } from '../../components/UI/TextInput'
import Block from '../../components/UI/Block'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import { SingleImagePicker } from '../../components/UI/ImagePicker'
import { myWillFormService } from '../../api/will'
import { Actions } from 'react-native-router-flux'
import { SinglePicker } from '../../components/UI/Picker'

export default () => {
  const [willType, setWillType] = useState('')
  const [willType2, setWillType2] = useState('')
  const [storageNo2, setStorageNo2] = useState('')
  const [storageNo, setStorageNo] = useState('')
  const [uploadCopyPath, setUploadPath] = useState('')
  const [uploadCopy, setUploadCopy] = useState({})
  const [isLoading, setIsLoading] = useState(false)


  const onPressImage = () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      setUploadPath(image.path)
      setUploadCopy({
        uri: image.path,
        width: image.width,
        height: image.height,
        type: image.mime,
        name: image.path,
      })
    })
  }

  const onFormSubmit = () => {
    const willOb ={
      willType,
      storageNo,
      willType2,
      storageNo2,
      uploadCopy,
    }

    setIsLoading(true)

    myWillFormService(willOb, (res, err) => {
      setIsLoading(false)
      if (err) {
        return Toast.show(err.data.message || 'Something went wrong!')
      }

      Toast.show(res.data.data)
      Actions.home()
    })
  }

  return (
    <Block block bgGray>
      <Navbar title='My Will' />

      <ScrollView style={common.mainContainer}>
        
        <Block margin={[0, 0, 10]}>
          <SinglePicker
            selectedValue={willType}
            onValueChange={value => setWillType(value)}
            label="Type"
            list={[
              { name: 'Will', value: 'Will' },
              { name: 'LPA', value: 'LPA' },
            ]} />
        </Block>


        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter storage number"
            label="Storage number"
            value={storageNo}
            onChangeText={value => setStorageNo(value)}
          />
        </Block>
        
        <Block margin={[0, 0, 10]}>
          <SinglePicker
            selectedValue={willType2}
            onValueChange={value => setWillType2(value)}
            label="Type"
            list={[
              { name: 'Will', value: 'Will' },
              { name: 'LPA', value: 'LPA' },
            ]} />
        </Block>

        <Block margin={[0, 0, 10]}>
          <InputWithLabel
            placeholder="Enter storage number"
            label="Storage number"
            value={storageNo2}
            onChangeText={value => setStorageNo2(value)}
          />
        </Block>


        <Block margin={[0, 0, 10]}>
          <SingleImagePicker
            text="Upload copy"
            onPress={onPressImage}
            imagePath={uploadCopyPath}
          />
        </Block>

        <Block padding={[10, 0, 50]}>
          <PrimaryBtn loading={isLoading} icon="check-bold" btnText="Submit" onPress={onFormSubmit} />
        </Block>
      </ScrollView>
    </Block>
  )
}