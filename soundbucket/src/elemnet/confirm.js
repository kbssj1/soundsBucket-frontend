import React from 'react';
import { Confirm } from 'semantic-ui-react';

const CustomConfirm = ({open, content, onConfirm, onCancel}) => {

  return (
    <Confirm
      open={open}
      content={content}
      size={"mini"}
      onConfirm={onConfirm}
      onCancel={onCancel}
      cancelButton={"취소"}
      confirmButton={"확인"}
    />
  );
};

export default CustomConfirm;