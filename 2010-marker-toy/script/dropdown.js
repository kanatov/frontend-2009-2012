jQuery(document).ready(function(){

  // ul.dropdown, ul.dropdown li, ul.dropdown ul
  jQuery("ul.dropdown, ul.dropdown li, ul.dropdown ul").css({
    'list-style': 'none',
    'margin': '0',
    'padding': '0'
  });
  
  // ul.dropdown
  jQuery("ul.dropdown").css({
  	'width': '180px',
  	'height': 'auto',
  	'visibility': 'visible',
  	'overflow': 'visible',
  	'z-index': '500',
  	'background': '#ffffff'
  });
  
  // ul.dropdown > li
  var css_ulDropdown_li = {
    'position': 'relative',
    'width': '170px',
    'z-index': '1',
    'padding': '6px 0',
    'background': '#ffffff url(\'/images/dot-grey-bg.gif\') repeat-x scroll 0 bottom',
    'border': '1px solid #fff'
  };
  jQuery("ul.dropdown > li").css(css_ulDropdown_li);
  
  // ul.dropdown > li:hover
  var css_ulDropdown_liHover = {
    'position': 'relative',
	  //'width': '194px',
	  'width': '172px',
	  'padding': '6px 0',
	  'background': '#f3f3f3',
	  'border-color': '#ababab',
	  'border-style': 'solid',
	  'border-width': '1px 1px 1px 1px'
  };
  
  // ul.dropdown > li > a
  var css_ulDropdown_li_a = {
    'display': 'block',
    'padding-left': '10px',
    'padding-right': '0',
    'margin-left': '10px',
    'text-decoration': 'none',
    'background': 'transparent url(\'/images/arr-orange-right-4.gif\') no-repeat left 4px',
    'color': '#404040',
    'font': 'bold 11px Tahoma'
  };
  jQuery("ul.dropdown > li > a").css(css_ulDropdown_li_a);  
  
  // ul.dropdown > li > a:hover
  jQuery("ul.dropdown > li > a").hover(function(){
    jQuery(this).css({'color': '#ff5100'});
  },function(){
    jQuery(this).css({'color': '#404040'});
  });
  
  // ul.dropdown > li:hover a
  var css_ulDropdown_liHover_a = {
    //'padding-right': '24px'
  };
  
  // ul.dropdown > li.last
  var css_ulDropdown_liLast = {
    'background-image': 'none'
  };
  jQuery("ul.dropdown > li.last").css(css_ulDropdown_liLast);  
  
  // ul.dropdown > li div.dropdown-border
  var css_ulDropdown_li_divDropdownBorder = {
    'visibility': 'hidden',
    'position': 'absolute',
    'height': '100%',
    'width': '22px',
    'margin-top': '-7px',
    'left': '172px',
    'z-index': '400',
    'background': '#f3f3f3',
    'border-top': 'solid 1px #ababab',
    'border-bottom': 'solid 1px #ababab'
  };
  jQuery("ul.dropdown > li div.dropdown-border").css(css_ulDropdown_li_divDropdownBorder);  
  jQuery("ul.dropdown > li > a").each(function (i) {
    var height = jQuery(this).height() + 12 + 'px';
    jQuery("div.dropdown-border", jQuery(this).parent()).css('height', height);
  });
  
  // ul.dropdown > li > ul
  var css_ulDropdown_li_ul = {
  	'position': 'absolute',
  	'visibility': 'hidden',
  	'top': '-1px',
  	'left': '193px',
  	//'width': '100%',
  	'padding-bottom': '5px',
  	'z-index': '100',
  	'background': '#f3f3f3',
  	'border-color': '#ababab',
  	'border-style': 'solid',
  	'border-width': '1px 1px 1px 1px'
  };
  jQuery("ul.dropdown > li > ul").css(css_ulDropdown_li_ul);
  jQuery("ul.dropdown > li > ul").each(function (i) {
    if ((this.style.width == "auto") || (this.style.width == "")) {
      this.style.width = "100%";
    }
  });
  
  // ul.dropdown > li > ul > li
  var css_ulDropdown_li_ul_li = {
  	'display': 'inline',
  	'float': 'left',
  	'margin': '10px 10px 10px 10px',
  	'padding-right': '20px',
  	'width': 'auto',
    'background': 'transparent url(\'/images/dot-grey-bg.gif\') repeat-y scroll right 0'
  };
  jQuery("ul.dropdown > li > ul > li").css(css_ulDropdown_li_ul_li);
  
  // ul.dropdown > li > ul > li.last
  jQuery("ul.dropdown > li > ul > li.last").css({'background-image': 'none'});
  
  // ul.dropdown > li:hover, ul.dropdown > li:hover a, ul.dropdown > li:hover div.dropdown-border, ul.dropdown > li:hover > ul
  jQuery("ul.dropdown > li").hover(function(){
    jQuery(this).css(css_ulDropdown_liHover);
    jQuery('ul.dropdown > li.last').css(css_ulDropdown_liLast);
    jQuery('> a', this).css(css_ulDropdown_liHover_a);
    jQuery('div.dropdown-border, > ul', this).css({'visibility': 'visible'});
  },function(){
    jQuery(this).css(css_ulDropdown_li);
    jQuery('ul.dropdown > li.last').css(css_ulDropdown_liLast);
    jQuery('> a', this).css(css_ulDropdown_li_a);
    jQuery('div.dropdown-border, > ul', this).css({'visibility': 'hidden'});
  });
  
  // ul.dropdown p.dropdown-level_2
  jQuery('ul.dropdown p.dropdown-level_2').css({
    'margin': '0',
    'padding': '4px 0 7px 0'
  });
  
  // ul.dropdown p.dropdown-level_2 a
  jQuery('ul.dropdown p.dropdown-level_2 a').css({
    'color': '#000000',
    'text-decoration': 'none'
  });
  
  // ul.dropdown p.dropdown-level_2 a:hover
  jQuery("ul.dropdown p.dropdown-level_2 a").hover(function(){
    jQuery(this).css({'text-decoration': 'underline'});
  },function(){
    jQuery(this).css({'text-decoration': 'none'});
  });
  
  // ul.dropdown p.dropdown-level_3
  jQuery('ul.dropdown p.dropdown-level_3').css({
    'margin': '0',
    'padding': '0 0 5px 0'
  });
  
  // ul.dropdown p.dropdown-level_3 a
  jQuery('ul.dropdown p.dropdown-level_3 a').css({
    'padding-left': '8px',
    'color': '#676767',
    'text-decoration': 'none'
  });
  
  // ul.dropdown p.dropdown-level_3 a:hover
  jQuery("ul.dropdown p.dropdown-level_3 a").hover(function(){
    jQuery(this).css({'text-decoration': 'underline'});
  },function(){
    jQuery(this).css({'text-decoration': 'none'});
  });

});