jQuery(document).ready(function(){
var countActivated = 0;
var id_hover_block = '';
var id_element_active = '';
var clicked_to_turn = 0;

var val_delay1000 = 1000;
var val_delay600 = 600;
var val_delay500 = 500;
var val_delay400 = 400;
var val_delay100 = 100;
var val_sec1500 = 1500;
var val_sec1000 = 1000;
var val_sec600 = 600;
var val_sec500 = 500;
var val_sec400 = 400;
var val_sec300 = 300;
var val_sec100 = 100;
var sec_showBlock = 600;
var sec_hideImageBlock = 400;
var start_top_block = jQuery("#shadow_blocks").offset().top;
jQuery('#shadow_blocks .turn_down').click(function(){
	jQuery('#blocks_slider').delay(val_delay100).animate({opacity: 'hide'}, val_sec100);
	jQuery('#' + id_element_active).find('.slider_block').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('.list').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('.images_brands').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('.discription').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('.turn_down').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('.block_header').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('h2').delay(0).slideUp(val_sec300);
	jQuery('#' + id_element_active).find('.industry').delay(0).slideUp(val_sec300);
	jQuery('#shadow_blocks .turn_down').delay(val_delay100).animate({opacity: 'hide'}, val_sec100);
	jQuery('#' + id_element_active).delay(val_delay1000).animate({opacity: 'show'}, val_sec1000);
	jQuery('#' + id_element_active).find('.image_block').delay(val_delay1000).animate({opacity: 'show'}, val_sec1000);
	jQuery('#' + id_element_active).removeAttr("style");
	jQuery('#' + id_element_active).removeClass("active_block");
	jQuery('#shadow_blocks').removeAttr("style");
	jQuery('#shadow_blocks .block').delay(val_delay500).animate({opacity: 'show'}, val_sec1500);
	jQuery('#shadow_blocks .block').find('.image_block').delay(val_delay500).animate({opacity: 'show'}, val_sec1500);
	jQuery('#shadow_blocks .block').each(function(){
		countActivated = 0;
	});
});
jQuery('#shadow_blocks .block').click(function(){
	id_hover_block = "#" + jQuery(this).attr('id');
	id_element_active = this.id;
	countActivated = 1;
	if(clicked_to_turn < 1 && countActivated > 0){
		jQuery('#shadow_blocks .block').each(function(){
			if(this.id == id_element_active){

			}
			else{
				//jQuery(this).delay(50).hide(400);
				jQuery(this).delay(50).slideUp(400);
			}
		});
		if(this.id == id_element_active && countActivated == 1){
			jQuery('#' + id_element_active).addClass("active_block");
			//jQuery(this).delay(500).animate({width: '650px', height: '400px'}, val_sec600);
			jQuery(this).find('.image_block').delay(0).animate({opacity: 'hide'}, sec_hideImageBlock);
			jQuery(this).find('.block_header').delay(500).animate({opacity: 'show'}, sec_showBlock);
			//jQuery(this).find('h2').delay(0).show(val_sec1000);
			//jQuery(this).find('.image_block').delay(0).animate({opacity: 'hide'}, val_sec300);
			jQuery(this).find('.block_header').delay(500).animate({opacity: 'show'}, sec_showBlock);
			jQuery(this).find('h2').delay(500).animate({opacity: 'show'}, sec_showBlock);
			//jQuery(this).find('.discription').css('width', '300px');
			//jQuery(this).find('.discription').delay(500).show(val_sec1000);
			//jQuery(this).find('.images_brands').delay(500).show(val_sec1000);
			//jQuery(this).find('.list').delay(0).show(val_sec1000);
			//jQuery(this).find('.industry').delay(0).show(val_sec1000);
			//jQuery('#shadow_blocks .turn_down').delay(0).show(val_sec1000);
			//jQuery('#blocks_slider').delay(0).show(val_sec1000);
		    jQuery(this).find('.discription').delay(500).animate({opacity: 'show'}, sec_showBlock);
			jQuery(this).find('.images_brands').delay(500).animate({opacity: 'show'}, sec_showBlock);
			jQuery(this).find('.list').delay(500).animate({opacity: 'show'}, sec_showBlock);
			jQuery(this).find('.industry').delay(500).animate({opacity: 'show'}, sec_showBlock);
			jQuery('#shadow_blocks .turn_down').delay(500).animate({opacity: 'show'}, sec_showBlock);
			jQuery('#blocks_slider').delay(800).animate({opacity: 'show'}, sec_showBlock);
			jQuery('#shadow_blocks .block .turn_down a').click(function(){
				clicked_to_turn = 1;
				countActivated = 0;
			});
		}
		//jQuery('#shadow_blocks').css({'width': '750px', 'height': '370px'});
	}

	jQuery('html, body').animate({scrollTop:start_top_block}, 'slow');
});
jQuery('#blocks_slider .slider_block').click(function(){
	id_hover_slider_block = this.id;
	if(id_element_active != id_hover_slider_block){
		
		jQuery('#shadow_blocks ' + '#' + id_element_active).delay(0).slideUp(300);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('.slider_block').delay(0).slideUp(300);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('.list').delay(0).slideUp(100);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('.images_brands').delay(0).slideUp(300);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('.discription').delay(0).slideUp(300);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('.block_header').delay(0).slideUp(300);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('h2').delay(0).slideUp(300);
		jQuery('#shadow_blocks ' + '#' + id_element_active).find('.industry').delay(0).slideUp(300);

		setTimeout(function(){
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).addClass("active_block");
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.image_block').hide();
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.block_header').delay(0).slideDown(400);
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('h2').delay(0).slideDown(400);
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.images_brands').delay(0).slideDown(400);
			//jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.discription').css({'width': '300px', 'height': '300px'});
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.discription').delay(0).slideDown(400);		
			//jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.list').css({'height': '300px'});
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.list').delay(0).slideDown(400);
			//jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).delay(0).animate({width: '650px', height: '400px'}, 600);
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).delay(0).animate({opacity: 'show'}, 1000);
			jQuery('#shadow_blocks ' + '#' + id_hover_slider_block).find('.industry').delay(500).slideDown(400);
		}, 300);
		setTimeout(function(){
			jQuery('#shadow_blocks ' + '#' + id_element_active).removeAttr("style");
			jQuery('#shadow_blocks ' + '#' + id_element_active).removeClass("active_block");
			jQuery('#shadow_blocks ' + '#' + id_element_active).css('display', 'none');
			id_element_active = id_hover_slider_block;
			id_hover_block = id_element_active;
		},500);
		
	}else{
	}

	jQuery('html, body').animate({scrollTop:start_top_block}, 'slow');
	});
jQuery('#blocks_slider .slider_block').hover(function() {
		jQuery(this).animate({opacity:'0.3'})},
		function(){jQuery(this).animate({opacity:'1.0'})}
		
	);
});
