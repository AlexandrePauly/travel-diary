import { Caroussel } from './caroussel.model';

export class TravelTab {
    constructor(public title: string,
                public overviewTitle: string,
                public overviewDesc: string,
                public galleryTitle: string,
                public caroussel: Caroussel[],
                public mapsTitle: string,
                public mapsDesc: string){
    }
}