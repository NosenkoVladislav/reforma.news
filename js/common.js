$(function () {
    $('#datetimepicker1').datetimepicker({
		format: 'DD.MM.YYYY'
    });
    $('#datetimepicker2').datetimepicker({
        useCurrent: false,
        format: 'DD.MM.YYYY'
    });
    $("#datetimepicker1").on("dp.change", function (e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function (e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });
});

$(function() {
	$('.js-select').select2();
});
