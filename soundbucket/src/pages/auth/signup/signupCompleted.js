import React from 'react';
import * as S from "./styles";
import { Image } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";

const SignupCompleted = ({history}) => {

  return (
    <S.SignupCompleted>
      <Image src='../../resources/img/soundsbucket.png' style={{width: "256px"}} />
      <div style={{textAlign: "center"}}>
        <br />
        <h2> 환영합니다 </h2>
        <h2 style={{position: "relative", bottom: "10px"}}> 회원가입이 완료되었습니다 </h2>
        {/* <p style={{color: "#2185d0"}}> 입력하신 이메일 주소로 가입인증 메일이 발송되었습니다 </p> */}
      </div>
      <Button style={{position: "relative", top: "20px"}}primary content={"홈으로 이동"} onClick={() => {history.push("/kr");}}/> 
    </S.SignupCompleted>
  );
};

export default SignupCompleted;