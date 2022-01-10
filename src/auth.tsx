/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// @ts-ignore
import React from 'react';
import ReactDOM from 'react-dom';

import { Shell } from 'app';
import { Auth0Registration } from 'screens/Auth0Registration';

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

    // Our types here are stale, so we're overriding them for
    // this method invocation. Type definitions are 9.14, we're
    // using 9.18
    //
    // @ts-ignore
    // webAuth.redirect.loginWithCredentials(options, (error) =>
    //   console.error('Auth0 Error:', error)
    // );
  }
}

async function register({
  firstName,
  lastName,
  mobileNumber,
  relationshipToPatient,
  dateOfBirth,
  email,
  password,
}: Record<
  | 'firstName'
  | 'lastName'
  | 'mobileNumber'
  | 'relationshipToPatient'
  | 'dateOfBirth'
  | 'email'
  | 'password',
  string
>) {
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

      webAuth.redirect.signupAndLogin(
        {
          userMetadata: {
            termsVersion: '0.1',
            termsGiven: 'true',
            termsTimestamp: new Date().toISOString(),
            firstName,
            lastName,
            mobileNumber,
            relationshipToPatient,
            dateOfBirth,
          },
          email,
          password,
          connection: process.env.AUTH0_REALM || '',
        },
        // eslint-disable-next-line no-console
        (error, result) => {
          if (error) {
            reject(error);
          } else {
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
    onSession={async () => Promise.reject('No session available')}
    onAuthenticate={async ({ forms }) => {
      const { email, password } = forms.login.values;

      return await login({
        email,
        password,
      });
    }}
    onRegistration={async ({ forms }) => {
      const { email, phone: mobileNumber } = forms.caregiverContact.values;
      const { password } = forms.password.values;
      const { firstName, lastName } = forms.caregiverName.values;
      const { relationship: relationshipToPatient, dob: dateOfBirth } =
        forms.caregiverRelationship.values;

      return await register({
        email,
        mobileNumber,
        password,
        firstName,
        lastName,
        relationshipToPatient,
        dateOfBirth,
      });
    }}
  >
    <Auth0Registration />
  </Shell>,
  root
);
