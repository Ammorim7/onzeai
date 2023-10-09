const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar")
        } else {
            entry.target.classList.remove("mostrar")
        }
    })
})

const sections = document.querySelectorAll(".esconder")
sections.forEach((section) => myObserver.observe(section))

