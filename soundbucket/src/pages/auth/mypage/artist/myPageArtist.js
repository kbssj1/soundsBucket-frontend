import React from 'react';
import * as S from "../styles";
import { Segment } from 'semantic-ui-react';
import { Button } from '../../../../elemnet/index';

const MyPageArtist = ({history}) => {

  return (
    <S.MyArtistPage>
      <Segment placeholder textAlign="center">
        <h3> 아티스트 계정 신청 </h3>
        <br />
        <p> 아티스트 계정신청 후, 사람들에게 아티스트 공개를 할 수 있습니다 </p>
        <Button content={"신청하기"} primary/>
      </Segment>
      <Segment>
        <h3> 프로필 </h3>       
        <div style={{display: "flex", flexDirection: "column"}}> 
          <p> 나의 아티스트 프로필을 변경할 수 있습니다 </p>   
          <Button style={{width: "120px", margin: "5px"}} primary={true} content={"변경하기"} onClick={() => {history.push("/kr/mypage/artist/profile")}}/>
        </div>
      </Segment>
      <Segment>
        <h3> 작품 관리 </h3>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p> 내가 업로드한 작품을 변경 및 삭제 할 수 있습니다. </p>
          <Button style={{width: "120px", margin: "5px"}} primary={true} content={"변경하기"} onClick={() => {history.push("/kr/mypage/artist/works")}}/>
        </div>
      </Segment>
      <Segment>
        <h3> 멤버 관리 </h3>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p> 나의 팀 멤버나 내가 속한 팀 멤버를 관리 할 수 있습니다. </p>
          <Button style={{width: "120px", margin: "5px"}} primary={true} content={"변경하기"} onClick={() => {history.push("/kr/mypage/artist/members")}}/>
        </div>
      </Segment>
    </S.MyArtistPage>
  );
};

export default MyPageArtist;