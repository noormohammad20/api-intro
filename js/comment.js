function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
loadComment()
function displayComment(comments) {
    const myComments = document.getElementById('comment')
    for (const comment of comments) {
        const div = document.createElement('div')
        div.style.textAlign = 'center'
        div.innerText = comment.name
        myComments.appendChild(div)
    }
}