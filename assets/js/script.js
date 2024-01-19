const api_url  = "https://api.jikan.moe/v4"

const searchText = document.querySelector("#searchText");
const searchResults = document.querySelector("#searchResults");

searchText.addEventListener("keyup", function(){
   if (this.value.length > 3){
        getAnimes(this.value)
   }
})

async function getAnimes(query){
    const res = await fetch(`${api_url}/anime?q=${query}`)
    const animes = await res.json()
    
    if(animes.data.length > 0){
        searchResults.style.display ="block";
        searchResults.innerHTML =``;
        animes.data.map(anime =>{
            searchResults.innerHTML += `
            <li class="singleAnime" data-image="${anime.images.jpg.image_url}">
                <a href="${anime.url}" target="_blank">${anime.title}</a>
            </li>
        `;
        })

        const singleAnimes = Array.from(document.querySelectorAll(".singleAnime"))
        const displayImage = document.querySelector("#displayImage");

        singleAnimes.map(singleAnime =>{
            singleAnime.addEventListener("mouseenter", function(){
                displayImage.style.display = "block";
                displayImage.innerHTML = `<img src="${this.dataset.image}">`;
            })

            singleAnime.addEventListener("mouseout", function(){
                displayImage.style.display = "none";
                
            })

            singleAnime.addEventListener("click", function(){
                displayImage.style.display = "none";
                
            })
        })
        }

    

}