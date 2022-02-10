import { client } from './client';

type ValidationResponse =
  | {
      IsSuccess: true;
      ValidationResult: {
        IsValid: true;
        Errors: null;
      };
    }
  | {
      Data: {
        IsAuthorized: false;
        Code: string;
        ErrorMessage: string;
      };
      IsSuccess: false;
      ValidationResult: null;
    };

type ConfirmationResponse =
  | {
      IsSuccess: true;
      ValidationResult: {
        IsValid: true;
        Errors: null;
      };
    }
  | {
      IsSuccess: false;
      ValidationResult: {
        IsValid: false;
        Errors: string[];
      };
    };

export const Identity = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  profile: async (_context: AppContext = {} as any) => {
    const result = await client.get('/api/identity/profile');

    if (result.ok) {
      return (await result.json()) as FamilyProfile;
    } else {
      return Promise.reject({});
    }
  },
  confirm: async (context: AppContext) => {
    const { email, phone } = context.forms.identity.values;

    const payload = {
      email: email || '',
      PatientPortalUserId: context.auth.patientGuid,
      Phone: phone.replace(/\D/g, '') || '',
    };

    const result = await client.post('/api/identity/confirm', payload);

    return (await result.json()) as ConfirmationResponse;
  },
  validate: async (context: AppContext) => {
    const { email, dob, zip, phone } = context.forms.identity.values;

    const payload = {
      email: email || '',
      dateOfBirth: toProviderPortalDate(dob),
      PatientPortalUserId: context.auth.patientGuid,
      Phone: phone.replace(/\D/g, '') || '',
      zip,
    };

    const result = await client.post('/api/identity/validate', payload);

    return (await result.json()) as ValidationResponse;
  },
};

const toProviderPortalDate = (dateString: string) => {
  // By converting our dashes into slashes, we steer the date parsing algorithm
  // ever so slightly, avoiding an off-by-one-day error.
  //
  // Javascript, right?
  //
  const date = new Date(dateString.replace(/-/g, '/'));

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
    date
  );
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

  return `${month}/${day}/${year}`;
};
