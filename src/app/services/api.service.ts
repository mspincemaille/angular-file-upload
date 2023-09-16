import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {

    constructor(private http: HttpClient) {}
    API_URI_DOMAIN = 'http://localhost:3000';

    upload(files: Array<File>) {
        const formData = new FormData();
        formData.append('files', JSON.stringify(files));
        return this.http.post(this.API_URI_DOMAIN + '/upload', formData);
    }
}