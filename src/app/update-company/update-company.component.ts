import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  companyCode: string ='';
  constructor(private companyServiceService : CompanyServiceService, private activatedRoute : ActivatedRoute, private router:Router) { }

  companyForm = new FormGroup({
    CompanyCode: new FormControl("", [Validators.required]),
    CompanyName: new FormControl("", [Validators.required]),
    CompanyCEO: new FormControl("", [Validators.required]),
    CompanyTurnover: new FormControl("", [Validators.required]),
    CompanyWebsite: new FormControl("", [Validators.required]),
    StockExchange: new FormControl("", [Validators.required])
  })

  NullValidation(formControl: FormControl) {
    if (!formControl.value) {
      return { 'error': 'Please enter the value.' };
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.companyCode = this.activatedRoute.snapshot.params['companyCode'];
    this.companyServiceService.getCompanyByCode(this.companyCode).subscribe((res: Company) => {
      this.companyForm.controls.CompanyCode.setValue(res.companyCode);
      this.companyForm.controls.CompanyName.setValue(res.companyName);
      this.companyForm.controls.CompanyCEO.setValue(res.companyCEO);
      this.companyForm.controls.CompanyWebsite.setValue(res.companyWebsite);
      this.companyForm.controls.CompanyTurnover.setValue(res.companyTurnover);
      this.companyForm.controls.StockExchange.setValue(res.stockExchange);
    })
  }

  UpdateCompany() {
    let company = <Company>{};
    company.companyCode = this.companyCode;
    company.companyName = this.companyForm.controls.CompanyName.value;
    company.companyCEO = this.companyForm.controls.CompanyCEO.value;
    company.companyWebsite = this.companyForm.controls.CompanyWebsite.value;
    company.companyTurnover = this.companyForm.controls.CompanyTurnover.value;
    company.stockExchange = this.companyForm.controls.StockExchange.value;

    this.companyServiceService.updateCompany(company).subscribe(() => {
      this.router.navigate(['\Dashboard']);
    })
  }
}
