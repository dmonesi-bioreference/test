/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';

import { Shell } from 'app/components/Shell';
import { Api } from 'client/api';
import { Auth0Registration } from 'screens/Auth0Registration';
import { trackSignUpEvent } from 'tracking';

declare namespace auth0 {
  type WebAuth = import('auth0-js').WebAuth;
}

const root = document.querySelector('#root');

function getConfig(): Record<string, any> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(decodeURIComponent(escape(window.atob('@@config@@'))));
  } catch (error) {
    return {};
  }
}

async function login({
  email,
  password,
}: Record<'email' | 'password', string>) {
  const config = getConfig();
  const leeway = config?.internalOptions?.leeway;

  if (leeway) {
    const convertedLeeway = parseInt(leeway);

    if (!isNaN(convertedLeeway)) {
      config.internalOptions.leeway = convertedLeeway;
    }
  }

  const params = {
    overrides: {
      __tenant: config.auth0Tenant || '',
      __token_issuer: config.authorizationServer?.issuer || '',
    },
    domain: config.auth0Domain || '',
    clientID: config.clientID || '',
    redirectUri: config.callbackURL || '',
    responseType: 'code',
    ...config.internalOptions,
  };

  if ('auth0' in window) {
    // @ts-ignore
    const webAuth = new window.auth0.WebAuth(params);
    const options = {
      realm: process.env.AUTH0_REALM,
      email,
      password,
    };

    return new Promise((resolve, reject) => {
      webAuth.login(options, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  } else {
    return Promise.reject('No auth0 instance available for login');
  }
}

async function register({
  firstName,
  lastName,
  mobileNumber,
  termsAccepted,
  consentGiven,
  patientGuid,
  relationshipToPatient,
  dateOfBirth,
  email,
  password,
}: Record<
  | 'firstName'
  | 'lastName'
  | 'mobileNumber'
  | 'patientGuid'
  | 'relationshipToPatient'
  | 'dateOfBirth'
  | 'email'
  | 'password',
  string
> & { consentGiven: ConsentGiven; termsAccepted: TermsAccepted }) {
  const config = getConfig();
  const leeway = config?.internalOptions?.leeway;

  if (leeway) {
    const convertedLeeway = parseInt(leeway);

    if (!isNaN(convertedLeeway)) {
      config.internalOptions.leeway = convertedLeeway;
    }
  }

  const params = {
    overrides: {
      __tenant: config.auth0Tenant || '',
      __token_issuer: config.authorizationServer?.issuer || '',
    },
    domain: config.auth0Domain || '',
    clientID: config.clientID || '',
    redirectUri: config.callbackURL || '',
    responseType: 'code',
    ...config.internalOptions,
  };

  return new Promise((resolve, reject) => {
    if ('auth0' in window) {
      // @ts-ignore
      const webAuth = new window.auth0.WebAuth(params);
      const userMetadata: Partial<RegistrationProfile> = {
        terms_version: '0.0.1',
        terms_accepted: new Date().toISOString(),
        consent_version: '0.0.1',
        consent_given: new Date().toISOString(),
        patient_guid: patientGuid,
        phone_number: mobileNumber,
        relation_to_patient: relationshipToPatient,
        caregiver_name: `${firstName} ${lastName}`,
        caregiver_nickname: firstName,
        caregiver_dob: dateOfBirth as any,
      };

      webAuth.redirect.signupAndLogin(
        {
          userMetadata,
          email,
          password,
          connection: process.env.AUTH0_REALM || '',
        },
        // eslint-disable-next-line no-console
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            trackSignUpEvent();
            resolve(result);
          }
        }
      );
    } else {
      reject('No auth0 instance available for registration');
    }
  });
}

ReactDOM.render(
  <Shell
    onIdentity={Api.Identity.validate}
    onSession={async () => Promise.reject('No session available')}
    onPatientGuid={async () => {
      const config = getConfig();
      const { Guid, Source } = config.extraParams;

      if (Guid) {
        return { guid: Guid || '', source: Source || '' };
      } else {
        return Promise.reject('No GUID found');
      }
    }}
    onAuthenticate={async ({ forms }) => {
      const { email, password } = forms.login.values;

      return await login({
        email,
        password,
      });
    }}
    onRegistration={async (context) => {
      const consentGiven = context.forms.consent.values.consent;
      const termsAccepted = context.forms.consent.values.terms;
      const { email, phone: mobileNumber } =
        context.forms.caregiverContact.values;
      const { password } = context.forms.password.values;
      const { firstName, lastName } = context.forms.caregiverName.values;
      const { patientGuid } = context.auth;
      const { relationship: relationshipToPatient, dob: dateOfBirth } =
        context.forms.caregiverRelationship.values;

      try {
        const validation = await Api.Identity.validate(context);
        const response = await Api.Identity.confirm(context);

        if (!validation.IsSuccess) {
          return Promise.reject(
            'Unable to validate your information. Please check your contact information and try again.'
          );
        }

        if (response.IsSuccess) {
          await register({
            consentGiven,
            termsAccepted,
            email,
            mobileNumber,
            password,
            patientGuid,
            firstName,
            lastName,
            relationshipToPatient,
            dateOfBirth,
          });
        } else {
          return Promise.reject(response.ValidationResult.Errors);
        }
      } catch {
        return Promise.reject(
          'We encountered an unexpected issue registering your account.'
        );
      }
    }}
  >
    <Auth0Registration />
  </Shell>,
  root
);
