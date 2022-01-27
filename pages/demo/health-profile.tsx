import Head from 'next/head';

import { Shell } from 'app/components';
import { HealthProfile } from 'screens';

export default function healthProfile() {
  const patientGuidMock = { guid: '1234', source: 'N/A' };

  const sessionMock: AuthenticatedSession = {
    nickname: 'Barbara',
    name: 'Barbara Jackson',
    picture: '',
    updated_at: '',
    dob: new Date(Date.UTC(1989, 3, 9)),
    location: 'Austin, Texas',
    phone_number: '267-190-5214',
    email: 'barb.jackson@example.com',
    email_verified: true,
    relation_to_patient: 'Parent',
    sub: 'iunno what this is',
  };

  return (
    <>
      <Head>
        <title>Health Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Shell
        onPatientGuid={async () => patientGuidMock}
        onSession={async () => sessionMock}
      >
        <HealthProfile />
      </Shell>
    </>
  );
}
