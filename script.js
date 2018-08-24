 (function() {

        function addSeperator(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
            }
            return x1 + x2;
        }

     //    function rangeInputChangeEventHandler(e){
     //        var rangeGroup = $(this).attr('name'),
     //            minBtn = $(this).parent().children('.min'),
     //            maxBtn = $(this).parent().children('.max'),
     //            range_min = $(this).parent().children('.range_min'),
     //            range_max = $(this).parent().children('.range_max'),
     //            minVal = parseInt($(minBtn).val()),
     //            maxVal = parseInt($(maxBtn).val()),
     //            origin = $(this).className;

     //        if(origin === 'min' && minVal > maxVal-5){
     //            $(minBtn).val(maxVal-5);
     //        }
     //        var minVal = parseInt($(minBtn).val());
     //        $(range_min).html(addSeperator(minVal*1000) + ' €');


     //        if(origin === 'max' && maxVal-5 < minVal){
     //            $(maxBtn).val(5+ minVal);
     //        }
     //        var maxVal = parseInt($(maxBtn).val());
     //        $(range_max).html(addSeperator(maxVal*1000) + ' €');
     //    }

     // $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);

     var minval = $(".rangeslider .min").val();
     var maxval = $(".rangeslider .max").val();
     var adding = 1;
     $(".rangeslider .min").on("input", function(){
            var val = $(this).val();
            if(val < maxval){
                $("body .range_min").html(val);
            }else{
                $(this).stop();
            }
     })

     $(".rangeslider .max").on("input", function(){
            var val = $(this).val();
            if(val > minval){
                $("body .range_max").html(val);                
            }else{
                $(this).stop();
            }
     })

})();