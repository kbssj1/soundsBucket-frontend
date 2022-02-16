import React, { useEffect } from 'react';
import { Modal, Button, Icon, Label } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getArtistDetail } from '../../../system/redux/artistActions';
import { useDispatch, useSelector } from 'react-redux';

const PreviewChannelDetail = ({open, onClose}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.artistReducer.artist);

  useEffect(() => {    
    dispatch(getArtistDetail({artist_id: 1}));
  }, [dispatch]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{width: "90%", maxWidth: "500px"}}
    >
      {state && <Carousel showStatus={false} showThumbs={false} showArrows={false} autoPlay={false} >
        <div style={{backgroundColor: "black", color: "white", height: "400px" }} >
          <img style={{height: "300px"}} src={process.env.REACT_APP_IMAGE + state.image} />
          { state.stage_name }
        </div>
        <div style={{backgroundColor: "black", color: "white", height: "400px" }}>
          아티스트 멤버
          { state.members }
        </div>
        <div style={{backgroundColor: "black", color: "white", height: "400px" }}>
          <video controls width="100%">
            <source src={process.env.REACT_APP_MEDIA + "media_0-20210506003644-0.mp4"} type="video/mp4" />
          </video>
        </div>
        <div style={{backgroundColor: "black", color: "white", height: "400px", display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center" }}>
          좋아요를 누르면 이런혜택이 있습니다.
          <br />
          <p>1. 혜택</p>
          <p>2. 혜택</p>
          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='thumbs up' />
              Like
            </Button>
            <Label as='a' basic color='red' pointing='left'>
              { state.like_count }
            </Label>
          </Button> 
        </div>
      </Carousel>}
    </Modal>
  );
};

export default PreviewChannelDetail;