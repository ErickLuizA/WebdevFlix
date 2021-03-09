import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import Bottombar from '../../components/Bottombar'
import Spinner from '../../components/Spinner'

function Home() {

  const [episode, setEpisode] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      const response = await api.get('/episodes/29')
      setEpisode(response.data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await api.get('/categories')
      setCategories(response.data)
    })()
  }, [])

  if(episode.length === 0) {
    return <Spinner />
  }

  return (
  	<>
	  	<Navbar />
	  	<Banner
        videoTitle={episode[0].title}
        url={episode[0].link}
        videoDescription={episode[0].description}
      />

      {categories.map(category => {
        return (
          <Carousel
            key={category.id}
            category={category.title}
        />
        )
      })}

      <Footer />
      <Bottombar />
  	</>
  )
}

export default Home
