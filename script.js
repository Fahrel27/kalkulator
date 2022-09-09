

const button = document.querySelectorAll("button")
for (let button of buttons){

    button.addEventListener("click", function(event){

        const target = event.target
        console.log(target.innerText)

    })


} 