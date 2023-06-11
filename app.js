var btnTranslate = document.querySelector("#clcik");
var txtar = document.querySelector("#txtin")

var out = document.querySelector("#output");
var serverUrl = "	https://api.funtranslations.com/translate/minion.json";
btnTranslate.addEventListener("click", function clickEventhandler() {
    // console.log("again whyyy")
     console.log(txtar.value)
    // out.innerText ="max ers"+txtar.value
    var txtAInput = txtar.value
    fetch(getTranslation(txtAInput)).then(response => response.json()).then(json =>


        {
            var translatedText = json.contents.translated;
            console.log(translatedText)
            out.innerText=translatedText;
        }).catch(errorHanler)




})

function errorHanler(error) {
    console.log("Error Occured", error);
    alert("Something went wrong try again later")
}

function getTranslation(text) {
    return serverUrl + "?" + "text=" + text
}