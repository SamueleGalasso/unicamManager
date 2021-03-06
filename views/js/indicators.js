/*=============================================
Indicators Table dynamic load
=============================================*/
$('.indicatorsTable').DataTable({
    "ajax": "ajax/datatable-indicators.ajax.php",
    "deferRender": true,
    "retrieve": true,
    "processing": true
});
/*=============================================
EDIT Indicator
=============================================*/
$(".indicatorsTable").on("click", ".btnEditIndicator", function () {
    var idIndicator = $(this).attr("idIndicator");
    var datum = new FormData();
    datum.append("idIndicator", idIndicator);
    $.ajax({
        url: "ajax/indicators.ajax.php",
        method: "POST",
        data: datum,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (answer) {
            $("#editName").val(answer["name"]);
            $("#editDescription").val(answer["description"]);
            $("#editWeight").val(answer["weight"]);
            $("#editTargets").val(answer["idTarget"]);
            $("#editCompletion").val(answer["completion"]);
            $("#idIndicator").val(answer["id"]);
        }
    })
})
/*=============================================
DELETE indicator
=============================================*/

$(".indicatorsTable").on("click", ".btnDeleteIndicator", function () {
    const idIndicator = $(this).attr("idIndicator");
    swal({
        title: 'Sei sicuro di voler eliminare questo indicatore?',
        text: "Se non lo sei puoi cancellare l'azione!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancella',
        confirmButtonText: 'Si, elimina indicatore!'
    }).then(function (result) {
        if (result.value) {
            window.location = "index.php?route=indicators&idIndicator=" + idIndicator;
        }
    })
})