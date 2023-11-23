import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, delay, of, throwError } from "rxjs";
import { v4 } from 'uuid';

import { SignalDto } from "../models/signals/signal.dto";
import { environment } from "src/environments/environment";
import { SignalCreateDto } from "../models/signals/signal-create.dto";
import { ListRequestDto } from "../models/common/list-request.dto";

const BASE_URL = `${environment.baseUrl}/Signals`

@Injectable({ providedIn: 'root' })
export class SignalsApiLocal {
    private _db: SignalDto[] = [...INITIAL_DB];

    constructor(private http: HttpClient) { }

    getList(model: ListRequestDto): Observable<SignalDto[]> {
        const list: SignalDto[] = model.search
            ? this._db.filter(i => i.signal_name.toLowerCase().includes(model.search!.toLowerCase()))
            : this._db;
        return of(list).pipe(delay(1000));
    }

    getItem(signalId: string): Observable<SignalDto> {
        const item: SignalDto | undefined = this._db.find(i => i.signal_id === signalId);
        return item
            ? of(item).pipe(delay(1000))
            : throwError(() => new HttpErrorResponse({ status: 404 }));
    }

    create(dto: SignalCreateDto): Observable<SignalDto> {
        const item: SignalDto = { signal_id: v4(), ...dto };
        this._db.push(item);

        return of(item).pipe(delay(1000));
    }

    remove(signalId: string): Observable<void> {
        this._db = this._db.filter(i => i.signal_id !== signalId);
        return of(void 0).pipe(delay(1000));
    }
}

const INITIAL_DB: SignalDto[] = [
    { signal_id: v4(), signal_name: 'Default signal 1', },
    { signal_id: v4(), signal_name: 'Second signal', },
    { signal_id: v4(), signal_name: 'Third', },
];