import React, { useState } from 'react';
import * as S from "./styles";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: '인기순', value: 1 },
  { key: 2, text: '최신순', value: 2 },
]

const ArtistList = ({onClick}) => {
  const [item, setItem] = useState(1);

  const handleChange = (e, data) => {
    setItem(data.value);
  }

  return (
    <S.AllArtistListPage>
      <h3 style={{padding: "1vw"}}> 전체 아티스트 </h3>
      <S.AllArtistFilter>
        <Menu compact>
          <Dropdown 
            onChange={handleChange}
            options={options} 
            value={item}
            selection
          />
        </Menu>
      </S.AllArtistFilter>
      <S.AllArtistList >
        {[0,1,2,3,4,5,6,7].map((column, index) => {
          return (
          <div style={{justifySelf: "center"}} key={index}>
            <Card style={{margin: "5px"}} onClick={onClick} >
              <Image src='/resources/img/artist.png' wrapped ui={false} /> 
              <Card.Content>
                <Card.Header>곡 이름</Card.Header>
                <Card.Meta>
                  <span className='date'>아티스트 이름</span>
                </Card.Meta>
                <Card.Description>
                  <Label color={"red"} key={"red"} content="힙합" />
                  <Label color={"blue"} key={"blue"} content="강력추천" />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name='thumbs up'/> 22
              </Card.Content>
            </Card>
          </div>);
        })}
      </S.AllArtistList>
    </S.AllArtistListPage>
  );
};

export default ArtistList;