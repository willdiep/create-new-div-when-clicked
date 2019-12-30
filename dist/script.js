// document.addEventListener("click", e => {
//   if (e.target.id !== 'test1'){
//   let div = document.createElement('div');
//   div.id = "test1";
//   div.style.backgroundColor = "orange";
//   div.style.color = "black";
//   /* div.style.position = "absolute" */;
//   /* div.style.left = "50px" */;
//   /* div.style.top = "50px" */;
//   div.style.height = "100px";
//   div.style.width = "100px";
//   div.contentEditable = "true";

//   document.getElementsByTagName('body')[0].appendChild(div);
//   }
// });

// document.addEventListener('dblclick', e => {
// if(e.target.id === 'test1'){
// alert('it worked!')
// }
// })

let username = "will" // fetch from json
let topic = "javascript" // fetch from json
let blockId = 1

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('onload');
  let div = document.createElement('div');
  // div.id = 'test1';
  div.setAttribute("data-block-id", username + "-" + topic + "-" + blockId)
  div.style.backgroundColor = 'green';
  div.style.color = 'white';
  div.style.fontSize ='30px'; 
  /* div.style.left = "50px" */ /* div.style.top = "50px" */
  /* div.style.position = "absolute" */ 
  div.style.height = '100px';
  div.style.width = '500px';
  div.contentEditable = 'true';
  div.spellcheck = 'true';
  document.body.append(div);
});

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    let div = document.createElement('div');
    // div.id = 'test1';
    div.setAttribute("data-block-id", username + "-" + topic + "-" + ++blockId)
    // blockId++
    div.style.backgroundColor = 'orange';
    div.style.color = 'white';
    div.style.fontSize ='30px'; 
    /* div.style.position = "absolute" */ /* div.style.left = "50px" */ /* div.style.top = "50px" */ 
    div.style.height ='100px';
    div.style.width = '500px';
    div.contentEditable = 'true';

    document.getElementsByTagName('body')[0].appendChild(div);
  }
});

// document.addEventListener('dblclick', e => {
// if(e.target.id === 'test1'){
// alert('it worked!')
// }
// })

// setInterval(e => {
// 	let pre = document.querySelector("pre")
//     let div = document.querySelector("div")
//     pre.textContent = div.outerHTML
// }, 1000);
