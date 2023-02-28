
const arr = [
{word:'life',translite:'життя'},{word:'world', translite:'світ'},{word: 'case', translite: 'завдання'},
{word:'time', translite:'час'},{word:'by', translite:'за'},{word:'hand', translite:'рука'},
{word:'information', translite:'інформація'},{word:'been', translite:'був'},{word:'or', translite:'або'},
{word:'school', translite:'школа'},{word:'family', translite:"сім'я"},{word:'in', translite:'в'},
{word:'community', translite:'спільнота'},{word:'people', translite:'люди'},{word:'thing', translite:'річ'},
{word:'problem', translite:'проблема'},{word:'country', translite:'країна'},{word:'place', translite:'місце'},
{word:'you', translite:'ти'},{word:'had', translite:'мав'},{word:'do', translite:'робити'},
{word:'call', translite:'дзвонити'},{word:'one', translite:'1'},{word:'who', translite:'хто'},
{word:'into', translite:'в'},{word:'time', translite:'час'},{word:'their', translite:'їх'},
{word:'how', translite:'як'},{word:'that', translite:'що'},{word:'has', translite:'має'},
{word:'its', translite:'його'},{word:'it', translite:'воно'},{word:'word', translite:'слово'},
{word:'if', translite:'якщо'},{word:'look', translite:'дивитись, вигляд'},{word:'now', translite:'зараз'},
{word:'he', translite:'він'},{word:'but', translite:'але'},{word:'will', translite:'буду'},
{word:'two', translite:'2'},{word:'all', translite:'всі'},{word:'about', translite:'навколо'},
{word:'go', translite:'іти'},{word:'day', translite:'день'},{word:'are', translite:'є'},
{word:'did', translite:'зробив'},{word:'out', translite:'зовні'},{word:'see', translite:'бачити'},
{word:'as', translite:'як'},{word:'we', translite:'вони'},{word:'many', translite:'багато'},
{word:'number', translite:'номер'},{word:'get', translite:'отримати'},{word:'with', translite:'з'},
{word:'when', translite:'коли'},{word:'then', translite:'потім'},{word:'no', translite:'ні'},
{word:'come', translite:'прийти'},{word:'his', translite:'його'},{word:'your', translite:'твій'},
{word:'them', translite:'їх'},{word:'way', translite:'шлях'},{word:'made', translite:'зроблено'},
{word:'they', translite:'вони'},{word:'can', translite:'могти'},{word:'these', translite:'ці'},
{word:'could', translite:'міг'},{word:'may', translite:'може'},{word:'I', translite:'я'},
{word:'said', translite:'сказав'},{word:'so', translite:'так'},{word:'people', translite:'люди'},
{word:'part', translite:'частина'},{word:'car', translite:'машина'},{word:'tomorrow', translite:'завтра'},
{word:'yesterday', translite:'вчора'},{word:'month', translite:'місяць'},{word:'week', translite:'тиждень'},
{word:'year', translite:'рік'},{word:'hundred', translite:'100'},{word:'ten', translite:'10'},
{word:'five', translite:'5'},{word:'six', translite:'6'},{word:'made', translite:'зроблено'},
{word:'sun', translite:'сонце'},{word:'moon', translite:'місяць'},{word:'night', translite:'ніч'}
]
  const englishWord = document.querySelector('.english-word')
  const btnStart = document.querySelector('.btn-start')
  const btnStop = document.querySelector('.btn-stop')
  const screenFirst = document.querySelector('.space-item')
  const screenSecond = document.querySelector('.space-item2')
  const translite = document.querySelector('.translite')
  const main = document.querySelector('.main')

  const input = document.querySelector('input[type="name"]')
  const inputBtn = document.querySelector('.input_btn')
  const inputDiv = document.querySelector('.input_div')
  const textGreeting = document.querySelector('.text_greeting')

  const night = document.querySelector('.eng')
  const text = document.querySelector('.text')
  const sectionNight = document.querySelector('body')
    


  const word = [];
 const  tran = [];
   for (let w of arr) {
     word.push(w.word);
    tran.push(w.translite);

   }
   
  let count = -1;

  input.addEventListener("input", getInput)
  inputBtn.addEventListener("click",getEnter)
  btnStop.addEventListener( "click", btnRight)
 btnStart.addEventListener("click", btnLeft)
 screenFirst.addEventListener("click", screenOne ) 
 screenSecond.addEventListener("click", screenFirstremove)
 night.addEventListener("click",  nightTone)
  
 function getInput(event){
 let elValue = event.currentTarget.value;
 textGreeting.textContent = `Welcome, ${elValue}`;
return elValue
 }

function getEnter(){
  main.classList.add('enter')
  inputDiv.classList.add('displayNone') 
  sectionNight.classList.add('section-white')
}

function btnRight() { 
  console.log(count+=1)
   screenSecond.classList.remove('space-start')
  englishWord.textContent = word[count]
 if(count>=arr.length-1){
 count=-1
  }
    }     
function btnLeft() { 
  console.log(count-=1)
  screenSecond.classList.remove('space-start')
 englishWord.textContent = word[count]
  if(count<0){
      count=arr.length
   }                        
 }            
function screenOne(){
translite.textContent = tran[count]
 if(count>-1){
 screenSecond.classList.add('space-start')
 }  
}
function screenFirstremove(){
   screenSecond.classList.remove('space-start')
}
function nightTone(){ 
  sectionNight.classList.toggle('section-white')
 btnStart.classList.toggle('btn-night')
 btnStop.classList.toggle('btn-night')
 screenFirst.classList.toggle('div-night')
text.classList.toggle('text-night')
sectionNight.classList.toggle('section-night')
textGreeting.classList.toggle('text-greeting-dark')   
 }