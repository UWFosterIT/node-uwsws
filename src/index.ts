import log4js, { Logger } from '@log4js-node/log4js-api';
import { IUwSwsOptions } from './IUwSwsOptions.js';
import Campus from './endpoints/campus.js';
import College from './endpoints/college.js';
import Course from './endpoints/course.js';
import Curriculum from './endpoints/curriculum.js';
import Department from './endpoints/department.js';
import Enrollment from './endpoints/enrollment.js';
import Major from './endpoints/major.js';
import Person from './endpoints/person.js';
import Program from './endpoints/program.js';
import Registration from './endpoints/registration.js';
import Section from './endpoints/section.js';
import Service from './modules/apiService.js';
import Term from './endpoints/term.js';
import TestScore from './endpoints/testscore.js';

export { CertFetcherManager } from './certFetcher/cert-fetcher-manager.js';
export { ICertFetcher } from './certFetcher/ICertFetcher.js';
export { IApiError } from './modules/IService.js';
export { IUwSwsOptions } from './IUwSwsOptions.js';

export class UwSws {
  private log: Logger;

  private service: Service;

  campus: Campus;

  college: College;

  course: Course;

  curriculum: Curriculum;

  department: Department;

  enrollment: Enrollment;

  major: Major;

  person: Person;

  program: Program;

  registration: Registration;

  section: Section;

  term: Term;

  testScore: TestScore;

  constructor(options: IUwSwsOptions) {
    this.log = log4js.getLogger('node-uwsws');

    this.log.level = options.uwSwsLogLevel || 'OFF';

    this.service = new Service({
      organizationName: options.organizationName,
      baseUrl: options.baseUrl,
      auth: options.certData,
    }, this.log);

    this.campus = new Campus(this.service, this.log);
    this.college = new College(this.service, this.log);
    this.course = new Course(this.service, this.log);
    this.curriculum = new Curriculum(this.service, this.log);
    this.department = new Department(this.service, this.log);
    this.enrollment = new Enrollment(this.service, this.log);
    this.major = new Major(this.service, this.log);
    this.person = new Person(this.service, this.log);
    this.program = new Program(this.service, this.log);
    this.registration = new Registration(this.service, this.log);
    this.section = new Section(this.service, this.log);
    this.term = new Term(this.service, this.log);
    this.testScore = new TestScore(this.service, this.log);
  }
}
