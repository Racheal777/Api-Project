
//fetch api
const url = 'https://api.agify.io?name=racheal';
const jok = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

const bored = "https://www.boredapi.com/api/activity"

const uni = "http://universities.hipolabs.com/search?country=United+States"

async function Getdata() {
    const response = await fetch(bored) 
       
    const data = await response.json()
    console.log(data)
    // if(data){
    //     console.log(data.activity)
    //     console.table(data.type)
    // }
    showMovies(data)
    // getItems(data.d)    
}
Getdata()




//form
const form = document.querySelector('form')
const search = document.querySelector('#search')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const val = search.value
    console.log(val)

})



//grabbing the table
const table = document.querySelector('.table')

//function to show words in a table
//declaring a function to display the movies using .forEach method
//since the query data is an array, also adding html to align the items
function showMovies(array){
    table.innerHTML = ''
        const {activity, type, link,participants} = array
        
        //  console.log(array)
        

        const game = document.createElement('table') 
        game.innerHTML = `
        
        <table>
        <tr>
            
            <th> Activity </th>
            <th> Type </th>
            <th> Link</th>
            <th> Participant </th>
            
        </tr>

        <tr>
            <td>${activity}</td>
            <td>${type}</td>
            <td>${link}</td>
            <td>${participants}</td>
            
    </tr>
    </table>`

        table.appendChild(game)  
    
         
}

