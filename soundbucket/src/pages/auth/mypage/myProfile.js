import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { Segment } from 'semantic-ui-react';
import { Button, Confirm } from "../../../elemnet/index";
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../../system/redux/authActions';

const MyProfile = ({history}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  const [memberDropConform, setMemberDropConform] = useState(false);

  useEffect(() => {    
    dispatch(getMyProfile());
  }, [dispatch]);
  
  return (
    <S.MyAccount>
      <Segment loading={state.getProfileLoading} >
        <h3> 프로필 </h3>
        <br />
        <br />
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{display: "grid",gridTemplateColumns: "100px 200px"}} > 
            <div>
              <div style={{paddingBottom: "10px"}}> <label style={{display :"inline"}}> 아이디 </label> &nbsp; </div>
              <div style={{paddingBottom: "10px"}}> <label style={{display :"inline"}}> 이름 </label> &nbsp; </div>
              <div style={{paddingBottom: "10px"}}> <label style={{display :"inline"}}> 휴대폰 번호 </label> &nbsp; </div>
            </div>
            <div>
              <div style={{paddingBottom: "10px"}}> <p style={{display :"inline"}}> {state.profile.email} </p> </div>
              <div style={{paddingBottom: "10px"}}> <p style={{display :"inline"}}> {state.profile.name} </p> </div>
              <div style={{paddingBottom: "10px"}}> <p style={{display :"inline"}}> {state.profile.mobile_number} </p> </div>
            </div>
          </div>
          <Button style={{width: "100px", margin: "5px"}} primary={true} content={"변경하기"} onClick={() => {history.push("/kr/mypage/profile_form")}}/>
        </div>
      </Segment>
      <Segment>
        <h3> 계정관리 </h3>
        <br />
        <br />
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>
            <label style={{display :"inline"}}> 비밀번호 </label> &nbsp; <Button primary={true} content={"변경하기"} onClick={() => {history.push("/kr/password_reset_form")}} />
          </div>
          <div style={{marginTop: "10px"}}>
            <label style={{display :"inline"}}> 회원탈퇴 </label> &nbsp; <Button primary={true} content={"탈퇴하기"} onClick={() => {setMemberDropConform(true);}}/>
          </div>
        </div>
      </Segment>
      <Confirm 
        open={memberDropConform} 
        content={"정말 탈퇴하시겠습니까? 회원탈퇴시 회원님의 모든 정보는 삭제됩니다."} 
        onCancel={() => {setMemberDropConform(false);}} 
        onConfirm={() => {setMemberDropConform(false);}}
      />
    </S.MyAccount>
  );
};

export default MyProfile;