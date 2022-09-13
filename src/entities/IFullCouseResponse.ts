export interface IFullCourseResponse {
  CourseNumber: string;
  CourseTitle: string;
  CourseCampus: string;
  CourseTitleLong: string;
  CourseDescription: string;
  CourseCollege: string;
  CourseComment: string;
  CreditControl: string;
  Curriculum: Curriculum;
  FirstEffectiveTerm: Curriculum;
  GradingSystem: string;
  LastEffectiveTerm: Curriculum;
  MinimumTermCredit: number;
  MaximumTermCredit: number;
  MaximumCredit: number;
  GeneralEducationRequirements: GeneralEducationRequirements;
  RepositoryTimeStamp: string;
  Metadata: string;
}

interface Curriculum {
  Href: string;
  Year: number;
  Quarter: string;
  CurriculumAbbreviation?: string;
}

interface GeneralEducationRequirements {
  Diversity: boolean;
  EnglishComposition: boolean;
  IndividualsAndSocieties: boolean;
  NaturalWorld: boolean;
  QuantitativeAndSymbolicReasoning: boolean;
  VisualLiteraryAndPerformingArts: boolean;
  Writing: boolean;
}
