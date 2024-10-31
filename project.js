
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');

const ui = new UI(); //UI objesini başlatma

//TÜm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
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
        ui.displayMessages("Film başarıyla eklendi","success")
    }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}