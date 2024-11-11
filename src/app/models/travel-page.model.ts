import { Caroussel } from './caroussel.model';
import { TravelTab } from './travel-tab.model';

export class TravelPage {
    constructor(public title: string,
                public desc: string, 
                public startDate: Date, 
                public endDate: Date, 
                public background : string[],
                public caroussel: Caroussel[],
                public tab: TravelTab[]){
    }
}