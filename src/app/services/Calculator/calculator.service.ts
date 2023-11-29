import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.services';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }
  add(n1:number, n2:number){
    let result:number = n1 + n2;
    this.loggerService.log('Add operation is called');
    return result;
  }
  
  subtract(n1:number, n2:number){
    let result:number = n1 - n2;
    this.loggerService.log('Subtraction operation is called');
    return result;
  }
}
