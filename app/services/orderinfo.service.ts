import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OrderInfo } from '../classes/OrderInfo';

@Injectable()
export class OrderinfoService{
    constructor(private http: Http) {}
    private uri: string = "http://localhost:52479/api/order";

    createOrder(orderinfo: OrderInfo): Promise<string> {
        return this.http
            .post(this.uri, orderinfo)
            .toPromise()
            .then(response =>
                response.json() as string)
                .catch(this.handleError);
    }

    getItemBundleNames(): Promise<string>{
        return this.http
            .get(this.uri+"/list")
            .toPromise()
            .then(response =>
                response.json() as string)
                .catch(this.handleError);
    }

    private handleError(error: any): any {
                var errMsg = error.message
            ? error.message
            : error.status
                ? error.status + error.statusText
                : "An error occurred.";

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}