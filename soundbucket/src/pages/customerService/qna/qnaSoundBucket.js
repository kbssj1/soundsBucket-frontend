import React, { useState }  from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

const QnASoundBucket = ({history}) => {
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
          사운즈버킷이란?
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

export default QnASoundBucket;