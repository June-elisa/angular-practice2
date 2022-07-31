import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  names =  ['东东', '然然', '亮亮', '小新', '华哥']

  constructor() { }
}
