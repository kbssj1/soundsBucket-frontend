import React, { useState, useEffect }  from 'react';
import * as S from "./styles";
import { Segment, Accordion, Icon } from 'semantic-ui-react'
import { getFAQList } from '../../../system/redux/qnaActions';
import { useDispatch, useSelector } from 'react-redux';
// import { Route } from "react-router-dom";
// import QnAAll from "./qnaAll";
// import QnAArist from "./qnaArtist";
// import QnASoundBucket from "./qnaSoundBucket";

const QnA = ({history}) => {
  // const [activeMenu, setActiveMenu] = useState("소개");
  const dispatch = useDispatch();
  const state = useSelector(state => state.faqReducer);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  // useEffect(() => {    
  //   const pathnames = history.location.pathname.split("/");
  //   if (pathnames.length >= 3) {
  //     const pathname = pathnames[2];
  //     if (pathname === "all") {
  //       setActiveMenu("전체");
  //     } else if (pathname === "soundbucket") {
  //       setActiveMenu("사운즈버킷");
  //     } else if (pathname === "artist") {
  //       setActiveMenu("아티스트");
  //     }
  //   }
  // }, [history.location.pathname]);

  // const handleItemClick = (e, { name }) => {
  //   setActiveMenu(name);
  //   if (name === "전체") {
  //     history.push("/kr/qna/all");
  //   } else if (name === "사운즈버킷") {
  //     history.push("/kr/qna/soundbucket");
  //   } else if (name === "아티스트") {
  //     history.push("/kr/qna/artist");
  //   }
  // }

  useEffect(() => {    
    dispatch(getFAQList());
  }, [dispatch]);

  const onClick = (e, data) => {
    const newIndex = (activeIndex === data.index) ? -1 : data.index;
    setActiveIndex(newIndex);
  }

  return (
    <S.NoticePage>
      <S.Notice>
        <Segment placeholder>
          <h2 style={{textAlign : "center", padding: "10px"}}>자주묻는질문</h2>
          <Accordion style={{marginTop: "50px"}}>
            {state.qnaList.map((value) => {
                return (<><Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={onClick}
                >
                <Icon name='dropdown' />
                  {value.question}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    {value.answer}
                  </p>
                </Accordion.Content></>)
            })}
          </Accordion>
          {/* <div style={{alignSelf: "center"}}>
            <Menu color="grey" size="large" inverted>
              <Menu.Item
                name='전체'
                active={activeMenu === '전체'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='사운즈버킷'
                active={activeMenu === '사운즈버킷'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='아티스트'
                active={activeMenu === '아티스트'}
                onClick={handleItemClick}
              />
            </Menu>
          </div>
          <Route exact={true} path="/kr/qna/all" component={QnAAll} />
          <Route exact={true} path="/kr/qna/soundbucket" component={QnASoundBucket} />
          <Route exact={true} path="/kr/qna/artist" component={QnAArist} /> */}
        </Segment>
      </S.Notice>
    </S.NoticePage>
  );
};

export default QnA;