import styled from 'styled-components';

import Link from '../Link';

const LinkButton = styled(Link)`
  max-width: 400px;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -3px;
    left: 0;
    height: 10px;
    background-color: var(--color-secondary);
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

export {
  LinkButton
}
