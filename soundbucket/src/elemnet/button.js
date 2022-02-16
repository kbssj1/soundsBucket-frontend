import React from 'react'
import { Button } from 'semantic-ui-react'

const CustomButton = ({color, circular, icon, content, onClick, type, primary, loading, style, size}) => (
  <Button loading={loading} primary={primary} circular={circular} color={color} icon={icon} content={content} onClick={onClick} type={type} style={style} size={size} />
)

export default CustomButton