import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import Rickandmortys from "./components/rickandmortys/Rickandmortys";

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let rickandmortys = [
    {
        id: '585',
        name: 'Bartender',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        photo: 'https://rickandmortyapi.com/api/character/avatar/585.jpeg'
    },
    {
        id: '730',
        name: 'Princess Ponietta',
        status: 'Alive',
        species: 'Animal',
        type: 'CHUD',
        gender: 'Female',
        photo: 'https://rickandmortyapi.com/api/character/avatar/730.jpeg'
    },
    {
        id: '759',
        name: 'Turkey Morty',
        status: 'Alive',
        species: 'Animal',
        type: 'Turkey',
        gender: 'Male',
        photo: 'https://rickandmortyapi.com/api/character/avatar/759.jpeg'
    },
    {
        id: '595',
        name: 'Floaty Non-Gasm Brotherhood Member',
        status: 'Dead',
        species: 'Alien',
        type: 'Soulless Puppet',
        gender: 'Male',
        photo: 'https://rickandmortyapi.com/api/character/avatar/595.jpeg'
    },
    {
        id: '754',
        name: 'Coop',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        photo: 'https://rickandmortyapi.com/api/character/avatar/754.jpeg'
    },
    {
        id: '775',
        name: 'Voiceoverian',
        status: 'Dead',
        species: 'Alien',
        type: 'Parasite',
        gender: 'unknown',
        photo: 'https://rickandmortyapi.com/api/character/avatar/775.jpeg'
    },
];

function App() {
    let msg = 'Hello!';

            return (
              <div>
               <h1>{msg}</h1>

                  <div>
                      <h2>Simpson`s family</h2>
                      <Simpsons xxx={simpsons}/>
                      <hr/>
                  </div>

                  <div>
                      <h2>Rick and Morty</h2>
                      <Rickandmortys yyy={rickandmortys}/>
                      <hr/>
                  </div>


              </div>
            );
}

export default App;
