import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { Company } from '../models/company';
import { Stocks } from '../models/stock';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {
  companyRecord!: Company;
  companyCode!: string;
  stockPrice: number = 0;
  startDate = new FormControl();
  endDate = new FormControl();
  stocks: Stocks | undefined;
  stockList: any = [];

  constructor(private companyServiceService: CompanyServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.companyCode = this.activatedRoute.snapshot.params['companyCode'];
    this.companyServiceService.getCompanyByCode(this.companyCode).subscribe((res: Company) => {
      console.log(res);
      this.companyRecord = res;
      this.stockList = this.companyRecord.stocks.stocks;
    });
  }
   
  calculateMin() {
    let sortArray: number[] = [];
    this.companyRecord.stocks.stocks.forEach((stock) => {
      sortArray.push(stock.stockPrice);
    });
    return Math.min(...sortArray);
    
  }
  
  calculateMax() {
    let sortArray: number[] = [];
    this.companyRecord.stocks.stocks.forEach((stock) => {
      sortArray.push(stock.stockPrice);
    });
    return Math.max(...sortArray);
  }

  calculateAvg() {
    let totalStockPrice = 0;
    let totalStocks = this.companyRecord.stocks.stocks.length;
    this.companyRecord!.stocks.stocks.forEach((stock) => {
      totalStockPrice += stock.stockPrice;
    });
    return (totalStockPrice / totalStocks).toFixed(2);
  }

  UpdateSearch() {
    console.log(this.startDate.value);
    console.log(this.endDate.value);
    this.companyCode = this.activatedRoute.snapshot.params['companyCode'];
    this.companyServiceService.getStockInfoInDateRange(this.companyCode, this.startDate.value, this.endDate.value).subscribe((res : any) => {
      console.log(res);
      this.stockList = res.stocks;
    });
  }
  
}

