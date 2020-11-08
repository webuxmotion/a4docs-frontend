import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const ListWrapper = styled.div`
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  position: absolute;
  top: 100%;
  margin-top: 3px;
  right: 0;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    background-color: white;
    position: absolute;
    top: -4px;
    right: 19px;
    display: block;
    z-index: 15;
  }
`;

const List = styled.ul`
  background-color: white;
  border-radius: inherit;
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  z-index: 20;
`;

const Item = styled.li`
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  padding: 13px 15px;
  color: ${({ theme }) => theme === "danger" ? '#FC7777' : '#7977FC'};

  &:hover {
    background-color: ${({ theme }) => theme === "danger" ? 'rgba(252, 155, 155, 0.3)' : 'rgba(121, 119, 251, 0.2)'};
  }

  &:not(:last-child) {
    box-shadow: 0 0 1px 0 rgba(121, 119, 251, 0.3);
  }
  
  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;

const Dropdown = ({ button: Button, items }) => {
  const [active, setActive] = useState(false);
  const node = useRef();

  const handleClick = e => {
    
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    setActive(false);
  };

  const handleChange = () => {
    setActive(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Wrapper ref={node}>
      <div>
        <Button onClick={() => setActive(!active)} />
      </div>
      
      {active && (
        <ListWrapper>
          <List>
            {items.map(({ title, theme, onClick }, idx) => (
              <Item key={idx} theme={theme} onClick={() => {
                onClick();
                handleChange();
              }}>{title}</Item>
            ))}
          </List>
        </ListWrapper>
      )}
    </Wrapper>
  )
};

export default Dropdown;