<script>
jQuery(document).ready(function($){
        $( ".et_pb_gallery_image a" )
        	.mouseenter(function() {	
        		var title = $(this).attr("title");
        		$(this).attr("temp_title", title);
        		$(this).attr("title","");
        	})
        	.mouseleave(function() {
        		var title = $(this).attr("temp_title");
        		$(this).attr("title", title);
				$(this).removeAttr("temp_title");	
        	});
 });
</script>
