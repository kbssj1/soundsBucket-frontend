import React, { useEffect, useState } from 'react';
import { Segment, Input, Dropdown, Comment } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";
import * as S from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { getArtistTalkList, uploadArtistTalk, deleteArtistTalk } from '../../../system/redux/artistTalkActions';

const ArtistFeed = ({history}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.artistTalkReducer);
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

  useEffect(() => {    
    dispatch(getArtistTalkList());
  }, [dispatch]);

  const uploadTalk = () => {
    dispatch(uploadArtistTalk(inputs));
  }

  const deleteTalk = (talk_id) => {
    dispatch(deleteArtistTalk({talk_id: talk_id}));
  }

  return (
    <S.ArtistFeed>
      <Segment >
        <h4>포스트 쓰기</h4>
        <Input style={{width: "100%"}} onChange={onChange} name="talk" transparent icon='edit' iconPosition='left' placeholder='남겨보세요...' />
        <hr />
        <div>
          <Button onClick={uploadTalk} content={"전송"} primary />
        </div>
      </Segment>
      {state.artistTalkList.map((data, index) => {
          const { talk_id, created, talk, talker_name } = data;
          return (
            <div style={{marginBottom : "20px"}} key={index}>
              <Segment>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <div style={{position: "absolute", right: "10px"}}>
                    <Dropdown text='Actions'>
                      <Dropdown.Menu>
                        <Dropdown.Item icon='trash' text='Delete' onClick={() => {deleteTalk(talk_id);}} />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <h4>{talker_name}</h4>
                    <label>{created}</label>
                  </div>
                  <div style={{paddingTop: "30px"}}>
                    {talk}
                  </div>
                  {/* <hr />
                  <Comment.Group>
                    <Comment>
                      <Comment.Content>
                        <Comment.Author as='a'>김선진</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          반갑습니다. 안녕하세요.
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>Delete</Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group> */}
                  <div style={{marginTop: '20px'}}>
                    <Input style={{width: "100%"}} action={{color: 'blue',content: '남기기'}} placeholder='남겨보세요' />
                  </div>
                </div>
              </Segment>
            </div>);
          })}
    </S.ArtistFeed>
  );
};

export default ArtistFeed;