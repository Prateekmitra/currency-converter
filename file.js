// let mode ='red';
// let color;
// if (mode =='dark') {color ='black'}
// else if (mode == 'black ') { color='blue'}
// else {color='pink'}
// console.log(color)
// let a=20;
// if (a==20) console.log('yes')
// else if (console.log('no'));

// let age =16
// age >=18 ? console.log('eligible to vote') : console.log('not eligible to vote')

// let num ={name : 'a',class : 12, rollno : 17, hobby : 'cricket'}
// console.log(num['name'])

// let b=[1,2,3,4,5,5,6,7]
// for (let i of b)
// {console.log(i)};

// for (let i in num) //to print keys of num dictionary
// {console.log(i,num[i])}

// let i=0;
// for (i=1;i<=5;i++)
// {console.log('apna college')};

// let i=0;
// while (i<=5)
// {console.log('apna collge');i++}

// let i=0;
// do {console.log('apna college');i++}
// while (i<=5);

// let a='string'
// console.log(a.length)

// let a = [2,4,6,8];
// a.map((val) => {
//     console.log(val);
// })
// a='apna college'
// b=' student'
// c=a.concat(b)
// console.log(c)
// console.log(a.charAt(5))
// console.log(a.slice(1,6))
// console.log(a.replace(college,new college))

//  let a=['a','b','c','d','e']
// let i=0
// for (i=0 ;i<a.length;i++)
//     {console.log(i)}
// for (let i of a){console.log(i)}
// c=[]
// b=a.pop()
// console.log(b)
// for (let i=0 ; i<a.length;i++){c.unshift(b)}// no desired output get 

// function sum(){a=[2,3,4,5]
//     b=a.pop()
//     console.log(b)
// }
// sum()
// const fun=(a,b) => {
//     console.log(a*b)
// }
// fun(5,7)
// a
// arr=[1,2,3,4,5,5]
// t = arr.filter((val) => {return val%2==0;
// })

// console.log(t)

// console.dir(document.body)
// let l = document.getElementById('tr')
// console.log(l)
// let t = document.getElementsByClassName('new')
// console.log(t)
// let y = document.getElementsByTagName('p')
// console.log(y)
// let l =document.querySelector('#h');
// console.log(l)
// let t =document.querySelector('.new');
// console.log(t)
// console.dir(t)
// let n =document.querySelector('body');
// // console.dir(n);
// console.log(n)
// console.log(n.innerText)
// n.innerText=n.innerText+'world'
// console.log(n.innerText)
//console.log(n.getAttribute('id'))//pending
// n.style.backgroundColor='blue';
// n.style.backgroundColor='white'
// let l=document.createElement('button')
// l.innerText='click me'
// console.log(l)
// let v = document.querySelector('div');
// // v.append(l)
//  v.prepend(l)
// v.before(l)
// v.after(l)
// let create = document.createElement('h1')
// create.innerText='NEW APP'
// let v=document.querySelector('div')
// v.before(create)
// let i=document.querySelector('div');
// i.addEventListener('click',()=>console.log('button was clicked'))
// i.addEventListener('click',()=>(console.log('button was clicked 2')))
// const l = ('click',()=>console.log('button was clicked 3'))
// i.addEventListener('click',()=>console.log('button was clicked 4'))
// i.removeEventListener('click',l)

// let u=document.querySelector('body')
// let currentmode='light'
// let y = document.querySelector('button')
// y.addEventListener('click',()=>{ 
//     if (currentmode ==='light'){currentmode = 'black'
//      document.querySelector('body').style.backgroundColor='black';}
//     else {
//         currentmode='light'
//         document.querySelector('body').style.backgroundColor='white';}
     
//     });
// const employee ={name:'prateek',
//     class:'12',
//     rollno:'27',
//     hobby:'cricket',
//     tax(){console.log('tax is 10 %')}
// }
// const karanarjun={
//     salary:50000
// }
// karanarjun.__proto__=employee

// class toyotacar{
//     start(){
//         console.log('start car')

//     }
//     stop(){
//         console.log('stop car')
//     }
//     setbrand(brand){
//         this.brand=brand
//     }
// }
// let fortuner = new toyotacar
// fortuner.setbrand('fortuner')
// let ford = new toyotacar
// ford.setbrand('ford')

// function calculator(a,b,sumCallback)
// {sumCallback(a,b,sumCallback)}
// calculator(2,4,sumCallback)

// const hello = () =>{
//     console.log('hello')
// }
// setTimeout(hello,3000)
 
// function sum(a,b){
//     console.log(a+b)
// }

// function calc(a,b,sum){
//     sum(a,b);
// }

// calc(2,4,sum)

// function getdata(dataid,getnextdata){
//     setTimeout(()=>{
//         console.log('data',dataid);
//         if (getnextdata){
//             getnextdata();
//         }},2000  )
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>getdata(4))
//     });

// })
// let promise = new Promise((resolve,reject) =>{
//     console.log('sucess');
//    // reject('some error occur');\
//    resolve('occured')
// });

// function getdata(dataid,getnextdata){
//     return new Promise((resolve,reject) =>
//     setTimeout(()=>{
//         console.log('data',dataid);
//         resolve('succes');
//         if (getnextdata){
//             getnextdata();
//         }},2000  )
// )}
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>getdata(4))
//     });
// })

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//     console.log('I am a promise');
//     resolve('completed')
//     reject('error occur')
//     })
// }

// let promise =getPromise();
// promise.then((res)=>{
//     console.log('solve',res)
// })
// promise.catch((err)=>{
//     console.log('error',err);
// })

// function getdata(dataid){
//     return new Promise((resolve,reject) =>
//     setTimeout(()=>{
//         console.log('data',dataid);
//         resolve('succes');
//         },2000  )
// )}

// getdata(1)
// .then((res)=>{
//     return getdata(2);
// })
// .then((res)=>{
//     return getdata(3);
// })
// .then((res)=>{
//     return getdata(4);
// })
// .then((res)=>{
//     console.log(res)
// })

// function getdata(dataid){
//     return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log('data',dataid);
//         resolve('succes');
//         },2000  )
// })}

// async function getAllData(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);
// }
// getAllData()

// const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

// const getfact=async () =>{
//     console.log('get currency')
//     let response= await fetch(base_url);
//     console.log(response)
//     let data = await response.json();
//     console.log(data)

// // }
// const r =document.createElement('option');
// r.innerText='option'
// console.log(r)

// let div=document.querySelector('div');
// div.append(r)


const fromselect=document.getElementById('from')
const toselect=document.getElementById('to')
const result=document.getElementById('result')

async function convertcurrency() {
    const url=await fetch("https://api.frankfurter.app/currencies");
    const currency = await url.json()
    console.log(currency)
    for (let [code,name] of Object.entries(currency)){
        const option1=document.createElement('option')
        const option2=document.createElement('option')
        option1.value=option2.value=code;
        option1.innerText=option2.innerText= `${code} - ${name}`;
        fromselect.append(option1)
        toselect.append(option2)

    }
}

    async function convert(){
        const amount=document.getElementById('amount').value
        const from =fromselect.value
        const to =toselect.value

        if (amount === "" || amount <= 0) {
        result.textContent = "Enter a valid amount.";
        return;
      }

        const url=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)

      const data=await url.json();
      const converted=data.rates[to];
    result.textContent = `${amount} ${from} = ${converted} ${to}`;
    }
convertcurrency();
