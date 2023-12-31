import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Signal } from "@common";

import { SignalCreate } from "./models/signal-create";
import { SignalListRequest } from "./models/signal-list-request";

@Injectable()
export abstract class SignalsPageCore {

    abstract getSignalList(model: SignalListRequest): Observable<Signal[]>
    abstract createSignal(model: SignalCreate): Observable<Signal>;
    abstract removeSignal(signalId: string): Observable<void>;
    abstract removeSignals(signalIds: string[]): Observable<void>;

}