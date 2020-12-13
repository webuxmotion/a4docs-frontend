import React from 'react';
import { LinkButton } from './underlined-link.styles';

const UnderlinedLink = ({ to, text, className, ...rest }) => 
  <LinkButton to={to} className={className}  {...rest}><span>{text}</span></LinkButton>

export default UnderlinedLink;
