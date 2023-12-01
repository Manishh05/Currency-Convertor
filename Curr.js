let Select = document.querySelectorAll('#Currency');
let button = document.getElementById('btn');
let input = document.getElementById('input');
let error = document.getElementsByClassName('error')


fetch('https://api.frankfurter.app/currencies')
.then(res =>res.json())
.then(res=>displayDropdown(res))

function displayDropdown(res){
    
    let curr = Object.entries(res)

for(let i=0 ; i<curr.length; i++){
   let opt = `<option value=${curr[i][0]}>${curr[i][0]}</option>`
   Select[0].innerHTML += opt
   Select[1].innerHTML += opt
}

}

button.addEventListener('click', ()=>{
        let curr1 = Select[0].value
        let curr2 = Select[1].value
        let inputVal = input.value

    if(curr1===curr2)
   error.innerHTML = 'choose diffrent type usd'
else
    convert(curr1,curr2,inputVal)
})
 
function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value =(Object.values(data.rates)[0])
    
  });
}



