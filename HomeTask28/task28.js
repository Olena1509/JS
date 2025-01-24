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
            data = await fetchWithFetchAPI('https://jsonplaceholder.typicode.com/users');
        } else if (type === 'posts') {
            data = await fetchWithXHR('https://jsonplaceholder.typicode.com/posts');
        } else if (type === 'comments') {
            data = await fetchWithFetchAPI('https://jsonplaceholder.typicode.com/comments');
        }

        renderContent(data, type);
    } catch (error) {
        content.innerHTML = `<h1>Error loading ${type}</h1><p>${error.message}</p>`;
    }
}

function renderContent(data, type) {
    const content = document.getElementById('content');
    content.innerHTML = `<h1>${type.charAt(0).toUpperCase() + type.slice(1)}</h1>`;
    const list = document.createElement('div');
    list.className = 'list';

    data.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        if (type === 'users') {
            listItem.innerHTML = `<strong>${item.name}</strong> (${item.email})<br>${item.address.city}`;
        } else if (type === 'posts') {
            listItem.innerHTML = `<strong>${item.title}</strong><br>${item.body}`;
        } else if (type === 'comments') {
            listItem.innerHTML = `<strong>${item.name}</strong> (${item.email})<br>${item.body}`;
        }
        list.appendChild(listItem);
    });

    content.appendChild(list);
}