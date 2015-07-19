(function() {
  'use strict';

  var Sidebar = function (element) {
    this._sidebar = element;
    this._candyBar = element.find('.candy-bar');
    this._sidebarList = element.find('.sidebar-list');

    this._sidebar.bind('mouseenter', $.proxy(this.showSidebarList, this));
    this._sidebar.bind('mouseleave', $.proxy(this.hideSidebarList, this));

    $(document).bind('ready', $.proxy(this.setActiveMenu, this));
  };

  Sidebar.prototype = {

    showSidebarList: function () {
      this._sidebarList.slideDown(200);
    },

    hideSidebarList: function () {
      this._sidebarList.slideUp(200);
    },

    setActiveMenu: function () {
      var activeMenuName = window.location.pathname.replace(/\//g, '');
      var activeMenu;

      activeMenuName = activeMenuName.charAt(0).toUpperCase() + activeMenuName.slice(1);
      activeMenu = this._sidebarList.find('a:contains("' + activeMenuName + '")');

      this._sidebarList.find('a').removeClass('active');
      activeMenu.addClass('active');
    }
  };

  window.app = {
    sidebar: Sidebar
  };
})();
