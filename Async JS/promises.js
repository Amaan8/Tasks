const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
]

let intervalId = 0;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            const error = false;

            if (!error) {
                resolve(posts);
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length > 0) {
                posts.pop();
                resolve();
            }
            else {
                reject('Array is empty now');
            }
        }, 1000)
    })
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {
                    getPosts();
                    createPost({ title: 'Post Four', body: 'This is post four' })
                        .then(() => {
                            getPosts();
                            deletePost().then(() => {
                                getPosts();
                                deletePost().then(getPosts)
                                    .catch(err => console.log(err));
                            })
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                })
                    .catch(err => console.log(err));
            })
                .catch(err => console.log(err));
        })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));


//Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// })

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

let lastActivityTime = new Date();
console.log('Before creating post four = ' + lastActivityTime);
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().getTime();
            if (lastActivityTime) {
                resolve(lastActivityTime);
            }
            else {
                reject('Something went wrong');
            }
        }, 1000)
    })
}

Promise.all([createPost({ title: 'Post Four', body: 'This is post four' }), updateLastUserActivityTime()])
    .then(([createPostResolve, updateLastUserActivityTimeResolve]) => {
        console.log(createPostResolve);
        console.log('After creating post four = ' + updateLastUserActivityTimeResolve);
        deletePost().then(() => {
            console.log(posts);
        })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err))