import { ErrorHandler, Injectable } from "@angular/core";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        console.error('Caught in Global Error Handler:',error.message);
    }
}