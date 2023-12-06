let text = document.querySelector("textarea");

let char = document.querySelector("#char");
let word = document.querySelector("#word");
let twit = document.querySelector("#twit");
let insta = document.querySelector("#insta");

let daf_twit = 280;
let daf_insta = 160;

let charCounter = (value)=>{
    let textvalue= value.target.value.length;
    char.innerText = textvalue;    
}

let wordCounter = (value)=>{

    let textvalue= value.target.value.length;
    let val= value.target.value
    let trim = val.trim(" ")
    let arr = trim.split(" ")
    // console.log(arr);

    let clean = arr.filter((e)=>{   
        return e != "";
    })
        word.innerText = clean.length;

}


let twitCounter = (value)=>{
    let textvalue= value.target.value.length;
    let twitvalue = daf_twit - textvalue ;
    twit.innerText = twitvalue;

    if(twitvalue < 0){
        twit.classList.add("red");
    }else{
        twit.classList.remove("red");
    }
}


let instaCounter = (value)=>{
    let textvalue= value.target.value.length;
    let instavalue = daf_insta - textvalue ;
    insta.innerText = instavalue;

    if(instavalue < 0){
        insta.classList.add("red");
    }else{
        insta.classList.remove("red");
    }
}


text.addEventListener("input",(e)=>{
    charCounter(e);
    wordCounter(e);
    twitCounter(e);
    instaCounter(e);

})