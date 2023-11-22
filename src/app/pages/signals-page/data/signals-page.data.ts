import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";

import { Signal, toSignalModelAdapter } from "@common";
import { SignalsPageCore } from "../core/signals-page.core";
import { SignalCreate } from "../core/models/signal-create";
import { SignalsApiLocal } from "@shared/api";
import { SignalCreateDto } from "src/app/shared/api/models/signals/signal-create.dto";

@Injectable()
export class SignalsPageData implements SignalsPageCore {

    constructor(private signalsApi: SignalsApiLocal) { }

    getSignalList(): Observable<Signal[]> {
        // TODO: implement
        return this.signalsApi.getList()
            .pipe(map(dtos => dtos.map(dto => toSignalModelAdapter(dto))));
    }

    createSignal(model: SignalCreate): Observable<Signal> {
        const dto: SignalCreateDto = { signal_name: model.name, signal_description: model.descrption };
        return this.signalsApi.create(dto)
            .pipe(map(dto => toSignalModelAdapter(dto)));
    }

    removeSignal(signalId: string): Observable<void> {
        return of(void 0);
    }

    removeSignals(signalIds: string[]): Observable<void> {
        return of(void 0);
    }
}