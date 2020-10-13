import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  countA: number=0
  countIa: number=0

  logstatusAtoInA(){
    this.countA++
    console.log('Active to Inactive: '+this.countA)
  }
  logstatusInAtoA(){
    this.countIa++
    console.log('Inactive to Active: '+this.countIa)
  }
  constructor() { }
}
