import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Block from '../../components/UI/Block'
import Navbar from '../../components/Layout/Navbar'
import common from '../../styles/common'
import { getArticleService } from '../../api/article'
import { FullPageLoader } from '../../components/UI/Loader'
import { List } from 'react-native-paper'
import Placeholder from '../../components/UI/Placeholder'

export default () => {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    getArticleService((res, err) => {
      setIsLoading(false)
      if (res) {
        setArticles(res.data.data)
        // setArticles([])
      }

    })
  }


  return (
    <Block block bgGray>
      <Navbar title='News' />

      {
        !isLoading ?

          <ScrollView style={common.mainContainer}>

            {
              articles && articles.length > 0 ?

                articles.map((article, index) =>
                  <Block block bgWhite style={common.container} key={index}>
                    <List.Item
                      title={article.article_title}
                      description={article.article_des}
                    />
                  </Block>) :

                <Placeholder text="No article is available" />
            }

          </ScrollView> :
          <FullPageLoader />
      }
    </Block>
  )
}
