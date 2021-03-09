import { Injectable } from '@angular/core';
import { Building } from './../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class FlatService {
 flats: Building[] =[
  {
    Nflat:2,
    wing:1,
    Nfloor:2,
    Wingname:'Phase1',
  },
  {
    Nflat:3,
    wing:2,
    Nfloor:4,
    Wingname:'Phase2',
  }

 ]
  constructor() { 
    
  }
  onGet(){
    return this.flats;
  }
}
