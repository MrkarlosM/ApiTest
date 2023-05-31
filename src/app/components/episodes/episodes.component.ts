import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  first: number = 0;
  rows: number = 9;
  totalRecords: number=0;

  //URLs
  URL='https://rickandmortyapi.com/api/episode/'

  listCharacters: any[] = [];
  constructor(private _characerService: RequestService){}
  ngOnInit() {
    this._characerService.getAllCharacters(this.URL).subscribe((data: any)=>{
      this.totalRecords=data.info.count
      console.log(this.totalRecords)
    });
    let array = this.range(0, 9);
    this._characerService.getCharactersRange(this.URL, array).subscribe((data: any)=>{
      this.listCharacters = data;
    })

    
  }

  getCharacter(){
    this._characerService.getAllCharacters(this.URL).subscribe((data: any) =>{
       this.listCharacters = data.results;
       console.log(this.listCharacters);
    })
  }

  getTotalCharacters(){
    this._characerService.getAllCharacters(this.URL).subscribe((data: any) =>{
      const max = data.info.count;
      console.log(max)
      this.listCharacters = data.results;
      console.log(this.listCharacters);
    })
  }

  onPageChange(event: any){
    this.first = event.first;
    this.rows = event.rows;
    let array = this.range(this.first+1, this.rows+this.first);
    this._characerService.getCharactersRange(this.URL, array).subscribe((data: any)=>{
      this.listCharacters = data;
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

