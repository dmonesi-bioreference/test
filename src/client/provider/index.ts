declare global {
  interface PatientProfile {
    patient_nickname: string;
    patient_dob: string;
    patient_name: string;
    gender_genetic: string;
    gender_identity: string;
    insurance: string;
    phenotype: string;
    caregiver_location: string;
  }

  interface PatientContactInfo {
    ContactType: string;
    PhoneCountryCode: string;
    ContactValue: string;
    NotifyPatient: boolean;
  }

  interface Patient {
    Id: number;
    ExternalPatientId: null;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    MaidenName: string;
    BirthDate: string;
    Gender: string;
    GenderIdentification: string;
    LanguageCode: string;
    MRN: string;
    Street1: string;
    Street2: string;
    Apartment: string;
    City: string;
    State: string;
    Zip: string;
    County: string | null;
    Country: string;
    ContactInformation: PatientContactInfo[];
    MaritalStatus: string;
    Race: string;
    EmploymentStatus: string;
    Employer: string | null;
    EthnicGroup: [];
    GovernmentId: string;
    GovernmentIdType: string | null;
    IsPatientUpdated: boolean;
    IsInsuranceUpdated: boolean;
    IsGuarantorUpdated: boolean;
    Guarantor: string | null;
    Insurances: [];
    AccountInformation: string | null;
    PatientTestInformation: string | null;
    AddOnQualify: boolean;
    ExistingOrderId: string | null;
  }

  interface InsuranceDetail {
    Name: string;
    Code: string;
    OtherInsuranceName: string;
    InsuranceCategory: string;
    InsurancePlanCompany: string;
    BiEnabled: boolean;
    CanPerformFederalInsuranceBi: boolean;
    Network: string;
    IsXifinIns: boolean;
  }

  interface Insurance {
    Insurance: InsuranceDetail;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    BirthDate: string;
    Gender: string;
    RelationToPatient: string;
    Street1: string;
    Street2: string;
    Apartment: string;
    City: string;
    State: string;
    Zip: string;
    County: string;
    Country: string;
    ContactInformation: PatientContactInfo[];
    PlanId: string;
    PolicyId: string;
    GroupId: string;
    GroupName: string;
    Certificate: string;
    Employer: string | null;
    EffectiveDate: string | null;
    ExpirationDate: string | null;
    PaymentType: string;
  }

  interface Test {
    TestID: string;
    TestCode: string;
    ShortDescription: string;
    ReflexOrderingParentTestCode: string;
    StartDate?: string;
    DueDate?: string;
    LabStatus:
      | 'In Transit'
      | 'Specimen Received'
      | 'Hold For BI'
      | 'In Lab'
      | 'On Hold'
      | 'Canceled'
      | 'Finished'
      | 'Report Ready'
      | 'Updated Report';
    LabAccessionId?: string;
    LabStatusUpdateDate?: string;
    TestCancelledBySystem: string;
    WasBi: boolean;
    UserEnteredSliceName: string;
    PreDefinedSliceNames: string;
    PhenotypeNames: string;
    LastBiRunDate?: string;
    BIStatus?: string;
    HoldForBI: boolean;
    BundledBillingQualify: boolean;
    ReportedDate?: string;
    ReportUpdatedDate?: string;
    TestReasonText: string;
    TestReasonCode: string;
    TestIssues: string[];
    CreatedDate: string;
    UpdatedDate: string;
    IsTrio: boolean;
    TestFinishedDate?: string;
    RevisedDueDate?: string;
    Indent: number;
    InsuranceEnabled: boolean;
  }
}

export * from './create-provider-client';
