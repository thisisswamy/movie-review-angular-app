import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { SharedModule } from './common/shared/shared.module';
import { Action, StoreModule } from '@ngrx/store';
import { applicationReducers } from './store/reducers/application.reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiReqHelperInterceptor } from './common/shared/api-req-helper.interceptor';
import { TitleStrategy } from '@angular/router';
import { CustomTitleService } from './common/shared/custom-title.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { latesAppReducers } from './custom-store/reducers/latest-app-state.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(applicationReducers,{}),
    StoreModule.forRoot(latesAppReducers,{}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApiReqHelperInterceptor,
      multi:true
    },
    {
      provide:TitleStrategy,
      useClass:CustomTitleService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
