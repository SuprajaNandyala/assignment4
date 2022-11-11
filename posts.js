// import ele from "index.js";
let params = new URLSearchParams(document.location.search);
ele = params.get("postId");

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ele}`).then(res => res.json())
    .then((data) => {
        console.log(data)
        for (i = 0; i < 10; i++) {
            let divv = document.createElement('div')
            divv.innerHTML += ('<br><b>Title ' + (i + 1) + ' :</b><br>' + data[i].title)
            divv.innerHTML += ('<br><b>Body</b><br>' + data[i].body)
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${ele}`).then(res => res.json())
                .then((data) => {
                    for (i = 0; i < 3; i++) {
                        divv.innerHTML += ('<br><b>COMMENT </b>' + (i + 1) + '<br>' + '<b>name</b><br>' + data[i].name)
                        divv.innerHTML += ('<br><b>email</b><br>' + data[i].email)
                        divv.innerHTML += ('<br><b>body</b><br>' + data[i].body)
                    }
                })
            document.body.append(divv)
        }
    })