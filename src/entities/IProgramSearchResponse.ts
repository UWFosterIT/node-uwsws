export interface IProgramSearchResponse {
  Current: Current;
  Next?: null;
  Previous?: null;
  TotalCount: number;
  Programs?: IProgram[] | null;
}
interface Current {
  Year: number;
  Quarter: string;
  Pathway?: null;
  MajorAbbreviation: string;
  PageStart: string;
  PageSize: string;
  Href: string;
}
export interface IProgram {
  ProgramUri: ProgramUri;
  Department: Department;
  MajorFullName: string;
  MajorName: string;
  MajorShortName: string;
  Pathway: string;
  FirstEffectiveTerm: FirstEffectiveTermOrLastEffectiveTerm;
  LastEffectiveTerm: FirstEffectiveTermOrLastEffectiveTerm;
  Href: string;
}
interface ProgramUri {
  Href: string;
  MajorAbbreviation: string;
  Pathway: string;
  Year: number;
  Quarter: string;
}
interface Department {
  CollegeAbbreviation: string;
  DepartmentAbbreviation: string;
  DepartmentFullName: string;
}
interface FirstEffectiveTermOrLastEffectiveTerm {
  Href: string;
  Year: number;
  Quarter: string;
}
