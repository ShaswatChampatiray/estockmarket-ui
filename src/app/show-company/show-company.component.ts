import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {
  companyRecord: Company | undefined;
  companyCode!: string;
  stockPrice: number = 0;

  constructor(private companyServiceService : CompanyServiceService, private activatedRoute : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.companyCode = this.activatedRoute.snapshot.params['companyCode'];
    this.companyServiceService.getCompanyByCode(this.companyCode).subscribe((res: Company) => {
      console.log(res);
      this.companyRecord = res;
    });
  }

  AddStock() {
    
  }

}
