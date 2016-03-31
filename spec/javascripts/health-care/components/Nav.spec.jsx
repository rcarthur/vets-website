import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { Router, Route, createMemoryHistory } from 'react-router';
import SkinDeep from 'skin-deep';

import Nav from '../../../../_health-care/_js/components/Nav';
import routes from '../../../../_health-care/_js/routes';

class Container extends React.Component {
  render() {
    return (<Nav currentUrl={this.props.location.pathname} appRoutes={this.props.route.childRoutes}/>);
  }
}

describe('<Nav>', () => {
  describe('propTypes', () => {
    let consoleStub;
    beforeEach(() => {
      consoleStub = sinon.stub(console, 'error');
    });

    afterEach(() => {
      consoleStub.restore();
    });

    xit('currentUrl is required', () => {
      SkinDeep.shallowRender(<Nav/>);
      sinon.assert.calledWithMatch(consoleStub, /Required prop `currentUrl` was not specified in `Nav`/);
    });

    xit('currentUrl must be a string', () => {
      SkinDeep.shallowRender(<Nav currentUrl/>);
      sinon.assert.calledWithMatch(consoleStub, /Invalid prop `currentUrl` of type `boolean` supplied to `Nav`, expected `string`/);
    });
  });

  describe('active sections have section-current or sub-section-current class', () => {
    const history = createMemoryHistory('/');
    let nav;

    before(() => {
      // It's perfectly fine in this test to reuse the rendered component. Do that
      // cause it cuts the test time from 1s down to ~0.1s.
      nav = ReactTestUtils.renderIntoDocument(
        <Router history={history}>
          <Route path="/" component={Container}>
            {routes}
          </Route>
        </Router>
      );
    });

    afterEach(() => {
      // Ensure navigations do not leak from one test case to another.
      history.replace('/');
    });

    const expectActiveSection = (component, path) => {
      history.replace(path);
      const activeSection = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'section-current');
      expect(activeSection).to.have.lengthOf(1);
    };

    const expectActiveSectionForNavAndSubNav = (component, path) => {
      history.replace(path);
      const activeSubSection = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'sub-section-current');
      expect(activeSubSection).to.have.lengthOf(1);
    };

    xit('/introduction', () => {
      expectActiveSection(nav, '/introduction');
    });

    xit('/personal-information/name-and-general-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/personal-information/name-and-general-information');
    });

    xit('/personal-information/va-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/personal-information/va-information');
    });

    xit('/personal-information/additional-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/personal-information/additional-information');
    });

    xit('/personal-information/demographic-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/personal-information/demographic-information');
    });

    xit('/personal-information/veteran-address', () => {
      expectActiveSectionForNavAndSubNav(nav, '/personal-information/veteran-address');
    });

    xit('/insurance-information/general', () => {
      expectActiveSectionForNavAndSubNav(nav, '/insurance-information/general');
    });

    xit('/insurance-information/medicare-medicaid', () => {
      expectActiveSectionForNavAndSubNav(nav, '/insurance-information/medicare-medicaid');
    });

    xit('/military-service/service-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/military-service/service-information');
    });

    xit('/military-service/additional-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/military-service/additional-information');
    });

    xit('/financial-assessment/financial-disclosure', () => {
      expectActiveSectionForNavAndSubNav(nav, '/financial-assessment/financial-disclosure');
    });

    xit('/financial-assessment/spouse-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/financial-assessment/spouse-information');
    });

    xit('/financial-assessment/child-information', () => {
      expectActiveSectionForNavAndSubNav(nav, '/financial-assessment/child-information');
    });

    xit('/financial-assessment/annual-income', () => {
      expectActiveSectionForNavAndSubNav(nav, '/financial-assessment/annual-income');
    });

    xit('/financial-assessment/deductible-expenses', () => {
      expectActiveSectionForNavAndSubNav(nav, '/financial-assessment/deductible-expenses');
    });

    xit('/review-and-submit', () => {
      expectActiveSection(nav, '/review-and-submit');
    });
  });
});
