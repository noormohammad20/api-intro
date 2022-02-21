function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPost()
function displayPost(posts) {
    const postContainer = document.getElementById('post')
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3> ${post.title} <h3/> 
        <p> ${post.body} <p/>
        `
        postContainer.appendChild(div)

    }
}

// practice

// function displayPost(posts) {
//     const postContainer = document.getElementById('post')
//     for (const post of posts) {
//         const div = document.createElement('div')
//         div.classList.add('post')
//         div.innerHTML = `
//         <h3> ${post.title} <h3/>
//         <p> ${post.body} <p/>
//         `
//         postContainer.appendChild(div)
//     }
// }

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'this is my post',
            userId: 1

        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8', }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
