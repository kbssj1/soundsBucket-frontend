import React from 'react';
import * as S from "./styles";
import { Table, Segment, Progress } from 'semantic-ui-react';
import { Button } from '../../../elemnet/index';

const MyArtist = ({history}) => {

  return (
    <S.MyArtist>
      <Table celled padded singleLine>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={{width: "150px"}}>
              내가 좋아요를 누른 아티스트
            </Table.Cell>
            <Table.Cell>
              <p>리스트</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Segment >
        <h3>펀딩</h3>  
        <hr />
        <S.FundingList>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>이름</Table.HeaderCell>
                <Table.HeaderCell>펀딩률</Table.HeaderCell>
                <Table.HeaderCell>상태</Table.HeaderCell>
                <Table.HeaderCell>상세보기</Table.HeaderCell>             
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>이름1</Table.Cell>
                <Table.Cell><Progress style={{margin: "0px"}} percent={71} color={"blue"} progress='percent' /></Table.Cell>
                <Table.Cell>펀딩진행중</Table.Cell>
                <Table.Cell><Button content={"보기"} size={"tiny"} onClick={() => {history.push("/kr/mypage/my_artist/0")}} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>이름2</Table.Cell>
                <Table.Cell><Progress style={{margin: "0px"}} percent={100} color={"blue"} progress='percent' success={true} /></Table.Cell>
                <Table.Cell>펀딩완료</Table.Cell>
                <Table.Cell><Button content={"보기"} size={"tiny"} onClick={() => {history.push("/kr/mypage/my_artist/0")}} /></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>이름3</Table.Cell>
                <Table.Cell><Progress style={{margin: "0px"}} percent={91} color={"blue"} progress='percent' /></Table.Cell>
                <Table.Cell>펀딩진행중</Table.Cell>
                <Table.Cell><Button content={"보기"} size={"tiny"} onClick={() => {history.push("/kr/mypage/my_artist/0")}} /></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </S.FundingList>

      </Segment>  
    </S.MyArtist>
  );
};

export default MyArtist;