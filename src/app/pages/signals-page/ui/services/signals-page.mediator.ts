import { Injectable } from "@angular/core";
import { SignalsPageCore } from "../../core/signals-page.core";
import { BehaviorSubject, Observable, filter, finalize, tap } from "rxjs";
import { Signal } from "@common";
import { SignalCreate } from "../../core/models/signal-create";

@Injectable()
export class SignalsPageMediator {

    private readonly _list$ = new BehaviorSubject<Signal[] | undefined>(undefined);
    private readonly requestParams = { search: '', page: 1 };

    readonly list$: Observable<Signal[]> = this._list$.pipe(
        filter(Boolean),
        // filter(value => !!value),
    );

    constructor(
        private readonly core: SignalsPageCore,
        // private readonly inProgressService: InProgresservice,
        // private readonly toastService: ToastService,
    ) { }

    init(): void {
        this._fetch();
    }

    search(text: string) {
        this.requestParams.search = text;
        this._fetch();
    }

    toPage(page: number): void {
        this.requestParams.page = page;
        this._fetch();
    }

    create(model: SignalCreate): void {
        this.core.createSignal(model)
            .pipe(
                tap({
                    next: () => this._fetch(),
                    error: err => console.log(err), // toast.showError(err)
                }),
            )
            .subscribe();
    }

    remove(signalId: string): void {
        this.core.removeSignal(signalId)
            .pipe(
                tap({
                    next: () => this._fetch(),
                    error: err => console.log(err), // toast.showError(err)
                }),
            )
            .subscribe();
    }

    private _fetch(): void {
        // inProgressService.show();
        this.core.getSignalList(this.requestParams)
            .pipe(
                tap({
                    next: signals => this._list$.next(signals),
                    error: err => console.log(err), // toast.showError(err)
                }),
                finalize(() => { }), // inProgressService.hide();
            )
            .subscribe();
    }
}
