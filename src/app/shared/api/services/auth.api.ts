import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginRequestDto } from "../models/auth/login-request.dto";
import { LoginResponseDto } from "../models/auth/login-response.dto";

const BASE_URL = `${environment.baseUrl}/auth`;

@Injectable({ providedIn: 'root' })
export class AuthApi {

    constructor(private readonly http: HttpClient) { }

    login(dto: LoginRequestDto): Observable<LoginResponseDto> {
        return this.http.post<LoginResponseDto>(`${BASE_URL}/login`, dto);
    }
}