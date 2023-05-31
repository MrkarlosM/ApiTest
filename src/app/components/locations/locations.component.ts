import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  first: number = 0;
  rows: number = 9;
  totalRecords: number=0;

  //URLs
  URL='https://rickandmortyapi.com/api/location/'

  listLocations: any[] = [];
  residents: any[]=[];

  constructor(private _characerService: RequestService){}
  ngOnInit() {
    this._characerService.getAllCharacters(this.URL).subscribe((data: any)=>{
      this.totalRecords=data.info.count
      console.log(this.totalRecords)
    });
    let array = this.range(0, 9);
    this._characerService.getCharactersRange(this.URL, array).subscribe((data: any)=>{
      this.listLocations = data;
      this.listLocations.forEach(item=> this.residents.push(item.residents))
      console.log(this.listLocations, this.residents)
    })

    
  }

  onPageChange(event: any){
    this.first = event.first;
    this.rows = event.rows;
    let array = this.range(this.first+1, this.rows+this.first);
    this._characerService.getCharactersRange(this.URL, array).subscribe((data: any)=>{
      this.listLocations = data;
    })
  }

  range(start: number, stop: number){
    const array = Array.from(
      { length: (stop - start) / 1 + 1 },
      (value, index) => start + index * 1
      );
    return array;
  }

}

