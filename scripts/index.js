const initialCards = [
    { name: "Val Thorens", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
    { name: "Restaurant terrace", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
    { name: "An outdoor cafe", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
    { name: "A very long bridge, over the forest and through the trees", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
    { name: "Tunnel with morning light", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
    { name: "Mountain house", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}, 
];

const editProfileModal = document.querySelector("#edit-profile-modal");
const editPofileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name")
const profileDescription = document.querySelector(".profile__description");


const closeProfileModal = editProfileModal.querySelector(".modal__close-btn");
const profileNameInput = editProfileModal.querySelector("#profileNameInput");
const profileDescriptionInput = editProfileModal.querySelector("#profileDescriptionInput");
const profileFormElement = editProfileModal.querySelector('.modal__form');

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function GetCardElement(data) {
    const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
    

    const cardName = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    
    cardName.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name

    return cardElement;
    
}
function openModal() {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    editProfileModal.classList.add("modal__opened");
};

function closeModal() {
    editProfileModal.classList.remove("modal__opened");
};

editPofileButton.addEventListener("click", openModal);
closeProfileModal.addEventListener("click", closeModal);


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    editProfileModal.classList.remove("modal__opened");;
};

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

for(let i = 0; i < initialCards.length; i++) {
     const cardElement = GetCardElement(initialCards[i]);
     cardsList.prepend(cardElement);
}


