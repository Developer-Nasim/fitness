(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  
  $( "#dp-island" ).datepicker({
    minDate: 0,
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#start-date").val(dateText);
            $("#end-date").val("");
        } else if (selectedDate < date1) {
            $("#end-date").val($("#start-date").val());
            $("#start-date").val(dateText);
        } else {
            $("#end-date").val(dateText);
        }
        $(this).datepicker();
    }
    }); 
  $( "#dp-island2" ).datepicker({
    minDate: 0,
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#start-date").val(dateText);
            $("#end-date").val("");
        } else if (selectedDate < date1) {
            $("#end-date").val($("#start-date").val());
            $("#start-date").val(dateText);
        } else {
            $("#end-date").val(dateText);
        }
        $(this).datepicker();
    }
    }); 
  $( "#dp-island3" ).datepicker({
    minDate: 0,
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#start-date").val(dateText);
            $("#end-date").val("");
        } else if (selectedDate < date1) {
            $("#end-date").val($("#start-date").val());
            $("#start-date").val(dateText);
        } else {
            $("#end-date").val(dateText);
        }
        $(this).datepicker();
    }
    }); 

  
  $( "#dp-island4" ).datepicker({
    minDate: 0,
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#start-date").val(dateText);
            $("#end-date").val("");
        } else if (selectedDate < date1) {
            $("#end-date").val($("#start-date").val());
            $("#start-date").val(dateText);
        } else {
            $("#end-date").val(dateText);
        }
        $(this).datepicker();
    }
    }); 
  $( "#dp-island5" ).datepicker({
    minDate: 0,
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#start-date").val(dateText);
            $("#end-date").val("");
        } else if (selectedDate < date1) {
            $("#end-date").val($("#start-date").val());
            $("#start-date").val(dateText);
        } else {
            $("#end-date").val(dateText);
        }
        $(this).datepicker();
    }
    }); 
  $( "#dp-island6" ).datepicker({
    minDate: 0,
    beforeShowDay: function(date) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
        return [true, isHightlight ? "dp-highlight" : ""];
    },
    onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
        if (!date1 || date2) {
            $("#start-date").val(dateText);
            $("#end-date").val("");
        } else if (selectedDate < date1) {
            $("#end-date").val($("#start-date").val());
            $("#start-date").val(dateText);
        } else {
            $("#end-date").val(dateText);
        }
        $(this).datepicker();
    }
    }); 

      // owlCarousel
  $(".yoga_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
 
})(jQuery);
