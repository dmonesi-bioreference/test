export const resources = {
  en: {
    translation: {
      application: 'GeneDx',
      pages: {
        resources: {
          title: 'Resources',
          subTitle:
            'Here are some educational resources to help you better understand the who, what, and why’s of genetic testing.',
          description:
            'Here is an enlightening description of what to expect from this audio file.',
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
            },
            faqs: {
              error: 'Error fetching FAQs.',
              title: 'Genetic Testing FAQs',
              label:
                'Here are some frequently asked questions about genetic testing:',
            },
          },
        },
        geneticTestingFAQs: {
          title: 'Genetic Testing FAQs',
          subTitle:
            'Understanding the basic elements of genetics and the language used by clinicians will help you have a more productive conversation when your results are ready.',
        },
        settings: {
          title: 'Settings',
          accountDetails: {
            title: 'My Account',
            fields: {
              1: {
                label: 'First Name',
              },
              2: {
                label: 'Last Name',
              },
            },
          },
          contactDetails: {
            title: 'Contact Details',
            fields: {
              1: {
                label: 'Email Address',
              },
              2: {
                label: 'Phone Number',
              },
              3: {
                label: 'Preferred Contact Method',
              },
            },
          },
          actions: {
            1: {
              label: 'Review Data Sharing Consent',
            },
            2: {
              label: 'Review Patient Portal User Agreement',
            },
            3: {
              label: 'Delete My Account',
            },
          },
        },
        home: {},
        results: {
          preResultsPause: {
            title: 'Let’s take a moment together before viewing results',
            description: {
              paragraph1:
                'For some people, receiving test results can be difficult to understand and may cause anxiety, regardless of the results.',
              paragraph2:
                'Genetic test reports have some limitations that are important to understand, therefore reviewing results with a doctor is necessary to properly understand and plan next steps.',
            },
            audio: {
              title: 'Genetic Counselor Support',
              description:
                'Laura explains why it’s important to be in the right space and mind to review results.',
              transcript: {
                1: {
                  title: 'Are you in the right setting?',
                  description:
                    'Would you rather be at home, in the hospital, at work, etc.?',
                },
                2: {
                  title: 'Are you with the right people?',
                  description:
                    'Would you prefer to have your partner, another family member, or a friend present?',
                },
                3: {
                  title: 'Are you okay waiting to ask questions?',
                  description:
                    "You might be viewing your child's results before your doctor sees them. Would you prefer to wait and look at results together with your doctor so you can ask questions right away?",
                },
              },
            },
            actions: {
              primary: 'Continue to report',
              secondary: 'Not now, go back',
            },
          },
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
      },
      components: {
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
        pdf: {
          actions: {
            openPdf: 'Open PDF',
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
        careTeam: {
          title: 'Care team',
          counselor: 'Talk to a Genetic Counselor',
          callUs: 'Call',
          getAnswers:
            'Find peace of mind and get your burning questions answered',
          wereHere: "Starting today, we're here for you",
          learnMore: 'Learn about genetic counselling',
        },
        resources: {
          title: 'Resources',
          subtitle: '(In the NICU)',
          story: {
            title: 'Real family story',
            readMore: 'Read Story',
          },
          faq: {
            title: 'NICU FAQs',
            noDiagnosis: "What happens if my child doesn't get a diagnosis?",
            afterCare: 'How do I care for my baby after the NICU?',
            moreChildren: 'Can I still have more children?',
            viewAll: 'View all',
          },
        },
        science: {
          title: 'The science',
          sequencing: {
            title: 'Whole Genome Sequencing',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
          },
          genetics: {
            title: '101 on Genetics',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
          },
        },
        results: {
          steps: {
            title: 'Current step',
            current: {
              one: {
                title: '1: Samples Delivered',
                details:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
              },
              two: {
                extracting: {
                  title: '2: Lab steps - Extracting',
                  details:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
                },
                amplifying: {
                  title: '2: Lab steps - Amplifying',
                  details:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
                },
                sequencing: {
                  title: '2: Lab steps - Sequencing',
                  details:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
                },
              },
            },
          },
          process: {
            title: 'Process Breakdown',
            details:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
            one: {
              title: 'Samples Delivered',
              details:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
            },
            two: {
              title: 'Lab steps',
              extracting: {
                subTitle: 'Extracting',
                details:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
              },
              amplifying: {
                subTitle: 'Amplifying',
                details:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
              },
              sequencing: {
                subTitle: 'Sequencing',
                details:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
              },
            },
          },
          timeline: {
            title: 'Your Timeline',
            subTitle: "What's coming next?",
            waiting: {
              heading: 'Waiting for Results',
              body: "We're working on processing your test sample. Meanwhile, let's get your health profile setup.",
              linkLabel: 'Set up your Health Profile',
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
          childsName: "Child's name",
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
            'NOTE: time is not an indicator of case difficulty or a positive test result. Please allow time for your child’s genetic test to process before calling the lab or your doctor’s office.',
          mayVary: 'Please keep in mind that processing time may vary',
          estimate: 'Expect results in {{estimate}} days',
          expected: 'Results expected {{expectedResultsDate}}',
          locationCheck: {
            where: 'Where are you now?',
            report:
              'It’s been 2 weeks since your genetic test report was generated. Help us deliver the most accurate resources and connections.',
            nicu: 'In the NICU',
            home: 'Newly home and adjusting',
            while: "We've been home for a while",
            continue: 'Continue',
          },
        },
        identity: {
          title: 'Welcome, Barbara & Lisa',
          subTitle:
            'To make sure we keep your child’s information safe, we have a few details to confirm.',
          errors: {
            title: 'Those details don’t match our records.',
            attemptsStart: 'Please check them over and try again. You have',
            attemptsEnd: 'authentication attempts left.',
          },
          form: {
            zipCode: {
              label: "Lisa's Zip Code",
              placeholder: 'e.g. 123456',
            },
            dateOfBirth: {
              label: "Lisa's Date of Birth",
            },
            email: {
              label: 'Your Email Address',
              placeholder: 'e.g. a.onymous@email.com',
            },
            confirm: 'Confirm',
            checkingIdentity: 'Checking identity',
          },
        },
        login: {
          welcome: 'Welcome back, Barbara & Lisa',
          journey:
            'We’re here to support you and your child’s condition along every step of the journey together.',
          trouble: 'Having trouble logging in?',
          form: {
            password: {
              label: 'Password',
              placeholder: 'Password',
            },
            email: {
              label: 'Email',
              placeholder: 'e.g. a.onymous@email.com',
            },
            login: 'Login',
            checkingLogin: 'Authenticating',
          },
        },
        dataSharingSettings: {
          content: 'Ipsum Dolor set amit lorem',
          dataSharingHeadingOne: 'Allow Families to see my Child’s:',
          headData: 'Data Sharing Settings',
          titleOne: 'Conditions & Disorders',
          titleTwo: 'Medications',
          titleThree: 'Reported Symptoms',
          titleFour: 'Lorem Ipsum Dolor set amit',
          titleFive: 'Lorem Ipsum Dolor set amit',
          titleSix: 'Lorem ipsum share',
        },
        dataConsent: {
          resources: 'PERSONALIZED RESOURCES',
          similar: 'SIMILAR FAMILY MATCHES',
          child: 'Personalize for my child',
          para: "We can provide more fine-tuned resources and  help connect with other parents like you by giving consent to use your child's data",
          yes: 'Yes please!',
          no: 'No thanks',
          continue: 'Continue',
          footer:
            'You can always change data sharing settings at any time from your child’s health profile.',
        },
        authenticationToken: {
          slides: {
            1: {
              title: 'Results & Resources',
              overView:
                'View and learn about your child’s genetic test results.',
              content:
                'We provide you with easy access to your child’s genetic test results, as well as with the resources to learn what it means for your family. Understand the challenges of the present and prepare for your child’s future.',
            },
            2: {
              title: 'Records',
              overView: 'Keep all records in one place.',
              content:
                'Along with your child’s genetic test results, easily keep record of their symptoms, allergies, medications and any health incidents in preparation for appointments and hospital visits. ',
            },
            3: {
              title: 'Community',
              overView: 'Feel the support of others who truly understand.',
              content:
                'Living with a rare or unknown genetic condition can be feel isolating. Connect and communicate with other families that have shared conditions, symptoms and experiences. You are not alone!',
            },
          },

          buttonText: 'Register Now',
        },

        furtherRegistration: {
          stepOne: {
            title: 'Thank you!',
            subTitle:
              'We have confirmed your identity - we just need a couple more details to set up your account.',
          },
          stepTwo: {
            subTitle:
              'Please let us know how we can notify you of your child’s genetic test results.',
          },
          stepThree: {
            subTitle:
              'Giving us some extra information about you can help us to tailor your experience with us.',
          },
          stepFour: {
            subTitle:
              'Lastly, create a strong password to help keep your account and your child’s information safe.',
          },
          form: {
            number: {
              toolTipHelperMessage:
                'We’ll also use this to send you notifications.',
              toolTipTitle: 'Why do we ask for your mobile number?',
              toolTipContent: ' We’ll send SMS notifications to you here.',
              toolTipLink: 'Use your email address instead',
            },
          },
          inputValidation: {
            title: 'Your strong password must include:',
            characters: 'At least 9 characters in total.',
            letters: 'At least 1 letter (a - z)',
            numbers: 'At least 1 number (0 - 9)',
          },
          setUpAccount: 'Set up account',
          next: 'Next',
        },
      },
    },
  },
};
