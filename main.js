let commentBtns = document.getElementsByClassName('comment-btn');
let likeBtns = document.getElementsByClassName('like-btn');
let shareBtns = document.getElementsByClassName('share-btn');

for (let i = 0; i < commentBtns.length; i++) {
    let commentBtnIsClicked = false;
    let commentIcon = commentBtns[i].firstElementChild;
    let commentCount = commentBtns[i].lastElementChild;

    if (commentCount.innerText === '0') {
        commentCount.innerText = '';
        commentIcon.style.margin = '0';
    }

    // commentBtns[i].addEventListener('click', function() {
    //     commentIcon.classList.toggle('fa-regular');
    //     commentIcon.classList.toggle('fa-solid');
    // });
}

for (let i = 0; i < likeBtns.length; i++) {
    let likeBtnIsClicked = false;
    let likeIcon = likeBtns[i].firstElementChild;
    let likeCount = likeBtns[i].lastElementChild;

    if (likeCount.innerText === '0') {
        likeCount.innerText = '';
        likeIcon.style.margin = '0';
    }

    likeBtns[i].addEventListener('click', function() {
        likeIcon.classList.toggle('fa-regular');
        likeIcon.classList.toggle('fa-solid');

        switch(likeBtnIsClicked) {
            case false:
                likeBtnIsClicked = true;
                if (likeCount.innerText !== '') {
                    likeCount.innerText = parseInt(likeCount.innerText) + 1;
                } else {
                    likeCount.innerText = '1';
                    likeIcon.style.margin = '0 0.5rem 0 0';
                }
                break;
            case true:
                likeBtnIsClicked = false;
                if (likeCount.innerText !== '1') {
                    likeCount.innerText = parseInt(likeCount.innerText) - 1;
                } else {
                    likeCount.innerText = '';
                    likeIcon.style.margin = '0';
                }
                break;
        }
    });
}

for (let i = 0; i < shareBtns.length; i++) {
    let shareBtnIsClicked = false;
    let shareIcon = shareBtns[i].firstElementChild;
    let shareCount = shareBtns[i].lastElementChild;

    if (shareCount.innerText === '0') {
        shareCount.innerText = '';
        shareIcon.style.margin = '0';
    }

    // shareBtns[i].addEventListener('click', function() {
    //     shareIcon.classList.toggle('fa-regular');
    //     shareIcon.classList.toggle('fa-solid');
    //
    //     switch(shareBtnIsClicked) {
    //         case false:
    //             shareBtnIsClicked = true;
    //             if (shareCount.innerText !== '') {
    //                 shareCount.innerText = parseInt(shareCount.innerText) + 1;
    //             } else {
    //                 shareCount.innerText = '1';
    //                 shareIcon.style.margin = '0 0.5rem 0 0';
    //             }
    //             break;
    //         case true:
    //             shareBtnIsClicked = false;
    //             if (shareCount.innerText !== '1') {
    //                 shareCount.innerText = parseInt(shareCount.innerText) - 1;
    //             } else {
    //                 shareCount.innerText = '';
    //                 shareIcon.style.margin = '0';
    //             }
    //             break;
    //     }
    // });
}