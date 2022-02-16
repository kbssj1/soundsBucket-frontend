import React, { useState } from 'react';
import * as S from "./styles";
import { Form, Input, Segment } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";
import NotificationService from '../../../system/NotificationService';

const PasswordResetForm = ({history}) => {
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

  const _resetPassword = () => {
    if (inputs.new_password === inputs.new_password_repeat) {
      
    } else {
      NotificationService.alert("비밀번호가 일치하지 않습니다");
    }
  }

  return (
    <S.Layout>
      <S.Login>
        <Segment attached='bottom'>
          <h1 style={{textAlign: 'center', padding: '15px'}}> 비밀번호 재설정 </h1>
          <p>안전한 비밀번호로 내정보를 보호하세요</p>
          <Form style={{paddingTop: '10px'}}>
            <Form.Group grouped>
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                type='password'
                label='현재 비밀번호'
                placeholder='현재 비밀번호'
                name='current_password'
              />
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                type='password'
                label='새 비밀번호'
                placeholder='새 비밀번호'
                name='new_password'
              />
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                type='password'
                label='새 비밀번호 확인'
                placeholder='새 비밀번호 확인'
                name='new_password_repeat'
              />
            </Form.Group>
            <div style={{display:"flex", justifyContent: "center", flexDirection: "column"}}>
              <Button primary={true} type='submit' content='확인' onClick={_resetPassword}/>
            </div>
          </Form>
        </Segment>
      </S.Login>
    </S.Layout>
  );
};

export default PasswordResetForm;