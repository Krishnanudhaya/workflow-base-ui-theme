import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {

  loadAPI: Promise<any>;
  constructor() { 
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
  });
  }

  ngOnInit() {
  }
    
    public loadScript() {        
        var isFound = false;
        var scripts = document.getElementsByTagName("script")
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                isFound = true;
            }
        }
    
        if (!isFound) {
            var dynamicScripts = ["https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"];
    
            for (var i = 0; i < dynamicScripts.length; i++) {
                let node = document.createElement('script');
                node.src = dynamicScripts [i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }


            var dynamicScripts1 = ["./assets/js/charts-custom.js"];
    
            for (var i = 0; i < dynamicScripts1.length; i++) {
                let node1 = document.createElement('script');
                node1.src = dynamicScripts1 [i];
                node1.type = 'text/javascript';
                node1.async = false;
                node1.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node1);
            }
    
        }
    }

  }





