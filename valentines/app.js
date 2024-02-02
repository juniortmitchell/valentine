const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const everything = document.querySelector('.everything');

noButton.addEventListener('click', () => {
    noButton.innerHTML = "Fuck you.";
});

yesButton.addEventListener('click', () => {
    while (everything.firstChild) {
        everything.firstChild.remove()
    }
    document.body.style.backgroundImage = "url('valentinephoto.png')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
})

