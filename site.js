
//fetch api


const uni = "http://universities.hipolabs.com/search?country=United+States"


const form = document.querySelector("form");
const search = document.querySelector("#search");
const table = document.querySelector(".table");
const searched = document.querySelector(".tabless");


let data = []

school();
//fetching data
async function school() {
  const response = await fetch(uni);

  data = await response.json();
  console.log(data);

  if (data) {
    // console.log(data.slice(1,21))
    let school = data;

    // console.log(school.slice(0, 31));
    school.slice(0, 20).forEach((element) => {
      const tables = document.createElement("table");
      tables.classList.add('names')
      
      //    console.log(name.innerHTML = `${element.name}`)
      //    console.log(web.innerHTML = `${element.web_pages}`)

      tables.innerHTML = `
           <tbody>
           <tr>
                <td class="name">${element.name}</td>

                <td> <a href="${element.web_pages}">${element.web_pages}</a></td>     
            </tr> 
        </tbody>    
    `;
// console.log(tables)
      table.appendChild(tables);
      
    //   if(table){
    //     searched.innerHTML = ''
    //   }
      

    });

    // searched.textContent=''
    


}


//grabbing the table

//function to show words in a table
//declaring a function to display the movies using .forEach method
//since the query data is an array, also adding html to align the items

//form

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = search.value;
    console.log(val);
  
    //filter the school array
    //check if the input is in any of the name
    const filteredArray = data.filter(arr => {
        // console.log(arr.name.includes(val))
        return arr.name.includes(val)
    })
  
    let existedName = filteredArray
  //displaying each of the data
  console.log(existedName)

  existedName.forEach((list) =>{

    const searchInput = document.createElement("table");
    searchInput.classList.add('names')
    // const name = document.createElement('th')
    // console.log(searchInput.innerHTML = `${list.name}`)

    // table.innerHTML = ""
        searchInput.innerHTML = `
        
        <tbody>
           <tr>
                <td class="name">${list.name}</td>

                <td> <a href="${list.web_pages}">${list.web_pages}</a></td>     
            </tr> 
        </tbody>   
    `;

// console.log(searchInput)
// table.innerHTML = ''

 searched.appendChild(searchInput)
 
// table.replaceWith(searchInput)

 table.textContent = ""
    console.log(table)

// if(val)
// table.appendChild(searchInput)

    })    
})
}
