import React, { Component } from 'react';
import { Grid, FormControl, Select, MenuItem, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const FiltersContainer = styled.div`
  margin-top: 20px;
`;

const ControlContainer = styled.div`
  background-color: #c0cde0;
  border-radius: 5px;
  padding: 10px;
`;

@inject('docsStore')
class DocsFilters extends Component {
  filters$ = new Subject();

  constructor(props) {
    super(props);

    this.state = {
      personal: props.docsStore.filters.personal,
      search: props.docsStore.filters.search,
    };

    this.filters$
      .pipe(
        debounceTime(500),
      )
      .subscribe(filters => {
        props.docsStore.updateFilters(filters);
      });
  }

  syncFilters = () => {
    const { personal, search } = this.state;
    this.filters$.next({ personal, search });
  }

  handleStatusFilterChange = e => {
    const personal = e.target.value;
    this.setState({ personal }, this.syncFilters);
  };

  handleSearchTermChange = e => {
    const search = e.target.value;
    this.setState({ search }, this.syncFilters);
  }

  render() {
    return (
      <FiltersContainer>
        <Grid
          justify="space-between" // Add it here :)
          container
        >
          <Grid item>
            <ControlContainer>
              <FormControl style={{ width: '220px' }}>
                <TextField
                  placeholder="Search..."
                  value={this.state.search}
                  onChange={this.handleSearchTermChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </ControlContainer>
          </Grid>

          <Grid item>
            <ControlContainer>
              <FormControl style={{ width: '220px' }}>
                <Select
                  value={this.state.personal}
                  onChange={this.handleStatusFilterChange}
                  displayEmpty
                >
                  <MenuItem value="">No personal filter</MenuItem>
                  <MenuItem value={'TRUE'}>Personal</MenuItem>
                  <MenuItem value={'FALSE'}>Public</MenuItem>
                </Select>
              </FormControl>
            </ControlContainer>
          </Grid>
        </Grid>
      </FiltersContainer>
    );
  }
}

export default DocsFilters;
