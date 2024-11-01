function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }else{
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){ ///errror
    let films = this.getFilmFromStorage();

    films.forEach(function(film,index){
        console.log(film.title);
        console.log(filmTitle);
        if(film.title === filmTitle){
            console.log("ok");
            films.splice(index,1);
        }
    });
    console.log(films); 
    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}