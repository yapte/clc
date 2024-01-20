import { Injectable } from "@angular/core";
import { finalize, tap } from "rxjs";

import { YamlPageCore } from "../../core/yaml-page.core";

@Injectable()
export class YamlPageMediator {

    constructor(private readonly core: YamlPageCore) { }

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