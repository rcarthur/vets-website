import React from 'react';
import { Link } from 'react-router';

/**
 * Component for navigation, with links to each section of the form.
 * Parent links redirect to first section link within topic.
 *
 * Props:
 * `currentUrl` - String. Specifies the current url.
 */
class Nav extends React.Component {
  constructor() {
    super();
    this.handleShowPanels = this.handleShowPanels.bind(this);
    // this.parentElement = this.parentElement.bind(this);
  }

  handleShowPanels(elementID) {
    console.log('I work');
  }

  render() {
    const subnavStyles = 'step one wow fadeIn animated';
    const currentUrl = (this.props.currentUrl === '/') ? '/introduction' : this.props.currentUrl;
    const allRoutes = this.props.appRoutes;
    const panels = [];
    const completedSections = [];

    panels.push.apply(panels, allRoutes.map((obj) => { return obj.path; }));

    for (let i = 0; i < panels.length; i++) {
      if (currentUrl === panels[i]) {
        break;
      } else {
        // console.log(panels[i]);
        completedSections.push(panels[i]);
      }
    }

    // TODO(akainic): change this check once the alias for introduction has been changed
    return (
      <ol className="process hca-process">
        <li className={`one
          ${subnavStyles} ${currentUrl.startsWith('/introduction') ? ' section-current' : ''}
          ${(completedSections.indexOf('/introduction') !== -1) ? ' section-complete' : ''}`}>
          <div>
            <h5>Introduction</h5>
          </div>
        </li>
        <li role="presentation" className={`two ${subnavStyles}
        ${currentUrl.startsWith('/personal-information') ? ' section-current' : ''}
        ${(completedSections.indexOf('/personal-information/veteran-address') !== -1) ? ' section-complete' : ''}`}>
          <div>
            <h5>Personal Information</h5>
            <a className={`section-edit-link
            ${(completedSections.indexOf('/personal-information/veteran-address') === -1) ? ' section-incomplete' : ''}`}
                onClick={this.handleShowPanels} >
                Edit section
            </a>
            <ul className="usa-sidenav-sub_list">
              <li>
                <Link to="/personal-information/name-and-general-information" activeClassName="usa-current">
                  Name and General Information
                </Link>
              </li>
              <li>
                <Link to="/personal-information/va-information" activeClassName="usa-current">
                  VA-Specific Information
                </Link>
              </li>
              <li>
                <Link to="/personal-information/additional-information" activeClassName="usa-current">
                  Additional Information
                </Link>
              </li>
              <li>
                <Link to="/personal-information/demographic-information" activeClassName="usa-current">
                  Demographic Information
                </Link>
              </li>
              <li>
                <Link to="/personal-information/veteran-address" activeClassName="usa-current">
                  Veteran Address
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li role="presentation" className={`three ${subnavStyles}
        ${currentUrl.startsWith('/insurance-information') ? ' section-current' : ''}
        ${(completedSections.indexOf('/insurance-information/medicare-medicaid') !== -1) ? ' section-complete' : ''}`}>
          <div>
            <h5>Insurance Information</h5>
            <a className={`section-edit-link
              ${(completedSections.indexOf('/insurance-information/medicare-medicaid') === -1) ? ' section-incomplete' : ''}`} href="">
              Edit section
            </a>
            <ul className="usa-sidenav-sub_list">
              <li>
                <Link to="/insurance-information/general" activeClassName="usa-current">
                  General Insurance Information
                </Link>
              </li>
              <li>
                <Link to="/insurance-information/medicare-medicaid" activeClassName="usa-current">
                  Medicare/Medicaid Information
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li role="presentation" className={`four ${subnavStyles}
        ${currentUrl.startsWith('/military-service') ? ' section-current' : ''}
        ${(completedSections.indexOf('/military-service/additional-information') !== -1) ? ' section-complete' : ''}`}>
          <div>
            <h5>Military Service</h5>
            <a className={`section-edit-link
              ${(completedSections.indexOf('/military-service/additional-information') === -1) ? ' section-incomplete' : ''}`} href="">
              Edit Completed section
            </a>
            <ul className="usa-sidenav-sub_list">
              <li>
                <Link to="/military-service/service-information" activeClassName="usa-current">
                  Service Information
                </Link>
              </li>
              <li>
                <Link to="/military-service/additional-information" activeClassName="usa-current">
                  Additional Military Information
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li role="presentation" className={`five ${subnavStyles}
        ${currentUrl.startsWith('/financial-assessment') ? ' section-current' : ''}
        ${(completedSections.indexOf('/financial-assessment/deductible-expenses') !== -1) ? ' section-complete' : ''}`}>
          <div>
            <h5>Financial Assessment</h5>
            <ul className="usa-sidenav-sub_list">
              <li>
                <Link to="/financial-assessment/financial-disclosure" activeClassName="usa-current">
                  Financial Disclosure
                </Link>
              </li>
              <li>
                <Link to="/financial-assessment/spouse-information" activeClassName="usa-current">
                  Spouse Information
                </Link>
              </li>
              <li>
                <Link to="/financial-assessment/child-information" activeClassName="usa-current">
                  Child Information
                </Link>
              </li>
              <li>
                <Link to="/financial-assessment/annual-income" activeClassName="usa-current">
                  Annual Income
                </Link>
              </li>
              <li>
                <Link to="/financial-assessment/deductible-expenses" activeClassName="usa-current">
                  Deductible Expenses
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li role="presentation" className={`six last ${subnavStyles}
        ${currentUrl.startsWith('/review-and-submit') ? ' section-current' : ''}
        ${(completedSections.indexOf('/review-and-submit') !== -1) ? ' section-complete' : ''}`}>
          <div>
            <h5>Review and Submit</h5>
          </div>
        </li>
      </ol>
    );
  }
}

Nav.propTypes = {
  currentUrl: React.PropTypes.string.isRequired
};

export default Nav;
