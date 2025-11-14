import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { CoreModule } from './core/core.module';
//import { AppErrorHandlers } from './core/handlers/app-error-handlers';
import { ResourceModule } from '@ngx-resource/core';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ResourceHandler } from '@ngx-resource/core';
//import { FormMocks } from './mocks/form-mocks';
//import { AppResourceHandlers } from './core/handlers/app-resource-handlers';
//import { FiltroPipe } from './shared/pipes/filtro.pipe';

//export function appHandlerFactory(http: HttpClient, db: FormMocks) {
  //return new AppResourceHandlers(http, db);
//}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, //Solo en el app module
    RouterModule.forRoot([]),
    AppRoutingModule, //Solo en el app module
    //CoreModule,
    //HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(FormMocks, {dataEncapsulation: false, passThruUnknownUrl: true}),    Lo comento para conectarme a mi api real
    ResourceModule.forRoot({
      //handler: {provide: ResourceHandler, useFactory: appHandlerFactory, deps: [HttpClient, FormMocks]}
  })
  ],
  providers: [
    //{ provide: ErrorHandler, useClass: AppErrorHandlers }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
