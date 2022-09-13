export interface ICourseResponse {
  TotalCount: number;
  PageSize: string;
  PageStart: string;
  Courses: ICourse[];
  Current: Current;
  Previous?: any;
  Next: Current;
}

interface Current {
  Year: string;
  Quarter: string;
  CurriculumAbbreviation: string;
  CourseNumber?: any;
  FutureTerms: number;
  CourseTitleStarts?: any;
  CourseTitleContains?: any;
  ExcludeCoursesWithoutSections: boolean;
  ChangedSinceDate?: any;
  TranscriptableCourse: string;
  ViewUnpublished: boolean;
  PageStart: string;
  PageSize: string;
  Href: string;
}

export interface ICourse {
  Href: string;
  Year: number;
  Quarter: string;
  CourseTitle: string;
  CurriculumAbbreviation: string;
  CourseTitleLong: string;
  CourseNumber: string;
}
