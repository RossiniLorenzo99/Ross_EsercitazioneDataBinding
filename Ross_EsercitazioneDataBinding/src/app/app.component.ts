import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Data Binding - Esempi';

  onEsempioClick(a: HTMLAnchorElement): boolean {
    //pulsanti
    var anchors = document.querySelectorAll(".btn");
    anchors.forEach(anchor => {
      anchor.className = "btn btn-light";
    });

    a.className = "btn btn-primary";
    var visibleWrp = a.getAttribute("data-target");

    //wrp
    var wrps = document.querySelectorAll(".wrp");
    wrps.forEach(wrp => {
      wrp.className = "wrp hidden";
    });

    document.getElementById(visibleWrp || "wrp-stringinterpolation")?.classList.remove("hidden");

    return false;
  }

  ngOnInit(){ }
}