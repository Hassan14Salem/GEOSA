import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gisp02',
  templateUrl: './gisp02.component.html',
  styleUrls: ['./gisp02.component.css']
})
export class GISP02Component implements OnInit {

  constructor() { }
  openFilter(){
    document.querySelector('.filteration')?.classList.remove('d-none');

    document.querySelector('.filteration')?.classList.add('d-block');
  }
  
  closeFilter(){
    document.querySelector('.filteration')?.classList.remove('d-block')

    document.querySelector('.filteration')?.classList.add('d-none')

  }
  ngOnInit(): void {
  }

}
