import React from 'react';
import { Modal, Image } from 'semantic-ui-react';
import { Button } from "../../elemnet/index";

const ArtistChannelRequestModal = ({ open, onCancel, onRequest }) => {

  return (
    <Modal
      open={open}
      size="tiny"
    >
      <div>
        <Image src="../resources/img/main.png" />
        <div style={{textAlign: "center", padding: "20px"}}>
          <h2> 수요조사를 시작합니다 </h2>
          <br/>
          <div style={{textAlign: "start"}}>
            <p> 1주 동안 200명의 좋아요를 받아야 정식 아티스트 페이지 개설이 가능합니다. </p>
            <p> 자신의 매력으로 사람들을 사로잡아요. </p>
          </div>
        </div> 
      </div>
      <Modal.Actions style={{textAlign: "center"}}>
        <Button content="취소" onClick={onCancel} />
        <Button color="red" content="신청" onClick={onRequest} />
      </Modal.Actions>
    </Modal>
  );
};

export default ArtistChannelRequestModal;