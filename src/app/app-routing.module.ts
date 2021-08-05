import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowCompanyComponent } from './show-company/show-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';

const routes: Routes = [
  { path: "Dashboard", component: DashboardComponent },
  { path: "Company/:companyCode", component: ShowCompanyComponent },
  { path: "AddCompany", component: AddCompanyComponent },
  { path: "DeleteCompany/:companyCode", component: DeleteCompanyComponent },
  { path: "UpdateCompany/:companyCode", component: UpdateCompanyComponent },
  { path: "AddStock/:companyCode", component: AddStockComponent },
  { path: "", redirectTo: '/Dashboard', pathMatch:'full' },
  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
