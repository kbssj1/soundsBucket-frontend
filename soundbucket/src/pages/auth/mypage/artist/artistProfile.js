import React, { useState } from 'react';
import * as S from "../styles";
import { Table, Input, Image } from 'semantic-ui-react';
import { Button } from '../../../../elemnet/index';

const MyArtistProfile = () => {
  const [artistUpdateForm, setArtistUpdateForm] = useState(false);

  return (
    <S.MyArtistProfile>
      <Table celled padded singleLine>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={{width: "150px"}}>
              아티스트 이름
            </Table.Cell>
            <Table.Cell>
              <h3 style={{color: "#283747"}}>김선진</h3>
              <p>사람들에게 공개되는 아티스트 이름입니다.</p>
              {artistUpdateForm === false ? <Button content={"변경하기"} onClick={() => {setArtistUpdateForm(true);}} /> : <div>
                <h5> 변경할 이름</h5>
                <Input placeholder='이름' />
                <div style={{padding: "5px"}}><Button content={"취소"} onClick={() => {setArtistUpdateForm(false);}}/><Button content={"확인"}/></div>
              </div>}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              아티스트 소개
            </Table.Cell>
            <Table.Cell>
              <h3 style={{color: "#283747", whiteSpace: 'pre-line'}}> 블루베리파이처럼 달콤한 맛과 바삭한 식감으로 모두에게 사랑받는 음악을 만들겠다는 꿈을 가진 팀입니다. </h3>
              <Button content={"변경하기"} onClick={() => {setArtistUpdateForm(true);}} /> 
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              메인이미지
            </Table.Cell>
            <Table.Cell>
              <p>메인이미지를 설정해주세요.</p>
              <Image size="medium" src='/resources/img/artist.png'/>
              <Button style={{margin: "5px"}} content={"변경하기"} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              내가받은 좋아요 수
            </Table.Cell>
            <Table.Cell>
              <h3>20</h3>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="actions">
        {/* <Button content="저장하기" primary/> */}
      </div>
    </S.MyArtistProfile>
  );
};

export default MyArtistProfile;