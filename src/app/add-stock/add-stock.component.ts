import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../models/company';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor(private companyServiceService : CompanyServiceService, private router:Router) { }

  stockForm = new FormGroup({
    CompanyCode: new FormControl("", [Validators.required]),
    StockPrice: new FormControl("", [Validators.required]),
  })

  ngOnInit(): void {
  }

  AddStock() {
    let stock = <Stock>{};
    stock.companyCode = this.stockForm.controls.CompanyCode.value;
    stock.stockPrice = this.stockForm.controls.StockPrice.value;

    this.companyServiceService.addStock(stock).subscribe(() => {
      this.router.navigate(['\Company', stock.companyCode]);
    })
  }

}
