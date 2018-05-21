$(document).ready(function(){
    //alert('linked');

    $('#btn').focus(function(){
       // console.log('phase one');
        $('#d1').css('background','black');
        $('#d2').css('background','orangered');

        $('#btn').keypress(function(e){
          
            var val =  e.target.value;
            var len = val.length;
            console.log(len); 
        
         if(len>=3 && len <=5){
            $('#d2').css('background','#e53e00');
         }
         if(len>=6 && len <=9){
            $('#d2').css('background','#cc3700');
         }
         if(len>=10 && len <=13){
            $('#d2').css('background','#b23000');
         }
         if(len>=14 && len <=17){
            $('#d2').css('background','#992900');
         }
         if(len>=18 && len <=24){
            $('#d2').css('background','#7f2200');
         }
        if(len >24){
            $('#d2').css('background','#661b00');
        }

        });
    });
    $('#btn').blur(function(){
        console.log('phase one');
        $('#d1').css('background','orangered');
        $('#d2').css('background','black');
    });
});