import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
class MusiceService {
  constructor(private http: Http) { }

  getMusice() {
    const url = '/src/app/service/musice.json';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  getMusiceType() {
    const url = '/src/app/service/musiceTypeList.json';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
} export default MusiceService;
