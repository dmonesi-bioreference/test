export const resources = {
  en: {
    translation: {
      application: 'GeneDx',
      forms: {
        identity: {
          dob: {
            label: 'Date of birth',
            placeholder: 'mm / dd / yyyy',
            errors: {
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
          childsName: "Child's name",
          seeMore: 'See where you are in the process',
          getUpdates: 'Receive progress updates',
          noUpdates: 'No updates since your last login',
          onTrack: 'Everything is on track',
          inProcess: 'Test in process',
          caveat:
            'Results typically are returned in 7 days, but can take up to 5 weeks',
          expectation:
            'NOTE: time is not an indicator of case difficulty or a positive test result. Please allow time for your child’s genetic test to process before calling the lab or your doctor’s office.',
          mayVary: 'Timing may vary',
          estimate: 'Expect results in {{estimate}} days',
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
            password: {
              label: 'Password',
            },
            confirmPassword: {
              label: 'Confirm Password',
            },
            relationshipToPatient: {
              label: 'Relationship to Patient',
              toolTipHelperMessage: 'Why do we ask for this?',
              toolTipTitle:
                'Why do we ask for your relationship to the patient?',
              toolTipContent:
                'This will help us to communicate with you better and make your experience more personalized.',
            },
            dob: {
              label: 'Your Date of Birth',
              toolTipHelperMessage: 'Why do we ask for this?',
              toolTipTitle: 'Why do we ask for your date of birth?',
              toolTipContent:
                'This provides us with an extra identifier unique to you - we can use it to help you to recover your account if you get locked out.',
            },
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
          checkbox: {
            termsAndConditionsLink: 'Terms & Conditions',
            label: 'I agree to the',
          },
          setUpAccount: 'Set up account',
          next: 'Next',
        },
      },
      pages: {
        home: {},
      },
    },
  },
};
