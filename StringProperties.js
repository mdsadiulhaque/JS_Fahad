
const movie={
title: "Love",
releaseYear:2018,
ratig:4.5,
director:"Fahad"

};

showProperties(movie);

function showProperties(obj){

    for ( let key in obj)
    if (tyoeof obj[key]==="string")
    console.log(key,obj[key]);
}