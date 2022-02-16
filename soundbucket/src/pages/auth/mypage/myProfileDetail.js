import React, { useState } from 'react';
import * as S from "./styles";
import { Table, Input } from 'semantic-ui-react';
import { Button } from '../../../elemnet/index';
import { useDispatch, useSelector } from 'react-redux';
import { updateMyProfile } from '../../../system/redux/authActions';

const MyAccountDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  const [nameUpdateForm, setNameUpdateForm] = useState(false);
  const [phoneUpdateForm, setPhoneUpdateForm] = useState(false);
  const [inputs, setInputs] = useState({});

  const onChange = (e, data) => {
    const newValue = data.value;
    const inputName = data.name;
    setInputs((prevState)=> {
      return({
        ...prevState,
        [inputName]: newValue
      });
    });
  }

  const updateName = () => {
    setNameUpdateForm(false);
    dispatch(updateMyProfile({name: inputs.name}));
  }

  const updateMobileNumber = () => {
    setNameUpdateForm(false);
    dispatch(updateMyProfile({mobile_number: inputs.mobile_number}));
  }

  return (
    <S.MyArtistPage>
      <Table celled padded singleLine>
        <Table.Body>
          <Table.Row>
            <Table.Cell style={{width: "150px"}}>
              이름
            </Table.Cell>
            <Table.Cell>
              <h3 style={{color: "#283747"}}> {state.profile && state.profile.name} </h3>
              <p>이름이 변경되었다면 수정 할 수 있습니다.</p>
              {nameUpdateForm === false ? <Button content={"변경하기"} onClick={() => {setNameUpdateForm(true);}} /> : <div>
                <h5> 변경할 이름</h5>
                <Input placeholder='이름' name="name" onChange={onChange} />
                <div style={{padding: "5px"}}><Button content={"취소"} onClick={() => {setNameUpdateForm(false);}}/><Button content={"확인"} onClick={updateName} /></div>
              </div>}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              휴대폰 번호
            </Table.Cell>
            <Table.Cell>
            <h3 style={{color: "#283747"}}>{state.profile.mobile_number && state.profile.mobile_number}</h3>
              <p>아이디 및 비밀번호 찾기 등 본인확인이 필요한 경우 사용하는 전화번호 입니다.  </p>
              {phoneUpdateForm === false ? <Button content={"변경하기"} onClick={() => {setPhoneUpdateForm(true);}} /> : <div>
                <h5> 변경할 휴대전화</h5>
                <Input placeholder='번호' name="mobile_number" onChange={onChange} />
                <div style={{padding: "5px"}}><Button content={"취소"} onClick={() => {setPhoneUpdateForm(false);}}/><Button content={"확인"} onClick={updateMobileNumber} /></div>
              </div>}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </S.MyArtistPage>
  );
};

export default MyAccountDetail;