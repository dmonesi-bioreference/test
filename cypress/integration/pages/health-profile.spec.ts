/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { t } from 'localization';
import { Api } from 'test-utils/api';
import { Pages } from 'test-utils/pages';

const authApi = Api.Auth.from(cy);
const healthProfilePage = Pages.HealthProfile.from(cy);

describe('on the health profile page', () => {  
  describe('without a valid session', () => {
    beforeEach(() => {
      authApi.logout();
    });

    it('it redirects on the login page', () => {
      healthProfilePage.open();
      healthProfilePage.hasSection(t('pages.login.title'));
    });
  });

  describe('with a valid session', () => {
    beforeEach(() => {
      authApi.logout();
      authApi.login(
        Cypress.env('AUTH0_USERNAME_TEST_ORDERED'),
        Cypress.env('AUTH0_PASSWORD_TEST_ORDERED')
      );
      healthProfilePage.open();
    });

    it('it displays the correct page', () => {
      healthProfilePage.hasSection(t('pages.healthProfile.title'));
    });

    it('it displays correct patient information', () => {
      healthProfilePage.hasSection(t('pages.healthProfile.basicInformation.title'));
      healthProfilePage.hasField(t('pages.healthProfile.basicInformation.title'), t('pages.healthProfile.basicInformation.fields.name.label'), 'Pandas Ordered');
      healthProfilePage.hasField(t('pages.healthProfile.basicInformation.title'), t('pages.healthProfile.basicInformation.fields.dob.label'), '02/01/2022');
      healthProfilePage.hasField(t('pages.healthProfile.basicInformation.title'), t('pages.healthProfile.basicInformation.fields.gender.label'), 'M');
      healthProfilePage.hasField(t('pages.healthProfile.basicInformation.title'), t('pages.healthProfile.basicInformation.fields.genderIdentity.label'), 'Not Available');
      healthProfilePage.hasField(t('pages.healthProfile.basicInformation.title'), t('pages.healthProfile.basicInformation.fields.insurance.label'), 'Allianz Global Assistance');
    });
    
    it('it displays correct medical information', () => {
      healthProfilePage.hasSection(t('pages.healthProfile.primaryIndication.title'));
      healthProfilePage.hasField(t('pages.healthProfile.primaryIndication.title'), t('pages.healthProfile.primaryIndication.fields.phenotype.label'), 'Not Available');
    });
    
    it('it displays correct account information', () => {
      healthProfilePage.hasSection(t('pages.healthProfile.yourDetails.title'));
      healthProfilePage.hasField(t('pages.healthProfile.yourDetails.title'), t('pages.healthProfile.yourDetails.fields.fullName.label'), 'Not Available');
      // healthProfilePage.hasField(t('pages.healthProfile.yourDetails.title'), t('pages.healthProfile.yourDetails.fields.phoneNumber.label'), '01234567890');
      healthProfilePage.hasField(t('pages.healthProfile.yourDetails.title'), t('pages.healthProfile.yourDetails.fields.emailAddress.label'), 'tbrookes+genedx+testing+test_ordered@8thlight.com');
      healthProfilePage.hasField(t('pages.healthProfile.yourDetails.title'), t('pages.healthProfile.yourDetails.fields.city.label'), 'Chicago, IL');
      healthProfilePage.hasField(t('pages.healthProfile.yourDetails.title'), t('pages.healthProfile.yourDetails.fields.dob.label'), '01/01/1970');
      healthProfilePage.hasField(t('pages.healthProfile.yourDetails.title'), t('pages.healthProfile.yourDetails.fields.relation.label'), 'Parent');
    });
  });
});
