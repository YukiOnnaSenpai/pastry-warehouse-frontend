import { ProductEmployee } from "./product-employee";

export class WorkOrder{
    id: number | any;
    dateCreated: string | any;
    validFrom: string | any;
    validTo: string | any;
    purchasePriceAmount: number | any;
    sellingPriceAmount: number | any;
    purchasePriceCurrency: string | any;
    planningPeriod: string | any;
    productEmployee: ProductEmployee | any;
}