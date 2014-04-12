$(":button").click(function() {
		var isbn = this.id;
		var destinationUrl = "http://localhost:8001/library/v1/books/"+isbn+"?status=lost";
		var button = ':button#'+isbn;
		jQuery.ajax({
		    type: "PUT",
		    url: destinationUrl,
		    contentType: "application/json",
		    success : function ()
		    {
		    	alert('success');
		    	location.reload();
		    	$(button).attr("disabled", true);
		    },
			failure : function ()
			{
				alert('failure...');
			}
		});		
});
$(document).ready(function() {
  $('#book tr').each(function(){
	  $this = $(this);
	  var bookStatus = $this.find("td:nth-child(5)").html();
	  if (bookStatus=="lost")
      {
		  var isbnId = $this.find("td:nth-child(1)").html();
		  document.getElementById(isbnId).disabled = true;
      }
  });
});
	