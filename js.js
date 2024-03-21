let kerdesKi = document.getElementById("kerdesKi");
let gomb1 = document.getElementById("gomb1");
let gomb2 = document.getElementById("gomb2");
let gomb3 = document.getElementById("gomb3");
let ertekeles = document.getElementById("ertekeles");

let osszes = 0;
let index = 0;

fetch("kerdesek.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)


        function mukodes() {
            kerdesKi.innerHTML = data.kerdesek[index].kerdes
            gomb1.innerHTML = data.kerdesek[index].valasz1.text
            gomb2.innerHTML = data.kerdesek[index].valasz2.text
            gomb3.innerHTML = data.kerdesek[index].valasz3.text

        }

        function koviKerdes(ertek) {
            if (ertek == 1) {
                osszes += parseInt(data.kerdesek[index].valasz1.pont)
            }
            else if (ertek == 2) {
                osszes += parseInt(data.kerdesek[index].valasz2.pont)
            }
            else if (ertek == 3) {
                osszes += parseInt(data.kerdesek[index].valasz3.pont)
            }

            mukodes();

            index++;
            console.log(osszes)
            if (index == 13) {
                if (osszes < 21) {
                    ertekeles.innerHTML += "Gratulálunk, te tudod, hogy kell igazán egészségesen élni. Ami nagyon fontos, hogy továbbra is figyelj oda a megfelelő hidratálásra és a rostbevitelre. Ha még nem próbáltad, akkor itt az ideje kipróbálni az alternatív fehérje megoldásokat is. Szuper egészséges és finom tud lenni. Egyre vigyázz, azért ne hajtsd túl magad. ;)";
                }
                else if( osszes > 21 && osszes < 30){
                    ertekeles.innerHTML += "Jó úton jársz, de még van mit javítani az étkezéseden. Figyelj a rost és a megfelelő fehérje bevitelre (hal, pulyka vagy csirke legyen a fő és a hüvelyes zöldségek). Nézz utána a mediterrán étrendnek, a tested meg fogja hálálni. A nassolást, amennyire lehet, mellőzd. A nyugodt alváshoz pedig elengedhetetlen a jó környezet, a sötét szoba. Nyugi, nincs szörny az ágy alatt. ;)";
                }
                else{
                    ertekeles.innerHTML += "39 Ajjaj, nagy a baj. Nem figyelsz az étkezésedre. Ha ezen nem változtatsz, komoly egészségügyi következményei is lehetnek (mint a cukorbetegség, a magas vérnyomás vagy a korai csontritkulás).+\n+ Légy tudatos, egy életünk van. Javasoljuk, hogy a gyorsan felszívódó szénhidrátokat (vagy épp a szupergyorsan felszívódókat) -mint a nassok, sütemények, krumpli, rizs- cseréld lassan felszívódó szénhidrátokra – basmati rizs, hajdina, köles, kuszkusz- és fogyassz elég folyadékot. Minden nap legalább egy 4km-es távot sétálj le gyorssétával. Ha azt érzed, hogy nehézkes az alvás, akkor lefekvés előtt egy 30 perccel már ne nézz tv-t és ne használd a telefonodat sem. Így nyugodtabb lesz az alvásod és másnap nem kelsz fáradtan, ami miatt amúgy összezabálsz mindent."
                }
            }
           
        }
      

        koviKerdes();

        gomb1.addEventListener("click", () => {
            koviKerdes(1)
        })
        gomb2.addEventListener("click", () => {
            koviKerdes(2)
        })
        gomb3.addEventListener("click", () => {
            koviKerdes(3)
        })



    })