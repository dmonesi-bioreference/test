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
              heading: 'View and learn about your genetic test results.',
              description:
                'We provide you with easy access to your genetic test results, as well as with the resources to learn what it means for your family. Understand the challenges of the present and prepare for your future.',
            },
            2: {
              label: 'Records',
              heading: 'Keep all records in one place.',
              description:
                'Along with your genetic test results, easily keep record of their symptoms, allergies, medications and any health incidents in preparation for appointments and hospital visits. ',
            },
          },
          actions: {
            beginRegistration: 'Begin Registration',
          },
          error: 'Error fetching on-boarding stories.',
          nextStory: 'Next Story',
          previousStory: 'Previous Story',
          title: 'On Boarding',
        },
        login: {
          pageTitle: 'Login | GeneDx',
          title: 'Welcome back',
          description:
            "We're here to support you along every step of the journey together.",
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
              fullName: {
                label: 'Full Name',
              },
              phoneNumber: {
                label: 'Phone Number',
              },
              emailAddress: {
                label: 'Email Address',
              },
              city: {
                label: 'City / Town and State',
              },
              dob: {
                label: 'Date of Birth',
              },
              relation: {
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
            audios: {
              showTranscriptLabel: 'Read transcript',
              hideTranscriptLabel: 'Close transcript',
              error: 'Error fetching audio.'
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
              heading: 'Your genetic test is currently in progress. While you wait, check out the resources below. These will help you better understand how genetic testing works and what a genetic test report looks like.',
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
            description: '<p>Genetic test results may be difficult to understand and may cause anxiety for some people, regardless of the results. When reviewing your test results, please keep in mind that genetic test reports have some limitations that are important to understand.</p><br /><p>Thus, reviewing test results with your treating physician first is strongly encouraged, as it is necessary to properly understand and plan your next steps.</p>',
            report: {
              attention: 'Medical language ahead',
              description:
                'This report is designed with healthcare providers in mind and contains many medically-oriented details. Please review this test report with your provider to understand what the test results mean for you and your family.',
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
        termsAndConditions: {
          pageTitle: 'Terms and Conditions | GeneDx',
          userAgreement: {
            title: 'Patient Portal User Agreement',
            introduction:
              'This Patient Portal User Agreement constitutes a legally binding agreement between you and GeneDx, Inc., and its affiliates, including its parent company, OPKO Health, Inc., (collectively, and use of the GeneDx Patient Portal (the “Patient Portal”).',
            list: [
              {
                title: 'Acceptance of the User Agreement',
                content:
                  '<p>These terms of this User Agreement are entered into by and between you and GeneDx. The terms of this User Agreement apply to everyone who uses or accesses our Patient Portal and must be accepted prior to accessing or using the Patient Portal, regardless of your relationship with GeneDx . The following terms and conditions, together with Online Privacy Notice, Notice of Privacy Practices and Non-Discrimination Notice (collectively, the “Agreement”), govern your access to and use of the websites and online applications operated by GeneDx. By accepting and agreeing to this Agreement you acknowledge that you understand and agree to be bound by all terms included in this Agreement, including but not limited to the Online Privacy Notice, Notice of Privacy Practices and Non-Discrimination Notice, relating to your access to and use of the Patient Portal.</p>' +
                  '<p><b>Please take note that Section 16 of this Agreement contains a mandatory arbitration provision requiring the use of arbitration on an individual basis and which limits the remedies available to you in the event of disputes or claims in connection with this Agreement or the Patient Portal. This is an essential term of this Agreement which we require users to accept.</b> </p>' +
                  '<p><b>Please read the terms of this Agreement carefully before you begin using GeneDx Patient Portal. You agree to be bound by this Agreement when you click “I AGREE” and/or access or use the Patient Portal. If you do not understand or agree to be bound by this Agreement, you should not access or use the Patient Portal.</b></p>',
              },
              {
                title: 'Purpose of the Patient Portal',
                content:
                  'GeneDx is providing the Patient Portal to you so you can conveniently store, access, and manage your laboratory test results within your Patient Portal account.  The information stored in your Patient Portal account is not intended to be, and should not be used for, diagnosis or treatment purposes. Such information may not always be up-to-date. <br />' +
                  'Information provided to you through the Patient Portal should not be regarded as medical or health care advice, diagnosis, or treatment. In fact, the information provided through the Patient Portal is for informational purposes only and is not medical advice. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding interpretation of your laboratory test results, a medical condition, or other health related issues. In the case of a health emergency, seek immediate assistance from emergency personnel. The content provided through the Patient Portal should not be used during a medical emergency or for the diagnosis or treatment of any medical condition. Consult your doctor or other qualified healthcare provider regarding any medical condition or changes in your health or in connection with any decision to start, stop or change a drug regimen or course of treatment.  Do not delay or disregard medical advice based on information obtained through the Patient Portal.',
              },
              {
                title: 'Changes to this Agreement',
                content:
                  'GeneDx may, at any time and from time to time, modify the terms of this Agreement. Any changes to this Agreement will be effective immediately upon providing notice of the changes to you either when you log in to the Patient Portal or by sending notice of the changes to contact information that you have provided to us. You agree to comply with, and be bound by, the modified Agreement either: (i) by continuing to use or access the Patient Portal after receiving notice of the changes as described above; or (ii) by not requesting to terminate your Patient Portal account within seven (7) calendar days after receiving a notice of the changes as described above. Your continued use of the Patient Portal following the posting of any amended or modified Patient Portal User Agreement means that you accept and agree to the changes.',
              },
              {
                title: 'Accessing the Patient Portal and Account Security',
                content:
                  '<p>GeneDx reserves the right to withdraw or change the Patient Portal, and any service or material we provide on or through the Patient Portal, in its sole discretion without notice. We will not be liable if for any reason all or any part of the Patient Portal is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Patient Portal, or the entire Patient Portal, to users, including registered users. GeneDx may add features to or delete features from the Patient Portal at any time, without notice to you. </p>' +
                  '<p>You are responsible for: (i) making all arrangements necessary for you to have access to the Patient Portal; and (ii) ensuring that all persons who access your Patient Portal account or through your Internet connection are aware of the terms of this Agreement and comply with them. </p>' +
                  '<p>To access the Patient Portal and the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Patient Portal that all the information you provide on the Patient Portal is correct, current, and complete. If the information you provide changes, you are obligated to access the Patient Portal and update said information. You agree that all information you provide to register with this Patient Portal or otherwise, including but not limited to through the use of any interactive features on the Patient Portal, is governed by our Online Privacy Notice and Notice of Privacy Practices, and you consent to all actions we take with respect to your information consistent with these privacy policies. </p>' +
                  '<p><b>If you choose, or are provided with, a user name, password, or any other data related to our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity, except as authorized elsewhere in this Agreement. You also acknowledge that your account is personal to you and agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of the security of your Patient Portal account. You also agree to ensure that you will exit from your account at the end of each session. You should avoid or use particular caution when accessing your account from a public or shared computer as connections such as this may not be secure and could expose your password or other personal information to unauthorized hands.</b></p>' +
                  '<p><b>We have the right to disable any user name, password, or other identifier, whether chosen by you or provided by us, at any time if, in our opinion, you have violated any provision of this Agreement or caused a security breach.</b></p>',
              },
              {
                title: 'Right to Use the Patient Portal',
                content:
                  'By agreeing to this Agreement, you confirm that you are a resident of the United States, Puerto Rico, or the Virgin Islands and are at least 18 years of age. Further, you confirm that the information used to create your Patient Portal account is your own personal information and not that of any other individual, unless you are creating an Patient Portal account for your minor child. You hereby agree not to create a Patient Portal account using personal information of another adult individual of whom you do not have guardianship. You agree to comply with this Agreement, the Terms and Conditions, all applicable laws, and other applicable GeneDx policies, practices, and notices provided or referenced herein at all times when using the Patient Portal. GeneDx retains the right to block or otherwise prevent delivery of any type of e-mail or other communication to or from the Patient Portal as part of our efforts to protect the Patient Portal, protect our patients, or stop you from breaching this Agreement.',
              },
              {
                title: 'Sharing Information',
                content:
                  '<p>At your option, we allow you to authorize another person (like a family member) to access your laboratory test results or other health-related information available through the Patient Portal. GeneDx has developed a process for you to authorize or appoint such other persons and to manage their access rights, which may be updated from time to and time and that you agree to follow. By sharing your information or authorizing another person to access your information, you acknowledge and understand that this enables other persons to use, distribute, copy, share and/or transmit your laboratory test results and/or other information stored in your Patient Portal account, including publicly disclosing the information. If you do not want others to be able to access your information, you should not grant them access to your Patient Portal account or data.</p>' +
                  '<p>You also have the ability to give others certain rights with regard to your Patient Portal account. By agreeing to this Agreement, you acknowledge that you understand that giving others administrative rights to your Patient Portal account means that such persons will have access to all information stored in your Patient Portal account (including your laboratory test results and health information) and will have the same administrative rights you have with respect to your Patient Portal account. These administrative rights include the ability to change your personal and contact information, add or delete health-related or other information to/from your account, share your health-related information or other data with others, and/or restrict all user access to the account, including your access rights to your Patient Portal account. Thus, you should only grant another person with administrative rights to your Patient Portal account if you trust this person to exercise all of these rights and are willing to share all of the information stored in your Patient Portal account with such person. You acknowledge and agree that you are responsible for maintaining the confidentiality of your Patient Portal credentials, including all login and password information, and for all other users of your Patient Portal account.</p>',
              },
              {
                title: 'Accessing the Information of Others',
                content:
                  'You may be granted access to another person’s health-related information (including their laboratory test results) through the Patient Portal. Others may ask to share their information with you, or give you access or administrative rights regarding their Patient Portal account. You can request access to another person’s information through the Patient Portal (such as a minor child) that you have a legal right to access. If you are given access to another person’s information through the Patient Portal, you agree that you will only access such information to the extent of the permission or legal authority that you possess. For example, if you are given limited permission to access a person’s Patient Portal account to address billing or payment issues, you are not permitted to access that person’s laboratory test results. <b>By agreeing to this Agreement, you agree not to exceed your authorized access or permission with regard to the Patient Portal, and that you will not use, copy, reproduce, display, and/or disclose any information obtained through the Patient Portal in a way that infringes the privacy or other rights of another person.</b>',
              },
              {
                title: 'Privacy',
                content:
                  'Your privacy is important to us and GeneDx is committed to protecting your information in accordance with applicable laws and regulations and consistent with our established policies. Our Online Privacy Notice and Notice of Privacy Practices are attached below and incorporated into this Agreement and further describe what data GeneDx collects about you in connection with its Patient Porta, and how we use, disclose, and protect that data.',
              },
              {
                title: 'Data',
                content:
                  'Our Patient Portal and your Patient Portal account is part of  a private system operated by GeneDx for the convenience of our patients and others  involved in the care and health-related matters of our patients. Our Patient Portal and your GeneDx Patient Portal account collects and allows you to manage certain personal and health-related information stored in your Patient Portal account that is related to the laboratory tests and related services that we provide. The laboratory test results made available to you through your Patient Portal account require interpretation by and consultation with your  physician or other healthcare provider in order to properly understand, and these laboratory test results may not be a complete record of all the test results conducted by GeneDx and may not reflect all of the information available about you. Your laboratory test results are made available to you through your Patient Portal account based on the personal data submitted to GeneDx by you, your physician or other healthcare providers, and persons who you have given the right to make such submissions through your account. GeneDx will work hard to make sure that all laboratory test results will be made available to you through your Patient Portal account as promptly as possible; however, we do not promise or offer assurances that your test results will be released to your account within any set timeline or time period.',
              },
              {
                title: 'Disclaimer of Liability',
                content:
                  '<b>Since you control the extent and manner in which the data stored in your Patient Portal account is shared with others, GeneDx and its vendors assume no liability or responsibility for how your information is used or disclosed once it has been submitted to and stored on the Patient Portal. GeneDx and its vendors assume no liability for any actions taken, including any use, transmission disclosure, or display of your information, including but not limited to your laboratory test results, by you, persons to whom you have given access to the information, or persons to whom you have granted administrative rights  regarding your Patient Portal account.</b>',
              },
              {
                title: 'No Warranty; Limitation of Liability',
                content:
                  '<p>YOU UNDERSTAND THAT WE CANNOT AND DO NOT GUARANTEE OR WARRANT THAT YOUR INTERNET CONNECTION OR FILES AVAILABLE THROUGH THE PATIENT PORTAL OR DOWNLOADED THROUGH THE INTERNET WILL BE FREE OF VIRUSES OR OTHER DESTRUCTIVE CODE. YOU ARE RESPONSIBLE FOR IMPLEMENTING SUFFICIENT PROCEDURES AND CHECKPOINTS TO SATISFY YOUR PARTICULAR REQUIREMENTS FOR ANTI-VIRUS PROTECTION AND ACCURACY OF DATA INPUT AND OUTPUT, AND FOR MAINTAINING A MEANS EXTERNAL TO OUR PORTAL FOR ANY RECONSTRUCTION OF ANY LOST DATA. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, MALWARE, RANSOMWARE OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE PATIENT PORTAL OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE PATIENT PORTAL OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON THE PATIENT PORTAL, OR ON ANY WEBSITE LINKED TO IT. </p>' +
                  '<p>THE PATIENT PORTAL AND ALL MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, TOOLS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PATIENT PORTAL ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. BIOREFERENCE AND ITS SUPPLIERS AND VENDORS DISCLAIM ALL EXPRESS AND IMPLIED WARRANTIES WITH REGARD TO THE PATIENT PORTAL AND ALL MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, TOOLS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PATIENT PORTAL, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOUR USE OF THE PATIENT PORTAL IS AT YOUR OWN RISK. ACCESS TO THE PATIENT PORTAL MAY BE INTERRUPTED AND THE MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, TOOLS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PATIENT PORTAL MAY NOT BE ERROR-FREE. NONE OF GENEDX, ITS SUPPLIERS, ITS VENDORS, OR ANYONE ELSE INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE PATIENT PORTAL OR THE MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, TOOLS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PATIENT PORTAL WARRANTS THAT THE MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, TOOLS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PATIENT PORTAL ARE ACCURATE, RELIABLE, COMPLETE, USEFUL, OR CORRECT; THAT THE PATIENT PORTAL WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE PATIENT PORTAL ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. PLEASE NOTE THAT SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. CHECK YOUR LOCAL LAWS FOR ANY RESTRICTIONS OR LIMITATIONS REGARDING THE EXCLUSION OF IMPLIED WARRANTIES. </p>' +
                  '<p>UNDER NO CIRCUMSTANCES SHALL GENEDX, ITS SUPPLIERS, ITS VENDORS, OR ANYONE ELSE INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE PATIENT PORTAL OR THE MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, TOOLS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE PATIENT PORTAL BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF, OR INABILITY TO USE, THE PATIENT PORTAL, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. THIS LIMITATION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN THE EVENT SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF DAMAGES TO THE EXTENT INDICATED ABOVE, THE LIABILITY OF GENEDX, ITS SUPPLIERS AND ITS VENDORS IN SUCH JURISDICTIONS SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW. </p>' +
                  '<p>YOU ACKNOWLEDGE AND AGREE THAT THE LIMITATIONS SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THIS AGREEMENT AND THE PATIENT PORTAL WOULD NOT BE PROVIDED TO YOU ABSENT SUCH LIMITATIONS. YOU FURTHER ACKNOWLEDGE THAT ANY CLAIMS RELATED TO THE ESTABLISHMENT OR PERFORMANCE OF THE PATIENT PORTAL SHALL BE BROUGHT TO THE ATTENTION OF GENEDX.</p>',
              },
              {
                title: 'Liability Release; Indemnification',
                content:
                  '<p><b>You expressly release GeneDx, its suppliers and vendors, and agree to indemnify and hold GeneDx, its suppliers and vendors harmless from any and all actions, claims, damages and liabilities, including any and all claims for property damage, personal injuries and/or consequential, punitive or other damages which arise, or are alleged to have arisen, in connection with the operation, functioning or use of the Patient Portal.</b></p>' +
                  '<p><b>You expressly release GeneDx, its suppliers and vendors and agree to indemnify and hold GeneDx harmless from and against any and all actions, claims, damages and liabilities resulting from any use or misuse of the Patient Portal, or any use or disclosure of your laboratory test results and/or other information stored in or accessed through your Patient Portal account.</b></p>',
              },
              {
                title: 'Intellectual Property Rights',
                content:
                  '<p>GeneDx’s Patient Portal and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by GeneDx, its licensors, or other providers of such material and are protected by certain United States and international copyright, trademark, trade secret, and other intellectual property or proprietary rights laws.</p>' +
                  '<p>Under the terms of this Agreement permit GeneDx grants to you, for your personal purposes only, a nonexclusive, limited and revocable right to access and use its Patient Portal during the term of this Agreement, so long as you comply with the terms of this Agreement. You agree not to use the Account Service for any other purpose, including commercial purposes, such as co-branding, framing, linking, or reselling any portion of the Account Service without GeneDx’s prior written consent. The names, trademarks, service marks and logos of GeneDxand/or its vendors that appear on or in connection with its Patient Portal may not be used by you in connection with any publicity or advertising, or in any manner that suggests GeneDx’s and or its vendors’ affiliation with or sponsorship of any product or service without the express written permission of GeneDx.</p>' +
                  '<p>There is nothing contained in the Patient Portal or the terms of this Agreement that should be construed as granting, by implication, estoppel, waiver or otherwise, any license or right of use to any trademark displayed on or in connection with GeneDx’s Patient Portal without the written permission of GeneDxor, if applicable, the third party owner of the trademark. GeneDx’s accounts may contain proprietary notices and copyright information expressing certain rights belonging to GeneDx, and there is nothing in this Agreement or in the Patient Portal which limits or waives any of these legal rights, which shall remain in effect and must be followed by you.</p>',
              },
              {
                title: 'Term and Termination',
                content:
                  'Either party may terminate this Agreement at any time and without prior notice or notice of any kind. You understand and agree that it is not GeneDx’s responsibility to back up, store, maintain or to provide your data and that you are solely responsible for backing up the data that you store on the Patient Portal, and that you must immediately stop use of the Patient Portal upon termination. This section of this Agreement, as well as all other sections of the Agreement that should survive based on their context, shall survive termination of this Agreement, including but not limited to Sections 10, 12, 13, 14, 15 and 16.',
              },
              {
                title: 'Arbitration and Class Action Waiver',
                content:
                  '<p>PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE DISPUTES WITH GENEDX ARISING IN CONNECTION WITH THIS AGREEMENT OR THE PATIENT PORTAL, AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM US. </p>' +
                  '<p>YOU AND GENEDX AGREE THAT ANY DISPUTE, CLAIM OR CONTROVERSY ARISING OUT OF OR RELATING IN ANY WAY TO THIS AGREEMENT OR THE PATIENT PORTAL SHALL BE FINALLY DECIDED BY BINDING ARBITRATION UNDER THE CONSUMER ARBITRATION RULES OF THE AMERICAN ARBITRATION ASSOCIATION. THIS ARBITRATION WILL BE CONDUCTED BY A SINGLE, NEUTRAL ARBITRATOR WHO WILL BE JOINTLY SELECTED BY THE PARTIES TO DECIDE THEIR DISPUTE (INSTEAD OF A JUDGE OR JURY). ARBITRATION GENERALLY ALLOWS FOR MORE LIMITED DISCOVERY THAN IN A COURT PROCEEDING AND THE ARBITRATION PROCESS AND RESULT IS SUBJECT TO VERY LIMITED REVIEW BY THE COURTS. IN AN ARBITRATION, YOU HAVE THE RIGHT, AT YOUR EXPENSE, TO BE REPRESENTED BY AN ATTORNEY OF YOUR CHOOSING. ARBITRATORS CAN AWARD THE SAME DAMAGES AND RELIEF UNDER THIS AGREEMENT THAT A COURT CAN AWARD UNDER THIS AGREEMENT. YOU AND GENEDX AGREE THAT ANY IN-PERSON ARBITRATION HEARING WOULD OCCUR IN THE UNITED STATES IN THE SAME COUNTY AND STATE AS YOUR BILLING ADDRESS. GENEDX FURTHER AGREES THAT YOUR FILING FEE FOR AN ARBITRATION WILL BE CAPPED AT THE AMOUNT SET BY THE AMERICAN ARBITRATION ASSOCIATION. YOU AGREE THAT, BY AGREEING TO THIS AGREEMENT, THE U.S. FEDERAL ARBITRATION ACT GOVERNS THE INTERPRETATION AND ENFORCEMENT OF THIS PROVISION, AND THAT YOU AND GENEDX ARE EACH WAIVING THE RIGHT TO PARTICIPATE IN A CLASS ACTION. THIS ARBITRATION PROVISION SHALL SURVIVE TERMINATION OF THIS AGREEMENT AND THE TERMINATION OF YOUR USE OF THE PATIENT PORTAL. REGARDLESS OF THE FORUM, YOU AND GENEDX AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. FURTHER, THE ARBITRATOR MAY NOT JOIN OR CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS OR ARBITRATION DEMANDS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING. IF THIS SPECIFIC PROVISION IS FOUND TO BE UNENFORCEABLE, THEN THE ENTIRETY OF THIS ARBITRATION PROVISION SHALL BE NULL AND VOID. THE ARBITRATOR MAY AWARD DECLARATORY OR INJUNCTIVE RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF WARRANTED BY THAT PARTY’S INDIVIDUAL CLAIM.</p>',
              },
              {
                title: 'Entire Agreement',
                content:
                  'This Agreement, its terms and conditions and the Online Privacy Notice, Notice of Privacy Practices and Non-Discrimination Notice, and any other policies or notices referenced herein, represent the entire agreement of the parties with respect to the subject matter hereof. Certain provisions of this Agreement are incorporated herein via hyperlink. You agree that if at the time of accepting this Agreement, such hyperlinks do not redirect you to the appropriate web page, you will notify the Compliance Department at GeneDx immediately at ComplianceDepartment@bioreference.com. Failure to notify GeneDx immediately shall be deemed as acceptance of the provisions incorporated herein by hyperlink as though they redirected you to the appropriate web page.',
              },
            ],
          },
          privacyPolicy: {
            title: 'Online Privacy Policy',
            subtitle: 'Your privacy is important to us',
            introduction:
              'GeneDx, Inc. and its affiliates, subsidiaries and divisions online privacy policy and the links included, explain how we collect, treat, and protect your individually identifiable personal information. Specifically, how we handle the personal information that you submit to us, when you browse our website, submit forms, or upload your resume. In addition to the policy, our sites comply with GeneDx, Inc., Notice of Privacy Practices as required by the Health Insurance Portability & Accountability Act of 1996 (HIPAA).',
            list: [
              {
                title: 'Information we collect:',
                content:
                  '<p>Two types of information are collected from our website: </p>' +
                  '<p><ul><li>Personal or "individually identifiable" information you provide to us.</li><li>Aggregate information regarding overall website traffic patterns.</li></ul></p>' +
                  '<p>We will not disclose, sell or rent your name or any personal information about you to any third party. We use the aggregate information we collect to measure the number of visitors to the different pages and sections of our site, and to help us make our site more useful to visitors. The aggregate information we collect is not linked to personal information, and we do not report on individual user sessions. </p>' +
                  '<p><ul><li>Automatic tracking information is gathered when you visit our website. Most web browsers automatically provide this information to the sites they visit and display. This information is not personally identifiable. We do not collect any additional data from your computer, and we do not compare data provided by your browser with any other data we maintain. We use aggregate numbers to compile statistics, monitor trends and track site usage. We also use the information to make sure our technology is compatible with yours.</li><li>Personal information can be anything you have provided through our sites that identifies you. For example: Your name, email address, and street address are types of personal information. We store this information behind a complex series of firewalls, in a way that maximizes security and confidentiality.</li></ul></p>',
              },
              {
                title: 'How we use your information',
                content:
                  '<ul>' +
                  '<li>We will only use the information to provide you with the services you have requested and as otherwise described in this Online Privacy Policy.</li>' +
                  '<li>We do not sell your personal information you provide within our sites.</li>' +
                  '<li>We do not provide any personally identifiable information about our users to any third party.</li>' +
                  '<li>Access to the data you submit is limited to authorized staff only, as outlined in our security policy.</li>' +
                  '</ul>',
              },
              {
                title: 'The Use of cookies:',
                content:
                  'We use "cookies" to personalize our site for you and to collect aggregate information about site usage by our users. A cookie is a text file that our website transfers to your computer\'s hard drive for record keeping purposes. The cookie assigns a random, unique number to your computer. It does not contain information that would personally identify you.',
              },
              {
                title: 'Disclosures of Information to Third Parties:',
                content:
                  "GeneDx web-sites contain links to other Internet web sites, which may direct you to an external web site or may be displayed within a frame on the GeneDx owned site, including co-branded or other affiliated sites which may or may not be owned or operated by GeneDx. Links to the GeneDx web-site may also be featured on independent third-party web sites. GeneDx has no control, and is not responsible for the privacy practices, functionality, utilization, or accessibility  of other web sites that may host links to the GeneDx web-site, or that you may visit through links or frames on the GeneDx owned Site, including such sites' use of any information (such as IP number, browser type, or usage history) collected when visitors to the GeneDx site click through links. We recommend that you review individual site privacy policies before providing any information on such web sites.",
              },
              {
                title: 'Other Information we collect and how we use it:',
                content:
                  '<p>We may gather and store aggregate information about visitors. The collection of this aggregate information enables us to measure the number of visitors to various portions of the site, diagnose problems with our server, administer the site and track visitor activity. </p>' +
                  '<p>We will use this aggregate information to learn more about what you and our customers are expecting from our services, and tailor and improve the site. Because aggregate information collected on the site does not personally identify you, we may use aggregate information for any purpose, and share aggregate information with third parties for any purpose. Below are ways we may collect this aggregate information: </p>',
              },
            ],
            sections: [
              {
                title: 'Google Analytics',
                content:
                  "<p>We use Google Analytics as a third party tracking service, to collect information about how our website performs and how our users, navigate through and use our website. This helps us evaluate our users' use of our website; compile statistical reports on activity; and improve our content and website performance.</p>" +
                  '<p>Google Analytics gathers non-personally identifying information such as your IP address, browser type, internet service provider, referring and exit pages, time stamp, and similar data about your use of our website. We do not allow third parties to, use the Google Analytics tool to track our users individually; collect any user personal Information other than IP address; or correlate your IP address with your identity. Google provides further information about its own privacy practices and offers a browser add-on to opt out of Google Analytics tracking <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.</p>' +
                  '<p>If you have any questions or comments about our Online Privacy Policy, please feel free to contact us at: </p>' +
                  '<p>Privacy@BioReference.com or <br />' +
                  'Privacy Office<br />' +
                  'BioReference Laboratories, Inc. <br />' +
                  '481 Edward H. Ross Drive <br />' +
                  'Elmwood Park, NJ 07407 <br />' +
                  '(800) 229-5227 x 8222</p>',
              },
              {
                title: 'NOTICE OF PRIVACY PRACTICES',
                content:
                  '<p>Effective Date: September 23, 2013 <br />' +
                  'Revision Date: March 12, 2021 </p>' +
                  '<p><b>THIS NOTICE DESCRIBES HOW MEDICAL AND PERSONAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</b></p>' +
                  '<p><b>Our Commitment to Safeguard Your Protected Health Information.</b></p>' +
                  '<p>GeneDx, Inc. is committed to complying with and addressing data privacy requirements under all applicable laws, including but not limited to the Health Insurance Portability and Accountability Act <b>(HIPAA)</b>.  This notice of privacy practices <b>(NOPP)</b> explains how we handle your protected health information <b>(PHI)</b> in connection with the provision of clinical laboratory testing services. </p>' +
                  '<p>GeneDx is required by law to protect the privacy of health information that may reveal your identity and provide you with a copy of this NOPP, and to follow its terms then in effect. However, GeneDx reserves the right to change its privacy practices and the corresponding policies and procedures and, where permitted by applicable law, to make these changes effective regarding PHI created or received prior to the effective date of such changes.  Should we make changes to this NOPP, we will post a revised NOPP in our website and in our patient service centers.  GeneDx may also need to materially change its policies and procedures as necessary to comply with changes in the law and for other valid reasons, in which case GeneDx will promptly revise its policies and this NOPP and distribute the revised NOPP in the manner described below. </p>' +
                  '<p>You have the right to obtain a paper copy of the NOPP upon request.    You will also be able to obtain your own copy by accessing our website at <a href="https://www.genedx.com/privacy">https://www.genedx.com/privacy</a> calling our office or at the time of your on-site visit. </p>' +
                  '<p><b>If you have any questions about this NOPP or would like additional information, please contact our Privacy Office at 800- 229-5227 Ext 8222.</b> </p>' +
                  '<p>Please address any written request (such as requests for a copy of this NOPP, access to your record, to restrict a disclosure to a payer, etc.) to: </p>' +
                  '<p>Privacy Officer Privacy Office <br />' +
                  'BioReference Laboratories, Inc. <br />' +
                  '481 Edward H. Ross Drive <br />' +
                  'Elmwood Park, NJ, 07407 <br />' +
                  'Fax: (201) 663-6585</p>',
              },
              {
                title: 'EXAMPLES OF PROTECTED HEALTH INFORMATION',
                content:
                  'Information that we have provided or will provide testing services to you or information about your health, such as a diagnosis, procedures, or information about your healthcare provider in combination with your demographic information (such as name, home or email address, or date of birth); or unique numbers that may identify you (such as your social security number, your phone number, or your driver’s license number).',
              },
              {
                title:
                  'HOW WE MAY USE AND DISCLOSE YOUR PROTECTED HEALTH INFORMATION',
                content:
                  '<p>We may collect, use, disclose, and maintain your PHI for the following purposes:</p>' +
                  '<p><b><u>For Treatment, Benefits and Services:</u></b> As a service provider, we may disclose your PHI to healthcare providers who are involved in your health care, and they may use such PHI to treat you, While providing services, we may use your PHI to determine care management options.  For example, your PHI will be shared among your healthcare providers. Your doctor may also share your health information with another doctor or healthcare provider to whom you have been referred for further treatment./p>' +
                  '<p>We may also make your PHI available to providers by making it accessible through a Health Information Exchange <b>(HIE)</b>, an electronic network that makes it possible to share information electronically, but no one will be permitted to access it through the HIE without your consent except in an emergency, unless you direct us not to allow access during an emergency.  Be aware that if your healthcare provider allows us to transfer your laboratory and pathology reports to his or her electronic health record <b>(EHR)</b> in his or her office, once they have been transferred, anyone taking care of you at that office may be able to access your laboratory and pathology results directly.</p>' +
                  '<p><b><u>For Payment:</u></b> We may use and disclose your PHI to bill and collect payment for your healthcare and/or release portions of your PHI to a private insurer to get paid for services that we delivered to you.  For example, we may share your PHI with your health insurance plan so it will pay for your services or to obtain prior authorization for your services.</p>' +
                  '<p><b><u>For Health Care Operations:</u></b> We may use and disclose your PHI while operating our clinical laboratory.  For example, we may use your PHI for certain administrative, financial, legal, and quality improvement purposes, such as to conduct quality assessments, internal audits, general administrative and business planning activities and other activities necessary to support our healthcare operations.  We may share your health information with other healthcare providers and payors for certain of their health care operations if the information is related to a relationship the healthcare provider or payor currently has or previously had with you, and if the healthcare provider or payor is required by federal law to protect the privacy of your health information.</p>' +
                  '<p><b><u>Testing Alternatives and Services:</u></b> In the course of providing services to you, we may use your health information to contact you with a reminder that you have an appointment for services. We may also use your health information in order to recommend possible alternatives or services that may be of interest to you. However, to the extent a third party provides financial remuneration to us so that we make these treatment-related or health care operations-related communications to you, we will secure your authorization in advance as we would with any other marketing communication (as described later in this NOPP).</p>' +
                  '<p><b><u>Business Associates:</u></b> We may disclose the minimum amount of your PHI necessary to contractors, agents and other business associates who need the information to help us with billing or other business activities related to the services we provide.  For example, we may share PHI with a billing company that helps us obtain payment from your health insurer, an attorney or with a quality assurance consultant to obtain their advice regarding our operations and comply with the law.  If we do disclose your PHI to a business associate, we will have a written contract with them that requires the business associate and any of its subcontractors to take reasonable steps to protect the privacy of your PHI as required by law and/or contract.</p>' +
                  '<p><b><u>When Required by Law:</u></b> We may collect, use, maintain, or disclose your PHI as required by law.  For instance, under the United States’ Clinical Laboratory Improvement Amendments of 1988 (CLIA), we are required to obtain and maintain for designated periods of time personal health data and specimens belonging to patients for whom we are providing laboratory testing services.  Therefore, while you may refuse to provide GeneDx with your PHI, we are unable to test any specimen of yours without the certain data elements which we are required to obtain under CLIA.  Please note that the CLIA-mandated retention periods can range from two (2) years for test requisitions and authorizations to ten (10) years for pathology test reports and histopathology slides.  For more information on the specific CLIA-mandated retention periods please check 42 C.F.R. § 493.1105, as amended from time to time.  In addition, we maintain patient information in connection with pending litigation, legal processes, legal claims, compliance, regulatory matters, and investigations, as necessary.</p>' +
                  '<p><b><u>For Public Health Activities:</u></b> We may disclose PHI when we are required to collect information about disease or injury, or to report vital statistics to the public health authority.  We are also required to release some PHI about you to your employer if your employer hires us to perform a pre-employment test or we discover that you have a disease that your employer must know about to comply with employment laws.</p>' +
                  '<p><b><u>For Research Purposes:</u></b> In certain circumstances, pursuant to the approval and supervision of a privacy board, we may use and disclose your PHI to our research staff and their designees to assist in medical research.</p>' +
                  '<p><b><u>Victims of Abuse, Neglect, or Domestic Violence:</u></b> We may release your PHI to a public health authority that is authorized to receive reports of abuse, neglect, or domestic violence.  For example, we may report your PHI to government officials if we reasonably believe that you have been a victim of such abuse, neglect, or domestic violence.  We will make every effort to obtain your permission before releasing this information, but in some cases, we may be required or authorized by law to act without your permission.</p>' +
                  '<p><b><u>Judicial and Administrative Proceedings:</u></b> We may disclose your PHI in response to valid court orders, court-ordered warrants, and judicial summonses and subpoenas, grand jury subpoenas, and administrative requests.  We may also disclose your PHI in response to a discovery requests or other legal process and legal requests, but only if efforts have been made, either by the requesting party or us, to first tell you about the request or to obtain an order protecting the information requested.</p>' +
                  '<p><b><u>For Health Oversight Activities:</u></b> We may disclose PHI to an agency responsible for monitoring the healthcare system for such purposes as reporting or investigation of unusual incidents and inspecting our facility.  These government agencies monitor government benefit programs such as Medicare and Medicaid, as well as compliance with government regulatory programs and civil rights laws.</p>' +
                  '<p><b><u>To Avert Threat to Health or Safety:</u></b> To avoid a serious threat to health or safety, we may disclose PHI as necessary to law enforcement or other persons who can reasonably prevent or lessen the threat of harm.</p>' +
                  '<p><b><u>For Specific Government Functions:</u></b> We may disclose PHI of U.S. military personnel and veterans and to correctional facilities in certain situations, to government benefit programs relating to eligibility and enrollment, and for national security and intelligence activities, such as protection of the President.</p>' +
                  '<p><b><u>For Law Enforcement:</u></b> We may disclose your PHI to comply with court orders, to assist law enforcement officers with identifying or locating a suspect, fugitive, witness, or missing person; if we suspect that death resulted from criminal conduct; or if necessary to report a crime that occurred in any of our facilities.</p>' +
                  '<p><b><u>Workers’ Compensation:</u></b> We may disclose your PHI for workers’ compensation or similar programs that provide benefits for work-related injuries, as authorized by and to the extent necessary to comply with laws regarding workers’ compensation or similar programs providing benefits for work-related injuries or illness.</p>' +
                  "<p><b><u>Coroners, Medical Examiners and Funeral Directors:</u></b> Where allowed by applicable law, we may disclose PHI relating to an individual's death to coroners, medical examiners, or funeral directors, and to organ procurement organizations relating to organ, eye, or tissue donations or transplants.  Note: Information belonging to patients who are deceased more than 50 years is not considered PHI.</p>" +
                  '<p><b><u>To Family, Friends, or Others Involved in Your Care:</u></b> If you do not object, we may share your PHI with your family members, friends, and others if this information is directly related to their involvement in your care, or payment for your care.  In some cases, we may need to share your information with a disaster relief organization that will help us notify these persons.</p>' +
                  '<p><b><u>Completely De-identified or Partially De-identified Information:</u></b> We may use and disclose your health information if we have removed any information that could identify you.  Where permitted by applicable law, we may also use and disclose health information about you for research, public health, and specific healthcare operations if most of your identifiers are removed and the person who will receive the information signs an agreement to protect the privacy of the information as required by federal and applicable state law.  In that case any direct identifiers (such as your name, street address, social security number, phone number, fax number, home address, or license number) would be removed, but your zip code, date of birth, or dates of service would not be removed.</p>' +
                  '<p><b><u>For Internal Assessments and Healthcare Operations Communications:</u></b> We may use your PHI to help us understand which products, services and offers are relevant to you, to improve our products and services, and generally to communicate news or matters involving quality of care that may be relevant to you.  Keep in mind that this use is solely for internal purposes and that we will not sell any of your PHI to any third party.  If you do not wish to receive these communications, you can inform us of your decision by providing notice to the Privacy Office at the address set forth in this NOPP and we will not engage in such activity.</p>' +
                  '<p><b><u>Other Permitted Disclosures:</u></b> We will use your PHI, only for the purposes for which we collect it, unless we reasonably consider that we need to use it for another reason that is compatible with the original purpose.  If we need to use your PHI for another purpose, we will explain the legal basis we rely on.  Our legal basis to use, and disclose PHI includes (i) your consent (which may subsequently be withdrawn at any time by contacting the Privacy Office at the address listed in this NOPP), (ii) legitimate business needs, which include but are not limited to ensuring that we provide accurate results and that we have the right information on file to communicate with you at any time, obtaining payment for our services, and ensuring that we comply with our quality assurance policies, (iii) creation or performance of contractual obligations (e.g. communicating laboratory results to you or your provider), and (iv) compliance with legal requirements (e.g. complying with a court order or a legal mandate).</p>' +
                  '<p><b><u>Requirement for Written Authorization:</u></b> We will only make other uses and disclosures of your PHI that are not described in this NOPP, and not otherwise required or allowed by law, with your written authorization.  For example, we will not sell your PHI or use or disclose your PHI for marketing purposes without your written authorization.</p>' +
                  '<p>If you provide us with written authorization, you may revoke that written authorization at any time, except to the extent that we have already collected, maintained, used, or disclosed the same in accordance with the provisions set forth above.  You must revoke your authorization in writing by contacting the Privacy Office at the address listed in this NOPP.</p>' +
                  '<p><b><u>Additional Protections for HIV, Alcohol and Substance Use, Mental Health, and Genetic Information:</u></b> We apply additional protections to PHI that is subject to other state and federal laws, including information and programs relating to HIV/AIDS, alcohol and substance use, mental health, and genetic testing and treatment. Special privacy protections applying to PHI relating to alcohol and substance use, mental health information, and genetic information and HIV/AIDS -related information.  Subject to limited federal and state legal requirements and the above uses and disclosures, we will obtain your permission prior to disclosing HIV/AIDS-related information, alcohol and substance use, mental health, and genetic related information.</p>' +
                  '<p><b><u>Right To Notice of Breach of Unsecured Health Information:</u></b> We are required by law to maintain the privacy of your PHI, to provide you with this NOPP containing our legal duties and privacy practices with respect to your health information, and to abide by the terms of this NOPP. It is our policy to safeguard your health information so as to protect the information from those who should not have access to it. If, however, for some reason we experience a breach of your unsecured protected health information, we will notify you of the breach as required by applicable law.</p>',
              },
              {
                title: 'APPLICATION',
                content:
                  'The privacy practices described in this NOPP apply to GeneDx, Inc..',
              },
              {
                title: 'DATA SECURITY',
                content:
                  'We maintain reasonable security measures to safeguard your PHI from loss, interference, misuse, unauthorized access, disclosure, alteration, or destruction.  We also maintain reasonable procedures to help ensure that such data is reliable for its intended use and is accurate, complete, and current.',
              },
              {
                title: 'USE OF COOKIES',
                content:
                  'From time to time we use cookies and similar technology in our websites and e-mail communications for legitimate business purposes such as collecting statistics, helping optimize site functionality and security, to determine the effectiveness of our communications with customers and, generally, to help us better understand how we can improve our services.  Cookies are small files that are placed on your computer by websites that you visit or certain emails you open.  These include “preference cookies,” “security cookies,” or “process cookies.”  Cookies are widely used in electronic communications around the world.  Upon accessing our website, you provided us with your consent to the placement of cookies in your computer.',
              },
              {
                title: 'YOUR RIGHTS TO ACCESS AND CONTROL YOUR PHI',
                content:
                  '<p><b>To Request Restrictions on Uses/Disclosures:</b> You have the right to ask that we limit how we use or disclose your PHI.  We will consider your request but are not legally bound to agree to the restriction.  To this effect, you will need to contact our Privacy Office at the address listed in this NOPP and provide us with your written instructions, which we will keep on file.  To the extent that we do agree to any restrictions on our use/disclosure of your PHI, we will put the agreement in writing and abide by it to the extent permitted by law or the information is needed to provide you with emergency treatment. Once we have agreed to a restriction, you have the right to revoke the restriction at any time. Under some circumstances, we will also have the right to revoke the restriction as long as we notify you before doing so; in other cases, we will need your permission before we can revoke the restriction. We are required, however, to honor your written request if you direct us not to share specific PHI with your insurance company relating to a service you or someone on your behalf has paid for out-of-pocket and in full.  It is your responsibility to inform other providers who may receive copies of such information that they may not share this information with your insurer.</p>' +
                  '<p><b>To Choose How We Contact You:</b> You have the right to ask that we send you information at an alternative address or by an alternative means.  We must agree to your request as long as it is reasonably easy for us to do so and we may not ask the reason for the request.</p>' +
                  '<p><b>To Inspect and Copy Your PHI:</b> You have the right to inspect and obtain a copy of any of your PHI in either electronic or paper form for as long as we maintain this information in our records.  We will provide the records in the specific form and format that you request if it is readily producible in such form or format.  To obtain a copy of your PHI, please submit your request in writing.  Depending upon where you live, we may charge a fee as permitted by law for the costs of copying, mailing or other supplies necessary to fulfill your request.  We generally require payment before or at the time we provide the copies and will let you know the amount due in advance.</p>' +
                  '<p>Under certain very limited circumstances, we may deny your request to inspect or obtain a copy of your information.  If we do, we will provide a written statement that explains the reasons for the denial and a description of your right to have that decision reviewed.  In such cases where you have the right to have your denial reviewed, we will describe the review process to you in writing.  If your request for access to your PHI is denied for any reason, we will describe to you in writing how you can file a complaint with GeneDx or with the Secretary of the United States Department of Health and Human Services’ Office of Civil Rights (OCR).</p>' +
                  '<p><b>To Request Amendment of Your PHI:</b> If you believe that the PHI in our system is incorrect or incomplete, you may ask us to amend the information for as long as the information is kept in our records.  If you wish to amend your PHI, please request an amendment in writing including why you think we should make the amendment.  Ordinarily we will respond to your request within 60 days. If we need additional time to respond, we will notify you in writing within 60 days to explain the reason for the delay and when you can expect to have a final answer to your request. If we deny part or all of your request, we will provide you with a written notice explaining our reasons for doing so and how you can appeal the decision. You will have the right to have certain information related to your requested amendment included in your records. For example, if you disagree with our decision, you will have an opportunity to submit a statement explaining your disagreement which we will include in your records. We will also provide you with information on how to file a complaint with us or with the Secretary of the Department of Health and Human Services.</p>' +
                  '<p><b>To Receive an Accounting of Disclosures:</b> You have a right to submit a request in writing asking for information about our disclosures of your PHI, except for disclosures made:</p>' +
                  '<ul>' +
                  '<li>For treatment, payment, and operations;</li>' +
                  '<li>To you or your personal representative;</li>' +
                  '<li>At your written request;</li>' +
                  '<li>For national security purposes;</li>' +
                  '<li>To family, friends, and other persons involved in your care;</li>' +
                  '<li>To correctional institutions or law enforcement officers;</li>' +
                  '<li>Incidental to permissible uses and disclosures of your PHI (for example, when information is overheard by another person passing by);</li>' +
                  '<li>For research or public health using limited portions of your health information that do not directly identify you; and</li>' +
                  '<li>That occurred prior to the compliance date of this requirement.</li>' +
                  '</ul>' +
                  '<p>The scope of your right to request an accounting may be modified from time to time to comply with changes in federal law or state law.</p>' +
                  '<p>Ordinarily we will respond to your request for an accounting within 60 days. If we need additional time to prepare the accounting you have requested, we will notify you in writing about the reason for the delay and the date when you can expect to receive the accounting. In rare cases, we may have to delay providing you with the accounting without notifying you because a law enforcement official or government agency has asked us to do so.</p>',
              },
            ],
          },
          complains: {
            title: 'How to Complain About Our Privacy Practices:',
            content:
              '<p>If you believe your privacy rights have been violated, you may file a complaint with GeneDx or the federal agency that enforces HIPAA by submitting your complaint as described below:</p>' +
              '<p>Privacy Officer <br />' +
              'HIPAA Privacy Office <br />' +
              'BioReference Laboratories, Inc. <br />' +
              '481 Edward H. Ross Dr. <br />' +
              'Elmwood Park, N. J. 07407 <br />' +
              'T: 800 229-5227 Ext. 8222</p>' +
              '<p>Or</p>' +
              '<p>Office of Civil Rights <br />' +
              'U.S. Department of Health and Human Services 200 Independence Avenue, S.W. <br />' +
              'Washington, D.C. 20201 <br />' +
              'Telephone: (800) 368-1019 <br />' +
              '<a href="www.hhs.gov/ocr/hipaa" style="color: red">www.hhs.gov/ocr/hipaa</a></p>' +
              '<p><b><u>You will not be penalized or subject to retaliation for filing a complaint.</u></b></p>' +
              '<p>GeneDx, Inc. complies with all applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability or sex, and does not exclude people or treat them differently because of race, color, national origin, age, disability, or sex. We provide free aids and services to people with disabilities to communicate effectively with us, such as:</p>' +
              '<ul>' +
              '<li>Qualified sign language interpreters</li>' +
              '<li>Written information in other formats (large print, audio, accessible electronic formats, other formats)</li>' +
              '</ul>' +
              '<p>Provides free language services to people whose primary language is not English, such as:</p>' +
              '<ul>' +
              '<li>Qualified interpreters</li>' +
              '<li>Information written in other languages</li>' +
              '</ul>',
          },
          translations: {
            title: 'Translation Services',
            content:
              '<p>We have interpreters available at no cost 24/7, in compliance with federal and state laws, to assist patients, their family members, and other legally authorized persons. For assistance, please contact our Customer Service Department at (888) 729-1206, option 2.</p>' +
              '<ul>' +
              '<li><b>English:</b><br />ATTENTION: If you do not speak English, language assistance services, free of charge, are available to you. Call (888) 729-1206, option 2.</li>' +
              '<li><b>Spanish:</b><br />ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al (888) 729-1206, option 2.</li>' +
              '<li><b>Chinese:</b><br />注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電  1-800-229-5227.</li>' +
              '<li><b>Russian:</b><br />ВНИМАНИЕ: Если вы говорите на русском языке, то вам доступны бесплатные услуги перевода. Звоните 1-800-229-5227.</li>' +
              '<li><b>Korean:</b><br />주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다. 1-800-229-5227 번으로 전화해 주십시오.</li>' +
              "<li><b>Italian:</b><br />ATTENZIONE: In caso la lingua parlata sia l'italiano, sono disponibili servizi di assistenza linguistica gratuiti. Chiamare il numero 1-800-229-5227.</li>" +
              '<li><b>Arabic:</b><br />ﺓﺓﻅﻅﻭﻭﺡﺡ: ﺍﺍﺫﺫﺇﺇ ﺕﺕﻥﻥﻙﻙ ﺙﺙﺩﺩﺡﺡﺕﺕﺕﺕ ﺭﺭﻙﻙﺫﺫﺍﺍ ٬٬ﺓﺓﻍﻍﻝﻝﻝﻝﺍﺍ ﻥﻥﺇﺇﻑﻑ ﺕﺕﺍﺍﻡﻡﺩﺩﺥﺥ ﺓﺓﺩﺩﻉﻉﺍﺍﺱﺱﻡﻡﻝﻝﺍﺍ ﺓﺓﯼﯼﻭﻭﻍﻍﻝﻝﻝﻝﺍﺍ ﺭﺭﻑﻑﺍﺍﻭﻭﺕﺕﺕﺕ ﻙﻙﻝﻝ ﻥﻥﺍﺍﺝﺝﻡﻡﻝﻝﺍﺍﺏﺏ. ﻝﻝﺹﺹﺕﺕﺍﺍ ﻡﻡﻕﻕﺭﺭﺏﺏ ‐1-800‐ 229 5227</li>' +
              "<li><b>French:</b><br />ATTENTION : Si vous parlez français, des services d'aide linguistique vous sont  proposés gratuitement. Appelez le 1-800-229-5227.</li>" +
              '<li><b>German:</b><br />ACHTUNG: Wenn Sie Deutsch sprechen, stehen Ihnen kostenlos sprachliche  Hilfsdienstleistungen zur Verfügung. Rufnummer: 1-800-229-5227.</li>' +
              '<li><b>Polish:</b><br />UWAGA: Jeżeli mówisz po polsku, możesz skorzystać z bezpłatnej pomocy językowej. Zadzwoń pod numer 1-800-229-5227.</li>' +
              '<li><b>Vietnamese:</b><br />CHÚ Ý: Nếu bạn nói Tiếng Việt, có các dịch vụ hỗ trợ ngôn ngữ miễn phí dành cho bạn. Gọi số 1-800-229-5227.</li>' +
              '</ul>',
          },
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
        consent: {
          title: 'Consent to Participate',
          description: 
            '<h7>At GeneDx we believe you should be in control of how your health information is used and whether and how it can be shared. Sharing health information that has been de-identified – which means information like your name, birthdate and location has been removed – can be a valuable contribution to medical research, helping scientists discover new causes and new treatments for diseases.</h7>' +
            '<h7>We want you to understand how your health information might be used when you sign up for an account with us. By registering for an account on GeneDx.com, I agree to:</h7>' +
            '<ol>' +
            '<li><h7>receive emails and/or text messages from GeneDx. I can choose which method I prefer and what information I am most interested in. I understand I have the ability to opt-out from emails and/or text messages at any time.</h7></li>' +
            '<li><h7>receive a copy of genetic test results. I can choose whether or not to view the test report once it is available in my account.</h7></li>' +
            '<li><h7>provide information about myself and/or my dependent who had genetic testing by GeneDx. I can choose how much information to provide. Any information I provide will be securely stored by GeneDx and used for the following purposes:</h7></li>' +
            '<ol>' +
            '<li><h7><u>Reanalysis</u> - Information I provide can be used to re-analyze my or my dependent’s genetic test results again after the original genetic test was completed (reanalysis). New health information I provide may help the geneticists at GeneDx find new information about my or my dependent’s genetics, for example a change in the likely significance of a gene variation I might have. , If GeneDx finds something new, it will be reported to me.</h7></li>' +
            '<li><h7><u>Health summary</u> - The information I provide may be used to create a health summary which I can use with my clinicians along with my genetic test results.  I will always have access to the health summary.</h7></li>' +
            '<li><h7><u>Resources</u> - GeneDx may use the health information I provide, plus my genetic test results, to identify resources that may interest me. For example, a link to a support group or a fact sheet about a particular medical condition may be offered to me.</h7></li>' +
            '<li><h7><u>GeneDx Research</u> - GeneDx may use my or my dependent’s de-identified information in research that helps with future analyses for other people. De-identified information means data that has been stripped of any identifying information and used in aggregate, (this means a large amount of data from many people that is pooled together). For example including some of the information included in my test results regarding gene variants in counts of those variants among all GeneDx patients.</h7></li>' +
            '<li><h7><u>Research, Clinical Trials or Patient Registries</u> - If there is an potentially relevant opportunity for me or my dependent to participate in research outside of GeneDx, such as clinical trials, GeneDx may contact me with information about those opportunities. I can then choose if I want to participate or not. My contact information will not be shared with any 3rd party unless I choose to participate and agree to have my information shared.</h7></li>' +
            '</ol>' +
            '<li><h7>I also agree that GeneDx may use my or my dependent’s de-identified information for product development or quality control activities. The information will only be used in aggregate (this means a large amount of data from many people that is pooled together).<i>Some of these activities may be sponsored by or conducted on behalf of third parties, such as non-profit foundations, academic institutions or pharmaceutical companies.</i></h7></li>' +
            '</ul>' +
            '<p><h7>The scope of your right to request an accounting may be modified from time to time to comply with changes in federal law or state law.</h7></p>' +
            '<p><h7>Ordinarily we will respond to your request for an accounting within 60 days. If we need additional time to prepare the accounting you have requested, we will notify you in writing about the reason for the delay and the date when you can expect to receive the accounting. In rare cases, we may have to delay providing you with the accounting without notifying you because a law enforcement official or government agency has asked us to do so.</h7></p>',
          agreement: {
            consent: {
              label: 'I have read and consent to participate',
              errors: {
                required: 'Consent is required to participate',
              },
            },
            terms: {
              label: 'I have read and agree to the ',
              link: 'terms & conditions',
              errors: {
                required: 'Agreeing to the terms & conditions is required',
              },
            },
          },
        },
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
              body: "We're working on processing your test sample. Meanwhile, check out these helpful resources.",
              linkLabel: 'View resources',
            },
            testResultsReady: {
              heading: 'Test Results Ready',
              body: 'When your test results are ready, your doctor will arrange an appointment to discuss the results with you.',
              bodyPast:
                'When your test results are ready, your doctor will arrange an appointment to discuss the results with you.',
              linkLabel: 'Prepare for your appointment',
            },
            atAppointment: {
              heading: 'At Your Appointment',
              body: 'You will be able to discuss the results with your doctor and ask any questions you have.',
            },
            afterAppointment: {
              heading: 'After Your Appointment',
              body: 'You may also have a follow up discussion with a genetic counselor, a healthcare professional with expertise in genetics.',
              linkLabel: 'Support & resources',
            },
          },
          getUpdates: 'Receive progress updates',
          noUpdates: 'No updates since your last login',
          onTrack: 'Everything is on track',
          inProcess: 'Test in process',
          inProgress: 'Test in progress',
          updated: 'Updated {{lastUpdated}}',
          ready: 'Results Ready',
          checkBackSoon: 'Check back to see when your results should be ready.',
          doctorShared: 'And shared with your doctor',
          doctorAppointment:
            'Your doctor will soon arrange an appointment to discuss them with you',
          caveat:
            'Results typically are returned in 7 days, but can take up to 5 weeks',
          expectation:
            "NOTE: time is not an indicator of case difficulty or a positive test result. Please allow time for your genetic test to process before calling the lab or your doctor's office.",
          mayVary: 'Please keep in mind that processing time may vary',
          estimate: 'Expect results in {{estimate}} days',
          expected: 'Results expected {{expectedResultsDate}}',
          error: 'Error fetching test results',
          notLoaded: 'Test results not fetched',
        },
        identity: {
          title: "Let's start by verifying your information",
          subTitle:
            'To make sure we keep your information safe, we have a few details to confirm.',
          errors: {
            title: "Those details don't match our records.",
            attemptsStart: 'Please check them over and try again. You have',
            attemptsEnd: 'authentication attempts left.',
          },
          form: {
            zipCode: {
              label: 'Patient Zip Code',
              placeholder: 'e.g. 123456',
            },
            dateOfBirth: {
              label: 'Patient Date of Birth',
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
          consent: {
            title: 'Consent to Participate',
          },
          stepOne: {
            title: 'Thank you!',
            subTitle:
              'We have confirmed your identity - we just need a couple more details to set up your account.',
          },
          stepTwo: {
            subTitle:
              'Please let us know how we can notify you of your genetic test results.',
          },
          stepThree: {
            subTitle:
              'Giving us some extra information about you can help us to tailor your experience with us.',
          },
          stepFour: {
            errors: {
              title: 'There was a problem registering.',
            },
            subTitle:
              'Lastly, create a strong password to help keep your account and your information safe.',
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
          continue: 'Continue',
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
