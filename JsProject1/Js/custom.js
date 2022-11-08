
const ar = 
[
   {
   Qnumber:1,
   Q:'What is the Captal of Jordan ?',
   C:['Amman','Madaba','Irbid','Aqaba'],
   A:'Amman'
   },
   {
   Qnumber:2,
   Q:'What is 1+1 ?',
   C:['0','2','1','3'],
   A:'2'
   },
   {
   Qnumber:3,
   Q:'What is 1+2 ?',
   C:['1','3','4','0'],
   A:'3'
   },
   {
   Qnumber:4,
   Q:'What is 10*10 ?',
   C:['1200','200','20','100'],
   A:'100'
   }
] 
// console.log(ar[0].Qnumber);

const QustionNumber  = document.querySelector('.QNumber');
QustionNumber.setAttribute('style','color:red');
// QustionNumber.innerHTML = `Qustion :${ar[0].Qnumber}`;;

const qustionText = document.querySelector('.q1');
//qustionText.innerHTML = `Q${ar[0].Qnumber}: ${ar[0].Q}`;


const A1 = document.querySelector('#A1');
//A1.innerHTML = `${ar[0].C[0]}`
const A2 = document.querySelector('#A2');
//A2.innerHTML = `${ar[0].C[1]}`
const A3 = document.querySelector('#A3');
//A3.innerHTML = `${ar[0].C[2]}`
const A4 = document.querySelector('#A4');
//A4.innerHTML = `${ar[0].C[3]}`
function Notdisplay(){
  A1.setAttribute("style", "display: none")
  A2.setAttribute("style", "display: none")
  A3.setAttribute("style", "display: none")
  A4.setAttribute("style", "display: none")
}
Notdisplay();

function display(){
  A1.setAttribute("style", "display: inline")
  A2.setAttribute("style", "display: inline")
  A3.setAttribute("style", "display: inline")
  A4.setAttribute("style", "display: inline")
}


// A1.addEventListener('click',()=>{ 
   
//     if(A1.textContent ===ar[0].A){
//       A1.setAttribute('style', 'background-color: green')
//     }
//     else {
//       A1.setAttribute('style', 'background-color: red')
//     }
// })
// A2.addEventListener('click',()=>{ 
//    if(A2.textContent ===ar[0].A){
//      A2.setAttribute('style', 'background-color: green')
//    }
//    else {
//      A2.setAttribute('style', 'background-color: red')
//    }
// })
// A3.addEventListener('click',()=>{ 
//    if(A3.textContent ===ar[0].A){
//      A3.setAttribute('style', 'background-color: green')
//    }
//    else {
//      A3.setAttribute('style', 'background-color: red')
//    }
// })
// A4.addEventListener('click',()=>{ 
//    if(A4.textContent ===ar[0].A){
//     return A4.setAttribute('style', 'background-color: green')

//    }
//    else {
//       return A4.setAttribute('style', 'background-color: red')
//    }
// })


const inp0 = document.querySelector('#inp1').value;

const inp1 = document.querySelector('#inp2').value;

const inp2 = document.querySelector('#inp3').value;

const inp3 = document.querySelector('#inp4').value;

