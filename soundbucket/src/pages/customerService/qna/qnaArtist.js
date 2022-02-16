import React, { useState }  from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

const QnAArtist = ({history}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onClick = (e, data) => {
    const newIndex = (activeIndex === data.index) ? -1 : data.index;
    setActiveIndex(newIndex);
  }

  return (
    <div>
      <Accordion style={{marginTop: "50px"}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={onClick}
        >
          <Icon name='dropdown' />
          수익은 어떻게 얻을 수 있나요 ?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            내용
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default QnAArtist;