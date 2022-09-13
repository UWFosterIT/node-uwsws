export interface IDepartmentResponse {
  TotalCount: number;
  Departments?: IDepartment[] | null;
  Current: Current;
  Next?: null;
  Previous?: null;
  PageSize?: null;
  PageStart?: null;
}
export interface IDepartment {
  DepartmentAbbreviation: string;
  DepartmentFullName: string;
  Quarter: string;
  Year: number;
  Href?: null;
}
interface Current {
  CollegeAbbreviation: string;
  FutureTerms: number;
  Quarter: string;
  Year: string;
  Href: string;
}
