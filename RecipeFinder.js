    const dishitems = document.getElementById("root")
    const dish = document.querySelectorAll(".dish")
    const dishname = dishitems.getElementsByTagName("h3")

const search = () => {
    const searchbox = document.getElementById("search-input").value.toUpperCase();

    /* Search By Name and Ingredient Function */

    for(var i=0; i < dishname.length; i++) {
        let match = dish[i].getElementsByTagName('h3')[0];

        if(match) {
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                dish[i].style.display = "";
           } else {
                dish[i].style.display = "none";
           }
        }
    } 
}

/* Category List Function */
function toggleCategory(categoryName) {
    for(var i=0; i < dish.length; i++) {

        if(dish[i].id.toUpperCase() === categoryName.toUpperCase()) {
            dish[i].style.display = "";
        } else {
            dish[i].style.display = "none";
        }
    }
}


/* 
    Dish Content Popup
*/

/* 
    Ulam
*/

//Adobong Manok
function togglePopup1() {
    document.getElementById("adobong-manok").classList.toggle("active");
}

// Chicken Pastel
function togglePopup2() {
    document.getElementById("chicken-pastel").classList.toggle("active");
}

//Pininyahang Manok
function togglePopup3() {
    document.getElementById("pininyahang-manok").classList.toggle("active");
}

//Crispy Tadyang Manok
function togglePopup4() {
    document.getElementById("crispy-tadyang-manok").classList.toggle("active");
}

//Curacha
function togglePopup5() {
    document.getElementById("curacha").classList.toggle("active");
}

//Embutido
function togglePopup6() {
    document.getElementById("embutido").classList.toggle("active");
}

//Chop Suey
function togglePopup7() {
    document.getElementById("chop-suey").classList.toggle("active");
}

//Escabeche
function togglePopup8() {
    document.getElementById("escabeche").classList.toggle("active");
}

//Halabos na Hipon
function togglePopup9() {
    document.getElementById("halabos-na-hipon").classList.toggle("active");
}

//Buttered Shrimp
function togglePopup10() {
    document.getElementById("buttered-shrimp").classList.toggle("active");
}

//Pork Hamonado
function togglePopup11() {
    document.getElementById("pork-hamonado").classList.toggle("active");
}

//Humba
function togglePopup12() {
    document.getElementById("humba").classList.toggle("active");
}

//Inihaw na Liempo
function togglePopup13() {
    document.getElementById("inihaw-na-liempo").classList.toggle("active");
}

//Inun-unan
function togglePopup14() {
    document.getElementById("inun-unan").classList.toggle("active");
}

//KBL
function togglePopup15() {
    document.getElementById("kbl").classList.toggle("active");
}

//KMU
function togglePopup16() {
    document.getElementById("kmu").classList.toggle("active");
}

//Kinunot
function togglePopup17() {
    document.getElementById("kinunot").classList.toggle("active");
}

//Laing
function togglePopup18() {
    document.getElementById("laing").classList.toggle("active");
}

//Lengua Estofado
function togglePopup19() {
    document.getElementById("lengua-estofado").classList.toggle("active");
}

//Rellenong Bangus
function togglePopup20() {
    document.getElementById("rellenong-bangus").classList.toggle("active");
}

//Paiparan
function togglePopup21() {
    document.getElementById("paiparan").classList.toggle("active");
}

//Sarsiadong Isda
function togglePopup22() {
    document.getElementById("sarsiadong-isda").classList.toggle("active");
}

//Lechon Kawali
function togglePopup23() {
    document.getElementById("lechon-kawali").classList.toggle("active");
}

//Callos
function togglePopup24() {
    document.getElementById("callos").classList.toggle("active");
}

//Dinengdeng
function togglePopup25() {
    document.getElementById("dinengdeng").classList.toggle("active");
}

//Beef Lauya
function togglePopup26() {
    document.getElementById("beef-lauya").classList.toggle("active");
}

//Crispy Pata
function togglePopup27() {
    document.getElementById("crispy-pata").classList.toggle("active");
}

