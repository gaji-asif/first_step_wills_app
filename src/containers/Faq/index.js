import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { List } from 'react-native-paper'
import Block from '../../components/UI/Block'
import Placeholder from '../../components/UI/Placeholder'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import { colors } from '../../styles/theme'
import { getFaqService } from '../../api/faq'
import { FullPageLoader } from '../../components/UI/Loader'


export default () => {
  const [faqs, setFaqs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    getFaqService((res, err) => {
      setIsLoading(false)
      if (res) {
        setFaqs(res.data.data)
      }

    })
  }

  return (
    <Block block bgGray>
      <Navbar title='FAQ' />

      {
        !isLoading ?

          <ScrollView style={common.mainContainer}>
            <Block block>

              {
                faqs && faqs.length > 0 ?
                  <List.AccordionGroup>
                    {
                      faqs.map((faq, index) =>
                        <List.Accordion
                          key={index}
                          title={faq.question_title}
                          id={index + 1}
                          style={styles.accordion}>
                          <List.Item
                            titleNumberOfLines={20}
                            style={styles.item}
                            title={faq.answer} />
                        </List.Accordion>
                      )
                    }
                  </List.AccordionGroup> :

                  <Placeholder text="No FAQ is available" />
              }
            </Block>

          </ScrollView> :
          <FullPageLoader />
      }
    </Block>
  )
}

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: colors.WHITE,
    borderRadius: 6,
    marginBottom: 5,
  },
  item: {
    paddingTop: 0,
  },
})