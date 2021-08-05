export interface Stocks {
    stocks: Stock[];
}

export interface Stock {
    stockId: number;
    stockPrice: number;
    stockPurchaseDateTime?: Date;
    companyCode: string;
}