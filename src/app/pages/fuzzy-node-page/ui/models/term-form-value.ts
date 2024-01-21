import { BoundType } from '../enums/bound-type.enum';
import { Term } from '../enums/term.enum';

export interface TermFormValue {
  label: string;
  term: Term;
  boundType: BoundType;
  a: number;
  b: number;
  c: number;
  d: number;
}
