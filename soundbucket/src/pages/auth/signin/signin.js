import React, { useState } from 'react';
import * as S from "./styles";
import { Form, Input, Segment } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../system/redux/authActions';

const SignIn = ({history}) => {
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

  const _signIn = () => {
    if (inputs.email && inputs.password) {
      dispatch(signIn({...inputs, history: history}));
    }
  }

  return (
    <S.Layout>
      <S.Login>
        <Segment attached='bottom'>
          <h1 style={{textAlign: 'center', padding: '15px'}}> 로그인 </h1>
          <Form loading={state.signInLoading}>
            <Form.Group grouped>
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                label='아이디'
                placeholder='아이디'
                name='email'
              />
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                type='password'
                label='비밀번호'
                placeholder='비밀번호'
                name='password'
              />
            </Form.Group>
            <div style={{display:"flex", justifyContent: "center", flexDirection: "column"}}>
              <Button primary={true} type='submit' content='로그인' onClick={_signIn}/>
              <div style={{textAlign: 'center', marginTop: '0.5rem', color: "#006598"}}>
                <p onClick={() => {history.push("/kr/signup");}} ><u style={{cursor: "pointer"}}>회원가입</u></p>
                <p onClick={() => {history.push("/kr/request_password_reset");}} ><u style={{cursor: "pointer"}}>비밀번호가 생각나지 않으시나요?</u></p>
              </div>
            </div>
          </Form>
        </Segment>
      </S.Login>
    </S.Layout>
  );
};

export default SignIn;