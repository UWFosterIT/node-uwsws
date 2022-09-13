export interface ITerm {
  ATermLastDay: string;
  AcademicCatalog: string;
  BTermFirstDay: string;
  CensusDay: string;
  FifthDay: string;
  FinancialAidYear?: null;
  FirstDay: string;
  FirstDayMedSchool?: null;
  GradeSubmissionDeadline: string;
  GradingPeriodClose: string;
  GradingPeriodOpen: string;
  GradingPeriodOpenATerm: string;
  LastAddDay: string;
  LastAddDayATerm: string;
  LastAddDayBTerm: string;
  LastDayOfClasses: string;
  LastDropDay: string;
  LastDropDayATerm: string;
  LastDropDayBTerm: string;
  LastDropDayNotRecorded: string;
  LastDropDayNotRecordedATerm: string;
  LastDropDayNotRecordedBTerm: string;
  LastFinalExamDay: string;
  Metadata: string;
  NextTerm: NextTermOrPreviousTerm;
  PreviousTerm: NextTermOrPreviousTerm;
  Quarter: string;
  RegistrationPeriods?: (RegistrationPeriodsEntity)[] | null;
  RegistrationServicesStart: string;
  RepositoryTimeStamp: string;
  StudentAccountStart?: null;
  TimeScheduleConstruction: TimeScheduleConstructionOrTimeSchedulePublished;
  TimeSchedulePublished: TimeScheduleConstructionOrTimeSchedulePublished;
  Year: number;
}
export interface NextTermOrPreviousTerm {
  Href: string;
  Quarter: string;
  Year: number;
}
export interface RegistrationPeriodsEntity {
  EndDate: string;
  StartDate: string;
}
export interface TimeScheduleConstructionOrTimeSchedulePublished {
  Bothell: boolean;
  Seattle: boolean;
  Tacoma: boolean;
}
