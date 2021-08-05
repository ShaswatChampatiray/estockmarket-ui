import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
  companyRecord: Company | undefined;

  constructor(private companyServiceService : CompanyServiceService, private activatedRoute : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let companyCode = this.activatedRoute.snapshot.params['companyCode'];
    this.companyServiceService.getCompanyByCode(companyCode).subscribe((res: Company) => {
      this.companyRecord = res;
    })
  }

  OnDeleteConfirm() {
    let companyCode = this.activatedRoute.snapshot.params['companyCode'];
    this.companyServiceService.deleteCompany(companyCode).subscribe(() => {
      this.router.navigate(['\Dashboard']);
    })
  }

}
