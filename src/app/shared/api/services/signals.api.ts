import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { SignalDto } from "../models/signals/signal.dto";
import { environment } from "src/environments/environment";

const BASE_URL = `${environment.baseUrl}/Signals`

@Injectable({ providedIn: 'root' })
export class SignalsApi {

    constructor(private http: HttpClient) { }

    getList(): Observable<SignalDto[]> {
        return this.http.post<SignalDto[]>(
            `${BASE_URL}/List`,
            {},
        );
    }
}