export interface ICampusResponse {
  Current: Current;
  Next?: any;
  PageSize: string;
  PageStart: string;
  Previous?: any;
  TotalCount: number;
  Campuses: ICampus[];
}

export interface ICampus {
  CampusShortName: string;
  CampusFullName: string;
  CampusName: string;
  Href: string;
}

interface Current {
  Href: string;
}
