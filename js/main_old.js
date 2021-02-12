"use strict";
window.util = {
  isEscEvent: function (t, e) {
    27 === t.keyCode && e()
  }, getScrollbarWidth: function () {
    return window.innerWidth - document.documentElement.clientWidth
  }
}, function () {
  var t = function (t) {
      var i = t.querySelector(".tabs__list").querySelectorAll(".tabs__item"), e = t.querySelectorAll(".tabs__content"),
        c = 0, n = !1, r = function () {
          if (!n) {
            var t = !1;
            n = !0;
            for (var e = 0; e < i.length; e++) {
              var r = i[e];
              t && r.classList.contains("tabs__item--active") && (t = !0, c = e), s(r, e)
            }
          }
        }, s = function (t, e) {
          t.addEventListener("click", function (t) {
            t.preventDefault(), a(e)
          })
        }, a = function (t) {
          if (t !== c) {
            if (i[c].classList.remove("tabs__item--active"), i[t].classList.add("tabs__item--active"), e[c].classList.remove("tabs__content--active"), e[t].classList.add("tabs__content--active"), i[t].classList.contains("filters__button")) i[t].parentNode.parentNode.querySelector(".filters__button--active").classList.remove("filters__button--active"), i[t].classList.add("filters__button--active");
            if (i[t].classList.contains("messages__contacts-tab")) i[t].parentNode.parentNode.querySelector(".messages__contacts-tab--active").classList.remove("messages__contacts-tab--active"), i[t].classList.add("messages__contacts-tab--active");
            c = t
          }
        };
      return r(), {init: r, goToTab: a}
    }, e = document.querySelector(".adding-post__tabs-wrapper"), r = document.querySelector(".profile__tabs-wrapper"),
    i = document.querySelector(".messages");
  if (e) t(e);
  if (r) t(r);
  if (i) t(i)
}(), document.querySelector(".modal--active"), document.querySelector(".modal"), document.querySelector(".modal--adding"), document.querySelector(".adding-post__submit"), window.util.getScrollbarWidth(), document.querySelector(".page__main-section"), document.querySelector(".footer__wrapper"), function () {
  var t = document.querySelector(".sorting");
  if (t) for (var e = t.querySelectorAll(".sorting__link"), r = t.querySelector(".sorting__link--active"), i = function (t) {
    t.preventDefault(), t.currentTarget === r ? r.classList.toggle("sorting__link--reverse") : (r.classList.remove("sorting__link--active"), t.currentTarget.classList.add("sorting__link--active"), r = t.currentTarget)
  }, c = 0; c < e.length; c++) e[c].addEventListener("click", i)
}(), function () {
  var t = document.querySelector(".filters");
  if (t) var e = t.querySelectorAll(".filters__button:not(.tabs__item)");
  if (e) for (var r = t.querySelector(".filters__button--active"), i = function (t) {
    t.currentTarget !== r && (r.classList.remove("filters__button--active"), t.currentTarget.classList.add("filters__button--active"), r = t.currentTarget)
  }, c = 0; c < e.length; c++) e[c].addEventListener("click", i)
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwidXRpbCIsImlzRXNjRXZlbnQiLCJldnQiLCJjYiIsImtleUNvZGUiLCJnZXRTY3JvbGxiYXJXaWR0aCIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic3dpdGNoVGFicyIsImJsb2NrIiwidGFiRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInRhYkNvbnRlbnRTZWN0aW9ucyIsImFjdGl2ZVRhYkluZGV4IiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXplU3dpdGNoIiwiZGV0ZWN0ZWQiLCJpIiwibGVuZ3RoIiwidGFiIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGRDbGlja0hhbmRsZSIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiZ29Ub1RhYiIsInJlbW92ZSIsImFkZCIsInBhcmVudE5vZGUiLCJpbml0IiwiYWRkaW5nUG9zdFRhYnMiLCJwcm9maWxlVGFicyIsIm1lc3NhZ2VzVGFicyIsInNvcnRpbmciLCJzb3J0aW5nTGlua3MiLCJzb3J0aW5nTGlua0FjdGl2ZSIsIm9uU29ydGluZ0l0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJ0b2dnbGUiLCJmaWx0ZXJzIiwiZmlsdGVyc0J1dHRvbnMiLCJmaWx0ZXJzQnV0dG9uQWN0aXZlIiwib25GaWx0ZXJzQnV0dG9uQ2xpY2siXSwibWFwcGluZ3MiOiJBQUFBLGFBT0VBLE9BQU9DLEtBQU8sQ0FDWkMsV0FBWSxTQUFVQyxFQUFLQyxHQUhYLEtBSVZELEVBQUlFLFNBQ05ELEtBSUpFLGtCQUFtQixXQUNqQixPQUFPTixPQUFPTyxXQUFhQyxTQUFTQyxnQkFBZ0JDLGNBTzFELFdBQ0UsSUFBSUMsRUFBYSxTQUFVQyxHQUN6QixJQUNJQyxFQURXRCxFQUFNRSxjQUFjLGVBQ1JDLGlCQUFpQixlQUN4Q0MsRUFBcUJKLEVBQU1H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QixHQW5COUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbid1c2Ugc2NyaXB0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIEVTQ19LRVlDT0RFID0gMjc7XHJcblxyXG4gIHdpbmRvdy51dGlsID0ge1xyXG4gICAgaXNFc2NFdmVudDogZnVuY3Rpb24gKGV2dCwgY2IpIHtcclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBFU0NfS0VZQ09ERSkge1xyXG4gICAgICAgIGNiKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2Nyb2xsYmFyV2lkdGg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuJ3VzZSBzY3JpcHQnO1xyXG5cclxuLy/RgtCw0LHRi1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzd2l0Y2hUYWJzID0gZnVuY3Rpb24gKGJsb2NrKSB7XHJcbiAgICB2YXIgdGFic0xpc3QgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcudGFic19fbGlzdCcpO1xyXG4gICAgdmFyIHRhYkVsZW1lbnRzID0gdGFic0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2l0ZW0nKTtcclxuICAgIHZhciB0YWJDb250ZW50U2VjdGlvbnMgPSBibG9jay5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fY29udGVudCcpO1xyXG4gICAgdmFyIGFjdGl2ZVRhYkluZGV4ID0gMDtcclxuICAgIHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBpbml0aWFsaXplU3dpdGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIWluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgdmFyIGRldGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgdGFiID0gdGFiRWxlbWVudHNbaV07XHJcbiAgICAgICAgICBpZiAoZGV0ZWN0ZWQgJiYgdGFiLmNsYXNzTGlzdC5jb250YWlucygndGFic19faXRlbS0tYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgZGV0ZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBhY3RpdmVUYWJJbmRleCA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhZGRDbGlja0hhbmRsZSh0YWIsIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYWRkQ2xpY2tIYW5kbGUgPSBmdW5jdGlvbiAodGFiLCBpbmRleCkge1xyXG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZ29Ub1RhYihpbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZ29Ub1RhYiA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGFjdGl2ZVRhYkluZGV4KSB7XHJcbiAgICAgICAgdGFiRWxlbWVudHNbYWN0aXZlVGFiSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIHRhYkVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCd0YWJzX19pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICB0YWJDb250ZW50U2VjdGlvbnNbYWN0aXZlVGFiSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG4gICAgICAgIHRhYkNvbnRlbnRTZWN0aW9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudC0tYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKHRhYkVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlcnNfX2J1dHRvbicpKSB7XHJcbiAgICAgICAgICB2YXIgYWN0aXZlRmlsdGVyO1xyXG4gICAgICAgICAgYWN0aXZlRmlsdGVyID0gdGFiRWxlbWVudHNbaW5kZXhdLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyc19fYnV0dG9uLS1hY3RpdmUnKTtcclxuICAgICAgICAgIGFjdGl2ZUZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJzX19idXR0b24tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgYWN0aXZlRmlsdGVyID0gdGFiRWxlbWVudHNbaW5kZXhdO1xyXG4gICAgICAgICAgYWN0aXZlRmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnNfX2J1dHRvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YWJFbGVtZW50c1tpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZXNzYWdlc19fY29udGFjdHMtdGFiJykpIHtcclxuICAgICAgICAgIHZhciBhY3RpdmVDb250YWN0O1xyXG4gICAgICAgICAgYWN0aXZlQ29udGFjdCA9IHRhYkVsZW1lbnRzW2luZGV4XS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VzX19jb250YWN0cy10YWItLWFjdGl2ZScpO1xyXG4gICAgICAgICAgYWN0aXZlQ29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCdtZXNzYWdlc19fY29udGFjdHMtdGFiLS1hY3RpdmUnKTtcclxuICAgICAgICAgIGFjdGl2ZUNvbnRhY3QgPSB0YWJFbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgICBhY3RpdmVDb250YWN0LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2VzX19jb250YWN0cy10YWItLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY3RpdmVUYWJJbmRleCA9IGluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRpYWxpemVTd2l0Y2goKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbml0OiBpbml0aWFsaXplU3dpdGNoLFxyXG4gICAgICBnb1RvVGFiOiBnb1RvVGFiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmFyIGFkZGluZ1Bvc3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGluZy1wb3N0X190YWJzLXdyYXBwZXInKTtcclxuICB2YXIgcHJvZmlsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fdGFicy13cmFwcGVyJyk7XHJcbiAgdmFyIG1lc3NhZ2VzVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlcycpO1xyXG5cclxuICBpZiAoYWRkaW5nUG9zdFRhYnMpIHtcclxuICAgIHZhciBhZGRpbmdQb3N0Q29sbGJhY2sgPSBzd2l0Y2hUYWJzKGFkZGluZ1Bvc3RUYWJzKTtcclxuICB9XHJcblxyXG4gIGlmIChwcm9maWxlVGFicykge1xyXG4gICAgdmFyIHByb2ZpbGVDb2xsYmFjayA9IHN3aXRjaFRhYnMocHJvZmlsZVRhYnMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1lc3NhZ2VzVGFicykge1xyXG4gICAgdmFyIG1lc3NhZ2VzQ29sbGJhY2sgPSBzd2l0Y2hUYWJzKG1lc3NhZ2VzVGFicyk7XHJcbiAgfVxyXG59KSgpO1xyXG4ndXNlIHNjcmlwdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhY3RpdmVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC0tYWN0aXZlJyk7XHJcbiAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsQWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLS1hZGRpbmcnKTtcclxuICB2YXIgYWRkaW5nUG9zdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRpbmctcG9zdF9fc3VibWl0Jyk7XHJcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gd2luZG93LnV0aWwuZ2V0U2Nyb2xsYmFyV2lkdGgoKSArICdweCc7XHJcbiAgdmFyIHBhZ2VNYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19tYWluLXNlY3Rpb24nKTtcclxuICB2YXIgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3dyYXBwZXInKTtcclxuXHJcbiAgdmFyIHNob3dNb2RhbCA9IGZ1bmN0aW9uIChvcGVuQnV0dG9uLCBtb2RhbCkge1xyXG4gICAgdmFyIGNsb3NlQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZS1idXR0b24nKTtcclxuXHJcbiAgICB2YXIgb25Qb3B1cEVzY1ByZXNzID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICB3aW5kb3cudXRpbC5pc0VzY0V2ZW50KGV2dCwgY2xvc2VNb2RhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgICAgIGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBvcHVwRXNjUHJlc3MpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xyXG4gICAgICBwYWdlTWFpblNlY3Rpb24uc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzAnO1xyXG4gICAgICBmb290ZXJXcmFwcGVyLnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwJztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3Blbk1vZGFsID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZiAoYWN0aXZlTW9kYWwpIHtcclxuICAgICAgICBhY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKTtcclxuICAgICAgYWN0aXZlTW9kYWwgPSBtb2RhbDtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgICBwYWdlTWFpblNlY3Rpb24uc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICAgIGZvb3RlcldyYXBwZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICAgIGNsb3NlQnV0dG9uLmZvY3VzKCk7XHJcblxyXG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wdXBFc2NQcmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgb3Blbk1vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGlmIChtb2RhbCkge1xyXG4gIC8vICAgc2hvd01vZGFsKGFkZGluZ1Bvc3RTdWJtaXQsIG1vZGFsQWRkaW5nKTtcclxuICAvLyB9XHJcbn0pKCk7XHJcbid1c2Ugc2NyaXB0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHNvcnRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydGluZycpO1xyXG5cclxuICBpZiAoc29ydGluZykge1xyXG4gICAgdmFyIHNvcnRpbmdMaW5rcyA9IHNvcnRpbmcucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRpbmdfX2xpbmsnKTtcclxuICAgIHZhciBzb3J0aW5nTGlua0FjdGl2ZSA9IHNvcnRpbmcucXVlcnlTZWxlY3RvcignLnNvcnRpbmdfX2xpbmstLWFjdGl2ZScpO1xyXG5cclxuICAgIHZhciBvblNvcnRpbmdJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoZXZ0LmN1cnJlbnRUYXJnZXQgPT09IHNvcnRpbmdMaW5rQWN0aXZlKSB7XHJcbiAgICAgICAgc29ydGluZ0xpbmtBY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZSgnc29ydGluZ19fbGluay0tcmV2ZXJzZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNvcnRpbmdMaW5rQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ3NvcnRpbmdfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NvcnRpbmdfX2xpbmstLWFjdGl2ZScpO1xyXG4gICAgICAgIHNvcnRpbmdMaW5rQWN0aXZlID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWRkU29ydGluZ0xpc3RlbmVyID0gZnVuY3Rpb24gKHNvcnRpbmdJdGVtKSB7XHJcbiAgICAgIHNvcnRpbmdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Tb3J0aW5nSXRlbUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRpbmdMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhZGRTb3J0aW5nTGlzdGVuZXIoc29ydGluZ0xpbmtzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcbid1c2Ugc2NyaXB0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVycycpO1xyXG5cclxuICBpZiAoZmlsdGVycykge1xyXG4gICAgdmFyIGZpbHRlcnNCdXR0b25zID0gZmlsdGVycy5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyc19fYnV0dG9uOm5vdCgudGFic19faXRlbSknKTtcclxuICB9XHJcblxyXG4gIGlmIChmaWx0ZXJzQnV0dG9ucykge1xyXG4gICAgdmFyIGZpbHRlcnNCdXR0b25BY3RpdmUgPSBmaWx0ZXJzLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzX19idXR0b24tLWFjdGl2ZScpO1xyXG5cclxuICAgIHZhciBvbkZpbHRlcnNCdXR0b25DbGljayA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgaWYgKGV2dC5jdXJyZW50VGFyZ2V0ICE9PSBmaWx0ZXJzQnV0dG9uQWN0aXZlKSB7XHJcbiAgICAgICAgZmlsdGVyc0J1dHRvbkFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXJzX19idXR0b24tLWFjdGl2ZScpO1xyXG4gICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnNfX2J1dHRvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgZmlsdGVyc0J1dHRvbkFjdGl2ZSA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFkZEZpbHRlcnNMaXN0ZW5lciA9IGZ1bmN0aW9uIChmaWx0ZXJzQnV0dG9uKSB7XHJcbiAgICAgIGZpbHRlcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkZpbHRlcnNCdXR0b25DbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWx0ZXJzQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhZGRGaWx0ZXJzTGlzdGVuZXIoZmlsdGVyc0J1dHRvbnNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTsiXX0=