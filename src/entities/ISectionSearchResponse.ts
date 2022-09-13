export interface ISectionSearchResponse {
  TotalCount: number;
  PageSize: string;
  PageStart: string;
  Sections: Section[];
  Current: Current;
  Next: null;
  Previous: null;
}

interface Current {
  Year: string;
  Quarter: Quarter;
  FutureTerms: number;
  CurriculumAbbreviation: string;
  CourseNumber: null;
  DeleteFlag: null;
  RegID: null;
  SearchBy: null;
  IncludeSecondaries: boolean;
  PageStart: string;
  PageSize: string;
  ChangedSinceDate: null;
  TranscriptableCourse: string;
  FacilityCode: null;
  RoomNumber: null;
  SLN: null;
  Href: string;
}

export enum Quarter {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}

export interface Section {
  Year: number;
  Quarter: Quarter;
  CurriculumAbbreviation: CurriculumAbbreviation;
  CourseNumber: string;
  SectionID: string;
  Href: string;
}

export enum CurriculumAbbreviation {
  Math = 'MATH',
}
