import React, { useState } from 'react';
import * as S from "./styles";
import { Form, Input, Segment } from 'semantic-ui-react';
import { Button } from "../../../elemnet/index";
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../system/redux/authActions';
import NotificationService from '../../../system/NotificationService';

const SignUp = ({ history }) => {
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

  const onClick = (e) => {
    setInputs((prevState)=> {
      return({
        ...prevState,
        [e.target.name]: e.target.checked
      });
    });
  }

  // https://www.w3resource.com/javascript/form/email-validation.php
  const validateEmail = (email) =>
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
      return true;
    }
    return false;
  }

  const _signUp = () => {
    if (inputs.password === inputs.password_repeat) {
      if ( validateEmail(inputs.email) && inputs.password && inputs.name && inputs.mobile_number && inputs.policy === true && inputs.privatePolicy === true ) {
        dispatch(signUp({...inputs, history: history}));
      }
    } else {
      NotificationService.alert("비밀번호가 일치하지 않습니다");
    }
  }

  return (
    <S.Layout>
      <S.SignUp>
        <Segment attached='bottom'>
          <h1 style={{textAlign: 'center', padding: '15px'}}> 회원가입 </h1>
          <Form loading={state.signUpLoading}>
            <Form.Group grouped>
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                label='아이디(이메일)'
                placeholder='아이디(이메일)'
                type='email'
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
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                type='password'
                label='비밀번호 확인'
                placeholder='비밀번호 확인' 
                name='password_repeat'
              />
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                label='이름'
                placeholder='이름' 
                name='name'
              />
              <Form.Field
                required
                control={Input}
                onChange={onChange}
                label='휴대폰 번호'
                placeholder='휴대폰 번호' 
                name='mobile_number'
              />
              <label>이용약관</label>
              <Segment style={{height: "50px", overflowY: "scroll", background: "#DDDDDD"}} basic>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
              </Segment>
              <Form.Field required label='이용 약관에 동의 합니다' control='input' type='checkbox' onClick={onClick} name='policy' />
            </Form.Group>
            <Form.Group grouped>
              <label>개인정보 취급 방침</label>
              <Segment style={{height: "50px", overflowY: "scroll", background: "#DDDDDD"}} basic>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
                <p> 이용약관 </p>
              </Segment>
              <Form.Field required label='개인 정보 수집 및 이용에 동의합니다' control='input' type='checkbox' onClick={onClick} name='privatePolicy' />
            </Form.Group>
            <div style={{display:"flex", justifyContent: "center", flexDirection: "column"}}>
              <Button primary={true} type='submit' content='회원가입' onClick={_signUp}/>
            </div>
          </Form>
        </Segment>
      </S.SignUp>
    </S.Layout>
  );
};

export default SignUp;