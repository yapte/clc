import { Term } from '../enums/term.enum';
import { TermFormValue } from './term-form-value';

export interface Antecedent {
  // id: string;
  name: string;
  params?: Record<Term, TermFormValue>;
}
