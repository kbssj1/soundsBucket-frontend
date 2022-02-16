import React, { useState } from 'react';
import * as S from "./styles";
import { Form, Input, Segment } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../system/redux/authActions';

const ResetPassword = ({history}) => {
  const state = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
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
    if (inputs.email) {
      dispatch(resetPassword(inputs.email));
    }
  }

  return (
    <S.Layout>
      <S.Login>
        <Segment attached='bottom'>
          <h1 style={{textAlign: 'center', padding: '15px'}}> 비밀번호 재발급 </h1>
          <p>가입하신 메일주소를 입력해주세요. 새로운 비밀번호를 보내 드립니다.</p>
          <Form loading={state.signInLoading}>
            <Form.Group grouped>
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                label='이메일 주소'
                placeholder='이메일 주소'
                name='email'
              />
            </Form.Group>
            <div style={{display:"flex", justifyContent: "center", flexDirection: "column"}}>
              <Button primary={true} type='submit' content='새 비밀번호 받기' onClick={_resetPassword}/>
            </div>
          </Form>
        </Segment>
      </S.Login>
    </S.Layout>
  );
};

export default ResetPassword;