



//No click event
if (jQuery('input[type="hidden"][name="product_id"]').length === 0) {
  //Do nothing
} else {
  jQuery("body").addClass("bc-editor");
  jQuery(".bc-editor").prepend("<button type='button' id='editor-btn' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalLong'><i class='fa fa-pencil-square-o' aria-hidden='true'></i><img class='hilogo' src='http://35.196.61.186/wp-content/uploads/2017/10/hiintel2.png'/>&nbsp;Edit This Product</button>");
  var productID = jQuery('input[type="hidden"][name="product_id"]').val();
  var host = window.location.hostname;
  var editURL = "https://" + host + "/admin/index.php?ToDo=editProduct&productId=" + productID;
  jQuery("#editor-btn").click(function(){
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.bigcommerce.com/stores/kvwmnj0w0e/v3/catalog/products/" + productID ,
        "method": "GET",
        "headers": {
          "x-auth-token": "17h551fzx5yltf0bnq0anh0fg54qu62",
          "x-auth-client": "9rub6mo8h2twb31880lxokfox2oqjeb",
          "cache-control": "no-cache",
          "postman-token": "210e0e71-6ed2-c634-9489-089640b7c36b"
        }
      }
      $.ajax(settings).done(function (response) {
        // console.log(response);
        $.each(response, function (index, value) {

            jQuery("<div id='contentbody'></div>").appendTo("body");



            jQuery(".modal-body").prepend("<h2>Test test</h2>")
            $.each(value, function(k, v){
                $(".modal-body").prepend('<li>'+k + ' : ' + v+'</li>');
            });



          });
        });


                    jQuery('.productView').prepend('<div id="pop-up-container"><div tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div></div></div>');


  });
}




// //Click Event
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//
//     }
//   }
// );
