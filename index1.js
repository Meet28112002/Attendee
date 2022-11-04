let month = new Date().getMonth();
function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);
  
    return date.toLocaleString('en-US', {
      month: 'short',
    });
  }
  
//   console.log(toMonthName(month)); // 👉️ "Jan"
//   console.log(toMonthName(2)); // 👉️ "Feb"
//   console.log(toMonthName(3)); // 👉️ "Mar"

let yesterday = document.getElementById('yesterday');
let d2 = new Date().getDate() - 1;
let m2 = toMonthName(month);
yesterday.innerHTML = `${d2}<br>${m2}`;

let nextyesterday = document.getElementById('nextyesterday');
let d1 = new Date().getDate() - 2;
let m1 = toMonthName(month);
nextyesterday.innerHTML = `${d1}<br>${m1}`;

let today = document.getElementById('actualdate');
let d = new Date().getDate();
let m = toMonthName(month);
today.innerHTML = `${d}<br>${m}`;

let tommorow = document.getElementById('tommorow');
let d4 = new Date().getDate() + 1;
let m4 = toMonthName(month);
tommorow.innerHTML = `${d4}<br>${m4}`;

let nexttommorow = document.getElementById('nexttommorow');
let d5 = new Date().getDate() + 2;
let m5 = toMonthName(month);
nexttommorow.innerHTML = `${d5}<br>${m5}`;

//*******************************CLOCK IN BUTTON*********************************************** */
let bool = false;
let inbtn = document.getElementById('inbtn')
inbtn.addEventListener('click',function(e){
    console.log('we are in inbtn');
    let hourse = new Date().getHours();
    let minute = new Date().getMinutes();
    let secound = new Date().getSeconds();
    intime = hourse + ":" + minute + ":" + secound ;
    console.log(intime);
    bool = true;
});
if(bool == true){
  let printattendece = document.getElementById('printattendece')
            let d10 = new Date().getDate();
            let tin = new Date().getDate();
            let tout = new Date().getDate();
            let total = new Date().getDate();
            printattendece.innerHTML = `<li class="li" id="date">${d10}</li>
                    <li class="li">${d10}</li>
                    <li class="lidate"><hr></li>
                    <li class="li">${d10}</li>
                    <li class="li">${d10}</li>`;
}



let outbtn = document.getElementById('outbtn')
outbtn.addEventListener('click',function(e){
    console.log('we are in outbtn');
    let hourse = new Date().getHours();
    let minute = new Date().getMinutes();
    let secound = new Date().getSeconds();
    
    console.log(hourse +":" + minute + ":" + secound);
});

