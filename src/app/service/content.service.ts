import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  url: string = 'https://ghibliapi.herokuapp.com/movies/somemore';

  constructor(private http: HttpService) { }

  returnObjects(inputArray: string[]): Array<Object> {
    let objectArray: Object[] = [];
    if (inputArray[0].length > this.url.length) {
      inputArray.forEach(url => {
        this.http.getByUrl(url).subscribe(obj => {
          objectArray.push(obj as Object);
        });
      });
    }
    return objectArray;
  }

  returnObjectsByName(name: string) {
    
  }

  validUrl = (inputOne:string, inputTwo:string) => inputOne > inputTwo ? true : false;

  
}
