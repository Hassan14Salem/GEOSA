import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-process-action',
  templateUrl: './tech-process-action.component.html',
  styleUrls: ['./tech-process-action.component.css']
})
export class TechProcessActionComponent implements OnInit {

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
