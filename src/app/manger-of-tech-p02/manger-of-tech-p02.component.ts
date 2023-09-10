import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manger-of-tech-p02',
  templateUrl: './manger-of-tech-p02.component.html',
  styleUrls: ['./manger-of-tech-p02.component.css']
})
export class MangerOfTechP02Component implements OnInit {

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
