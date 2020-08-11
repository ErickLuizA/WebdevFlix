import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import { FaSpinner } from 'react-icons/fa'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import Bottombar from '../../components/Bottombar'

function Home() {

  const [episode, setEpisode] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      const random = Math.random()
      const randomEpisode = Math.round(random * 10)

      const response = await api.get(`/episodes/${randomEpisode}`)
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
    return (
      <>
      <FaSpinner 
      color="#fff"
      style={{
         position: "absolute", top: "50%", left: "50%", width:"10em", height:"10em", transform: "translate(-50%, -50%)"
        }} />
        <h1 style={{textAlign: "center", color:"#fff"}} >Please refresh the page if necessary</h1>
      </>
    )
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
