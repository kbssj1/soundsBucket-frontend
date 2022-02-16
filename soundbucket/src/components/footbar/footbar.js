import React  from 'react';
import * as S from "./styles";
import { Button } from 'semantic-ui-react';

const Footbar = () => {
  
  return (
    <S.FootBar>
      <div className="container">
        <div className="main_info">
          <label>대표자 : 정성교 </label><div className="headerdivider" /> <label> 이메일 : contact@soundsbucket.com </label> 
        </div>
        <div className="main_info">
          <label>사업자등록번호 : 497-81-02050 </label><div className="headerdivider" /> <label> 회사주소 : 서울특별시 서대문구 연희로 2길 76 에이동 1층(창천동, 한빛빌딩) </label> 
        </div>  
      </div>
      <div className="container">
        <h5> 소셜 네트워크 </h5> 
        <div>
          <Button circular color='facebook' icon='facebook' onClick={() => {window.open('https://www.facebook.com/soundsbucketofficial/')}} />
          <Button circular color='youtube' icon='youtube' onClick={() => {window.open('https://www.youtube.com/channel/UChI5Er00o2B_Iwt4YB-8LlA')}} />
          <Button circular color='instagram' icon='instagram' onClick={() => {window.open('https://www.instagram.com/sounds_bucket/?igshid=6s9zope6f8ev')}} />
        </div>
      </div>
      <div className="container">
        <label> COPYRIGHTS © 2021 SOUNDSBUCKET. ALL RIGHTS RESERVED. </label> 
      </div>
    </S.FootBar>
  );
};

export default Footbar;