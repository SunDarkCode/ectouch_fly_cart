      <script src="js/jquery.fly.min.js"></script>
      <script src="js/requestAnimationFrame.js"></script>
	<script>
		function addFly(event) {
	    var qu=$(window).scrollTop();//页面滚动高度
                     var img=$('#flyimg').attr('value');
                     var flyera=$('<img class="u-flyer" src="'+img+'">');
		    var offset = $('#total_number').offset(), flyer =flyera;
		    flyer.fly({
		        start: {
		            left: event.pageX-40,
		            top: event.pageY-20-qu
		        },
		        end: {
		            left: offset.left-3,
		            top: offset.top-qu,
		            width: 1,
		            height: 1,
		        }
		    });
		    console.log($(window).scrollTop());
		}
		function as(event,img){
			$('#flyimg').attr("value",img);
			addFly(event);
		}
	</script>