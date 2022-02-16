import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../system/redux/authActions';
import * as S from "./styles";
import { Menu, Dropdown } from 'semantic-ui-react'
import { Button } from "../../elemnet/index";
import Drawer from '@material-ui/core/Drawer';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, MusicNote, DirectionsWalk, Headset, Help, PowerSettingsNew, KeyboardVoice } from '@material-ui/icons';

const Header = ({history}) => {
  const state = useSelector(state => state.authReducer);
  const [activeItem, setItem] = useState(null);
  const [isVisibleDrawer, setVisibleDrawer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {    
    const pathname = history.location.pathname.split("/")[2];
    if (pathname === "") {
      setItem("홈");
    } else if (pathname === "channel") {
      setItem("아티스트채널");
    } else if (pathname === "preview") {
      setItem("오픈예정");
    } else if (pathname === "signin") {
      setItem("로그인");
    } else if (pathname === "artistchannelrequest") {
      setItem("아티스트채널 신청");
    }
  }, [history.location.pathname]);

  const _logOut = () => {
    dispatch(logOut());
    history.push("/kr");
  }

  return (
    <S.Header>
      <S.Desktop>
        <Menu size={"massive"} secondary>
          <Menu.Item
            name='홈'
            active={activeItem === '홈'}
            onClick={() => {setItem("홈");history.push("/kr");}}
          />
          <Menu.Item
            name='아티스트채널'
            active={activeItem === '아티스트채널'}
            onClick={() => {setItem("아티스트채널");history.push("/kr/channel");}}
          />
          <Menu.Item
            name='오픈예정'
            active={activeItem === '오픈예정'}
            onClick={() => {setItem("오픈예정");history.push("/kr/preview");}}
          />
          <Menu.Item
            name='아티스트채널 신청'
            active={activeItem === '아티스트채널 신청'}
            onClick={() => {setItem("아티스트채널 신청");history.push("/kr/request_artist_channel");}}
          />
          <Menu.Menu name='유저' active={activeItem === '유저'} position='right'>
            <Dropdown item text='고객센터'>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {setItem("자주묻는질문");history.push("/kr/qna");}}>자주묻는질문</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {state.signInSuccess ? 
            <Dropdown item text='유저'>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {_logOut();setItem("홈");}}>로그아웃</Dropdown.Item>
                <Dropdown.Item onClick={() => {setItem("유저");history.push("/kr/mypage/profile");}}>마이페이지</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
             : <Menu.Item
              name='로그인'
              active={activeItem === '로그인'}
              onClick={() => {setItem("로그인");history.push("/kr/signin");}}
            />}
          </Menu.Menu>
        </Menu>
      </S.Desktop>
      <S.Mobile>
        <Menu secondary>
          <Menu.Menu position='right'>
            <Button icon='align justify' content='메뉴' color='google plus' onClick={() => {setVisibleDrawer(true);}}/>
          </Menu.Menu>
        </Menu>
          <Drawer
            anchor={"right"}
            open={isVisibleDrawer}
            onClose={() => {setVisibleDrawer(false);}}
          >
            <div>
              <List>
                <ListItem onClick={() => {history.push("/kr");setVisibleDrawer(false);}} button key={"홈"}>
                  <ListItemIcon> <Home /> </ListItemIcon>
                  <ListItemText primary={"홈"} />
                </ListItem>
                <ListItem onClick={() => {history.push("/kr/channel");setVisibleDrawer(false);}}  button key={"아티스트채널"}>
                  <ListItemIcon> <Headset /> </ListItemIcon>
                  <ListItemText primary={"아티스트채널"} />
                </ListItem>
                <ListItem onClick={() => {history.push("/kr/preview");setVisibleDrawer(false);}}  button key={"오픈예정"}>
                  <ListItemIcon> <MusicNote /> </ListItemIcon>
                  <ListItemText primary={"오픈예정"} />
                </ListItem>
                <ListItem onClick={() => {history.push("/kr/request_artist_channel");setVisibleDrawer(false);}}  button key={"아티스트채널 신청"}>
                  <ListItemIcon> <KeyboardVoice /> </ListItemIcon>
                  <ListItemText primary={"아티스트채널 신청"} />
                </ListItem>
              </List>
              <Divider />
              <List>
                { state.signInSuccess ? 
                  <div>
                    <ListItem onClick={() => {history.push("/kr/mypage/profile");setVisibleDrawer(false);}} button key={"마이페이지"}>
                      <ListItemIcon> <DirectionsWalk /> </ListItemIcon>
                      <ListItemText primary={"마이페이지"} />
                    </ListItem>
                    <ListItem onClick={() => {_logOut();setVisibleDrawer(false);}} button key={"로그아웃"}>
                      <ListItemIcon> <PowerSettingsNew /> </ListItemIcon>
                      <ListItemText primary={"로그아웃"} />
                    </ListItem>
                  </div>
                 : <ListItem onClick={() => {history.push("/kr/signin");setVisibleDrawer(false);}} button key={"로그인"}>
                  <ListItemIcon> <DirectionsWalk /> </ListItemIcon>
                  <ListItemText primary={"로그인"} />
                </ListItem>}
                <ListItem onClick={() => {history.push("/kr/qna");setVisibleDrawer(false);}} button key={"자주묻는질문"}>
                  <ListItemIcon> <Help /> </ListItemIcon>
                  <ListItemText primary={"자주묻는질문"} />
                </ListItem>
              </List>
            </div>
          </Drawer>
      </S.Mobile>
    </S.Header>
  );
};

export default Header;