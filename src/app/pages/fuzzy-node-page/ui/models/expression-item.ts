import { Operator } from '../enums/operator.enum';
import { Antecedent } from './antecedent';

export interface ExpressionItem {
  isOperator: boolean;
  value: Antecedent | Operator | null;
}
