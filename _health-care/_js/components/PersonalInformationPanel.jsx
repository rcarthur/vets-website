import React from 'react';

import AdditionalInformationSection from './personal-information/AdditionalInformationSection';
import DemographicInformationSection from './personal-information/DemographicInformationSection';
import NameAndGeneralInfoSection from './personal-information/NameAndGeneralInfoSection';
import VAInformationSection from './personal-information/VAInformationSection';
import VeteranAddressSection from './personal-information/VeteranAddressSection';

class PersonalInformationPanel extends React.Component {
  render() {
     const children = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child,
          { data: this.props.applicationData.personalInformation.nameAndGeneralInfo,
            onStateChange: (subfield, update) => {
                this.props.publishStateChange(['personalInformation', 'nameAndGeneralInfo', subfield], update);
            }
      });
    });
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default PersonalInformationPanel;
