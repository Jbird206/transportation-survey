$(document).ready(function(){
    $("form#transportation_survey").submit(function(event){
      event.preventDefault();
      //$("#work-responses").show();
      //var userResponses = []
      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses').append(workTransportationMode.toUpperCase() + "<br>");

      

    });
});

        $("#second").show();
        $("form#transportation_survey").submit(function(event){
            
            
            $("input:checkbox[name=fun-transportation]:checked").each(function(){
                var funTransportationMode = $(this).val();
                $('#fun-responses').append(funTransportationMode + "<br>");
                });
            
            $("#work-responses").show();
            $("#fun-responses").show();
                

            $('#transportation_survey').hide();
        });
        // $("#fun-responses").show();
        // // $("input:checkbox[name=fun-transportation]:checked").each(function(){
        // // var funTransportationMode = $(this).val();
        // // $('#fun-responses').append(funTransportationMode + "<br>");
        // // });
        // // $('#transportation_survey').hide();


    //     userResponses.push(workTransportationMode);
    //     var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
    //    $('#work-responses').append(workTransportationMode.toUpperCase() + "<br>");
      
      
    //   
    
  });