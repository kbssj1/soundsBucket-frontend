import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { Menu } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import ArtistDetail from "./artistDetail";
import ArtistFeed from "./artistFeed";
import FanFeed from "./fanFeed";
import ArtistFunding from "./artistFunding";

const ArtistChannelDetail = ({ history }) => {
  const [activeMenu, setActiveMenu] = useState("소개");

  useEffect(() => {    
    const pathnames = history.location.pathname.split("/");
    if (pathnames.length >= 5) {
      const pathname = pathnames[4];
      if (pathname === "artist") {
        setActiveMenu("홈");
      } else if (pathname === "artistfeed") {
        setActiveMenu("아티스트 피드");
      } else if (pathname === "fanfeed") {
        setActiveMenu("팬 피드");
      } else if (pathname === "funding") {
        setActiveMenu("펀딩");
      }
    }
  }, [history.location.pathname]);

  const handleItemClick = (e, { name }) => {
    setActiveMenu(name);
    if (name === "홈") {
      history.push("/kr/channel/0/artist");
    } else if (name === "아티스트 피드") {
      history.push("/kr/channel/0/artistfeed");
    } else if (name === "팬 피드") {
      history.push("/kr/channel/0/fanfeed");
    } else if (name === "펀딩") {
      history.push("/kr/channel/0/funding");
    }
  }

  return (
    <S.ArtistChannelDetailPage>
      <S.ArtistChannelDetail>
        <Menu pointing secondary>
          <Menu.Item
            name='홈'
            active={activeMenu === '홈'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='아티스트 피드'
            active={activeMenu === '아티스트 피드'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='팬 피드'
            active={activeMenu === '팬 피드'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='펀딩'
            active={activeMenu === '펀딩'}
            onClick={handleItemClick}
          />
        </Menu>
        <Route exact={true} path="/kr/channel/:index/artist" component={ArtistDetail} />
        <Route exact={true} path="/kr/channel/:index/artistfeed" component={ArtistFeed} />
        <Route exact={true} path="/kr/channel/:index/fanfeed" component={FanFeed} />
        <Route exact={true} path="/kr/channel/:index/funding" component={ArtistFunding} />
      </S.ArtistChannelDetail>
    </S.ArtistChannelDetailPage>
  );
};

export default ArtistChannelDetail;