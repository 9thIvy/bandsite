import {BandSiteApi} from "./band-site-api.js";

const errorColor = "#d2d2d2";
const bandSiteBlack = '#323232';

const form = document.querySelector('.comment-section__form');
const commentSection = document.querySelector('.comment-section')

//instructions did not specify needing to use /register endpoint
let api = new BandSiteApi("my super awesome secure key");


const formatDate = (unixTime) => {
    const date = new Date(unixTime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const fetchComments = (data) => {
    data.data.forEach(comment => {
        const userName = comment.name;
        const commentContent = comment.comment;
        const formattedDate = formatDate(comment.timestamp);

        renderComment(userName, commentContent, formattedDate);
    });
}


(async () => {
   fetchComments(await api.getComments());
})();





form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = document.getElementById('user-name').value.trim();
    const commentContent = document.getElementById('comment-box').value.trim();

    

    if(userName === ""){
        document.getElementById('user-name').style.borderColor = errorColor;
        return;
    }
    else {
        document.getElementById('user-name').style.borderColor = bandSiteBlack;
    }


    if(commentContent === ""){
        document.getElementById('comment-box').style.borderColor = errorColor;
        return;
    }
    else {
        document.getElementById('comment-box').style.borderColor = bandSiteBlack;
    }

    api.postComment({
        "name": userName,
        "comment": commentContent,
    })
    renderComment(userName, commentContent);
});
   

function renderComment(userName, commentContent, date){
    let commentSectionContainer = document.createElement('div');
    commentSectionContainer.classList.add('comment-section__container');

    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment-section__comment');


    let hr = document.createElement('hr');


    let iconWrapper = document.createElement('div');
    iconWrapper.classList.add('comment-section__icon-wrapper');

    let userIcon = document.createElement('img');
    userIcon.classList.add('comment-section__user-icon');
    userIcon.src = '/assets/images/Mohan-muruge.jpg';

    iconWrapper.appendChild(userIcon);

    let contentWrapper = document.createElement('div');

    let commentMeta = document.createElement('div');
    commentMeta.classList.add('comment-section__comment-meta');

    let userNameElement = document.createElement('p');
    userNameElement.classList.add('comment-section__user-name');
    userNameElement.textContent = userName; 

    let dateElement = document.createElement('p');
    dateElement.classList.add('date');
    dateElement.textContent = date; 

    commentMeta.appendChild(userNameElement);
    commentMeta.appendChild(dateElement);

    let commentContentElement = document.createElement('p');
    commentContentElement.classList.add('comment-section__comment-content');
    commentContentElement.textContent = commentContent; // Using commentContent 

    contentWrapper.appendChild(commentMeta);
    contentWrapper.appendChild(commentContentElement);

    iconWrapper.appendChild(contentWrapper);

    commentDiv.appendChild(hr);
    commentDiv.appendChild(iconWrapper);

    commentSectionContainer.appendChild(commentDiv);

    let commentSection = document.querySelector('.comment-section');
    commentSection.appendChild(commentSectionContainer);
}

