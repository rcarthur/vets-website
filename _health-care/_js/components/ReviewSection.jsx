import React from 'react';
import { connect } from 'react-redux';

import AdditionalInformationSection from './personal-information/AdditionalInformationSection';
import AdditionalMilitaryInformationSection from './military-service/AdditionalMilitaryInformationSection';
import AnnualIncomeSection from './financial-assessment/AnnualIncomeSection';
import ChildInformationSection from './financial-assessment/ChildInformationSection';
import DeductibleExpensesSection from './financial-assessment/DeductibleExpensesSection';
import DemographicInformationSection from './personal-information/DemographicInformationSection';
import FinancialDisclosureSection from './financial-assessment/FinancialDisclosureSection';
import InsuranceInformationSection from './insurance-information/InsuranceInformationSection';
import MedicareMedicaidSection from './insurance-information/MedicareMedicaidSection';
import NameAndGeneralInfoSection from './personal-information/NameAndGeneralInfoSection';
import ServiceInformationSection from './military-service/ServiceInformationSection';
import SpouseInformationSection from './financial-assessment/SpouseInformationSection';
import VAInformationSection from './personal-information/VAInformationSection';
import VeteranAddressSection from './personal-information/VeteranAddressSection';


class ReviewSection extends React.Component {
  render() {
    let content;

    if (this.props.isApplicationSubmitted) {
      content = (
        // TODO(crew): We need to figure out why the css isn't working here.
        <div className="usa-alert usa-alert-success">
          <div className="usa-alert-body">
            <h3 className="usa-alert-heading">You have submitted your application for health care!</h3>
            <p className="usa-alert-text">We are processing your application. You should receive a phone call from the VA in the next week.</p>
            <p className="usa-alert-text">If you do not receive a call from the VA within a week, or you have questions, call 1-877-222-VETS (8387).</p>
          </div>
        </div>
      );
    } else {
      content = (<div>
        <p>Please ensure all of your information is correct before submitting your application.</p>
        <table className="review">
          <thead>
            <tr>
              <th scope="col"><h4>Veteran's Name</h4></th>
              <th scope="col" className="edit-cell"><button className="usa-button-outline-inverse" type="button">Edit</button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Veteran Name:</td>
              <td>Courtney Eimerman-Wallace</td>
            </tr>
            <tr>
              <td>Mother's Maiden Name:</td>
              <td>Thompson</td>
            </tr>
            <tr>
              <td>Social Security Number:</td>
              <td>123-09-0987</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>03/09/1988</td>
            </tr>
            <tr>
              <td>Place of Birth:</td>
              <td>Augusta, GA</td>
            </tr>
            <tr>
              <td>Current Marital Status:</td>
              <td>Married</td>
            </tr>
          </tbody>
        </table>
        <NameAndGeneralInfoSection reviewSection/>
        <VAInformationSection reviewSection/>
        <AdditionalInformationSection reviewSection/>
        <DemographicInformationSection reviewSection/>
        <VeteranAddressSection reviewSection/>
        <InsuranceInformationSection reviewSection/>
        <MedicareMedicaidSection reviewSection/>
        <ServiceInformationSection reviewSection/>
        <AdditionalMilitaryInformationSection reviewSection/>
        <FinancialDisclosureSection reviewSection/>
        <SpouseInformationSection reviewSection/>
        <ChildInformationSection reviewSection/>
        <AnnualIncomeSection reviewSection/>
        <DeductibleExpensesSection reviewSection/>
        <div className="input-section">
          <a href="#">Upload documents</a>
        </div>
      </div>);
    }
    return (
      <div>
        <h4>Review and Submit</h4>
        {content}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isApplicationSubmitted: state.uiState.applicationSubmitted
  };
}
// TODO(awong): Remove the pure: false once we start using ImmutableJS.
export default connect(mapStateToProps)(ReviewSection);
export { ReviewSection };
