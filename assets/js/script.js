window.onload = function(){
    background();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

var currentTime = moment().format("LT");
$("#currentTime").text(currentTime);

var now = new Date().getHours();

function background() {
    if (now > 9) {
      $("#todo9am").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#todo9am").addClass("present");
    } else if (now < 9) {
      $("#todo9am").addClass("future");
    }

    if (now > 10) {
      $("#todo10am").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#todo10am").addClass("present");
    } else if (now < 10) {
      $("#todo10am").addClass("future");
    }

    if (now > 11) {
      $("#todo11am").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#todo11am").addClass("present");
    } else if (now < 11) {
      $("#todo11am").addClass("future");
    }

    if (now > 12) {
      $("#todo12pm").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#todo12pm").addClass("present");
    } else if (now < 12) {
      $("#todo12pm").addClass("future");
    }

    if (now > 13) {
      $("#todo1pm").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#todo1pm").addClass("present");
    } else if (now < 13) {
      $("#todo1pm").addClass("future");
    }

    if (now > 14) {
      $("#todo2pm").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#todo2pm").addClass("present");
    } else if (now < 14) {
      $("#todo2pm").addClass("future");
    }

    if (now > 15) {
      $("#todo3pm").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#todo3pm").addClass("present");
    } else if (now < 15) {
      $("#todo3pm").addClass("future");
    }

    if (now > 16) {
      $("#todo4pm").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#todo4pm").addClass("present");
    } else if (now < 16) {
      $("#todo4pm").addClass("future");
    }

    if (now > 17) {
      $("#todo5pm").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#todo5pm").addClass("present");
    } else if (now < 17) {
      $("#todo5pm").addClass("future");
    }
}
  
function nineAM() {
    var input_textarea = document.querySelector("#todo9am");
    var output_div = document.querySelector("#todo9am");
    var save_button = document.querySelector("#button9am");
  
    save_button.addEventListener("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
}
  
function tenAM() {
    var input_textarea2 = document.querySelector("#todo10am");
    var output_div2 = document.querySelector("#todo10am");
    var save_button2 = document.querySelector("#button10am");
  
    save_button2.addEventListener("click", updateOutput2);
  
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
  
    function updateOutput2() {
      localStorage.setItem("content2", input_textarea2.value);
  
      output_div2.textContent = input_textarea2.value;
    }
}

function elevenAM() {
    var input_textarea3 = document.querySelector("#todo11am");
    var output_div3 = document.querySelector("#todo11am");
    var save_button3 = document.querySelector("#button11am");
  
    save_button3.addEventListener("click", updateOutput3);
  
    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");
  
    function updateOutput3() {
      localStorage.setItem("content3", input_textarea3.value);
  
      output_div3.textContent = input_textarea3.value;
    }
}
  
function twelvePM() {
    var input_textarea4 = document.querySelector("#todo12pm");
    var output_div4 = document.querySelector("#todo12pm");
    var save_button4 = document.querySelector("#button12pm");
  
    save_button4.addEventListener("click", updateOutput4);
  
    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");
  
    function updateOutput4() {
      localStorage.setItem("content4", input_textarea4.value);
  
      output_div4.textContent = input_textarea4.value;
    }
}
  
  
function onePM() {
    var input_textarea5 = document.querySelector("#todo1pm");
    var output_div5 = document.querySelector("#todo1pm");
    var save_button5 = document.querySelector("#button1pm");
  
    save_button5.addEventListener("click", updateOutput5);
  
    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");
  
    function updateOutput5() {
      localStorage.setItem("content5", input_textarea5.value);
  
      output_div5.textContent = input_textarea5.value;
    }
}
  
  
function twoPM() {
    var input_textarea6 = document.querySelector("#todo2pm");
    var output_div6 = document.querySelector("#todo2pm");
    var save_button6 = document.querySelector("#button2pm");
  
    save_button6.addEventListener("click", updateOutput6);
  
    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");
  
    function updateOutput6() {
      localStorage.setItem("content6", input_textarea6.value);
  
      output_div6.textContent = input_textarea6.value;
    }
}
  
  
function threePM() {
    var input_textarea7 = document.querySelector("#todo3pm");
    var output_div7 = document.querySelector("#todo3pm");
    var save_button7 = document.querySelector("#button3pm");
  
    save_button7.addEventListener("click", updateOutput7);
  
    output_div7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");
  
    function updateOutput7() {
      localStorage.setItem("content7", input_textarea7.value);
  
      output_div7.textContent = input_textarea7.value;
    }
}
  
  
function fourPM() {
    var input_textarea8 = document.querySelector("#todo4pm");
    var output_div8 = document.querySelector("#todo4pm");
    var save_button8 = document.querySelector("#button4pm");
  
    save_button8.addEventListener("click", updateOutput8);
  
    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");
  
    function updateOutput8() {
      localStorage.setItem("content8", input_textarea8.value);
  
      output_div8.textContent = input_textarea8.value;
    }
}
  
  
function fivePM() {
    var input_textarea9 = document.querySelector("#todo5pm");
    var output_div9 = document.querySelector("#todo5pm");
    var save_button9 = document.querySelector("#button5pm");
  
    save_button9.addEventListener("click", updateOutput9);
  
    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");
  
    function updateOutput9() {
      localStorage.setItem("content9", input_textarea9.value);
  
      output_div9.textContent = input_textarea9.value;
    }
}