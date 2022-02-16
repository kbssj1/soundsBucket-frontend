import React from 'react';
import * as S from "./styles";
import { Image } from 'semantic-ui-react';
import { Button } from "../../elemnet/index";

const Page404 = ({history}) => {

  return (
    <S.Page404>
      <Image src='../../resources/img/bucket.png' style={{width: "256px"}} />
      <h2> 요청하신 페이지를 찾을 수 없습니다 </h2>
      <p>서비스 이용에 불편을 드려 죄송합니다</p>
      <Button style={{position: "relative",top: "20px"}} primary content={"홈으로 이동"} onClick={() => {history.push("/kr");}}/> 
    </S.Page404>
  );
};

export default Page404;