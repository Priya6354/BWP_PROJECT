function autoScroller(contentDiv,speed)
{contentDiv="#"+contentDiv;var scrollSpeed=(speed==null)?5:parseInt(speed);$(contentDiv).parent().css({position:'relative',overflow:'hidden'});$(contentDiv).css({position:'absolute',top:0});contentDivHeight=$(contentDiv).height();$(contentDiv).everyTime(100,function(i){if(parseInt($(this).css('top'))>(contentDivHeight*(-1)+8))
{offset=parseInt($(this).css('top'))-scrollSpeed+"px";$(this).css({'top':offset});}
else
{offset=parseInt($(this).parent().height())+8+"px";$(this).css({'top':offset});}});$(contentDiv).mouseover(function()
{speed=scrollSpeed;scrollSpeed=0;});$(contentDiv).mouseout(function()
{scrollSpeed=speed;});}