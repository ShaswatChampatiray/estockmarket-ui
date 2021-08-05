import { Stock, Stocks } from "./stock";

export interface Company {
    companyCode: string;
    companyName: string;
    companyCEO: string;
    companyTurnover: number;
    companyWebsite: string;
    stockExchange: string;
    stocks: Stocks;
}