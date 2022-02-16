import React, { useEffect } from 'react';
import * as S from "./styles";
import { Segment, Table } from 'semantic-ui-react';
import { Button } from '../../../../elemnet/index';
import { useDispatch, useSelector } from 'react-redux';
import { getMediaList } from '../../../../system/redux/artistMediaActions';

const MyArtistWorks = ({history}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.artistMediaReducer);

  useEffect(() => {    
    dispatch(getMediaList());
  }, [dispatch]);

  return (
    <S.MyArtistWorks>
      <Segment loading={state.mediaLoading}>
        <h3> 작품 정보 </h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="2">아이디</Table.HeaderCell>
              <Table.HeaderCell width="6">제목</Table.HeaderCell>     
              <Table.HeaderCell width="2">재생횟수</Table.HeaderCell>
              <Table.HeaderCell width="2">상세보기</Table.HeaderCell>     
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {state.media.map((column, index) => {
                return (
                  <Table.Row key={index} >
                    <Table.Cell >{column.media_id}</Table.Cell>
                    <Table.Cell >{column.title}</Table.Cell>
                    <Table.Cell >{column.play_count}</Table.Cell>
                    <Table.Cell ><Button content={"보기"} size={"tiny"} onClick={() => {history.push("/kr/mypage/artist/works/" + column.media_id)}} /></Table.Cell>
                  </Table.Row>);
              })}
          </Table.Body>
        </Table>
        <div style={{textAlign: "center"}}>
          <Button primary content={"작품 업로드하기"} onClick={() => {history.push("/kr/mypage/artist/works/new")}} />
        </div>      
      </Segment>
    </S.MyArtistWorks>
  );
};

export default MyArtistWorks;