//Pancit Molo
function togglePopup28() {
    document.getElementById("pancit-molo").classList.toggle("active");
}

//Patatim
function togglePopup29() {
    document.getElementById("patatim").classList.toggle("active");
}

//Ginataang Tahong
function togglePopup30() {
    document.getElementById("ginataang-tahong").classList.toggle("active");
}

//Ginataang Alimango
function togglePopup31() {
    document.getElementById("ginataang-alimango").classList.toggle("active");
}

//Dinuguan
function togglePopup32() {
    document.getElementById("dinuguan").classList.toggle("active");
}

//Chicken Inasal
function togglePopup33() {
    document.getElementById("chicken-inasal").classList.toggle("active");
}

//Pinangat
function togglePopup34() {
    document.getElementById("pinangat").classList.toggle("active");
}

//Sinaing na Tulingan
function togglePopup35() {
    document.getElementById("sinaing-na-tulingan").classList.toggle("active");
} 

//Bulalo
function togglePopup36() {
    document.getElementById("bulalo").classList.toggle("active");
} 

//Kare-Kare
function togglePopup37() {
    document.getElementById("kare-kare").classList.toggle("active");
} 

//Kare-Kareng Buntot ng Baka
function togglePopup38() {
    document.getElementById("kare-kareng-buntot-ng-baka").classList.toggle("active");
} 

//Kare-Kareng Manok
function togglePopup39() {
    document.getElementById("kare-kareng-manok").classList.toggle("active");
} 

//Kalderetang Baka
function togglePopup40() {
    document.getElementById("kalderetang-baka").classList.toggle("active");
} 

//Kalderetang Kambing
function togglePopup41() {
    document.getElementById("kalderetang-kambing").classList.toggle("active");
} 

//Sinigang na Manok
function togglePopup42() {
    document.getElementById("sinigang-na-manok").classList.toggle("active");
} 

//Sinigang na Baka
function togglePopup43() {
    document.getElementById("sinigang-na-baka").classList.toggle("active");
} 

//Pork Sisig
function togglePopup44() {
    document.getElementById("pork-sisig").classList.toggle("active");
} 

//Camaron
function togglePopup45() {
    document.getElementById("camaron").classList.toggle("active");
} 

//Kilawin
function togglePopup46() {
    document.getElementById("kilawin").classList.toggle("active");
} 

//Adobong Baboy
function togglePopup47() {
    document.getElementById("adobong-baboy").classList.toggle("active");
} 

//Adobong Manok sa Gata
function togglePopup48() {
    document.getElementById("adobong-manok-sa-gata").classList.toggle("active");
} 

//Adobong Pusit
function togglePopup49() {
    document.getElementById("adobong-pusit").classList.toggle("active");
} 

//Adobong Paa ng Manok
function togglePopup50() {
    document.getElementById("adobong-paa-ng-manok").classList.toggle("active");
} 

//Adobong Sitaw
function togglePopup51() {
    document.getElementById("adobong-sitaw").classList.toggle("active");
} 

//Adobong Tahong
function togglePopup52() {
    document.getElementById("adobong-tahong").classList.toggle("active");
} 

//Adobong Tanique
function togglePopup53() {
    document.getElementById("adobong-tanique").classList.toggle("active");
} 

//Adobong Tanique
function togglePopup54() {
    document.getElementById("adobong-manok-at-baboy").classList.toggle("active");
} 

//Adobong Kangkong
function togglePopup55() {
    document.getElementById("adobong-kangkong").classList.toggle("active");
} 

//Adobong Isda
function togglePopup56() {
    document.getElementById("adobong-isda").classList.toggle("active");
} 

//Adobong Isaw
function togglePopup57() {
    document.getElementById("adobong-isaw").classList.toggle("active");
} 

//Adobong Atay at Balunan
function togglePopup58() {
    document.getElementById("adobong-atay-at-balunan").classList.toggle("active");
} 

//Adobong Itik
function togglePopup59() {
    document.getElementById("adobong-itik").classList.toggle("active");
} 

