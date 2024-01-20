import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs";

import { FuzzyNodePageCore } from "../../core/fuzzy-node-page.core";

@Injectable()
export class FuzzyNodePageMediator {

    constructor(private readonly core: FuzzyNodePageCore) { }

    init(): void {
        this.fetch();
        // TODO: implement
    }

    private fetch(): void {
        this.core.getList()
            .pipe(
                tap({
                    next: list => console.log(list),
                    error: err => console.log(err),
                }),
                finalize(() => console.log('finaliize'))
            )
            .subscribe();
    }
}