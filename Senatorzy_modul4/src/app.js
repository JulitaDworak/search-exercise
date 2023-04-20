f
import senators from "/src/assets/data/senators.json"
const inputFilterEl = document.getElementById('filter')

console.log(senators);

const senatorsName = senators.objects.map((senator) => senator.person.name);

console.log(senatorsName);

const buildSenatorslist = (data) => {
    const senatorsEl = document.getElementById('senators')
    const senatorsItems = data.map(
    (item) =>`<li>${item}</li>`)
   
    senatorsEl.innerHTML = senatorsItems.join("")
}

buildSenatorslist(senatorsName)

inputFilterEl.addEventListener('input', (e) => {
    const text = e.currentTarget.value;
    const filterSenatorNames = senatorsName.filter((name) => name.toLowerCase().includes(text.toLowerCase())
    )
buildSenatorslist(filterSenatorNames)
   
})

// quotes

console.log(`hello`);
const API_URL = "'https://dummyjson.com"
const randomQuotes = document.getElementById('quote')



const getAllQuotes = () =>  fetch(`${API_URL}/quotes`)
.then((res) => res.json());
// to jest wpisane, żeby js mógł odczytać

function getRandomArbitrary(min, max) {
    return Math.floor.Math.random() * (max - min) + min;
  }



getAllQuotes().then((data) =>{
    const randomQuoteAPI = data.quotes[getRandomArbitrary (0,data.quotes.length)]
    console.log(randomQuoteAPI);
    console.log(randomQuoteAPI);
});