//Nilagang Baka
function togglePopup60() {
    document.getElementById("nilagang-baka").classList.toggle("active");
} 

//Nilagang Baka
function togglePopup61() {
    document.getElementById("papaitan").classList.toggle("active");
} 

//Pinikpikan
function togglePopup62() {
    document.getElementById("pinikpikan").classList.toggle("active");
} 

//Bistek Tagalog
function togglePopup63() {
    document.getElementById("bistek-tagalog").classList.toggle("active");
} 

//Pochero
function togglePopup64() {
    document.getElementById("pochero").classList.toggle("active");
} 

//Tofu In Oyster Sauce
function togglePopup65() {
    document.getElementById("tofu-in-oyster-sauce").classList.toggle("active");
} 

//Tofu Balls With Miswa and Patola
function togglePopup66() {
    document.getElementById("tofu-balls-with-miswa-and-patola").classList.toggle("active");
} 

//Fish Fillet
function togglePopup67() {
    document.getElementById("fish-fillet").classList.toggle("active");
} 

//Chicken Fillet
function togglePopup68() {
    document.getElementById("chicken-fillet").classList.toggle("active");
} 

//Kangkong and Tofu with Oyster Sauce
function togglePopup69() {
    document.getElementById("kangkong-and-tofu-with-oyster-sauce").classList.toggle("active");
} 

//Tokwang Sisig
function togglePopup70() {
    document.getElementById("tokwang-sisig").classList.toggle("active");
} 

//Sinanglaw
function togglePopup71() {
    document.getElementById("sinanglaw").classList.toggle("active");
} 

//Kinilnat
function togglePopup72() {
    document.getElementById("kinilnat").classList.toggle("active");
} 

//Laswa
function togglePopup73() {
    document.getElementById("laswa").classList.toggle("active");
} 

//Adobong Tokwa
function togglePopup74() {
    document.getElementById("adobong-tokwa").classList.toggle("active");
} 

//Tokwat Baboy
function togglePopup75() {
    document.getElementById("tokwat-baboy").classList.toggle("active");
} 

//Menudo
function togglePopup76() {
    document.getElementById("menudo").classList.toggle("active");
} 

//Kinilaw
function togglePopup77() {
    document.getElementById("kinilaw").classList.toggle("active");
} 

//Batchoy
function togglePopup78() {
    document.getElementById("batchoy").classList.toggle("active");
} 

//Pinakbet
function togglePopup79() {
    document.getElementById("pinakbet").classList.toggle("active");
} 

//Pork Mechado
function togglePopup80() {
    document.getElementById("pork-mechado").classList.toggle("active");
} 

//Ginataang Papaya
function togglePopup81() {
    document.getElementById("ginataang-papaya").classList.toggle("active");
} 

//Bicol Express
function togglePopup82() {
    document.getElementById("bicol-express").classList.toggle("active");
} 

//Pares
function togglePopup83() {
    document.getElementById("pares").classList.toggle("active");
} 

//Tinolang Manok
function togglePopup84() {
    document.getElementById("tinolang-manok").classList.toggle("active");
} 

//Tinolang Paa ng Manok
function togglePopup85() {
    document.getElementById("tinolang-paa-ng-manok").classList.toggle("active");
} 

//Pork Binagoongan
function togglePopup86() {
    document.getElementById("pork-binagoongan").classList.toggle("active");
} 

//Chicken Binagoongan
function togglePopup87() {
    document.getElementById("chicken-binagoongan").classList.toggle("active");
} 

//Binagoongang Baka
function togglePopup88() {
    document.getElementById("binagoongang-baka").classList.toggle("active");
} 

//Giniling
function togglePopup89() {
    document.getElementById("giniling").classList.toggle("active");
} 

//Sinigang na Hipon
function togglePopup90() {
    document.getElementById("sinigang-na-hipon").classList.toggle("active");
} 

//Sinigang na Baboy
function togglePopup91() {
    document.getElementById("sinigang-na-baboy").classList.toggle("active");
} 

