import { Component, OnDestroy, OnInit, } from '@angular/core';

declare var toastr:any;

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit  {

public nav:any;

public constructor() {
  	this.nav = document.querySelector('nav.navbar');
	setTimeout(function() {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            timeOut: 4000
    	};
        toastr.success('El mejor sistema de asistencia', 'Bienvenido a Smart Gym');
	}, 1300);
}

public ngOnInit():any {
  	this.nav.className += " white-bg";
}


public ngOnDestroy():any {
  this.nav.classList.remove("white-bg");
}

}
