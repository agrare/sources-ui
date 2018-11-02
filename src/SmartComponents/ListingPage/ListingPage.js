import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumbs, Section } from '@red-hat-insights/insights-frontend-components';

import FilterDropdown from './FilterDropdown';
import { Button, TextInput, DropdownItem } from '@patternfly/react-core';

import ListingView from '../../PresentationalComponents/ListingView/ListingView';
import SimpleKebab from './SimpleKebab';

class ListingPage extends Component {
    render = () => (
        <React.Fragment>
            {/**<ConnectedBreadcrumbs current="Place" />**/}
            <Breadcrumbs
                items={[{title: 'Sources', navigate: 'Sources'}, {title: 'VMs', navigate: 'topologyui/vms'}]}
                current='VMs'
            />
            <Section type='content'>
                <div className='pf-c-input-group'>
                    <FilterDropdown />
                    <TextInput id='filter_text' value=''/>
                    <Button>Action</Button>
                    <SimpleKebab>
                        <DropdownItem component='div'><Link to={'/providers/'}>Back to Providers</Link></DropdownItem>
                    </SimpleKebab>
                </div>
                <ListingView />
            </Section>
        </React.Fragment>
    )
};

export default withRouter(ListingPage);
