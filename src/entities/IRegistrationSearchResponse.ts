export interface IRegistrationSearchResponse {
  TotalCount: number;
  PageSize: null;
  PageStart: null;
  Registrations: Registration[];
  Current: Current;
  Next: null;
  Previous: null;
}

interface Current {
  Year: null;
  Quarter: null;
  RegID: string;
  SectionID: null;
  IsActive: boolean;
  Verbose: boolean;
  CurriculumAbbreviation: null;
  CourseNumber: string;
  InstructorRegID: null;
  ChangedSinceDate: null;
  TranscriptableCourse: null;
  PageStart: null;
  PageSize: null;
  Href: string;
}

export interface Registration {
  Section: Section;
  Person: Person;
  DuplicateCode: string;
  Href: string;
  Instructor: string;
  RequestStatus: string;
  IsActive: boolean;
  RequestDate: string;
  Credits: string;
  VariableCredit: boolean;
  HonorsCourse: boolean;
  WritingCourse: boolean;
  Auditor: boolean;
  FeeBaseType: string;
  Grade: string;
  GradeDocumentID: string;
  GradeDate: string;
  RepeatCourse: boolean;
  SourceDateString: string;
  Metadata: Metadata;
  RepositoryTimeStamp: string;
  GradingSystem: string;
  AccessDateRangeStart: string;
  AccessDateRangeEnd: string;
  IsCredit: boolean;
  StartDate: string;
  EndDate: string;
  EducationUnitType: string;
  IsIndependentStart: boolean;
}

export enum Metadata {
  RegistrationSourceLocationSDB = 'RegistrationSourceLocation=SDB;',
}

export interface Person {
  Name: string;
  RegID: string;
  Pronouns: string;
  Href: string;
}

export interface Section {
  Href: string;
  Year: number;
  Quarter: Quarter;
  CurriculumAbbreviation: string;
  CourseNumber: string;
  SectionID: string;
  SLN: string;
}

export enum Quarter {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}
