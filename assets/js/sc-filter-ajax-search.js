jQuery(function($){

    $("#button_to_load_data").click(function() {

        var data = {
           'action'   : 't4a_ajax_call', // the name of your PHP function!
           'function' : 'show_files',    // a random value we'd like to pass
           'fileid'   : '7'              // another random value we'd like to pass
           };
         
        $.post(data_fetch.ajaxurl, data, function(response) {
           jQuery("#receiving_div_id").html(response);
        });
     });

});


