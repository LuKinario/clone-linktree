var sharebtn = document.querySelectorAll(".tile-share, .share");

async function copytext(e){
    //prevent button to go to site
    e.preventDefault()
    const link= this.getAttribute('link')
    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the link: "+link)
    }
    catch(err){
        console.error(err)
    }
}

sharebtn.forEach(sharebtn => sharebtn.addEventListener('click', copytext));