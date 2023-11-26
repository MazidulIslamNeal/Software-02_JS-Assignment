'use strict';

const butn = document.querySelector(`button`);

butn.addEventListener('click', function (evnt) {
    alert(evnt.currentTarget.tagName + `:` + ` ` + `You clicked!!`);

});
