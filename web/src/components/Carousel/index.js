import React from 'react'
import { VideoCardGroupContainer, Title, SliderContainer } from './styles'
import Slider from 'react-slick'
import VideoCard from './components/VideoCard'

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const videos = category.videos;

  const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
  }

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
          <Title>
            {categoryTitle}
          </Title>
      )}
      <SliderContainer>
        <Slider {...settings} >
          {videos.map((video, index) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <VideoCard 
              key={index}
              videoTitle = {video.titulo}
              videoURL = {video.url}
              />
              )
          })}
        </Slider>
      </SliderContainer>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
