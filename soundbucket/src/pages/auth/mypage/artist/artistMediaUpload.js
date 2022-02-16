import React, { useState } from 'react';
import * as S from "./styles";
import { Segment, Input, Form, TextArea, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadMedia } from '../../../../system/redux/artistMediaActions';

const ArtistMediaUpload = ({history}) => {
  const [inputs, setInputs] = useState({title: "제목", description: "설명"});
  const dispatch = useDispatch();
  const { uploadMediaLoading } = useSelector(state => state.artistMediaReducer);

  const onChange = (e, data) => {
    const newValue = data.value;
    const inputName = data.name;
    setInputs((prevState)=> {
      return({
        ...prevState,
        [inputName]: newValue
      });
    });
  }

  const sendFile = (e) => {
    let file = e.target.files[0];
    if ( !file )
      return;
    dispatch(uploadMedia({file: file, title: inputs.title, description: inputs.description}));
  }

  return (
    <S.MyArtistMediaUpload>
      <Segment >
        <h4>파일 이름</h4>
        <Input style={{width: "50%", minWidth: "250px"}} placeholder='파일 이름' onChange={onChange} name="title" value={inputs.title} />
        <h4>파일 설명</h4>
        <Form>
          <TextArea placeholder='파일 설명' onChange={onChange} name="description" value={inputs.description} />
        </Form>
        <h4>아티스트 영상</h4>
        <Segment loading={uploadMediaLoading} placeholder >
          <Segment.Inline style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Icon.Group size='large' style={{padding: "10px"}}>
              <Icon size='large' name='film' color='blue' />          
            </Icon.Group>
            <input type="file" id="media" onChange={sendFile} hidden/>
            <label for="media">파일 업로드</label>
          </Segment.Inline>
        </Segment>
      </Segment> 
    </S.MyArtistMediaUpload>
  );
};

export default ArtistMediaUpload;