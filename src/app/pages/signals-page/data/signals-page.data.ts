import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";

import { Signal, toSignalModelAdapter } from "@common";
import { SignalsPageCore } from "../core/signals-page.core";
import { SignalCreate } from "../core/models/signal-create";
import { ListRequestDto, SignalsApiLocal } from "@shared/api";
import { SignalCreateDto } from "src/app/shared/api/models/signals/signal-create.dto";
import { SignalsPageAdapter } from "./signals-page.adapter";

@Injectable()
export class SignalsPageData implements SignalsPageCore {

    constructor(private signalsApi: SignalsApiLocal) { }

    getSignalList(model: { search: string, page: number }): Observable<Signal[]> {
        const requestDto: ListRequestDto = SignalsPageAdapter.toListRequestDto(model)
        return this.signalsApi.getList(requestDto)
            .pipe(map(dtos => dtos.map(dto => toSignalModelAdapter(dto))));
    }

    createSignal(model: SignalCreate): Observable<Signal> {
        const dto: SignalCreateDto = SignalsPageAdapter.toSignalCreateDto(model);
        return this.signalsApi.create(dto)
            .pipe(map(dto => toSignalModelAdapter(dto)));
    }

    removeSignal(signalId: string): Observable<void> {
        return this.signalsApi.remove(signalId);
    }

    removeSignals(signalIds: string[]): Observable<void> {
        return of(void 0);
    }
}