import {shortLinks} from "./short_link";



const form = document.querySelector('.submit_link');
if(form){
    form.addEventListener("submit",(ev)=>{
        ev.preventDefault();

        let val = document.getElementById("fullLink").value;
        if(val  == ""){
            document.getElementById("fullLink").style.border = "4px solid #d17676";
        }else{
            shortLinks(val)
        }
    });
}


document.getElementById("fullLink").addEventListener("change",(ev)=>{
   ev.target.style.border = "4px solid #fff";
})

