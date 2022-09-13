export interface ISectionResponse {
  Term: Term;
  CourseCampus: string;
  CreditControl: string;
  RoomCapacity: number;
  SummerTerm: string;
  Course: Course;
  SectionID: string;
  CourseTitle: string;
  CourseTitleLong: string;
  CourseDescription: string;
  ClassWebsiteUrl: null;
  Curriculum: Curriculum;
  FeeAmount: null;
  FeeBudget: null;
  FeeType: null;
  AddCodeRequired: boolean;
  EnrollmentRestrictions: boolean;
  FinancialAidEligible: boolean;
  FinancialAidEligibleDisplay: string;
  IndependentStudy: boolean;
  SLN: string;
  TimeScheduleComments: TimeScheduleComments;
  DeleteFlag: string;
  DistanceLearning: boolean;
  DistanceLearningCalendarType: Type;
  DistanceLearningType: Type;
  EndDate: string;
  FinalExam: FinalExam;
  GradingSystem: string;
  HonorsCourse: boolean;
  InstituteName: null;
  RepositoryTimeStamp: string;
  Metadata: string;
  JointSections: any[];
  CourseHasVariableContent: boolean;
  SameVariableContentAs: any[];
  MaximumCredit: string;
  MaximumTermCredit: string;
  MinimumTermCredit: string;
  ResearchCredit: boolean;
  ServiceLearning: boolean;
  SectionType: string;
  SecondaryGradingOption: boolean;
  StartDate: string;
  DuplicateEnrollmentAllowed: boolean;
  PrimarySection: Course;
  LinkedSectionTypes: LinkedSectionType[];
  Meetings: Meeting[];
  GradeSubmissionDelegates: GradeSubmissionDelegate[];
  Auditors: number;
  CurrentEnrollment: number;
  LimitEstimateEnrollment: number;
  LimitEstimateEnrollmentIndicator: string;
  StudentCreditHours: string;
  SelfRegistrationAllowed: boolean;
  GeneralEducationRequirements: GeneralEducationRequirements;
  Registrations: Registrations;
  OnlineLearningType: Type;
  LMSOwnership: null;
  PrimaryLMS: null;
  IsIndependentStart: boolean;
  EOS_CID: null;
  BlockRegistrationParents: any[];
  BlockRegistrationChildren: any[];
  TimeMaskException: boolean;
}

export interface Course {
  Href: string;
  Year: number;
  Quarter: Quarter;
  CurriculumAbbreviation: string;
  CourseNumber: string;
  SectionID?: string;
}

export enum Quarter {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}

export interface Curriculum {
  DepartmentAbbreviation: string;
  CollegeName: string;
  TimeScheduleLinkAbbreviation: string;
}

export interface Type {
  Code: null | string;
  Description: null | string;
}

export interface FinalExam {
  Building: string;
  FinalExamBuilding: Ing;
  Date: string;
  EndTime: string;
  MeetingStatus: string;
  RoomNumber: string;
  StartTime: string;
}

export interface Ing {
  Href: string;
}

export interface GeneralEducationRequirements {
  Diversity: boolean;
  EnglishComposition: boolean;
  IndividualsAndSocieties: boolean;
  NaturalWorld: boolean;
  QuantitativeAndSymbolicReasoning: boolean;
  VisualLiteraryAndPerformingArts: boolean;
  Writing: boolean;
}

export interface GradeSubmissionDelegate {
  Person: Person;
  DelegateLevel: string;
}

export interface Person {
  Name: string;
  RegID: string;
  Pronouns: null;
  Href: string;
}

export interface LinkedSectionType {
  LinkedSections: LinkedSection[];
  Type: string;
}

export interface LinkedSection {
  Section: Course;
  IsPrimarySection: boolean;
}

export interface Meeting {
  MeetingIndex: string;
  MeetingType: string;
  DaysOfWeek: DaysOfWeek;
  DaysOfWeekToBeArranged: boolean;
  StartTime: string;
  EndTime: string;
  BuildingToBeArranged: boolean;
  Building: string;
  Meeting: Ing;
  RoomToBeArranged: boolean;
  RoomNumber: string;
  Instructors: Instructor[];
}

export interface DaysOfWeek {
  Days: Day[];
  Text: string;
}

export interface Day {
  Name: string;
}

export interface Instructor {
  FacultySequenceNumber: null;
  TSPrint: boolean;
  PercentInvolve: string;
  Person: Person;
  GradeRoster: null;
}

export interface Registrations {
  Year: number;
  Quarter: Quarter;
  RegID: string;
  SectionID: string;
  IsActive: boolean;
  Verbose: boolean;
  CurriculumAbbreviation: string;
  CourseNumber: string;
  InstructorRegID: string;
  ChangedSinceDate: string;
  TranscriptableCourse: string;
  PageStart: string;
  PageSize: string;
  Href: string;
}

export interface Term {
  Href: string;
  Year: number;
  Quarter: Quarter;
}

export interface TimeScheduleComments {
  CollegeComments: Comments;
  CourseComments: Comments;
  CurriculumComments: Comments;
  DepartmentComments: Comments;
  InstituteComments: Comments;
  SectionComments: Comments;
  TimeScheduleGeneratedComments: Comments;
}

export interface Comments {
  Lines: Line[];
}

export interface Line {
  Text: string;
}
