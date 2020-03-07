import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {

    }

    anotherFunc(): string {
        return 'OK1';
    }

    get() {
        return this.http.get('http://192.168.230.128:3001/app');
    }
}
