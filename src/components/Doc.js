import React, { Component } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Grid
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const CardContainer = styled.div`
  
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

const Header = styled.div`
  
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
`;

const Actions = styled.div`
  
`;

const PublicBadge = styled.span`
  background-color: #0228ED;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  min-width: 84px;
  border-radius: 20px;
  padding: 5px 20px;
  box-sizing: border-box;
  position: absolute;
  top: -12px;
  left: 23px;
`;

const Content = styled.div`
  position: relative;
`;

const DocPaper = styled.div`
  width: 134px;
  height: 189px;
  background-color: white;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
`;

const DocContent = styled.div`
  position: absolute;
  top: 26px;
  left: 26px;
  overflow: hidden;
`;

const DocText = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; 
`;

@inject('docsStore')
class Doc extends Component {
  deleteDoc = () => {
    this.props.docsStore.deleteDoc(this.props.id);
  };

  handleStatusChange = e => {
    this.props.docsStore.updateDocPersonal(this.props.id, e.target.value);
  };

  render() {
    const { title, content, personal } = this.props;
    console.log(personal);

    return (
      <CardContainer>
        <Header>
          <Title>{title}</Title>
          <Actions />
        </Header>
        <Content>
          <DocPaper />
          {personal === 'FALSE' ? <PublicBadge>public</PublicBadge> : null}
          <DocContent>
            <DocText>{content}</DocText>
          </DocContent>
        </Content>
        {/* <Card>
          <CardContent>
            <CardTitle>{title}</CardTitle>
            {content}
          </CardContent>
          <CardActions style={{ padding: '14px' }} disableSpacing>
            <Grid
              justify="space-between" // Add it here :)
              container 
            >
              <Grid item>
                <FormControl style={{ width: '140px' }}>
                  <Select
                    value={personal}
                    onChange={this.handleStatusChange}
                    displayEmpty
                  >
                    <MenuItem value={'TRUE'}>Personal</MenuItem>
                    <MenuItem value={'FALSE'}>Public</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <IconButton onClick={this.deleteDoc}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
        </Card> */}
      </CardContainer>
    );
  }
}

export default Doc;
