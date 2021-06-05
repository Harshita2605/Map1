//ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//CAROUSEL
/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} */

//MAPS
let map;
let infoWindow;
let dataArr;
var colArr = [];

var map1, map2, map3, map4, map5, map6, map7;
var map8, map9, map10, map11, map12, map13, map14;

var basemap = { lat: 20.59, lng: 78.96 }
var bangalore = { lat: 12.97, lng: 77.59 }
var chennai = { lat: 13.08, lng: 80.27 }
var delhi = { lat: 28.61, lng: 77.21 }
var gurgaon = { lat: 28.46, lng: 77.03 }
var hyderabad = { lat: 17.38, lng: 78.49 }
var kolkata = { lat: 22.57, lng: 88.36 }
var mumbai = { lat: 19.08, lng: 72.88 }

function initMap() {
    var op = {
        zoom: 5,
        center: basemap
    }

    //POPULATION
    map1 = new google.maps.Map(document.getElementById("map1"), op);
    ban(2, 1, map1);

    map2 = new google.maps.Map(document.getElementById("map2"), op);
    che(2, 1, map2);

    map3 = new google.maps.Map(document.getElementById("map3"), op);
    del(2, 1, map3);

    map4 = new google.maps.Map(document.getElementById("map4"), op);
    gur(2, 1, map4);

    map5 = new google.maps.Map(document.getElementById("map5"), op);
    hyd(2, 1, map5);

    map6 = new google.maps.Map(document.getElementById("map6"), op);
    kol(2, 1, map6);

    map7 = new google.maps.Map(document.getElementById("map7"), op);
    mum(2, 1, map7);

    map8 = new google.maps.Map(document.getElementById("map8"), op);
    ban(1, 1, map8);

    map9 = new google.maps.Map(document.getElementById("map9"), op);
    che(1, 1, map9);

    map10 = new google.maps.Map(document.getElementById("map10"), op);
    del(1, 1, map10);

    map11 = new google.maps.Map(document.getElementById("map11"), op);
    gur(1, 1, map11);

    map12 = new google.maps.Map(document.getElementById("map12"), op);
    hyd(1, 1, map12);

    map13 = new google.maps.Map(document.getElementById("map13"), op);
    kol(1, 1, map13);

    map14 = new google.maps.Map(document.getElementById("map14"), op);
    mum(1, 1, map14);
}

