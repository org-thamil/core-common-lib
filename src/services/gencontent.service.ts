import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GencontentService {

  constructor() { }

  static ReturnMyString(stringToPass: string):string{
    return stringToPass + 'My Orgin';
  }
}
