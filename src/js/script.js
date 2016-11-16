$(document).ready(function() {
	
	
	$('<div id="arrowUp">UP</div>')
		.css({
			'width':'42px',
			'height':'42px',
			'backgroundColor':'#00CCFF',
			'borderRadius':'5px',
			'cursor':'pointer',
			'position':'fixed',
			'right':'20px',
			'bottom':'20px',
			'opacity':'0.4',
			'textAlign':'center',
			'line-height':'42px',
			'color':'fff',
			'fontWeight':'bold',
		})
		.appendTo('#siteWrapper')
		.hide();
		
		
		$('#arrowUp')
			.hover(function(){
				$(this).animate({
					'opacity':'0.8'
				},200);
			},function(){
				$(this).animate({
					'opacity':'0.4'
				},600);
			})
			.click(function() {

				$('body, html').animate({scrollTop: 0},'slow');
			});
		
		
		$(window).scroll(function() {
			
		
			if ($(this).scrollTop()>250) {
				
				$('#arrowUp').fadeIn('slow')
								
			} else {
			
				$('#arrowUp').fadeOut('slow')
				
			}
		
		});
			
		
		$('#mainNavy a').on('click',function(){
			
			var $this = $(this),
				link_class = $this.attr('class'),
				block = $("#"+link_class),
				block_offset = block.offset(),
				block_top = block_offset.top,
				speed = 2,
				time = block_top/speed;	
			
			$('body,html').delay(300).animate({scrollTop:block_top}, time);
			$('#mainNavy').animate({right:-160},500);
		});
		
		$('#menuIcon').on('click',function(){
			$('#mainNavy')
				.animate({right:0},500);
		});
		
		$('.close').on('click',function(){
			$('#mainNavy').animate({right:-160},500);
		});
		
		/*========================================
						lightBox
		========================================*/
		$('div.row a').on('click', function(e){
		
			var window_height = $(window).height(),
				window_width = $(window).width();
		
			e.preventDefault();
			
			//$('body').css('overflow-y','hidden');
			
			$('<div id="overlay"></div>')
				.prependTo('body');	
			
			$('<div id="lightbox"></div>')
				.hide()
				.prependTo('#overlay');
				
			$('<img>')
				.attr('src', $(this).attr('href'))
				.attr('alt', $(this).attr('title'))
				.appendTo('#lightbox')
				.css({
					'max-width':'100%',
				//	'border':'10px solid #fff',
				})
				
				.load(function() {
					var top, left, lightbox_height;
			
					if ($('#lightbox').height() > window_height*0.8){
					
						top = window_height * 0.1;
						
						lightbox_height = window_height*0.8;
						
						$('#lightbox').css({
							'overflow-y':'auto',
							'overflow-x':'hidden',
							'top': top ,
							'height':lightbox_height
						});
						
					} else {
					
						lightbox_height = $('#lightbox').height()
						top = (window_height - lightbox_height) / 2;
						
						$('#lightbox').css({'top': top});
					}
					
					
					left = (window_width - $('#lightbox').width()) / 2;
					
					$('#lightbox')
						.css({
							'left': left,
					})
					.fadeIn();
				
				}).click(function() {
					$('#overlay, #lightbox')
						.fadeOut('slow', function() {
							$(this).remove();
							$('body').css('overflow-y', 'auto'); 
					});
				});
			
			/*
			var description = $('<p class="description"></p>');
			
			description
				.text($(this).attr('title'))
				.hide()
				.insertAfter('#lightbox');
			
			var description_width, description_height;
				
			if ($('#lightbox').height() > window_height*0.8){
			
				description_height = window_height*0.85 +15 ; 
						
			} else {
				description_height = (window_height + $('#lightbox').height()) / 2 + 10; 
			}
			
			description_width = (window_width - description.outerWidth()) / 2;

			description	
				.css({
					left: description_width,
					top: description_height,
					
				})
				.fadeIn(600);
			*/
		});
	
	
});

 
