import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './components/app/app.component';
import { OrderinfoComponent } from './components/orderinfo/orderinfo-create.component';
import { OrderinfoService } from './services/orderinfo.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, OrderinfoComponent ],
  providers: [ OrderinfoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
