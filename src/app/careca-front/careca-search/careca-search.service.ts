import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarecaSearchService {

  public constructor(
    private http: HttpClient
  ) {
  }

  get() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
