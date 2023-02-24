const arr =[
     'time ', 'information', 'people', 'thing ', 'community ', 
     'man ', 'woman ', 'way ',
 'life', 'child ','world','school', 'state ', 'family',
 'student','group ','country ','problem ',
 'hand ','part ','place ','case ','which','like','been',
  'in', 'or',
 'she', 'him', 'call', 'is','one','do','into','who',
 'you', 'had', 'how', 'time','oil', 'that', 'by',
 'their','has', 'its', 'it', 'word', 'if', 
 'look', 'now', 'he', 'but', 'will', 'two', 'find', 
 'was', 'not', 'up', 'more', 'long', 'for', 'what', 
 'other', 'write', 'down', 'on', 'all', 'about',
  'go', 'day', 'are', 'were', 'out', 'see', 'did', 
  'as', 'we', 'many', 'number', 'get', 'with', 'when', 'then', 'no', 
  'come', 'his', 'your', 'them', 'way', 'made', 'they', 'can', 'these', 
  'could', 'may', 'I', 'said', 'so', 'people', 'part']

  const arr2 =['час', 'інформація', 'люди', 'річ ', 'громада', 
  'чоловік ', 'жінка ', 'шлях ',
'життя', 'дитина ','світ','школа', 'держава ', "сім'я",
'студент','група ','країна ','проблема ',
'рука ','частина ','місце ','завдання ','котрий','подобатися','бути',
'в', 'або',
'вона', 'він', 'дзвінок', 'бути','один','робити','в чомусь','хто',
'ти', 'мав', 'як', 'час','олія', 'той,котрий', 'за',
'їх','маю', 'це', 'серудній рід', 'слово', 'якщо', 
'подивіться', 'зараз', 'він', 'але', 'буде', 'два', 'знайти', 
'був', 'не', 'вгору', 'більше', 'довго', 'для', 'що', 
'інший', 'писати', 'вниз', 'на', 'всі', 'приблизно',
'іти', 'день', 'є', 'були', 'поза (чимось)', 'бачити', 'зробив', 
'як', 'ми', 'багато', 'номер', 'отримати', 'з', 'коли', 'потім', 'ні', 
'прийти', 'його', 'твої', 'їх', 'шлях', 'зроблемно', 'вони', 'могти', 'ці', 
'міг би', 'можливо', 'Я', 'сказав', 'так', 'люди', 'частина']


  const englishWord = document.querySelector('.english-word')
  const btnStart = document.querySelector('.btn-start')
  const btnStop = document.querySelector('.btn-stop')
    const screenFirst = document.querySelector('.space-item')
    const screenSecond = document.querySelector('.space-item2')
    const translite = document.querySelector('.translite')
    englishWord.textContent = arr[0]

console.log(arr[0])
  let count = -1;

  btnStop.addEventListener(
                        "click",
                   
                        () => { 
                            count++
                            englishWord.textContent = arr[count]
                            screenSecond.classList.remove('space-start')

                            if(count==arr.length){
                               count=-1
                            }

                 })
                 btnStart.addEventListener(
                    "click",
               
                    () => { 
                        count--
                        screenSecond.classList.remove('space-start')
                       englishWord.textContent = arr[count]
                        if(count<=-1){
                            count=arr.length
                         }

             })
             screenFirst.addEventListener("click",()=>{
               screenSecond.classList.add('space-start')
               translite.textContent = arr2[count]

             } )
             screenSecond.addEventListener("click",()=>{
                screenSecond.classList.remove('space-start')
              } )

     
  