//Paksiw na Bangus
function togglePopup92() {
    document.getElementById("paksiw-na-bangus").classList.toggle("active");
} 

//Paksiw na Baboy
function togglePopup93() {
    document.getElementById("paksiw-na-baboy").classList.toggle("active");
} 

//Utan Bisaya
function togglePopup94() {
    document.getElementById("utan-bisaya").classList.toggle("active");
} 

//Bopis
function togglePopup95() {
    document.getElementById("bopis").classList.toggle("active");
} 

//Morcon
function togglePopup96() {
    document.getElementById("morcon").classList.toggle("active");
} 

//Morcon
function togglePopup97() {
    document.getElementById("chicken-afritada").classList.toggle("active");
} 

//Bola-Bola
function togglePopup98() {
    document.getElementById("bola-bola").classList.toggle("active");
} 

//Lumpiang Shanghai
function togglePopup99() {
    document.getElementById("lumpiang-shanghai").classList.toggle("active");
} 


/* 
    Umagahan
*/


//Tocino
function togglePopup100() {
    document.getElementById("tocino").classList.toggle("active");
} 

//Tapsilog
function togglePopup101() {
    document.getElementById("tapsilog").classList.toggle("active");
} 

//Corned Beef
function togglePopup102() {
    document.getElementById("corned-beef").classList.toggle("active");
} 

//Corned Beef
function togglePopup103() {
    document.getElementById("gourmet-tuyo").classList.toggle("active");
} 

//Lugaw
function togglePopup104() {
    document.getElementById("lugaw").classList.toggle("active");
} 

//Champorado
function togglePopup105() {
    document.getElementById("champorado").classList.toggle("active");
} 

//Arroz Caldo
function togglePopup106() {
    document.getElementById("arroz-caldo").classList.toggle("active");
} 

//Sopas
function togglePopup107() {
    document.getElementById("sopas").classList.toggle("active");
} 

//Sinangag
function togglePopup108() {
    document.getElementById("sinangag").classList.toggle("active");
} 

//Sinangag
function togglePopup109() {
    document.getElementById("kesong-puti").classList.toggle("active");
} 

//Sinangag
function togglePopup110() {
    document.getElementById("beef-tapa").classList.toggle("active");
} 

//Sinangag
function togglePopup111() {
    document.getElementById("tortang-talong").classList.toggle("active");
} 


/* 
    Panghimagas
*/


//Macaroni Salad
function togglePopup112() {
    document.getElementById("macaroni-salad").classList.toggle("active");
} 

//Bibingka
function togglePopup113() {
    document.getElementById("bibingka").classList.toggle("active");
} 

//Leche Flan
function togglePopup114() {
    document.getElementById("leche-flan").classList.toggle("active");
} 

//Buchi
function togglePopup115() {
    document.getElementById("buchi").classList.toggle("active");
} 

//Mais Con Yelo
function togglePopup116() {
    document.getElementById("mais-con-yelo").classList.toggle("active");
} 

//Saging Con Yelo
function togglePopup117() {
    document.getElementById("saging-con-yelo").classList.toggle("active");
} 

//Kutsinta
function togglePopup118() {
    document.getElementById("kutsinta").classList.toggle("active");
} 

//Buko Pie
function togglePopup119() {
    document.getElementById("buko-pie").classList.toggle("active");
} 

//Puto
function togglePopup120() {
    document.getElementById("puto").classList.toggle("active");
} 

//Sapin-Sapin
function togglePopup121() {
    document.getElementById("sapin-sapin").classList.toggle("active");
} 

//Halo-Halo
function togglePopup122() {
    document.getElementById("halo-halo").classList.toggle("active");
} 

//Crema De Fruta
function togglePopup123() {
    document.getElementById("crema-de-fruta").classList.toggle("active");
} 

//Coffee Jelly
function togglePopup124() {
    document.getElementById("coffee-jelly").classList.toggle("active");
} 

