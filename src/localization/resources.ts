export const resources = {
  en: {
    translation: {
      application: {
        title: 'GeneDx',
        customerServiceEmailAddress: 'zebras@genedx.com',
        customerServicePhoneNumber: '1-888-XXXX option 3',
      },
      pages: {
        onboarding: {
          pageTitle: 'Onboarding | GeneDx',
          stories: {
            1: {
              label: 'Results & Resources',
              heading:
                "View and learn about your child's genetic test results.",
              description:
                "We provide you with easy access to your child's genetic test results, as well as with the resources to learn what it means for your family. Understand the challenges of the present and prepare for your child's future.",
            },
            2: {
              label: 'Records',
              heading: 'Keep all records in one place.',
              description:
                "Along with your child's genetic test results, easily keep record of their symptoms, allergies, medications and any health incidents in preparation for appointments and hospital visits. ",
            },
          },
          actions: {
            primary: {
              label: 'Register Now',
            },
          },
        },
        login: {
          pageTitle: 'Login | GeneDx',
          title: 'Welcome back',
          description:
            "We're here to support you and your child's condition along every step of the journey together.",
          actions: {
            primary: {
              label: 'Login',
              loadingLabel: 'Authenticating',
            },
            secondary: {
              label: 'Having trouble logging in?',
            },
          },
        },
        identity: {
          pageTitle: 'Identity | GeneDx',
        },
        registration: {
          pageTitle: 'Registration | GeneDx',
        },
        healthProfile: {
          pageTitle: 'Health Profile | GeneDx',
          title: 'Health Profile',
          description:
            "A detailed overview of {{patientsNickname}}'s needs for new providers or caregivers.",
          actions: { download: { label: 'Download print version' } },
          basicInformation: {
            title: 'Basic Information',
            fields: {
              name: { label: "Child's Name" },
              dob: { label: 'Date of Birth' },
              gender: { label: 'Genetic Gender' },
              genderIdentity: { label: 'Gender Identification' },
              insurance: { label: 'Insurance' },
              relationship: { label: 'Relation to Caregiver' },
            },
          },
          primaryIndication: {
            title: 'Primary Indication',
            fields: {
              phenotype: { label: 'Clinical Diagnosis' },
            },
          },
          yourDetails: {
            title: 'Your Details',
            fields: {
              1: {
                label: 'Full Name',
              },
              2: {
                label: 'Phone Number',
              },
              3: {
                label: 'Email Address',
              },
              4: {
                label: 'City / Town and State',
              },
              5: {
                label: 'Date of Birth',
              },
              6: {
                label: 'Relation to Patient',
              },
            },
          },
        },
        deleteAccount: {
          pageTitle: 'Delete Account | GeneDx',
          title: 'Delete Account',
          description: {
            paragraph1:
              'Your GeneDX Patient Portal account can be deleted by emailing {{ customerServiceEmailAddress }} or by calling {{ customerServicePhoneNumber }}.',
            paragraph2:
              'Any information provided by you will be stored securely, and may be used in a de-identified manner for research and/or external partnerships.',
          },
          implications: {
            1: {
              question: 'If I delete my account, can I still get test results?',
              answer:
                'You can still get your test results, but they must be delivered by your care provider or physician.',
            },
          },
          actions: {
            primary: {
              label: 'Email Us',
              emailSubject: 'Delete My Account',
            },
            secondary: {
              label: 'Call Us',
            },
          },
        },
        resources: {
          pageTitle: 'Resources | GeneDx',
          title: 'Resources',
          description:
            'Here are some educational resources to help you better understand the who, what, and why’s of genetic testing.',
          section: {
            audio: {
              title: 'Genetic Counselor Support',
              description:
                'Here is an enlightening description of what to expect from this audio file.',
              showTranscriptLabel: 'Read transcript',
              hideTranscriptLabel: 'Close transcript',
              bulletOneTitle: 'First of all',
              bulletOneDescription: 'Here is a description.',
              bulletTwoTitle: 'And another thing',
              bulletTwoDescription: 'Here is a description.',
            },
            articles: {
              title: 'Read',
              error: 'Error fetching articles.',
              prevArticle: 'Previous Article',
              nextArticle: 'Next Article',
            },
            faqs: {
              error: 'Error fetching FAQs.',
              title: 'Genetic Testing FAQs',
              label:
                'Here are some frequently asked questions about genetic testing:',
              prevFAQ: 'Previous FAQ Topic',
              nextFAQ: 'Next FAQ Topic',
            },
          },
        },
        article: {
          pageTitle: '{{articleTitle}} | GeneDx',
        },
        articles: {
          return: 'Return',
          errorFetchingArticle: 'Error fetching article',
        },
        settings: {
          pageTitle: 'Settings | GeneDx',
          title: 'Settings',
          accountDetails: {
            title: 'My Account',
            fields: {
              nickname: { label: 'Nickname' },
              fullName: { label: 'Full Name' },
            },
          },
          contactDetails: {
            title: 'Contact Details',
            fields: {
              email: { label: 'Email Address' },
              phone: { label: 'Phone Number' },
              preference: { label: 'Preferred Contact Method' },
            },
          },
          actions: {
            delete: {
              label: 'Delete My Account',
            },
          },
        },
        landing: {
          pageTitle: 'GeneDx',
        },
        results: {
          pageTitle: 'Test Results | GeneDx',
          waiting: {
            title: 'Prepare to View Your Test Results',
            indicatorCard: {
              heading: 'Your genetic test is currently:',
              title: 'In Progress',
              subTitle: 'Results expected {{expectedResultsDate}}',
            },
            article: {
              heading:
                'You can prepare and learn about the results while you wait',
            },
          },
          ready: {
            home: 'Return Home',
            title: 'Your Full Test Results',
            report: {
              attention: 'Medical language ahead',
              description:
                'This report is designed with health care providers in mind and contains many medically-oriented details. Talk to your provider to understand what the results mean for your family.',
              pdfLink: 'Open PDF',
              pdfPages: '{{pageNumber}} pages',
              pdfThumbnailAlt: 'Your report in PDF',
            },
          },
        },
        faq: {
          pageTitle: '{{faqTitle}} | GeneDx',
        },
        faqs: {
          pageTitle: 'FAQs | GeneDx',
        },
      },
      components: {
        articleCard: {
          actions: {
            primary: {
              label: 'Read more',
            },
          },
        },
        audio: {
          actions: {
            showTranscript: 'Read transcript',
            hideTranscript: 'Close transcript',
          },
        },
        avatar: {
          geneticCounselor: {
            altText: 'Photograph of our genetic counselor, Laura.',
          },
        },
        displayField: {
          defaultValue: 'Not Available',
        },
        patientBanner: {
          fetching: 'Retrieving patient profile',
          label: 'Patient',
        },
        pdf: {
          actions: {
            openPdf: 'Open PDF',
          },
        },
        footer: {
          copyright: `GeneDx, Inc © ${new Date().getFullYear()} | All rights reserved`,
          links: {
            contactUs: 'Contact Us',
            terms: 'Terms & Conditions',
            privacy: 'Privacy',
            cookie: 'Cookie Settings',
          },
        },
      },
      forms: {
        identity: {
          dob: {
            label: 'Date of birth',
            placeholder: 'mm / dd / yyyy',
            errors: {
              future: 'Date of birth cannot be in the future',
              required: 'Date of birth is required.',
            },
          },
          email: {
            label: 'Email address',
            placeholder: 'e.g. a.onymous@email.com',
            errors: {
              required: 'Email address is required.',
              invalid: 'Email address is invalid.',
            },
          },
          phone: {
            label: 'Your Mobile Phone',
            placeholder: '212-345-9298',
            errors: {
              required: 'Phone number is required.',
              invalid: 'Phone number is invalid.',
            },
          },
          zip: {
            label: 'Zip code',
            placeholder: 'e.g. 123456',
            errors: {
              required: 'Zipcode is required.',
              invalid: 'Zipcode is invalid.',
            },
          },
        },
        login: {
          email: {
            label: 'Email',
            placeholder: 'e.g. a.onymous@email.com',
            errors: {
              required: 'Email address is required.',
              invalid: 'Email address is invalid.',
            },
          },
          password: {
            label: 'Password',
            placeholder: 'Password',
            errors: {
              required: 'Password is required.',
            },
          },
        },
        caregiverName: {
          firstName: {
            label: 'Your First Name',
            placeholder: 'e.g. Ann',
            errors: {
              required: 'First Name is required.',
            },
          },
          lastName: {
            label: 'Your Last Name',
            placeholder: 'e.g. Onymous',
            errors: {
              required: 'Last Name is required.',
            },
          },
        },
        caregiverContact: {
          phone: {
            label: 'Your Mobile Number',
            placeholder: 'e.g. 212-345-6789',
            errors: {
              required: 'Phone number is required.',
              invalid: 'Phone number is invalid.',
            },
          },
          email: {
            label: 'Your Email Address',
            placeholder: 'barb.jackson@example.com',
            errors: {
              required: 'Email address is required.',
              invalid: 'Email address is invalid.',
            },
          },
        },
        caregiverRelationship: {
          dob: {
            label: 'Your Date of Birth',
            toolTipHelperMessage: 'Why do we ask for this?',
            toolTipTitle: 'Why do we ask for your date of birth?',
            toolTipContent:
              'This provides us with an extra identifier unique to you - we can use it to help you to recover your account if you get locked out.',
            errors: {
              required: 'Date of Birth is required.',
              future: 'Date of birth cannot be in the future',
              invalid: 'Date of Birth is invalid.',
            },
          },
          relationship: {
            label: 'Relationship to Patient',
            toolTipHelperMessage: 'Why do we ask for this?',
            toolTipTitle: 'Why do we ask for your relationship to the patient?',
            toolTipContent:
              'This will help us to communicate with you better and make your experience more personalized.',
            errors: {
              required: 'Relationship to Patient is required.',
              invalid: 'Relationship to Patient is invalid.',
            },
          },
        },
        password: {
          password: {
            errors: {
              required: 'Password is required.',
              invalid: 'Password is invalid.',
              short: 'Password is too short.',
            },
            label: 'Password',
          },
          confirmation: {
            errors: {
              required: 'Password confirmation is required.',
              invalid: 'Confirmation and password must match.',
            },
            label: 'Confirm Password',
          },
          termsAndConditions: {
            errors: {
              required: '',
            },
            link: 'Terms & Conditions',
            label: 'I agree to the',
          },
        },
      },
      sections: {
        mainNav: {
          home: { label: 'Home' },
          results: { label: 'My Results' },
          resources: { label: 'Resources' },
          settings: { label: 'Settings' },
          healthProfile: { label: 'Health Profile' },
          logout: { label: 'Log Out' },
        },
        resources: {
          story: {
            readMore: 'Read Story',
          },
        },
        results: {
          timeline: {
            error: 'Error loading timeline',
            title: 'Your Timeline',
            subTitle: "What's coming next?",
            waiting: {
              heading: 'Waiting for Results',
              body: "We're working on processing your test sample. Meanwhile, learn more from our resources.",
              linkLabel: 'Check out resources',
            },
            testResultsReady: {
              heading: 'Test Results Ready',
              body: 'Now that your results are ready, your doctor will get in touch to arrange an appointment to discuss the results with you.',
              bodyPast:
                'When your results are ready, your doctor will get in touch to arrange an appointment to discuss the results with you.',
              linkLabel: 'Prepare for your appointment',
            },
            atAppointment: {
              heading: 'At Your Appointment',
              body: 'You will be able to discuss he results with your doctor and ask any questions that you may have.',
              linkLabel: "I've spoken with my doctor",
            },
            afterAppointment: {
              heading: 'After Your Appointment',
              body: 'You may also have a follow up discussion with a genetic counselor, a healthcare professional with expertise in genetics.',
              linkLabel: "Focus on your child's care",
            },
          },
          getUpdates: 'Receive progress updates',
          noUpdates: 'No updates since your last login',
          onTrack: 'Everything is on track',
          inProcess: 'Test in process',
          inProgress: 'Test in progress',
          updated: 'Updated {{lastUpdated}}',
          ready: 'Results Ready',
          doctorShared: 'And shared with your doctor',
          doctorAppointment:
            'Your doctor will soon arrange an appointment to discuss them with you',
          caveat:
            'Results typically are returned in 7 days, but can take up to 5 weeks',
          expectation:
            "NOTE: time is not an indicator of case difficulty or a positive test result. Please allow time for your child's genetic test to process before calling the lab or your doctor's office.",
          mayVary: 'Please keep in mind that processing time may vary',
          estimate: 'Expect results in {{estimate}} days',
          expected: 'Results expected {{expectedResultsDate}}',
          error: 'Error fetching test results',
          notLoaded: 'Test results not fetched',
        },
        identity: {
          title: 'Welcome, {{patientName}}',
          subTitle:
            "To make sure we keep your child's information safe, we have a few details to confirm.",
          errors: {
            title: "Those details don't match our records.",
            attemptsStart: 'Please check them over and try again. You have',
            attemptsEnd: 'authentication attempts left.',
          },
          form: {
            zipCode: {
              label: "{{patientNickname}}'s Zip Code",
              placeholder: 'e.g. 123456',
            },
            dateOfBirth: {
              label: "{{patientNickname}}'s Date of Birth",
            },
            phone: {
              label: 'Your Mobile Phone',
              placeholder: '212-345-9498',
            },
            email: {
              label: 'Your Email Address',
              placeholder: 'e.g. a.onymous@email.com',
            },
            confirm: 'Confirm',
            checkingIdentity: 'Checking identity',
          },
        },
        furtherRegistration: {
          stepOne: {
            title: 'Thank you!',
            subTitle:
              'We have confirmed your identity - we just need a couple more details to set up your account.',
          },
          stepTwo: {
            subTitle:
              "Please let us know how we can notify you of your child's genetic test results.",
          },
          stepThree: {
            subTitle:
              'Giving us some extra information about you can help us to tailor your experience with us.',
          },
          stepFour: {
            subTitle:
              "Lastly, create a strong password to help keep your account and your child's information safe.",
          },
          form: {
            number: {
              toolTipHelperMessage:
                "We'll also use this to send you notifications.",
              toolTipTitle: 'Why do we ask for your mobile number?',
              toolTipContent: " We'll send SMS notifications to you here.",
              toolTipLink: 'Use your email address instead',
            },
          },
          inputValidation: {
            title: 'Your strong password must include:',
            capitalization: 'At least one capital and one lowercase letter.',
            characters: 'At least 9 characters in total.',
            letters: 'At least 1 letter (a - z)',
            numbers: 'At least 1 number (0 - 9)',
          },
          setUpAccount: 'Set up account',
          next: 'Next',
        },
      },
      formatting: {
        date: '{{- value, date}}',
        datetime: '{{- value, datetime}}',
        time: '{{- value, time}}',
      },
    },
  },
};
