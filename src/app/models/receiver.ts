import { Document } from "./document";
import { Supplier } from "./supplier";

export class Receiver{
    document: Document | any;
    materialType: string | any;
    quantity: number | any;
    measurementUnit: string | any;
    pricePerUnit: number | any;
    supplier: Supplier | any;
}