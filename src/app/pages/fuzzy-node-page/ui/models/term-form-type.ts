import { FormControl } from '@angular/forms';
import { BoundType } from '../enums/bound-type.enum';
import { Term } from '../enums/term.enum';

export interface TermFormType {
  // label: FormControl<string>;
  term: FormControl<Term>;
  boundType: FormControl<BoundType>;
  a: FormControl<number>;
  b: FormControl<number>;
  c: FormControl<number>;
  d: FormControl<number>;
}
