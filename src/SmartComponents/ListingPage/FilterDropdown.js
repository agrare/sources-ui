import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from  '@patternfly/react-core';

export default class FilterDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    onToggle = (isOpen) => this.setState({ ...this.state, isOpen });

    onSelect = (event) => this.setState({ ...this.state, isOpen: !this.state.isOpen });

    render = () =>
        <Dropdown
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            toggle={<DropdownToggle onToggle={this.onToggle}>All</DropdownToggle>}
            isOpen={this.state.isOpen}
        >
            <DropdownItem>Link</DropdownItem>
            <DropdownItem component="button">Action</DropdownItem>
            <DropdownItem isDisabled>Disabled Link</DropdownItem>
            <DropdownItem isDisabled component="button">
                Disabled Action
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem>Separated Link</DropdownItem>
            <DropdownItem component="button">Separated Action</DropdownItem>
        </Dropdown>
}
