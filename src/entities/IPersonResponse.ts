export interface IPersonResponse {
  UWNetID: string;
  RegID: string;
  FirstName: string;
  LastName: string;
  StudentName: string;
  Pronouns: string;
  RegisteredName: string;
  StudentSystemKey: string;
  EmployeeID: string;
  StudentNumber: string;
  BirthDate: string;
  Gender: string;
  DirectoryRelease: boolean;
  Email: string;
  LocalAddress: Address;
  PermanentAddress: Address;
  LocalPhone: string;
  PermanentPhone: string;
  Veteran: Veteran;
  LastEnrolled: LastEnrolled;
  Notices: AcademicAdvisers;
  PersonFinancial: AcademicAdvisers;
  Resident: string;
  ResidencyDescription: string;
  VisaType: string;
  TestScore: AcademicAdvisers;
  Sports: any[];
  CurrentEnrollment: null;
  AcademicAdvisers: AcademicAdvisers;
  Degrees: AcademicAdvisers;
  SourceDateString: null;
  Metadata: null;
  RepositoryTimeStamp: string;
}

export interface AcademicAdvisers {
  RegID: string;
  Href: string;
}

export interface LastEnrolled {
  Href: string;
  Year: number;
  Quarter: string;
}

export interface Address {
  Line1: string;
  Line2: string;
  City: string;
  State: string;
  Zip: string;
  Country: string;
  PostalCode: string;
}

export interface Veteran {
  Code: string;
  Description: string;
}
