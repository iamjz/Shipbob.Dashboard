import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OrderInfo } from '../../classes/OrderInfo';
import { OrderinfoService } from '../../services/orderinfo.service';

@Component({
    moduleId: module.id,
    templateUrl: 'orderinfo-create.component.html'
})
export class OrderinfoComponent{
    constructor(private orderinfoservice: OrderinfoService) {}

    orderinfo: OrderInfo = new OrderInfo();
    postResult: string = "";
    itemBundleNames: string = "";

    create(): void{
        this.orderinfoservice
            .createOrder(this.orderinfo)
            .then(result => this.postResult = result);
        console.log(this.orderinfo.ItemsQty);
    }

    ngAfterViewInit(): void{
        this.orderinfoservice
            .getItemBundleNames()
            .then(result => {this.itemBundleNames = result;
                this.orderinfo.ItemsQty = [{}];
                for(let item of this.itemBundleNames){
                    let x = [item];
                    this.orderinfo.ItemsQty.push(x);
                }
                
            });


    }
}
