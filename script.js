  // Navbar 

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// About us page variable animation 

const highlight = document.getElementById('highlight');

const child1 = document.getElementById('child-1');
const child2 = document.getElementById('child-2');
const child3 = document.getElementById('child-3');
const child4 = document.getElementById('child-4');

//time intervals in Why Animation
const interval = 500;


highlight.addEventListener("animationend", () => {
    // console.log('Highligh Animation Ended');
    setTimeout(() => {
        // console.log('intial Time out');
        state0();
    }, 1000);
});

function state0() {
    //set every child style to default
    child1.style.fontStyle = 'normal';
    child2.style.fontStyle = 'normal';
    child3.style.fontStyle = 'normal';
    child4.style.fontStyle = 'normal';

    child4.style.fontWeight = 'normal'

    console.log('state 0');
    setTimeout(() => {
        // console.log('State 0 Time out');
        state1();
    }, interval);
}


function state1() {
    child1.style.fontStyle = 'italic';
    child2.style.fontStyle = 'normal';
    child3.style.fontStyle = 'normal';
    child4.style.fontStyle = 'normal';

    // console.log('state 1');
    setTimeout(() => {
        // console.log('State 1 Time out');
        state2();
    }, interval);
}


function state2() {
    child1.style.fontStyle = 'normal';
    child2.style.fontStyle = 'italic';

    // console.log('state 2');

    setTimeout(() => {
        // console.log('State 2 Time out');
        state3();
    }, interval);
}


function state3() {

    child2.style.fontStyle = 'italic';
    child2.style.textDecoration = "underline";

    // console.log('state 3');

    setTimeout(() => {
        // console.log('State 3 Time out');
        state4();
    }, interval);
}


function state4() {
    child2.style.fontStyle = 'normal';
    child2.style.textDecoration = "none";

    child3.style.fontStyle = 'italic';


    // console.log('state 4');
    setTimeout(() => {
        // console.log('State 4 Time out');
        state5();
    }, interval);
}


function state5() {
    child3.style.fontStyle = 'normal';

    child4.style.fontStyle = 'italic';

    // console.log('state 5');


    setTimeout(() => {
        // console.log('State 5 Time out');
        state6();
    }, interval);
}


function state6() {
    child4.style.fontWeight = 'bold'

    // console.log('state 6');

    setTimeout(() => {
        // console.log('State 6 Time out');
        state0();
    }, interval);
}


// About us page - paragraph read more action 
function showMore(id) {
    document.getElementById(id + 'Overflow').className = '';
    document.getElementById(id + 'MoreLink').className = 'hidden';
    document.getElementById(id + 'LessLink').className = '';
}

function showLess(id) {
    document.getElementById(id + 'Overflow').className = 'hidden';
    document.getElementById(id + 'MoreLink').className = '';
    document.getElementById(id + 'LessLink').className = 'hidden';
}

var len = 335;
var shrinkables = document.getElementsByClassName('shrinkable');
if (shrinkables.length > 0) {
    for (var i = 0; i < shrinkables.length; i++) {
        var fullText = shrinkables[i].innerHTML;
        if (fullText.length > len) {
            var trunc = fullText.substring(0, len).replace(/\w+$/, '');
            var remainder = "";
            var id = shrinkables[i].id;
            remainder = fullText.substring(len, fullText.length);
            shrinkables[i].innerHTML = '<span>' + trunc + '<span class="hidden" id="' + id + 'Overflow">' +
                remainder + '</span></span>&nbsp;<a class="read-more-link" id="' + id +
                'MoreLink" href="#!" onclick="showMore(\'' + id +
                '\');"> <br> READ MORE</a><a class="hidden" href="#!" id="' + id +
                'LessLink" onclick="showLess(\'' + id + '\');">Less</a>';
        }
    }
}