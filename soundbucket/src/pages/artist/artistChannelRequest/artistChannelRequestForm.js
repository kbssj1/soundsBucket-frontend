import React, { useState } from 'react';
import * as S from "./styles";
import { Segment, Input, Form, TextArea, Icon } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";

const ArtistChannelRequestForm = ({history}) => {
  const [inputs, setInputs] = useState({});

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

  const requestChannel = () => {
    console.log(inputs);
  }

  return (
    <S.ArtistChannelRequestForm>
      <S.ArtistChannelRequestFormPage>
        <h1>사람들에게 공개해주세요(문구필요)</h1>
        <Segment >
          <h4>아티스트 이름</h4>
          <p>사람들에게 공개되는 아티스트 이름입니다.</p>
          <Input style={{width: "50%", minWidth: "250px"}} placeholder='아티스트 이름' onChange={onChange} name="name" />
        </Segment> 
        <Segment >
          <h4>아티스트 소개</h4>
          <p>자신을 어필해보세요.</p>
          <Form>
            <TextArea placeholder='아티스트 소개' onChange={onChange} name="introduce" />
          </Form>
        </Segment> 
        <Segment >
          <h4>아티스트 이미지</h4>
          <p>자신을 잘 보여줄 수 있는 이미지를 등록해주세요.</p>
          <Segment placeholder >
            <Segment.Inline style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Icon.Group size='large' style={{padding: "10px"}}>
                <Icon size='large' name='file' color='blue' />          
              </Icon.Group>
              <Button primary content="이미지 업로드" />
            </Segment.Inline>
          </Segment>
        </Segment> 
        <Segment >
          <h4>아티스트 영상</h4>
          <p>자신을 잘 보여줄 수 있는 동영상을 등록해주세요.</p>
          <Segment placeholder >
            <Segment.Inline style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Icon.Group size='large' style={{padding: "10px"}}>
                <Icon size='large' name='film' color='blue' />          
              </Icon.Group>
              <Button primary content="동영상 업로드" />
            </Segment.Inline>
          </Segment>
        </Segment> 
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"}}>
          <Button content="신청하기" color="red" onClick={requestChannel} />
        </div>   
      </S.ArtistChannelRequestFormPage>      
    </S.ArtistChannelRequestForm>
  );
};

export default ArtistChannelRequestForm;