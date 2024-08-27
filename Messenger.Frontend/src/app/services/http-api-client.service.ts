import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiClient {
  private apiUrl = 'http://localhost:5110';

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string): string {
    return `${this.apiUrl}${endpoint}`;
  }

  get<T>(endpoint: string, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    return this.http.get<T>(this.buildUrl(endpoint), { ...options, observe: 'body' });
  }

  post<T>(endpoint: string, body: any, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    return this.http.post<T>(this.buildUrl(endpoint), body, { ...options, observe: 'body' });
  }

  put<T>(endpoint: string, body: any, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    return this.http.put<T>(this.buildUrl(endpoint), body, { ...options, observe: 'body' });
  }

  delete<T>(endpoint: string, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    return this.http.delete<T>(this.buildUrl(endpoint), { ...options, observe: 'body' });
  }
}
