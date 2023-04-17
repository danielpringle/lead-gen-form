jQuery(function($){




	$(document).on( 'click', '.page-numbers', function( event ) {
		event.preventDefault();

		let page = $(this).text();

        $.ajax({
            url: az_fetch_products.ajaxurl,
            type: 'post',
            data: {
                action: 'az_fetch_products',
                cat_id: jQuery('#az-product-container').attr("data-cat-id"),
                page: page,
            },
            success: function( data ) {
                $('#az-display-products').html(data); // insert data // insert data
            }
        })

        

    });
















    


    $(document).ready(function() {
        $.ajax({
            url: az_fetch_products.ajaxurl,
            type: 'post',
            data: {
                action: 'az_fetch_products',
                cat_id: jQuery('#az-product-container').attr("data-cat-id"),
            },
            success: function( data ) {
                $('#az-display-products').html(data); // insert data // insert data
            }
        })
    });

    
    
        $(document).ready(function(){
            // $('#azproductcategoryfilter').change(function () {
            //     var val = jQuery('#azproductcategoryfilter').val();
            //     console.log( "changed "+ val );
            //     $.ajax({
            //         url: az_fetch_products.ajaxurl,
            //         type: 'post',
            //         data: { action: 'az_fetch_products', 
            //                 keyname: jQuery('#azproductcategoryfilter option:selected').val(),
            //                 keyname2: jQuery('#azproductdisplayfilter option:selected').val(),
            //                 cat_id: jQuery('#az-product-container').attr("data-cat-id"),
            //             },
            //         success: function( data ) {
            //             console.log(data);
            //             $('#az-display-products').html(data); // insert data // insert data
            //         },
            //         error : function(error){ console.log(error) }

            //     })
            // });


            // $('#azproductdisplayfilter').change(function () {
            //     var val = jQuery('#azproductdisplayfilter').val();
            //     console.log( "changed "+ val );
            //     $.ajax({
            //         url: az_fetch_products.ajaxurl,
            //         type: 'post',
            //         data: { action: 'az_fetch_products', 
            //                 keyname2: jQuery('#azproductdisplayfilter option:selected').val(),
            //                 keyname: jQuery('#azproductcategoryfilter option:selected').val(),
            //                 cat_id: jQuery('#az-product-container').attr("data-cat-id"),
            //              },
            //         success: function( data ) {
            //             console.log(data);
            //             $('#az-display-products').html(data); // insert data // insert data
            //         },
            //         error : function(error){ console.log(error) }

            //     })
            // });

            
            // $('.testingdan').change(function () {
            //     const fruits = ["Banana", "Orange", "Apple", "Mango"];
            //     var val = jQuery('.testingdan').val();
            //     console.log( "changed "+ val );
            //     $.ajax({
            //         url: az_fetch_products.ajaxurl,
            //         type: 'post',
            //         data: { action: 'az_fetch_products', 
            //                 keyname2: jQuery('#azproductdisplayfilter option:selected').val(),
            //                 keyname: jQuery('#azproductcategoryfilter option:selected').val(),
            //                 cat_id: jQuery('#az-product-container').attr("data-cat-id"),
            //                 me: fruits,
            //              },
            //         success: function( data ) {
            //             console.log(data);
            //             $('#az-display-products').html(data); // insert data // insert data
            //         },
            //         error : function(error){ console.log(error) }

            //     })
            // });


            const n = {}; 
            
            $('.az-att-filter').change(function () { 

                var cusid_ele = document.getElementsByClassName('az-att-filter');
                    for (var i = 0; i < cusid_ele.length; ++i) {
                        var item = cusid_ele[i];  
                        let attributeValue = item.getAttribute('data-att-id');
                        
                        var output = item.value;//item.options[item.selectedIndex].value;
                        n[attributeValue] = output;

                        $.ajax({
                            url: az_fetch_products.ajaxurl,
                            type: 'post',
                            data: { action: 'az_fetch_products', 
                                    keyname2: jQuery('#azproductdisplayfilter option:selected').val(),
                                    keyname: jQuery('#azproductcategoryfilter option:selected').val(),
                                    cat_id: jQuery('#az-product-container').attr("data-cat-id"),
                                    dan: n,
                                    },
                            success: function( data ) {
                                console.log(data);
                                $('#az-display-products').html(data); // insert data // insert data
                            },
                            error : function(error){ console.log(error) }

                        })
                    };
            });

                
   
            // $('.testingdan').change(function () {
            //     const n = { 
            //         "Company Name": 'Flexiple', 
            //         "ID": 123
            //     }; 
            //     n['a'] = 200;
            //     n['b'] = 300;
            //     var val = jQuery('.testingdan').val();
            //     console.log( "changed "+ val );
            //     $.ajax({
            //         url: az_fetch_products.ajaxurl,
            //         type: 'post',
            //         data: { action: 'az_fetch_products', 
            //                 keyname2: jQuery('#azproductdisplayfilter option:selected').val(),
            //                 keyname: jQuery('#azproductcategoryfilter option:selected').val(),
            //                 cat_id: jQuery('#az-product-container').attr("data-cat-id"),
            //                 dan: n,
            //              },
            //         success: function( data ) {
            //             console.log(data);
            //             $('#az-display-products').html(data); // insert data // insert data
            //         },
            //         error : function(error){ console.log(error) }

            //     })
            // });





            // let n = [];
            // $('.az-att-filter').change(function () { 
            //     var cusid_ele = document.getElementsByClassName('az-att-filter');
            //     for (var i = 0; i < cusid_ele.length; ++i) {
    
            //         var item = cusid_ele[i];  
            //         let attributeValue = item.getAttribute('data-att-id');
            //         var value = item.options[item.selectedIndex].value;
            //         n[attributeValue] = value;
            //         $.ajax({
            //              url: az_fetch_products.ajaxurl,
            //              type: 'post',
            //              data: { 
            //                 action: 'az_fetch_products',
            //                 data : n,
            //             },
                 
            //             success: function( data ) {
            //                 $('#az-display-products').html(data);
                           
            //             },
            //             error : function(error){ console.log(error) }
            //          });

            //     }
    
            //     console.log(n);

            // });

        });

    $(document).ready(function(){

        $( "#az-product-search" ).keyup(function() {
            // alert( "Handler for .keyup() called." );
            console.log( "Handler for .keyup() called." );

            $.ajax({
                url: az_fetch_products.ajaxurl,
                type: 'post',
                data: { action: 'az_fetch_products', 
                        keyword: jQuery('#az-product-search').val(),
                        cat_id: jQuery('#az-product-container').attr("data-cat-id"), 
                    },
    
                success:function(data){
                    $('#az-display-products').html(data); // insert data
                
                }
            });
            return false;

        });

    });

});