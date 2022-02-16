import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { Segment, Table, Input, Loader } from 'semantic-ui-react';
import { Button, Confirm } from '../../../../elemnet/index';
import { useDispatch, useSelector } from 'react-redux';
import { getMediaDetail, updateMediaData, updateMediaContent, deleteMedia } from '../../../../system/redux/artistMediaActions';

const MyArtistWorkDetail = ({history}) => {
  const dispatch = useDispatch();
  const [confirmForm, setConfirmForm] = useState(false);
  const [titleUpdateForm, setTitleUpdateForm] = useState(false);
  const [descriptionUpdateForm, setDescriptionUpdateForm] = useState(false);
  const [inputs, setInputs] = useState({});
  const {mediaDetail, mediaDetailLoading, updateMediaLoading, updateMediaContentLoading, deletingMediaLoading} = useSelector(state => state.artistMediaReducer);

  useEffect(() => {
    const media_id = window.location.pathname.split("/")[5];
    dispatch(getMediaDetail(media_id));
  }, [dispatch]);

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

  const deleteFile = () => {
    const media_id = window.location.pathname.split("/")[5];
    dispatch(deleteMedia({media_id: media_id, history: history, setConfirmForm: setConfirmForm}));
  }

  const updateMediaTitleData = () => {
    const media_id = window.location.pathname.split("/")[5];
    dispatch(updateMediaData({media_id: media_id, key: "title", value: inputs.name}));
    setTitleUpdateForm(false);
  }

  const updateMediaTitleDescription = () => {
    const media_id = window.location.pathname.split("/")[5];
    dispatch(updateMediaData({media_id: media_id, key: "description", value: inputs.description}));
    setDescriptionUpdateForm(false);
  }

  const sendFile = (e) => {
    let file = e.target.files[0];
    const media_id = window.location.pathname.split("/")[5];
    if ( !file )
      return;
    dispatch(updateMediaContent({media_id: media_id, file: file}));
  }

  return (
    <S.MyArtistWorkDetail>
      <Segment loading={mediaDetailLoading}>
        <h3> 상세 정보 </h3>
        {mediaDetail && 
        <div>       
          <Table celled size="small">
            <Table.Body>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  미디어 아이디
                </Table.Cell>
                <Table.Cell>
                  <h3 style={{color: "#283747"}}> {mediaDetail.media_id} </h3>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  제목
                </Table.Cell>
                <Table.Cell>
                  <h3 style={{color: "#283747"}}> {mediaDetail.title} </h3>
                  <p>영상 제목입니다.</p>
                  {titleUpdateForm === false ? <Button content={"변경하기"} onClick={() => {setTitleUpdateForm(true);}} /> : <div>
                    <h5> 변경할 제목</h5>
                    <Input placeholder='제목' name="name" onChange={onChange} />
                    <div style={{padding: "5px"}}><Button content={"취소"} onClick={() => {setTitleUpdateForm(false);}}/><Button content={"확인"} loading={updateMediaLoading} onClick={updateMediaTitleData} /></div>
                  </div>}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  설명
                </Table.Cell>
                <Table.Cell>
                  <h3 style={{color: "#283747"}}> {mediaDetail.description} </h3>
                  <p>영상 설명입니다.</p>
                  {descriptionUpdateForm === false ? <Button content={"변경하기"} onClick={() => {setDescriptionUpdateForm(true);}} /> : <div>
                    <h5> 변경할 설명</h5>
                    <Input placeholder='설명' name="description" onChange={onChange} />
                    <div style={{padding: "5px"}}><Button content={"취소"} onClick={() => {setDescriptionUpdateForm(false);}}/><Button content={"확인"} loading={updateMediaLoading} onClick={updateMediaTitleDescription} /></div>
                  </div>}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  파일 이름
                </Table.Cell>
                <Table.Cell>
                  <p>내부적으로 사용하는 파일 이름입니다.</p>
                  <h3 style={{color: "#283747"}}> {mediaDetail.file_name} </h3>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  파일 변경
                </Table.Cell>
                <Table.Cell>
                  <p>파일을 변경할 수 있습니다.</p>
                  {updateMediaContentLoading === false && <input type="file" id="media" onChange={sendFile} />}
                  {updateMediaContentLoading === true && <div> <Loader active inline /> <h5> 파일을 업로드 하고 있습니다. </h5> </div>}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  재생횟수
                </Table.Cell>
                <Table.Cell>
                  <h3 style={{color: "#283747"}}> {mediaDetail.play_count} </h3>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{width: "150px"}}>
                  생성일
                </Table.Cell>
                <Table.Cell>
                  <h3 style={{color: "#283747"}}> {mediaDetail.created} </h3>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div style={{textAlign: "center"}}>
            <Button primary loading={deletingMediaLoading} content={"파일 삭제"} size={"tiny"} onClick={() => {setConfirmForm(true)}} /> 
          </div>   
        </div>      
        }
      </Segment>
      <Confirm
        open={confirmForm}
        content="이 파일을 완전히 삭제하시겠습니까?"
        onCancel={() => {setConfirmForm(false)}}
        onConfirm={deleteFile}
      />
    </S.MyArtistWorkDetail>
  );
};

export default MyArtistWorkDetail;