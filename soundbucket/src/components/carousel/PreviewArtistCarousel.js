import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Image, Icon, Label } from 'semantic-ui-react'

const PreviewArtistCarousel = ({artist, onClick}) => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  };

  return (
    <div style={{marginBottom: "2rem"}}>
      <Slider {...settings}>
        {artist.map((column, index) => {
          const {image, stage_name, like_count} = column;
          return (
          <div key={index}>
            <Card style={{margin: "5px"}} onClick={onClick}>
              <Image src={process.env.REACT_APP_IMAGE + image} wrapped ui={false} /> 
              <Card.Content>
                <Card.Header>{stage_name}</Card.Header>
                {/* <Card.Meta>
                  <span className='date'>아티스트 이름</span>
                </Card.Meta>
                <Card.Description>
                  <Label color={"red"} key={"red"} content="힙합" />
                  <Label color={"blue"} key={"blue"} content="강력추천" />
                </Card.Description> */}
              </Card.Content>
              <Card.Content extra>
                <Icon name='thumbs up'/> {like_count}
              </Card.Content>
            </Card>
          </div>);
        })}
      </Slider>
    </div>
  );
};

export default PreviewArtistCarousel;