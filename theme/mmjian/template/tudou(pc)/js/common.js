var ScrollTime;
function ScrollAutoPlay(contID, scrolldir, showwidth, textwidth, steper) {
  var PosInit, currPos;
  with ($('#' + contID)) {
    currPos = parseInt(css('margin-left'));
    if (scrolldir == 'left') {
      if (currPos < 0 && Math.abs(currPos) > textwidth) {
        css('margin-left', showwidth);
      }
      else {
        css('margin-left', currPos - steper);
      }
    }
    else {
      if (currPos > showwidth) {
        css('margin-left', (0 - textwidth));
      }
      else {
        css('margin-left', currPos - steper);
      }
    }
  }
}

//--------------------------------------------左右滚动效果----------------------------------------------
/*
AppendToObj：        显示位置（目标对象）
ShowHeight：        显示高度
ShowWidth：        显示宽度
ShowText：        显示信息
ScrollDirection：    滚动方向（值：left、right）
Steper：        每次移动的间距（单位：px；数值越小，滚动越流畅，建议设置为1px）
Interval:        每次执行运动的时间间隔（单位：毫秒；数值越小，运动越快）
*/
function ScrollText(AppendToObj, ShowHeight, ShowWidth, ShowText, ScrollDirection, Steper, Interval) {
  var TextWidth, PosInit, PosSteper;
  with (AppendToObj) {
    html('');
    css('overflow', 'hidden');
    css('height', ShowHeight + 'px');
    css('line-height', ShowHeight + 'px');
    css('width', ShowWidth);
  }
  if (ScrollDirection == 'left') {
    PosInit = ShowWidth;
    PosSteper = Steper;
  }
  else {
    PosSteper = 0 - Steper;
  }
  if (Steper < 1 || Steper > ShowWidth) { Steper = 1 }//每次移动间距超出限制(单位:px)
  if (Interval < 1) { Interval = 10 }//每次移动的时间间隔（单位：毫秒）
  var Container = $('<div></div>');
  var ContainerID = 'ContainerTemp';
  var i = 0;
  while ($('#' + ContainerID).length > 0) {
    ContainerID = ContainerID + '_' + i;
    i++;
  }
  with (Container) {
    attr('id', ContainerID);
    css('float', 'left');
    css('cursor', 'default');
    appendTo(AppendToObj);
    html(ShowText);
    TextWidth = width();
    if (isNaN(PosInit)) { PosInit = 0 - TextWidth; }
    css('margin-left', PosInit);
    mouseover(function () {
      clearInterval(ScrollTime);
    });
    mouseout(function () {
      ScrollTime = setInterval("ScrollAutoPlay('" + ContainerID + "','" + ScrollDirection + "'," + ShowWidth + ',' + TextWidth + "," + PosSteper + ")", Interval);
    });
  }
  ScrollTime = setInterval("ScrollAutoPlay('" + ContainerID + "','" + ScrollDirection + "'," + ShowWidth + ',' + TextWidth + "," + PosSteper + ")", Interval);
}


/** 
  * 获取数组里的一项值
  * ++++++++++++++++++++++++++++++++++++
  * */

function getArrayOne(arr, preColor) {
  var curColor = arr[Math.floor(Math.random() * arr.length)]
  if (curColor == preColor) {
    getArrayOne(arr, curColor)
  } else {
    return curColor
  }

}

function hoverBtn(eleObj) {

  eleObj.hover(function () {

    var options = {
      duration: 100,
      easing: 'linear'
    };

    $(this).animate({
      left: 10,
      letterSpacing: "4px"
    },
      options
    )
      .animate({
        left: 0,
        letterSpacing: "0px"
      },
        options
      )
  }, function () { })

}

function hoverBtnBt(eleObj) {

  eleObj.hover(function () {

    var options = {
      duration: 50,
      easing: 'linear'
    };

    $(this).animate({
      bottom: 5,
    },
      options
    )
      .animate({
        bottom: 0,
      },
        options
      )
  }, function () { })

}

function hoverBtnBorder(eleObj) {
  var options = {
    duration: 100,
    easing: 'linear'
  };
  eleObj.hover(function () {

    $(this).animate({
      borderBottomWidth: '2px',
      fontSize: '15px',
    },
      options
    )

  }, function () {

    $(this).animate({
      borderBottomWidth: '1px',
      fontSize: '14px'
    },
      options
    )
  })

}

function hoverSize(eleObj) {

  eleObj.hover(function () {

    var options = {
      duration: 50,
      easing: 'linear'
    };

    $(this).animate({
      width: '103px',
    },
      options
    )
      .animate({
        width: '100px',
      },
        options
      )
  }, function () { })

}

// var x = 0;
// var y = 20;
// var docWidth = $(document).innerWidth()
// var docHeight = $(document).innerHeight()

// $(".tooltip").mousemove(function (e) {
//   var linkTooltip = $("#link-tooltip");
//   if (!linkTooltip.length) {
//     this.tooltipTitle = this.title;
//     this.title = "";
//     linkTooltip = $("<div id='link-tooltip'><div class='tooltip-content'>" + this.tooltipTitle + "</div></div>");
//     $("body").append(linkTooltip);
//   }
//   var tooltipWidth = $(linkTooltip).width()
//   var tooltipHeight = $(linkTooltip).height()
//   //console.log(e.pageY + tooltipHeight + 20, docHeight)

//   if (e.pageX + tooltipWidth + 20 >= docWidth) {
//     x = "-" + tooltipWidth
//   } else {
//     x = 0
//   }

//   if (e.pageY + tooltipHeight + 20 >= docHeight) {
//     y = -30
//   } else {
//     y = 20
//   }

//   linkTooltip.css({
//     "top": (e.pageY + Number(y)) + "px",
//     "left": (e.pageX + Number(x)) + "px"
//   }).fadeIn();

// }).mouseout(function () {
//   this.title = this.tooltipTitle;
//   $("#link-tooltip").remove();
// });
/**执行ajax请求 */
function doAjax(url,data,successCallback,errorCallback)
{
	$.ajax({
		url:url,
		data:data,
		type:"post",
		dataType:"json",
		success:function(res){
			if(typeof(successCallback)!="undefined"){
				successCallback(res)
			}
		},error:function(error){
			if(typeof(errorCallback)!='undefined'){
				errorCallback()
			}
		}
	})
}