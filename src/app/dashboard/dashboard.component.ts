import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Companies } from '../models/Companies';
import { Company } from '../models/company';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private companyServiceService : CompanyServiceService) { }

  companyListOriginal: Company[] =[]; 
  uiCompanyList: Company[] = []; //for search funcationality
 //for search funcationality
  ngOnInit(): void {
    this.companyServiceService.getAllCompanies().subscribe((res: Companies) => {
      console.log(res);
      this.companyListOriginal = res.companies;
      this.uiCompanyList = this.companyListOriginal;
    });
  }

  OnSearchKey(val: string) {
    console.log(val);
    let filteredList: Company[] = [];
    if (val) {
      this.companyListOriginal.forEach(element => {
        if (element.companyName.toLowerCase().includes(val.toLowerCase()) || 
            element.companyCode.toLowerCase().includes(val.toLowerCase()) || 
            element.companyCEO.toLowerCase().includes(val.toLowerCase()) || 
          element.companyWebsite.toLowerCase().includes(val.toLowerCase())) {
          
          filteredList.push(element);
        } 
      });
      this.uiCompanyList = filteredList;
    } else {
      this.uiCompanyList = this.companyListOriginal;
    }
  }

  GetCompany() {
    console.log('Get Company by Code');
  }

}
