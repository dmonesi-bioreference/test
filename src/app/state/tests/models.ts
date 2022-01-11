declare global {
  interface Test {
    TestID: string;
    TestCode: string;
    ShortDescription: string;
    ReflexOrderingParentTestCode: string;
    StartDate?: string;
    DueDate?: string;
    LabStatus: 
      'In Transit' |
      'Specimen Received' |
      'Hold For BI' |
      'In Lab' |
      'On Hold' |
      'Canceled' |
      'Finished' |
      'Report Ready' |
      'Updated Report';
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

  interface TestsJsonPayload_200 {
    Data: WithWildCards<{ Tests: Test[] }>[],
    IsSuccess: boolean,
    ValidationResult: {
      IsValid: boolean,
      Errors: unknown
    }
  }

  interface TestsJsonPayload_401 {
    Data: {
      IsAuthorized: boolean,
      Code: string,
      ErrorMessage: string
    },
    IsSuccess: boolean,
    ValidationResult: unknown
  }
}

export function isTest(
  candidate: unknown
): candidate is Test {
  const props = [
    "TestID",
    "TestCode",
    "ShortDescription",
    "ReflexOrderingParentTestCode",
    "StartDate",
    "DueDate",
    "LabStatus",
    "LabAccessionId",
    "LabStatusUpdateDate",
    "TestCancelledBySystem",
    "Metadata",
    "WasBi",
    "UserEnteredSliceName",
    "PreDefinedSliceNames",
    "SavedSliceName",
    "PhenotypeNames",
    "LastBiRunDate",
    "BIStatus",
    "HoldForBI",
    "BundledBillingQualify",
    "ReportedDate",
    "ReportUpdatedDate",
    "TestReasonText",
    "TestReasonCode",
    "TestIssues",
    "CreatedDate",
    "UpdatedDate",
    "IsTrio",
    "TestFinishedDate",
    "RevisedDueDate",
    "Indent",
    "InsuranceEnabled",
  ];

  return (
    Object.keys(candidate as object).every((key) => {
      return (
        props.includes(key)
      );
    })
  );
}

export function isTestsData(
  candidate: unknown
): candidate is WithWildCards<{ Tests: Test }> {
  const props = [
    "Id",
    "OrderTempId",
    "OrderNumber",
    "AccessionNumber",
    "OrderType",
    "AccountNumber",
    "AccountName",
    "OrderingProvider",
    "AdditionalProviders",
    "Patient",
    "IsPersonAffected",
    "Insurances",
    "Payment",
    "Tests",
    "Diagnosis",
    "Metadata",
    "OrderedDate",
    "CollectionDate",
    "CollectedBy",
    "IsOrderUpdated",
    "IsOrderProviderUpdated",
    "IsAdditionalProvidersUpdated",
    "IsDiagnosisUpdated",
    "IsPatientUpdated",
    "IsInsuranceUpdated",
    "IsMetadataUpdated",
    "IsTestUpdated",
    "IsAddOn",
    "WasBi",
    "HoldForBI",
    "Sample",
    "PriorAuth",
    "BillingNotes",
    "DischargeDate",
    "PatientStatus",
    "FamilyHistory",
    "Status",
    "Notifications",
    "PriorAuthForms",
    "PriorAuthRequest",
    "RequiredFields",
    "DisplayBeaconDocumentLink",
    "LOMNFiles",
    "CreatedBy",
    "OrderCreatedBy",
    "LinkedOrders",
    "TrioOrderType",
    "BiInfo",
    "PaymentCode",
    "UpdatedDate",
    "ServerTime",
  ];

  return (
    Object.keys(candidate as object).every((key) => (
      props.includes(key) &&
      (key !== 'Tests' ? true :
        Array.isArray((candidate as object)[key]) && ((candidate as object)[key] as Array<object>).every((e) => isTest(e))
      )
    ))
  );
}

export function isTestsJsonPayload_200(
  candidate: unknown
): candidate is TestsJsonPayload_200 {
  const props = [
    'Data',
    'IsSuccess',
    'ValidationResult'
  ];

  return Object.keys(candidate as object).every((key) => (
    props.includes(key) &&
    (key !== 'Data' ? true :
      Array.isArray((candidate as object)[key]) && ((candidate as object)[key] as Array<object>).every((e) => isTestsData(e))
    ) &&
    (key !== 'ValidationResult' ? true :
      Object.keys((candidate as object)[key] as object).every((e) => ['IsValid', 'Errors'].includes(e))
    )
  ));
}

export function isTestsJsonPayload_401(
  candidate: unknown
): candidate is TestsJsonPayload_401 {
  const props = [
    'Data',
    'IsSuccess',
    'ValidationResult'
  ];

  return (
    Object.keys(candidate as object).every((key) => (
      props.includes(key) &&
      (key !== 'Data' ? true :
        Object.keys((candidate as object)[key] as object).every((e) => ['IsAuthorized', 'Code', 'ErrorMessage'].includes(e))
      )
    ))
  );
}