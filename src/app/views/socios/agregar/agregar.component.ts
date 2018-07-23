import { Component, OnDestroy, OnInit, } from '@angular/core';

declare var toastr:any;
declare var $:any;
declare var swal:any;

@Component({
  selector: 'agregar-socio',
  templateUrl: 'agregar.template.html'
})
export class AgregarSocioComponent implements OnDestroy, OnInit  {

  public nav:any;

  public constructor() {
    	this.nav = document.querySelector('nav.navbar');
      $(document).ready(function(){
        $('#nacimiento .input-group.date').datepicker({
          startView: 2,
          todayBtn: "linked",
          keyboardNavigation: false,
          forceParse: false,
          autoclose: true
        });
      });
  }

  public ngOnInit():any {
    	this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  public agregar(){
    swal({
        title: "¿ Estas seguro ?",
        text: "¡ Estas apunto de agregar a un socio !",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#5de265",
        confirmButtonText: "Si, agregarlo!",
        closeOnConfirm: true
    }, function () {
        //swal("¡ Eliminada !", "La sucursal ha sido eliminada.", "success");
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
      });
  }

}
