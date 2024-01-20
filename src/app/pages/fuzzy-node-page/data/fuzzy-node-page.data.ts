import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Example } from '../core/models/example';
import { FuzzyNodePageCore } from '../core/fuzzy-node-page.core';

@Injectable()
export class FuzzyNodePageData implements FuzzyNodePageCore {
    // TODO: Inject one or several API services
    // constructor(
    //     private readonly api1: Api1,
    //     private readonly api2: Api2,
    // ) { }

    getList(): Observable<Example[]> {
        // TODO: 
        // 1. Adapt request to DTO model using FuzzyNodePageAdapter
        // 2. Adapt response to business logic model using FuzzyNodePageAdapter
        return of([]);
    }

    usecase2(): Observable<void> {
                // TODO: 
        // 1. Adapt request to DTO model using FuzzyNodePageAdapter
        // 2. Adapt response to business logic model using FuzzyNodePageAdapter
        return of(void 0);
    }
}