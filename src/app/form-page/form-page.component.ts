import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"');
    this.loadScript('src/assets/js/jquery.validate.min.js');
  }


  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


}
