import { Component, OnDestroy, OnInit, } from '@angular/core';

declare var toastr:any;

@Component({
  selector: 'detalles-sucursal',
  templateUrl: 'detalles.template.html'
})
export class DetallesComponent implements OnDestroy, OnInit  {

  public nav:any;

  public constructor() {
    	this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit():any {
    	this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  public save(){
    setTimeout(function() {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            timeOut: 4000
      };
        toastr.success('Se ha guardado con exito.', 'Smart Gym');
    }, 500);
  }

}
