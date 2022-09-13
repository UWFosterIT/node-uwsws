export interface IProgramResponse {
  ProgramUri: ProgramURI;
  Department: Department;
  MajorFullName: string;
  MajorName: string;
  MajorShortName: string;
  Pathway: string;
  FirstEffectiveTerm: StEffectiveTerm;
  LastEffectiveTerm: StEffectiveTerm;
  Href: string;
}

export interface Department {
  CollegeAbbreviation: string;
  DepartmentAbbreviation: string;
  DepartmentFullName: string;
}

export interface StEffectiveTerm {
  Href: string;
  Year: number;
  Quarter: string;
}

export interface ProgramURI {
  Href: string;
  MajorAbbreviation: string;
  Pathway: string;
  Year: number;
  Quarter: string;
}
