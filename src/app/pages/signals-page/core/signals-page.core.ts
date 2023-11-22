import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Signal } from "@common";

import { SignalCreate } from "./models/signal-create";

@Injectable()
export abstract class SignalsPageCore {

    abstract getSignalList(model: any): Observable<Signal[]>
    abstract createSignal(model: SignalCreate): Observable<Signal>;
    abstract removeSignal(signalId: string): Observable<void>;
    abstract removeSignals(signalIds: string[]): Observable<void>;

}