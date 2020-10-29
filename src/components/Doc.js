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
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
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

    return (
      <CardContainer>
        <Card>
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
        </Card>
      </CardContainer>
    );
  }
}

export default Doc;
