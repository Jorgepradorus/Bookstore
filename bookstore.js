let data;
let arra = "";

let titles;

fetch("https://api.myjson.com/bins/zyv02")
.then(function (response) {

    if (response.ok) {

        return response.json();
    }
}).then(function (json) {

    data = json;
    arra = data.books;
    printBooks(arra);
    searchFor();

    titles = data.books.title;
    console.log(data.books[0].title);
    console.log(data);
    console.log(arra.length)
});


function printBooks(arra) {

    console.log(arra);

    let row = "";
    for (let i = 0; i < arra.length; i++) {

        row += '<div class = "flip-card"><div class = "flip-card-inner"><div class = "flip-card-front"><img src = ' +
            arra[i].cover + '></div><div class = "flip-card-back"><h2>' +
            arra[i].title + '</h2><span>' +
            arra[i].description + '</span><p class="imglist" style="max-width: 200px;"><a data-fancybox="images"><img src = ' +
            arra[i].detail + ' ></a></p></div></div></div>';
    }
    document.getElementById("books").innerHTML = row;
}

function searchFor() {

    let findIt = "";

    filter = document.getElementById("search").value.toUpperCase();
    console.log(filter);
    findIt = arra.filter((arra) => {
        return JSON.stringify(arra.title).toUpperCase().includes(filter)
    })

    printBooks(findIt)
}