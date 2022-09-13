export interface IEnrollmentResponse {
  TotalCount: number;
  PageSize: string;
  PageStart: string;
  Enrollments: Enrollment[];
  Current: Current;
  Next: null;
  Previous: null;
}

export interface Current {
  RegID: string;
  Verbose: boolean;
  Href: string;
}

export interface Enrollment {
  Href: string;
  Year: number;
  Quarter: Quarter;
  RegID: string;
}

export enum Quarter {
  Autumn = 'autumn',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}
