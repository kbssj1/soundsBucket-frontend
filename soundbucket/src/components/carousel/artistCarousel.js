import React  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Image, Label } from 'semantic-ui-react';

const ArtistCarousel = ({title, showRank, onClick}) => {

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
      <h3 style={{padding: "1.5vw"}}>{title}</h3>
      <Slider {...settings}>
        {[0,1,2,3,4,5,6,7,8].map((column, index) => {
          return (
          <div key={index}>
            <Card onClick={onClick} style={{margin: "5px"}}>
              {showRank && <h2 style={{position:"absolute", color: "white", zIndex: "10000", padding: "5px", fontSize: "1.4rem"}}> { index+1 }등</h2>}
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

export default ArtistCarousel;