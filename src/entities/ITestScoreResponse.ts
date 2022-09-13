export interface ITestScoreResponse {
  Person: Person;
  TestsTaken: TestsTaken[];
}

export interface Person {
  EmployeeID: string;
  FirstName: string;
  LastName: string;
  Pronouns: string;
  RegID: string;
  StudentName: string;
  StudentNumber: string;
  StudentSystemKey: string;
  UWNetID: string;
  Uri: URI;
}

export interface URI {
  Name: string;
  RegID: string;
  Pronouns: string;
  Href: string;
}

export interface TestsTaken {
  TestType: TestType;
  Scores: Score[];
}

export interface Score {
  EnteredDate: string;
  Percentile: null;
  RevisedScore: boolean;
  TakenDate: string;
  TestScore: number;
}

export interface TestType {
  Description: string;
  MinScore: number;
  MaxScore: number;
  Name: string;
}
