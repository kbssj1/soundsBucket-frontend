import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { Menu } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import MyProfile from "./myProfile";
import MyProfileDetail from "./myProfileDetail";
import MyPageArtist from "./artist/myPageArtist";
import MyArtist from "./myArtist";
import ArtistProfile from "./artist/artistProfile";
import ArtistWorks from "./artist/artistWorks";
import ArtistWorkDetail from "./artist/artistWorkDetail";
import ArtistMediaUpload from "./artist/artistMediaUpload";
import ArtistMember from "./artist/artistMembers";
import MyFundingArtist from "./myFundingArtist";

const MyPage = ({history}) => {
  const [activeMenu, setActiveMenu] = useState("계정관리");

  useEffect(() => {    
    const pathnames = history.location.pathname.split("/");
    if (pathnames.length >= 4) {
      const pathname = pathnames[3];
      if (pathname === "profile" || pathname === "profile_form") {
        setActiveMenu("계정관리");
      } else if (pathname === "artist") {
        setActiveMenu("아티스트");
      } else if (pathname === "my_artist") {
        setActiveMenu("나의아티스트");
      }
    }
  }, [history.location.pathname]);

  const handleItemClick = (e, { name }) => {
    setActiveMenu(name);
    if (name === "계정관리") {
      history.push("/kr/mypage/profile");
    } else if (name === "아티스트") {
      history.push("/kr/mypage/artist");
    } else if (name === "나의아티스트") {
      history.push("/kr/mypage/my_artist");
    }
  }

  return (
    <S.Layout>
      <S.MyPage>
        <Menu pointing secondary>
          <Menu.Item
            name='계정관리'
            active={activeMenu === '계정관리'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='아티스트'
            active={activeMenu === '아티스트'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='나의아티스트'
            active={activeMenu === '나의아티스트'}
            onClick={handleItemClick}
          />
        </Menu>
        <Route exact={true} path="/kr/mypage/profile" component={MyProfile} />
        <Route exact={true} path="/kr/mypage/profile_form" component={MyProfileDetail} />
        <Route exact={true} path="/kr/mypage/artist" component={MyPageArtist} />
        <Route exact={true} path="/kr/mypage/artist/profile" component={ArtistProfile} />
        <Route exact={true} path="/kr/mypage/artist/works" component={ArtistWorks} />
        <Route exact={true} path="/kr/mypage/artist/members" component={ArtistMember} />
        <Route exact={true} path="/kr/mypage/artist/works/new" component={ArtistMediaUpload} />
        <Route exact={true} path="/kr/mypage/artist/works/:index([0-9]+)" component={ArtistWorkDetail} />
        <Route exact={true} path="/kr/mypage/my_artist" component={MyArtist} />
        <Route exact={true} path="/kr/mypage/my_artist/:index" component={MyFundingArtist} />
      </S.MyPage>
    </S.Layout>
  );
};

export default MyPage;