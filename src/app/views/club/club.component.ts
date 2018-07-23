import { Component, OnDestroy, OnInit, } from '@angular/core';

declare var toastr:any;
declare var $:any;
declare var swal:any;

@Component({
  selector: 'club',
  templateUrl: 'club.template.html'
})
export class ClubComponent implements OnDestroy, OnInit  {

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
  swal({
        title: "¿ Estas seguro ?",
        text: "¡ Estas apunto de actualizar al club !",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#e5d259",
        confirmButtonText: "Si, actualizarlo!",
        closeOnConfirm: true,
        closeOnCancel: false
    }, function (isConfirmed) {
      if(isConfirmed){
        setTimeout(function() {
          toastr.options = {
            "closeButton": true,
            "debug": false,
            "progressBar": true,
            "preventDuplicates": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "400",
            "hideDuration": "1000",
            "timeOut": "4000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr.success('Se ha guardado con exito.', 'Smart Gym');
        }, 500);
      } else {
        swal("Cancelado", "El club ha sido salvado", "error");
      }
    });
  }

}
