export interface ICollegeResponse {
  Current: Current;
  Next?: null;
  Previous?: null;
  TotalCount: number;
  Colleges?: (ICollege)[] | null;
}
interface Current {
  CampusShortName: string;
  FutureTerms: number;
  Quarter?: null;
  Year?: null;
  Href: string;
}
export interface ICollege {
  Href: string;
  CampusShortName: string;
  CollegeAbbreviation: string;
  CollegeFullName: string;
  CollegeFullNameTitleCased: string;
  CollegeName: string;
  CollegeShortName: string;
  Quarter: string;
  Year: number;
}
