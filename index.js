const ul = document.querySelector('#jokes-list');
const btn = document.querySelector('#get-joke');

btn.addEventListener('click', async () => {
    let joke = await getJoke();    

    let li = document.createElement('li');
    li.append(joke);
    ul.appendChild(li);
});

async function getJoke(){
    try{
        const headers = {
        Accept: 'application/json',
        };

        // const res = await axios.get('https://official-joke-api.appspot.com/jokes/random', headers);
        const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single', headers);
        console.log(res);
        // let joke = `${res.data.setup} ${res.data.punchline}`
        let joke = `${res.data.joke}`
        return joke;
    } catch (err) {
        console.log(err);
        return "no jokes";
    }

    
}