//Coffee Jelly
function togglePopup125() {
    document.getElementById("fruit-salad").classList.toggle("active");
} 

//Graham Cake
function togglePopup126() {
    document.getElementById("graham-cake").classList.toggle("active");
} 

//Graham Balls
function togglePopup127() {
    document.getElementById("graham-balls").classList.toggle("active");
} 

//Mango Float
function togglePopup128() {
    document.getElementById("mango-float").classList.toggle("active");
} 

//Polvoron
function togglePopup129() {
    document.getElementById("polvoron").classList.toggle("active");
} 

//Gulaman
function togglePopup130() {
    document.getElementById("gulaman").classList.toggle("active");
} 

//Sans Rival
function togglePopup131() {
    document.getElementById("sans-rival").classList.toggle("active");
} 

//Pichi-Pichi
function togglePopup132() {
    document.getElementById("pichi-pichi").classList.toggle("active");
} 

//Biko
function togglePopup133() {
    document.getElementById("biko").classList.toggle("active");
} 

//Ube Halaya
function togglePopup134() {
    document.getElementById("ube-halaya").classList.toggle("active");
} 

//Palitaw
function togglePopup135() {
    document.getElementById("palitaw").classList.toggle("active");
} 

//Latik
function togglePopup136() {
    document.getElementById("latik").classList.toggle("active");
} 

//Carioca
function togglePopup137() {
    document.getElementById("carioca").classList.toggle("active");
} 

//Brazo De Mercedes
function togglePopup138() {
    document.getElementById("brazo-de-mercedes").classList.toggle("active");
} 


/* 
    Merienda
*/

//Pancit Kanton
function togglePopup139() {
    document.getElementById("pancit-kanton").classList.toggle("active");
} 

//Turon
function togglePopup140() {
    document.getElementById("turon").classList.toggle("active");
} 

//Kamote Que
function togglePopup141() {
    document.getElementById("kamote-que").classList.toggle("active");
} 

//Siomai
function togglePopup142() {
    document.getElementById("siomai").classList.toggle("active");
} 

//Ukoy
function togglePopup143() {
    document.getElementById("ukoy").classList.toggle("active");
} 

//Chicken Mami
function togglePopup144() {
    document.getElementById("chicken-mami").classList.toggle("active");
} 

//Lumpiang Togue
function togglePopup145() {
    document.getElementById("lumpiang-togue").classList.toggle("active");
} 

//Lumpiang Sariwa
function togglePopup146() {
    document.getElementById("lumpiang-sariwa").classList.toggle("active");
} 

//Calamares
function togglePopup147() {
    document.getElementById("calamares").classList.toggle("active");
} 

//Filipino Baked Macaroni
function togglePopup148() {
    document.getElementById("filipino-baked-macaroni").classList.toggle("active");
} 

//Chicken Empanada
function togglePopup149() {
    document.getElementById("chicken-empanada").classList.toggle("active");
} 

//Bilo-Bilo
function togglePopup150() {
    document.getElementById("bilo-bilo").classList.toggle("active");
} 

//Proben
function togglePopup151() {
    document.getElementById("proben").classList.toggle("active");
} 

//Isaw
function togglePopup152() {
    document.getElementById("isaw").classList.toggle("active");
} 

//Kwek-Kwek
function togglePopup153() {
    document.getElementById("kwek-kwek").classList.toggle("active");
} 

//Pancit Palabok
function togglePopup154() {
    document.getElementById("pancit-palabok").classList.toggle("active");
} 

//Otap
function togglePopup155() {
    document.getElementById("otap").classList.toggle("active");
} 

//Pancit Malabon
function togglePopup156() {
    document.getElementById("pancit-malabon").classList.toggle("active");
} 

//Maruya
function togglePopup157() {
    document.getElementById("maruya").classList.toggle("active");
} 

//Pancit Lomi
function togglePopup158() {
    document.getElementById("pancit-lomi").classList.toggle("active");
} 

//Pancit Bihon
function togglePopup159() {
    document.getElementById("pancit-bihon").classList.toggle("active");
} 