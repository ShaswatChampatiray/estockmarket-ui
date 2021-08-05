import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ShowCompanyComponent } from './show-company/show-company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CompanyServiceService } from './company-service.service';
import { AddStockComponent } from './add-stock/add-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyComponent,
    DeleteCompanyComponent,
    UpdateCompanyComponent,
    ShowCompanyComponent,
    DashboardComponent,
    NotFoundComponent,
    NavBarComponent,
    AddStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    //environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ CompanyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
