import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place (
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      // tslint:disable-next-line:max-line-length
      'https://image.cnbcfm.com/api/v1/image/105569538-1542060688737playa-vista-isle-hillsboro-complete-public-photos03.jpg?v=1542060716&w=678&h=381',
      149.99
    ),
    new Place (
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://d36vnx92dgl2c5.cloudfront.net/cache/prod/Danielfeau/1/media/a422574b722728b5d783d8be303fbf44.jpg',
      189.99
    ),
    new Place (
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      // tslint:disable-next-line:max-line-length
      'https://images.squarespace-cdn.com/content/5a2537ab1f318dcca23b2a9a/1553075158652-REM9Z1DQNKOX9IA1K3VH/Bourscheid+Castle+in+the+fog+-+Chateau+de+Bourscheid+-+Luxembourg+-+Bourscheid+castle+in+the+fog+during+an+autumn+sunrise+-+Fortress+Rising+from+the+Fog+-+Photography+by+Christophe+Van+Biesen+-+Landscape+and+Travel+Photographer.jpg?format=1500w&content-type=image%2Fjpeg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
