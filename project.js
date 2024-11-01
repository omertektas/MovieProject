
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll(".card-body")[1];

const ui = new UI(); //UI objesini başlatma

const storage = new Storage();

//TÜm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){ // sayfa yüklendiğinde bunu kullanabilirsin
        console.log("selam");
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);
    })
    cardBody.addEventListener("click",deleteFilm);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "" ){
        ui.displayMessages("Tüm alanları doldurun","danger");
    }
    else{
        // yeni film
        const newMovie = new Movie(title,director,url);
        ui.addFilmToUI(newMovie);// Arayüze film ekleme
        ui.displayMessages("Film başarıyla eklendi","success");
        storage.addFilmToStorage(newMovie);
        console.log(newMovie);
    }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target); 
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling);
    }
}