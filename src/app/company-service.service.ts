import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companies } from './models/Companies';
import { Company } from './models/company';
import { Stock } from './models/stock';
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  private getAllCompaniesUrl = 'http://localhost:8081/api/v1.0/market/company/getall';
  private getCompanyByCodeUrl = 'http://localhost:8081/api/v1.0/market/company/info/';
  private addCompanyUrl = 'http://localhost:8081/api/v1.0/market/company/register';
  private updateCompanyUrl = 'http://localhost:8081/api/v1.0/market/company/register';
  private deleteCompanyUrl = 'http://localhost:8081/api/v1.0/market/company/delete/';
  private addStockUrl = 'http://localhost:8081/api/v1.0/market/stock/add/';
  private getStockUrlDateRange = 'http://localhost:8081/api/v1.0/market/stock/get/';

  constructor(private httpClient : HttpClient) { }

  getAllCompanies(): Observable<Companies> {    
    return this.httpClient.get<Companies>(this.getAllCompaniesUrl);
  }

  getCompanyByCode(companyCode: string): Observable<Company> {
    return this.httpClient.get<Company>(this.getCompanyByCodeUrl + companyCode);
  }

  addCompany(company: Company) {    
    return this.httpClient.post(this.addCompanyUrl, company);
  }
  
  updateCompany(company: Company) {    
    return this.httpClient.post(this.updateCompanyUrl, company);
  }

  deleteCompany(companyCode: string) {    
    return this.httpClient.delete(this.deleteCompanyUrl + companyCode);
  }

  addStock(stock: Stock) {
    return this.httpClient.post(this.addStockUrl+stock.companyCode, stock);
  }

  getStockInfoInDateRange(companyCode: string, startDate: Date, endDate: Date) {
    let format = "YYYY-MM-ddThh:mm:ss";
    let formattedStartDate = formatDate(startDate, format, 'en-US');
    let formattedEndDate = formatDate(endDate, format, 'en-US');
    let url = this.getStockUrlDateRange + companyCode + '/' + formattedStartDate + '/' + formattedEndDate;
    console.log("url " + url);
    return this.httpClient.get(url);
  }
}
