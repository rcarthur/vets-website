import React from 'react';
import { createStore } from 'redux';
import SkinDeep from 'skin-deep';

import ReviewSection from '../../../../_health-care/_js/components/ReviewSection';
import reducer from '../../../../_health-care/_js/reducers';

const store = createStore(reducer);

// TODO(crew): Get this passing correctly using connect();
describe('<ReviewSection>', () => {
  xit('Sanity check the component renders', () => {
    const tree = SkinDeep.shallowRender(<ReviewSection store={store}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.have.property('type', 'div');
  });
});

