/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { Pages } from 'test-utils/pages';

const homePage = Pages.Home.from(cy);

describe('Home page', () => {
  describe('with a valid session', () => {
    it('it lands a caregiver on the landing page', () => {
      homePage.open();
      homePage.hasText("Child's name");
    });
  });

  describe('without a valid session', () => {
    describe('following a magic link', () => {
      xit('lands you on the registration page', () => {
        homePage.open();
        homePage.hasText("Child's name");
      });
    });

    describe('without a magic link', () => {
      xit('it lands a caregiver on the login page', () => {
        homePage.open();
        homePage.hasText("Child's name");
      });
    });
  });
});
