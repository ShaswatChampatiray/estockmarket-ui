import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private companyServiceService : CompanyServiceService, private router:Router) { }

  companyForm = new FormGroup({
    CompanyCode: new FormControl("", [Validators.required]),
    CompanyName: new FormControl("", [Validators.required]),
    CompanyCEO: new FormControl("", [Validators.required]),
    CompanyTurnover: new FormControl("", [Validators.required]),
    CompanyWebsite: new FormControl("", [Validators.required]),
    StockExchange: new FormControl("", [Validators.required])
  })

  ngOnInit(): void {
  }

  AddCompany() {
    let newCompany = <Company>{};
    newCompany.companyCode = this.companyForm.controls.CompanyCode.value;
    newCompany.companyName = this.companyForm.controls.CompanyName.value;
    newCompany.companyCEO = this.companyForm.controls.CompanyCEO.value;
    newCompany.companyWebsite = this.companyForm.controls.CompanyWebsite.value;
    newCompany.companyTurnover = this.companyForm.controls.CompanyTurnover.value;
    newCompany.stockExchange = this.companyForm.controls.StockExchange.value;

    this.companyServiceService.addCompany(newCompany).subscribe(() => {
      this.router.navigate(['\Dashboard']);
    })
  }

}