function ban(indic, flag, mapx) {
    mapx.setCenter(bangalore);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Ban_Grid_type;
                break;
            case 2:
                dataArr = Ban_Class_label;
                break;
            case 3:
                dataArr = Ban_Three_ways;
                break;
            case 4:
                dataArr = Ban_Four_ways;
                break;
            case 5:
                dataArr = Ban_Urban_percentage;
                break;
            case 6:
                dataArr = Ban_Periurban_percentage;
                break;
            case 7:
                dataArr = Ban_Rural_percentage;
                break;
            case 8:
                dataArr = Ban_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Ban_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Ban_n_Connectivity;
                break;
            case 2:
                dataArr = Ban_num_Connectivity;
                break;
            case 3:
                dataArr = Ban_n_Education;
                break;
            case 4:
                dataArr = Ban_num_Education;
                break;
            case 5:
                dataArr = Ban_n_Government_Facilities;
                break;
            case 6:
                dataArr = Ban_num_Government_Facilities;
                break;
            case 7:
                dataArr = Ban_n_Health;
                break;
            case 8:
                dataArr = Ban_num_Health;
                break;
            case 9:
                dataArr = Ban_n_Utilities;
                break;
            case 10:
                dataArr = Ban_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 51; i++)
        for (let j = 0; j < 59; j++) {
            setCoords({
                properties: {
                    lat: Ban_Grid_Coordinates[0] + 0.01 * j,
                    lng: Ban_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}

function che(indic, flag, mapx) {
    mapx.setCenter(chennai);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Che_Grid_type;
                break;
            case 2:
                dataArr = Che_Class_label;
                break;
            case 3:
                dataArr = Che_Three_ways;
                break;
            case 4:
                dataArr = Che_Four_ways;
                break;
            case 5:
                dataArr = Che_Urban_percentage;
                break;
            case 6:
                dataArr = Che_Periurban_percentage;
                break;
            case 7:
                dataArr = Che_Rural_percentage;
                break;
            case 8:
                dataArr = Che_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Che_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Che_n_Connectivity;
                break;
            case 2:
                dataArr = Che_num_Connectivity;
                break;
            case 3:
                dataArr = Che_n_Education;
                break;
            case 4:
                dataArr = Che_num_Education;
                break;
            case 5:
                dataArr = Che_n_Government_Facilities;
                break;
            case 6:
                dataArr = Che_num_Government_Facilities;
                break;
            case 7:
                dataArr = Che_n_Health;
                break;
            case 8:
                dataArr = Che_num_Health;
                break;
            case 9:
                dataArr = Che_n_Utilities;
                break;
            case 10:
                dataArr = Che_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 15; i++)
        for (let j = 0; j < 19; j++) {
            setCoords({
                properties: {
                    lat: Che_Grid_Coordinates[0] + 0.01 * j,
                    lng: Che_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}

function del(indic, flag, mapx) {
    mapx.setCenter(delhi);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Del_Grid_type;
                break;
            case 2:
                dataArr = Del_Class_label;
                break;
            case 3:
                dataArr = Del_Three_ways;
                break;
            case 4:
                dataArr = Del_Four_ways;
                break;
            case 5:
                dataArr = Del_Urban_percentage;
                break;
            case 6:
                dataArr = Del_Periurban_percentage;
                break;
            case 7:
                dataArr = Del_Rural_percentage;
                break;
            case 8:
                dataArr = Del_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Del_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Del_n_Connectivity;
                break;
            case 2:
                dataArr = Del_num_Connectivity;
                break;
            case 3:
                dataArr = Del_n_Education;
                break;
            case 4:
                dataArr = Del_num_Education;
                break;
            case 5:
                dataArr = Del_n_Government_Facilities;
                break;
            case 6:
                dataArr = Del_num_Government_Facilities;
                break;
            case 7:
                dataArr = Del_n_Health;
                break;
            case 8:
                dataArr = Del_num_Health;
                break;
            case 9:
                dataArr = Del_n_Utilities;
                break;
            case 10:
                dataArr = Del_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 51; i++)
        for (let j = 0; j < 49; j++) {
            setCoords({
                properties: {
                    lat: Del_Grid_Coordinates[0] + 0.01 * j,
                    lng: Del_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}

function gur(indic, flag, mapx) {
    mapx.setCenter(gurgaon);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Gur_Grid_type;
                break;
            case 2:
                dataArr = Gur_Class_label;
                break;
            case 3:
                dataArr = Gur_Three_ways;
                break;
            case 4:
                dataArr = Gur_Four_ways;
                break;
            case 5:
                dataArr = Gur_Urban_percentage;
                break;
            case 6:
                dataArr = Gur_Periurban_percentage;
                break;
            case 7:
                dataArr = Gur_Rural_percentage;
                break;
            case 8:
                dataArr = Gur_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Gur_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Gur_n_Connectivity;
                break;
            case 2:
                dataArr = Gur_num_Connectivity;
                break;
            case 3:
                dataArr = Gur_n_Education;
                break;
            case 4:
                dataArr = Gur_num_Education;
                break;
            case 5:
                dataArr = Gur_n_Government_Facilities;
                break;
            case 6:
                dataArr = Gur_num_Government_Facilities;
                break;
            case 7:
                dataArr = Gur_n_Health;
                break;
            case 8:
                dataArr = Gur_num_Health;
                break;
            case 9:
                dataArr = Gur_n_Utilities;
                break;
            case 10:
                dataArr = Gur_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 61; i++)
        for (let j = 0; j < 35; j++) {
            setCoords({
                properties: {
                    lat: Gur_Grid_Coordinates[0] + 0.01 * j,
                    lng: Gur_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}

function hyd(indic, flag, mapx) {
    mapx.setCenter(hyderabad);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Hyd_Grid_type;
                break;
            case 2:
                dataArr = Hyd_Class_label;
                break;
            case 3:
                dataArr = Hyd_Three_ways;
                break;
            case 4:
                dataArr = Hyd_Four_ways;
                break;
            case 5:
                dataArr = Hyd_Urban_percentage;
                break;
            case 6:
                dataArr = Hyd_Periurban_percentage;
                break;
            case 7:
                dataArr = Hyd_Rural_percentage;
                break;
            case 8:
                dataArr = Hyd_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Hyd_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Hyd_n_Connectivity;
                break;
            case 2:
                dataArr = Hyd_num_Connectivity;
                break;
            case 3:
                dataArr = Hyd_n_Education;
                break;
            case 4:
                dataArr = Hyd_num_Education;
                break;
            case 5:
                dataArr = Hyd_n_Government_Facilities;
                break;
            case 6:
                dataArr = Hyd_num_Government_Facilities;
                break;
            case 7:
                dataArr = Hyd_n_Health;
                break;
            case 8:
                dataArr = Hyd_num_Health;
                break;
            case 9:
                dataArr = Hyd_n_Utilities;
                break;
            case 10:
                dataArr = Hyd_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 16; i++)
        for (let j = 0; j < 19; j++) {
            setCoords({
                properties: {
                    lat: Hyd_Grid_Coordinates[0] + 0.01 * j,
                    lng: Hyd_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}

function kol(indic, flag, mapx) {
    mapx.setCenter(kolkata);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Kol_Grid_type;
                break;
            case 2:
                dataArr = Kol_Class_label;
                break;
            case 3:
                dataArr = Kol_Three_ways;
                break;
            case 4:
                dataArr = Kol_Four_ways;
                break;
            case 5:
                dataArr = Kol_Urban_percentage;
                break;
            case 6:
                dataArr = Kol_Periurban_percentage;
                break;
            case 7:
                dataArr = Kol_Rural_percentage;
                break;
            case 8:
                dataArr = Kol_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Kol_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Kol_n_Connectivity;
                break;
            case 2:
                dataArr = Kol_num_Connectivity;
                break;
            case 3:
                dataArr = Kol_n_Education;
                break;
            case 4:
                dataArr = Kol_num_Education;
                break;
            case 5:
                dataArr = Kol_n_Government_Facilities;
                break;
            case 6:
                dataArr = Kol_num_Government_Facilities;
                break;
            case 7:
                dataArr = Kol_n_Health;
                break;
            case 8:
                dataArr = Kol_num_Health;
                break;
            case 9:
                dataArr = Kol_n_Utilities;
                break;
            case 10:
                dataArr = Kol_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 14; i++)
        for (let j = 0; j < 14; j++) {
            setCoords({
                properties: {
                    lat: Kol_Grid_Coordinates[0] + 0.01 * j,
                    lng: Kol_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}

function mum(indic, flag, mapx) {
    mapx.setCenter(mumbai);
    mapx.setZoom(9);

    if (indic == 1) {
        switch (flag) {
            case 1:
                dataArr = Mum_Grid_type;
                break;
            case 2:
                dataArr = Mum_Class_label;
                break;
            case 3:
                dataArr = Mum_Three_ways;
                break;
            case 4:
                dataArr = Mum_Four_ways;
                break;
            case 5:
                dataArr = Mum_Urban_percentage;
                break;
            case 6:
                dataArr = Mum_Periurban_percentage;
                break;
            case 7:
                dataArr = Mum_Rural_percentage;
                break;
            case 8:
                dataArr = Mum_Walkability_ratio;
                break;
            default:
                break;
        }
    }
    if (indic == 2) {
        dataArr = Mum_Grid_Population
    }
    if (indic == 3) {
        switch (flag) {
            case 1:
                dataArr = Mum_n_Connectivity;
                break;
            case 2:
                dataArr = Mum_num_Connectivity;
                break;
            case 3:
                dataArr = Mum_n_Education;
                break;
            case 4:
                dataArr = Mum_num_Education;
                break;
            case 5:
                dataArr = Mum_n_Government_Facilities;
                break;
            case 6:
                dataArr = Mum_num_Government_Facilities;
                break;
            case 7:
                dataArr = Mum_n_Health;
                break;
            case 8:
                dataArr = Mum_num_Health;
                break;
            case 9:
                dataArr = Mum_n_Utilities;
                break;
            case 10:
                dataArr = Mum_num_Utilities;
                break;
            default:
                break;
        }
    }

    getColorArrays(dataArr, colArr);

    let k = 0;
    for (let i = 0; i < 22; i++)
        for (let j = 0; j < 38; j++) {
            setCoords({
                properties: {
                    lat: Mum_Grid_Coordinates[0] + 0.01 * j,
                    lng: Mum_Grid_Coordinates[1] + 0.01 * i,
                    num: k
                }
            }, mapx);
            k += 1;
        }
}