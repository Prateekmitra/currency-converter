
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
