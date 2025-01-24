/*1. Зробити сторінку із довільним контентом і переходами на 3 сторінки:
   users
   posts
   comments

2. На сторінці users через input[type=number] отримувати id юзерата та по кліку на кнопку
   Send вивести юзера в HTML через fetch та XMLHttpRequest. 
   Стилізувати відповідним чином. 
   https://jsonplaceholder.typicode.com/users/

3. На сторінці posts вивести в html пост через input[type=number] отримувати id поста та по кліку на кнопку
   Send вивести пост в HTML через fetch та XMLHttpRequest. 
   Стилізувати відповідним чином. 
   https://jsonplaceholder.typicode.com/posts

4. На сторінці comments вивести список коментарів через input[type=number] отримувати id коментаря 
   та по кліку на кнопку Send вивести пост в HTML через fetch та XMLHttpRequest. 
   Стилізувати відповідним чином. 
   https://jsonplaceholder.typicode.com/comments */



async function fetchWithFetchAPI(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

function fetchWithXHR(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`HTTP error! status: ${xhr.status}`));
            }
        };
        xhr.onerror = () => reject(new Error('Network error'));
        xhr.send();
    });
}

async function loadContent(type) {
    const content = document.getElementById('content');
    content.innerHTML = `<h1>Loading ${type}...</h1>`;
    try {
        let data;
        if (type === 'users') {
            renderSearchForm(type);
        } else if (type === 'posts') {
            renderSearchForm(type);
        } else if (type === 'comments') {
            renderSearchForm(type);
        }
    } catch (error) {
        content.innerHTML = `<h1>Error loading ${type}</h1><p>${error.message}</p>`;
    }
}

function renderSearchForm(type) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Search ${type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        <div class="input-group">
            <input type="number" id="searchInput" placeholder="Enter ${type.slice(0, -1)} ID">
            <button onclick="search${type.charAt(0).toUpperCase() + type.slice(1)}()">Send</button>
        </div>
        <div id="result"></div>
    `;
}

async function searchUsers() {
    const id = document.getElementById('searchInput').value;
    const result = document.getElementById('result');
    result.innerHTML = `<p>Loading user...</p>`;
    try {
        const user = await fetchWithFetchAPI(`https://jsonplaceholder.typicode.com/users/${id}`);
        result.innerHTML = `<div class='list-item'><strong>${user.name}</strong> (${user.email})<br>${user.address.city}</div>`;
    } catch (error) {
        result.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

async function searchPosts() {
    const id = document.getElementById('searchInput').value;
    const result = document.getElementById('result');
    result.innerHTML = `<p>Loading post...</p>`;
    try {
        const post = await fetchWithXHR(`https://jsonplaceholder.typicode.com/posts/${id}`);
        result.innerHTML = `<div class='list-item'><strong>${post.title}</strong><br>${post.body}</div>`;
    } catch (error) {
        result.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

async function searchComments() {
    const id = document.getElementById('searchInput').value;
    const result = document.getElementById('result');
    result.innerHTML = `<p>Loading comment...</p>`;
    try {
        const comment = await fetchWithFetchAPI(`https://jsonplaceholder.typicode.com/comments/${id}`);
        result.innerHTML = `<div class='list-item'><strong>${comment.name}</strong> (${comment.email})<br>${comment.body}</div>`;
    } catch (error) {
        result.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}