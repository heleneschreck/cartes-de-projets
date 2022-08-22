const createNewProjectCard = (title, image, text) => {
    const newCard = document.createElement('div')
    newCard.classList.add('Javascript')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('title')
    cardTitle.innerText = title;
    newCard.appendChild(cardTitle)

    const cardImage = document.createElement('img')
    cardImage.classList.add('illustration')
    cardImage.src = image
    cardImage.alt = ''
    newCard.appendChild(cardImage)

    const cardDescription = document.createElement('p')
    cardDescription.classList.add('description')
    cardDescription.innerText = text
    newCard.appendChild(cardDescription)

return newCard;
}
const resetForm = () =>{
    document.querySelector('#titre').value = '';
    document.querySelector('#image').value = '';
    document.querySelector('#description').value = '';

}

const handleSubmit = (event) => {
    event.preventDefault();
    const formTitle = document.querySelector('#titre').value
    console.log(formTitle);
    const formImage = document.querySelector('#image').value
    console.log(formImage);
    const formDescription = document.querySelector('#description').value
    console.log(formDescription);
    const newProjectCard = createNewProjectCard(formTitle, formImage, formDescription)
    document.querySelector('#projet').appendChild(newProjectCard);
    resetForm()
}