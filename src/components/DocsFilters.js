import React, { Component } from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import SearchField from './SearchField';
import CheckBox from './CheckBox';

const FiltersContainer = styled.div`
  display: flex;
`;

const CheckBoxList = styled.div`
  display: flex;
  padding-left: 100px;
`;

const CheckBoxWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  padding-top: 5px;
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  padding-left: 10px;

  &::after {
    content: '';
    height: 26px;
    width: 1px;
    background-color: white;
    display: block;
    margin-top: 3px;
  }
`;

@inject('docsStore')
class DocsFilters extends Component {
  filters$ = new Subject();

  constructor(props) {
    super(props);

    this.state = {
      personal: props.docsStore.filters.personal,
      search: props.docsStore.filters.search,
      checkboxes: {
        all: true,
        public: false,
        private: false,
      }
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

  handleChangeCheckboxFilter = (type) => {
    if (type === 'all') {
      this.setState({ checkboxes: {
        all: true,
        public: false,
        private: false,
      }, personal: "" }, this.syncFilters);
    } else if (type === 'public') {
      this.setState(({ checkboxes: filters }) => ({ checkboxes: {
        all: filters.public,
        public: !filters.public,
        private: false,
      }, personal: !filters.public ? "FALSE" : "" }), this.syncFilters);
    } else if (type === 'private') {
      this.setState(({ checkboxes: filters }) => ({ checkboxes: {
        all: filters.private,
        public: false,
        private: !filters.private
      }, personal: !filters.private ? "TRUE" : "" }), this.syncFilters);
    }
  }

  render() {
    
    return (
      <FiltersContainer>
        <SearchField
          onChange={this.handleSearchTermChange}
          value={this.state.search}
        />
        <CheckBoxList>
          <CheckBoxWrapper>
            <CheckBox label="all docs" checked={this.state.checkboxes.all} disabled={this.state.checkboxes.all} onChange={!this.state.checkboxes.all ? () => this.handleChangeCheckboxFilter('all') : () => {}} />
          </CheckBoxWrapper>
          <Separator />
          <CheckBoxWrapper>
            <CheckBox label="public" checked={this.state.checkboxes.public} onChange={() => this.handleChangeCheckboxFilter('public')} />
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <CheckBox label="private" checked={this.state.checkboxes.private} onChange={() => this.handleChangeCheckboxFilter('private')} />
          </CheckBoxWrapper>
        </CheckBoxList>
      </FiltersContainer>
    );
  }
}

export default DocsFilters;