function a0(){
  A1.addEventListener('click',()=>{ 
   
    if(A1.textContent ===ar[inp0].A){
      A1.setAttribute('style', 'background-color: green')
      if(true){
        A2.setAttribute('style', 'display: none;')
        A3.setAttribute('style', 'display: none;')
        A4.setAttribute('style', 'display: none;')
      }
    }
    else {
      A1.setAttribute('style', 'background-color: red')
    }
})
A2.addEventListener('click',()=>{
   if(A2.textContent ===ar[inp0].A){
     A2.setAttribute('style', 'background-color: green')
   }
   else {
     A2.setAttribute('style', 'background-color: red')
   }
})
A3.addEventListener('click',()=>{ 
   if(A3.textContent ===ar[inp0].A){
     A3.setAttribute('style', 'background-color: green')
   }
   else {
     A3.setAttribute('style', 'background-color: red')
   }
})
A4.addEventListener('click',()=>{ 
   if(A4.textContent ===ar[inp0].A){
     A4.setAttribute('style', 'background-color: green')
   }
   else {
   A4.setAttribute('style', 'background-color: red')
   }
})
}
function a1(){
  A1.addEventListener('click',()=>{ 
   
    if(A1.textContent ===ar[inp1].A){
      A1.setAttribute('style', 'background-color: green')
    }
    else {
      A1.setAttribute('style', 'background-color: red')
    }
})
A2.addEventListener('click',()=>{ 
   if(A2.textContent ===ar[inp1].A){
     A2.setAttribute('style', 'background-color: green')
     if(true){
      A1.setAttribute('style', 'display: none;')
      A3.setAttribute('style', 'display: none;')
      A4.setAttribute('style', 'display: none;')
    }
   }
   else {
     A2.setAttribute('style', 'background-color: red')
   }
})
A3.addEventListener('click',()=>{ 
   if(A3.textContent ===ar[inp1].A){
     A3.setAttribute('style', 'background-color: green')
   }
   else {
     A3.setAttribute('style', 'background-color: red')
   }
})
A4.addEventListener('click',()=>{ 
   if(A4.textContent ===ar[inp1].A){
    return A4.setAttribute('style', 'background-color: green')

   }
   else {
      return A4.setAttribute('style', 'background-color: red')
   }
})

}
function a2(){
  A1.addEventListener('click',()=>{ 
   
    if(A1.textContent ===ar[inp2].A){
      A1.setAttribute('style', 'background-color: green')
    }
    else {
      A1.setAttribute('style', 'background-color: red')
    }
  })
A2.addEventListener('click',()=>{ 
   if(A2.textContent ===ar[inp2].A){
     A2.setAttribute('style', 'background-color: green')
   }
   else {
     A2.setAttribute('style', 'background-color: red')
   }
})
A3.addEventListener('click',()=>{ 
   if(A3.textContent ===ar[inp2].A){
     A3.setAttribute('style', 'background-color: green')
     if(true){
      A1.setAttribute('style', 'display: none;')
      A2.setAttribute('style', 'display: none;')
      A4.setAttribute('style', 'display: none;')
    }
   }
   else {
     A3.setAttribute('style', 'background-color: red')
   }
})
A4.addEventListener('click',()=>{ 
   if(A4.textContent ===ar[inp2].A){
     A4.setAttribute('style', 'background-color: green')

   }
   else {
       A4.setAttribute('style', 'background-color: red')
   }
})
}
function a3(){
  A1.addEventListener('click',()=>{ 
   
    if(A1.textContent ===ar[inp3].A){
      A1.setAttribute('style', 'background-color: green')
    }
    else {
      A1.setAttribute('style', 'background-color: red')
    }
  })
  A2.addEventListener('click',()=>{ 
   if(A2.textContent ===ar[inp3].A){
     A2.setAttribute('style', 'background-color: green')
   }
   else {
     A2.setAttribute('style', 'background-color: red')
   }
  })
  A3.addEventListener('click',()=>{ 
   if(A3.textContent ===ar[inp3].A){
     A3.setAttribute('style', 'background-color: green')
   }
   else {
     A3.setAttribute('style', 'background-color: red')
   }
  })
  A4.addEventListener('click',()=>{ 
   if(A4.textContent ===ar[inp3].A){
     A4.setAttribute('style', 'background-color: green')
     if(true){
      A1.setAttribute('style', 'display: none;')
      A2.setAttribute('style', 'display: none;')
      A3.setAttribute('style', 'display: none;')
    }
   }
   else {
     A4.setAttribute('style', 'background-color: red')
   }
  })
}



function  nextQustion0() {
  qustionText.innerHTML = `Q${ar[inp0].Qnumber}: ${ar[inp0].Q}`
  QustionNumber.innerHTML = `Qustion :${ar[inp0].Qnumber}`;
  display()
  A1.innerHTML = `${ar[inp0].C[inp0]}`
  A2.innerHTML = `${ar[inp0].C[inp1]}`
  A3.innerHTML = `${ar[inp0].C[inp2]}`
  A4.innerHTML = `${ar[inp0].C[inp3]}`
a0();

}
function  nextQustion1() {
  qustionText.innerHTML = `Q${ar[inp1].Qnumber}: ${ar[inp1].Q}`
  QustionNumber.innerHTML = `Qustion :${ar[inp1].Qnumber}`;
  display()
  A1.innerHTML = `${ar[inp1].C[inp0]}`
  A2.innerHTML = `${ar[inp1].C[inp1]}`
  A3.innerHTML = `${ar[inp1].C[inp2]}`
  A4.innerHTML = `${ar[inp1].C[inp3]}`
a1()


}
function  nextQustion2() {
  qustionText.innerHTML = `Q${ar[inp2].Qnumber}: ${ar[inp2].Q}`
  QustionNumber.innerHTML = `Qustion :${ar[inp2].Qnumber}`;
  display()
  A1.innerHTML = `${ar[inp2].C[inp0]}`
  A2.innerHTML = `${ar[inp2].C[inp1]}`
  A3.innerHTML = `${ar[inp2].C[inp2]}`
  A4.innerHTML = `${ar[inp2].C[inp3]}`
  a2();

}
function  nextQustion3() {
  qustionText.innerHTML = `Q${ar[inp3].Qnumber}: ${ar[inp3].Q}`
  QustionNumber.innerHTML = `Qustion :${ar[inp3].Qnumber}`;
  display()
  A1.innerHTML = `${ar[inp3].C[inp0]}`
  A2.innerHTML = `${ar[inp3].C[inp1]}`
  A3.innerHTML = `${ar[inp3].C[inp2]}`
  A4.innerHTML = `${ar[inp3].C[inp3]}`
  a3();

}

