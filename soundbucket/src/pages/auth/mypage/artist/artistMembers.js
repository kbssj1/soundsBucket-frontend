import React from 'react';
// import * as S from "../styles";
import { Segment, Table } from 'semantic-ui-react';
import { Button } from '../../../../elemnet/index';

const MyArtistMembers = () => {
  return (
    <div>
      <Segment>
        <h3> 나의 팀 멤버 </h3>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>아티스트 이름</Table.HeaderCell>
              <Table.HeaderCell>상세보기</Table.HeaderCell>          
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>이름 1</Table.Cell>
              <Table.Cell><Button primary content={"상세보기"} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>이름 2</Table.Cell>
              <Table.Cell><Button primary content={"상세보기"} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Segment>
        <h3> 내가 속한 팀 </h3>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>아티스트 이름(팀 이름)</Table.HeaderCell>
              <Table.HeaderCell>상세보기</Table.HeaderCell>          
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>이름 1</Table.Cell>
              <Table.Cell><Button primary content={"상세보기"} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>이름 2</Table.Cell>
              <Table.Cell><Button primary content={"상세보기"} /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </div>
  );
};

export default MyArtistMembers;