import { LoggerService } from '../Logger/logger.services';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculator: CalculatorService;
  let mockLoggerService: any;
  beforeEach(() => {
    //Creating mockLoggerService so that it will not execute constructor method if we have in service
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLoggerService);
  });
  //test-cases
  it('should add two numbers', () => {
    //pending(); //to show pending in test runner
    //creating instance of calculator service
    // let loggerService = new LoggerService();

    //when spyOn this loggerservice's log method is not executed while testing.
    // spyOn(loggerService, 'log');
    //If we want to spyon loggerservices log method and execute it we do it like this:
    // spyOn(loggerService, 'log').and.callThrough();
    //result
    let result = calculator.add(1, 2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers', () => {
    // //creating instance of calculator service
    // let loggerService = new LoggerService();
    // spyOn(loggerService, 'log');
    //result
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
