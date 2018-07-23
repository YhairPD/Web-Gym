import { Component, OnDestroy, OnInit, } from '@angular/core';

declare var toastr:any;
declare var $:any;
declare var swal:any;

@Component({
  selector: 'tabla-asistencia',
  templateUrl: 'tabla.template.html'
})
export class TablaAsistenciaComponent implements OnDestroy, OnInit  {

  public nav:any;

  public constructor() {
    	this.nav = document.querySelector('nav.navbar');
      $(document).ready(function(){
            $('.dataTables-example').DataTable({
                pageLength: 25,
                responsive: true,
                dom: '<"html5buttons"B>lTfgitp',
                buttons: [
                    { extend: 'copy'},
                    {extend: 'csv'},
                    {extend: 'excel', title: 'Lista de Sucursales'},
                    {extend: 'pdf', title: 'Lista de Sucursales'},

                    {extend: 'print',
                     customize: function (win){
                            $(win.document.body).addClass('white-bg');
                            $(win.document.body).css('font-size', '10px');

                            $(win.document.body).find('table')
                                    .addClass('compact')
                                    .css('font-size', 'inherit');
                    }
                    }
                ]

            });

        });
  }

  public ngOnInit():any {
    	this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  public eliminar(){
    swal({
        title: "¿ Estas seguro ?",
        text: "¡ Esta apunto de eliminar una sucursal !",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, eliminarlo!",
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
            "timeOut": "7000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr.error('Se ha eliminado con exito.', 'Smart Gym');
        }, 500);
      });
  }

}
