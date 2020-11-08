import React, { Component } from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import { ReactComponent as CircleDotsIcon } from '../icons/dots-in-circle.svg';

import Dropdown from './Dropdown';

const ActionsButton = styled.div`
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 0.3;

    svg circle {
      stroke: black;
    }
  }

  &:active {
    opacity: 0.5;
  }
`;

@inject('routerStore')
class DocDropdown extends Component {

  render() {
    const { id, personal, handleSetPersonal, handleDelete } = this.props;

    return (
      <Dropdown
        button={({ onClick }) => (
          <ActionsButton onClick={onClick}>
            <CircleDotsIcon />
          </ActionsButton>
        )}
        items={[
          {
            title: "Edit",
            onClick: () => this.props.routerStore.push(`/docs/edit/${id}`)
          },
          {
            title: `Make ${personal === "TRUE" ? 'public' : 'private'}`,
            onClick: () => handleSetPersonal(personal === "TRUE" ? "FALSE" : "TRUE")
          },
          {
            title: "Delete",
            theme: "danger",
            onClick: handleDelete
          }
        ]}
      />
    )
  }
}

export default DocDropdown;