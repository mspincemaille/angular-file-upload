import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class APIService {

    constructor(private http: HttpClient) {}
    API_URI_DOMAIN = 'http://localhost:3000';

    upload(files: Array<File>) {
        const formData = new FormData();
        for(let file of files) formData.append('file', file as any);
        
        return this.http.post(this.API_URI_DOMAIN + '/upload', formData);
    }
}