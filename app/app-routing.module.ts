import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderinfoComponent } from './components/orderinfo/orderinfo-create.component';

const routes: Routes = [
    { path: "", redirectTo: "/orderinfo", pathMatch: "full"},
    { path: "orderinfo", component: OrderinfoComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}