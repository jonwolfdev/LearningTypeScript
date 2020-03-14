import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IPersonObject } from './iperson-object';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {

    }

    anotherFunc(): string {
        return 'OK2';
    }

    get() {
        return this.http.get('http://192.168.230.128:3001/app');
    }

    getValues(): Observable<IPersonObject[]> {
        const obj: IPersonObject = {
            name: 'My name is what-from service'
        };
        return of([
            {name: 'What-from service'}, obj
        ]);
    }

    async getValuesAsync(): Promise<IPersonObject> {
        return Promise.resolve({name: 'haha-promise from service'});
    }
}
