import "regenerator-runtime/runtime";
import axios from 'axios';


export const shortLinks = async (url)=>{
    try{
        const shortLink  = await axios({
            method:"GET",
            url:`https://api.shrtco.de/v2/shorten?url=${url}`
        });

        if(shortLink.status == 201){
            const output = document.querySelector('.output_results')
            createMarkup(shortLink,output);
            document.getElementById("fullLink").value="";
            output.onclick = function(event) {
                if (event.target.className === 'copy_text') {
                    const selectedElement = event.target.getAttribute('data-link');
                    //Create a hidden text area to copy data in clippad
                    var textarea = document.createElement("textarea");
                    textarea.textContent = selectedElement;
                    document.body.appendChild(textarea);
                    textarea.style.position = "fixed";
                
                    textarea.select();
                    document.execCommand("copy"); 

                    document.body.removeChild(textarea);
                    
                    event.target.textContent = "Copied!";
                    event.target.classList.add("copyed")
                   
                }
            }
        }else{
            console.log('You havea an error shorting your link')
        }
        

    }catch(error){
        console.log(error)
    }
}


function createMarkup(short,container){
    const original_link = short.data.result.original_link;
    const shortLink =  short.data.result.full_short_link2;       
    let html =  `<div class="result_container">
                    <div class="original_link"> 
                        <h5>${original_link}</h5>
                    </div>
                    <div class="shorted_link">
                        <div class="link_base"> 
                            <a href="${shortLink}" target="_blank">
                                    <h5>${shortLink}</h5>
                            </a>
                        </div>
                    <div class="link_base_btn">        
                        <button data-link="${shortLink}" class="copy_text">Copy</button>
                    </div>
                </div
            </div>
    `;

    container.innerHTML += html;
}

