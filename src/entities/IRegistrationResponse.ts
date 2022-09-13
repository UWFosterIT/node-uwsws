export interface IRegistrationResponse {
  FullName: string;
  Person: Person;
  Registrations: Registration[];
  RegID: string;
  ClassLevel: string;
  ClassCode: string;
  ClassDescription: string;
  HonorsProgram: boolean;
  LeaveEndQuarter: number;
  LeaveEndYear: number;
  Majors: Major[];
  Minors: any[];
  PendingClassChange: boolean;
  PendingMajorChange: boolean;
  PendingResidentChange: boolean;
  PendingSpecialProgramChange: boolean;
  PendingHonorsChange: boolean;
  QtrGradePoints: number;
  QtrGradedAttmp: number;
  QtrNonGrdEarned: number;
  EnrollmentStatus: string;
  EnrollmentStatusDate: string;
  CurrentRegisteredCredits: null;
  Term: Term;
  Metadata: string;
  RepositoryTimeStamp: string;
}

export interface Major {
  Abbreviation: string;
  Campus: string;
  DegreeLevel: number;
  DegreeName: null;
  DegreeType: number;
  FullName: string;
  MajorName: string;
  Pathway: number;
  ShortName: string;
  CollegeAbbreviation: string;
  CollegeFullName: string;
  DepartmentCode: string;
  DepartmentAbbreviation: string;
  DepartmentFullName: string;
}

export interface Person {
  Name: string;
  RegID: string;
  Pronouns: string;
  Href: string;
}

export interface Registration {
  Section: Section;
  Person: Person;
  DuplicateCode: string;
  Href: string;
  Instructor: null;
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
  SourceDateString: null;
  Metadata: string;
  RepositoryTimeStamp: string;
  GradingSystem: null;
  AccessDateRangeStart: string;
  AccessDateRangeEnd: string;
  IsCredit: boolean;
  StartDate: string;
  EndDate: string;
  EducationUnitType: null;
  IsIndependentStart: boolean;
}

export interface Section {
  Href: string;
  Year: number;
  Quarter: string;
  CurriculumAbbreviation: string;
  CourseNumber: string;
  SectionID: string;
  SLN: string;
}

export interface Term {
  Href: string;
  Year: number;
  Quarter: string;
}
