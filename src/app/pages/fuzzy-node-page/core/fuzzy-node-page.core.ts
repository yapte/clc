import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Example } from "./models/example";

@Injectable()
export abstract class FuzzyNodePageCore {

    abstract getList(): Observable<Example[]>;

    abstract usecase2(): Observable<void>;

}