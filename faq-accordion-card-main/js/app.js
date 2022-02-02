
const closeAllAnswer = () =>{

    const answers = document.querySelectorAll('.answer');
    const texts = document.querySelectorAll('.text');
    const arrows = document.querySelectorAll('.arrow');


    const removeActive = (array) =>{
        for (const iterator of array) {
            iterator.classList.remove('active');
        }
    }

    removeActive(answers);
    removeActive(texts);
    removeActive(arrows);
    
}

const toggleAnswer = (event) =>{
    closeAllAnswer();
    event.target.children[1].classList.toggle('active');



    let arr = event.target.children[0].children;
    for (const iterator of arr) {
        iterator.classList.toggle('active');
    }

}


const initQuestions = (() =>{
    const questions = document.querySelectorAll('.question');

    for (const iterator of questions) {
        iterator.addEventListener('click', toggleAnswer)
    }
})();