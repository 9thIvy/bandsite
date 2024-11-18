const errorColor = "#d2d2d2";
const bandSiteBlack = '#323232';

const form = document.querySelector('.comment-section__form');
const commentSection = document.querySelector('.comment-section')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = document.getElementById('user-name').value.trim();
    const commentContent = document.getElementById('comment-box').value.trim();

    if(userName === ""){
        console.log("empty");
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

    let newComment = document.createElement('div');
    newComment.classList.add('comment-section__comment');

    let commentMeta = document.createElement('div');
    commentMeta.classList.add('comment-section__comment-meta');

    let commentUserName = document.createElement('p');
    commentUserName.classList.add('comment-section__user-name');
    commentUserName.textContent = userName;

    let commentDate = document.createElement('p');
    commentDate.classList.add('date');
    commentDate.textContent = new Date().toLocaleDateString('en-US');

    let commentText = document.createElement('p');
    commentText.classList.add('comment-section__comment-content');
    commentText.textContent = commentContent;

    commentMeta.appendChild(commentUserName);
    commentMeta.appendChild(commentDate);
    
    newComment.appendChild(commentMeta);
    newComment.appendChild(commentText);

    commentSection.appendChild(newComment);

});