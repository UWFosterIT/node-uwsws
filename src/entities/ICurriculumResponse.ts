export interface ICurriculumResponse {
  TotalCount: number;
  Curricula: ICurriculum[];
  PageSize: null;
  PageStart: null;
  Current: Current;
  Next: null;
  Previous: null;
}

interface Current {
  Year: number;
  Quarter: Quarter;
  DepartmentAbbreviation: null;
  CollegeAbbreviation: null;
  FutureTerms: number;
  ViewUnpublished: boolean;
  Href: string;
}

enum Quarter {
  Winter = 'winter',
  Spring = 'spring',
  Summer = 'summer',
  Autumn = 'autumn',
}

export interface ICurriculum {
  Year: number;
  Quarter: Quarter;
  CurriculumAbbreviation: string;
  CurriculumName: string;
  CurriculumFullName: string;
  Href: string;
}
