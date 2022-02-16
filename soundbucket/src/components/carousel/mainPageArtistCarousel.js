import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Image, Label } from 'semantic-ui-react';

const MainPageArtistCarousel = ({title, onClick}) => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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
    <div style={{marginBottom: "2rem", maxWidth: "1200px", margin: "auto"}}>
      <h3 style={{padding: "1.5vw"}}>{title}</h3>
      <Slider {...settings}>
        {[0,1,2,3,4,5,6,7,8].map((column, index) => {
          return (
          <div key={index}>
            <Card onClick={onClick} style={{margin: "5px"}}>
              <Image src='/resources/img/artist.png' wrapped ui={false} /> 
              <Card.Content>
                <Card.Header>곡 이름</Card.Header>
                <Card.Meta>
                  <span className='date'>아티스트 이름</span>
                </Card.Meta>
                <Card.Description>
                  <Label color={"red"} key={"red"} content="힙합" />
                  <Label color={"blue"} key={"blue"} content="강력추천" />
                </Card.Description>
              </Card.Content>
            </Card>
          </div>);
        })}
      </Slider>
    </div>
  );
};

export default MainPageArtistCarousel;