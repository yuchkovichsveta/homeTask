
  function clickInsideElement( e, className ) {
    var el = e.srcElement || e.target;  
    if ( el.classList.contains(className) ) {
      return el;
    } else {
      while ( el = el.parentNode ) {
        if ( el.classList && el.classList.contains(className) ) {
          return el;
        }
      }
    }

    return false;
  }


  function getPosition(e) {
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;
    
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    }
  }

  var contextMenuClassName = "context-menu";
  var contextMenuItemClassName = "context-menu__item";
  var contextMenuLinkClassName = "context-menu__link";
  var contextMenuActive = "context-menu--active";

  var taskItemClassName = "task";
  var taskItemInContext;

  var clickCoords, clickCoordsX, clickCoordsY;

  var menu = document.querySelector("#context-menu");
  var menuItems = menu.querySelectorAll(".context-menu__item");
  var menuState = 0;
  var menuWidth, menuHeight;
  var menuPosition, menuPositionX, menuPositionY;
  var windowWidth, windowHeight;


  function contextListener() {
    document.addEventListener( "contextmenu", function(e) {
      taskItemInContext = clickInsideElement( e, taskItemClassName );

      if ( taskItemInContext ) {
        e.preventDefault();
        menuOn();
        positionMenu(e);
      } else {
        taskItemInContext = null;
        menuOff();
      }
    });
  }


  function clickListener() {
    document.addEventListener( "click", function(e) {
      var clickeElIsLink = clickInsideElement( e, contextMenuLinkClassName );

      if ( clickeElIsLink ) {
        e.preventDefault();
        menuItemListener( clickeElIsLink );
      } else {
        var button = e.which || e.button;
        if ( button === 1 ) {
          menuOff();
        }
      }
    });
  }
   function menuItemListener(e){
        console.log(e);
   }
  function menuOn() {
    if ( menuState !== 1 ) {
      menuState = 1;
      menu.classList.add( contextMenuActive );
    }
  }

  function menuOff() {
    if ( menuState !== 0 ) {
      menuState = 0;
      menu.classList.remove( contextMenuActive );
    }
  }


  function positionMenu(e) {
    clickCoordsX = getPosition(e).x;
    clickCoordsY = getPosition(e).y;

    menuWidth = menu.offsetWidth + 0;
    menuHeight = menu.offsetHeight + 0;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
   

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }

  }

 
  contextListener();
  clickListener();

