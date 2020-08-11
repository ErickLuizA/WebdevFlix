import React, { useEffect } from 'react'
import { VideoCardGroupContainer, Title, SliderContainer } from './styles'
import Slider from 'react-slick'
import VideoCard from './components/VideoCard'
import { useState } from 'react'
import api from '../../services/api'

function Carousel({ category }) {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    (async () => {
      const response = await api.get(`/category?category=${category}`)
      setVideos(response.data)
    })()
  }, [category])

  const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
  }

  const categoryTitle = category.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())


  return (
    <VideoCardGroupContainer>
      <Title>
        {categoryTitle}
      </Title>
      <SliderContainer>
        <Slider {...settings} >
          {videos.map((video) => {
            return (
              <VideoCard 
              key={video.id}
              videoTitle={video.title}
              videoURL={video.link}
              />
              )
          })}
        </Slider>
      </SliderContainer>
    </VideoCardGroupContainer>
  );
}

export default Carousel
