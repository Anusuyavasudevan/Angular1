import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) {}
    public uploadfile(file: File) {
      let formParams = new FormData();
      formParams.append('file', file)
      return this.httpClient.post('http://localhost:5000/file_upload', formParams)
    }
   }
   
