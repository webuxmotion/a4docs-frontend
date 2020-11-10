import React from 'react';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';
import Title from './Title';

import { ReactComponent as Service1 } from '../icons/services/service-1.svg';
import { ReactComponent as Service2 } from '../icons/services/service-2.svg';
import { ReactComponent as Service3 } from '../icons/services/service-3.svg';
import { ReactComponent as Service4 } from '../icons/services/service-4.svg';
import { ReactComponent as Wave1 } from '../icons/services/wave-1.svg';
import { ReactComponent as Wave2 } from '../icons/services/wave-2.svg';
import { ReactComponent as Wave3 } from '../icons/services/wave-3.svg';
import { ReactComponent as Wave4 } from '../icons/services/wave-4.svg';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: #F6F6F6;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  margin: 0 -20px;
`;

const Item = styled.div`
  width: 25%;
  padding: 20px;
  box-sizing: border-box;
`;

const Services = () => {

  return (
    <Wrapper>
      <div className="container">
        <Title theme="dark">Our services</Title>

        <List>
          <Item>
            <ServiceCard 
              Icon={Service1}
              Wave={Wave1}
              circleColor="#6A5EB9"
              title="Analytics"
              text="We deliver 100% and provide instant"
            />
          </Item>
          <Item>
            <ServiceCard 
              Icon={Service2}
              Wave={Wave2}
              circleColor="#B95EA5"
              title="Web Development"
              text="We deliver 100% and provide instant response to help you succeed."
            />
          </Item>
          <Item>
            <ServiceCard 
              Icon={Service3}
              Wave={Wave3}
              circleColor="#F58838"
              title="Mobile Apps"
              text="We deliver 100% and provide instant response to help you succeed."
            />
          </Item>
          <Item>
            <ServiceCard 
              Icon={Service4}
              Wave={Wave4}
              circleColor="#5EAEB9"
              title="Design"
              text="We deliver 100% and provide instant response to help you succeed."
            />
          </Item>
        </List>
      </div>
    </Wrapper>
  )
};

export default Services;