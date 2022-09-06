import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MessagesService } from 'src/app/messages/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpClientBase {

  constructor(
    private httpClient: HttpClient,
    @Inject(String) private apiBaseUrl: string,
    private messagesService: MessagesService,
    @Inject(Boolean) private isAuth = false) { }

  /**
   * Starts an HTTP invoke on remote service
   * @param method Method
   * @param partialUrl Partial url
   * @param body Body of request
   * @param headers Custom headers
   */
  public invoke<TResponse>(
    method: string,
    partialUrl: string,
    body: object,
    noStandardMessage: boolean = false
  ): Observable<TResponse> {
    // Create observable source
    const observableSource = new Subject<TResponse>();

    // Declare observable
    const observable: Observable<any> = observableSource.asObservable();

    // Compose full url
    const fullUrl = this.apiBaseUrl + partialUrl;

    let observableRequest;

    if (method.toLocaleLowerCase() === 'get') {
      // Invoke remote method
      observableRequest = this.httpClient.request(method, fullUrl);
    } else {
      // Compose options
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      const options = {
        body: !body ? null : JSON.stringify(body),
        headers: headers
      };

      // Invoke remote method
      observableRequest = this.httpClient.request(method, fullUrl, options);
    }

    observableRequest.subscribe(
      {
        // Success
        next: (response) => {
          // Convert data to target type
          const data: TResponse = response;

          // emit data
          observableSource.next(data);
          observableSource.complete();
        },

        // Error
        error: (error: any) => {
          let errorMessage = '';
          if (error instanceof HttpErrorResponse) {
            console.log('error is HttpErrorResponse');

            if (error.error instanceof ErrorEvent) {
              errorMessage = 'An error occurred ' + error.error.message;
            } else if (error.error) {
              Object.keys(error.error).map(k => {
                errorMessage += ' ' + error.error[k];
              });
            } else {
              errorMessage = 'Server returned ' + error.status;
            }
          }

          console.log('errorMessage');
          console.log(errorMessage);
          switch (error.status) {
            case 401:
              if (this.isAuth) {
                this.messagesService.warning('UserName or Password are not correct', 'Login Failed');
              }
              else {
                this.messagesService.error('User not authorized')
              }
              break;
            case 404:
              this.messagesService.warning('Element not found');
              break;
            case 403:
              this.messagesService.warning('User not authorized');
              break;
            case 204:
              this.messagesService.warning('Element not found');
              break;
            case 400:
              if (!noStandardMessage)
                this.messagesService.warning(errorMessage, 'Ops!');
              break;
            default:
              this.messagesService.error(errorMessage, 'Something went wrong. Please, contact the administrator');
              break;
          }

          // Apply error on observable and complete
          if (!noStandardMessage) {
            observableSource.error(errorMessage);
          }
          else {
            observableSource.error(error);
          }
          observableSource.complete();
        }
      });

    // Returns observable
    return observable;
  }
}
