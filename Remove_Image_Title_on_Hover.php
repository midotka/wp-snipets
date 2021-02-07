/* =============================== *
/* Remove Image Title on Hover
 * =============================== */
function add_custom_script_image(){
	?>
	<script>
	jQuery(window).load(function(){
		jQuery('img').removeAttr('title');       
	});
	</script>
	<?php
}
add_action('wp_footer', 'add_custom_script_image');
