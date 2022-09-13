export interface IPersonSearchResponse {
  TotalCount: number;
  PageSize: string;
  PageStart: string;
  Persons: Person[];
  Current: Current;
  Previous: null;
  Next: null;
}

interface Current {
  EmployeeID: null;
  NetID: string;
  PageStart: string;
  PageSize: string;
  Verbose: boolean;
  RegID: null;
  StudentNumber: null;
  ChangedSinceDate: null;
  StudentSystemKey: null;
  HasDisability: null;
  Href: string;
}

export interface Person {
  BirthDate: string;
  DirectoryRelease: boolean;
  Email: string;
  EmployeeID: string;
  FirstName: string;
  Gender: string;
  LastEnrolled: LastEnrolled;
  LastName: string;
  Pronouns: string;
  LocalAddress: Address;
  LocalPhone: string;
  PermanentAddress: Address;
  PermanentPhone: string;
  RegID: string;
  Resident: string;
  StudentName: string;
  RegisteredName: string;
  StudentNumber: string;
  StudentSystemKey: string;
  TestScore: TestScore;
  UWNetID: string;
  Veteran: Veteran;
  VisaType: string;
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

export interface TestScore {
  RegID: string;
  Href: string;
}

export interface Veteran {
  Code: string;
  Description: string;
}
