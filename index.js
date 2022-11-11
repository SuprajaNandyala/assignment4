fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    .then((data) => {
        var table = '<table>'

        table += '<th>Name</th>' +
            '<th>Email</th>' +
            '<th>Phone</th>' +
            '<th>Website</th>' +
            '<th>Company</th>'
        for (i = 0; i < data.length; i++) {

            tr = `<tr onclick="func('${i+1}');">`
            tr += ` <td id="td">` + data[i].name + `</td>` +
                `<td id="td">` + data[i].email + ` </td>` +
                `<td id="td">` + data[i].phone + `</td>` +
                `<td id="td">` + data[i].website + `</td>` +
                `<td id="td">` + data[i].company.name + `</td> </tr>`;
            table += tr
        }
        table += '</table>'
        document.getElementById('table').innerHTML = table
    })

function func(ele) {
    // console.log(ele);
    window.open('posts.html?postId=' + ele)
        // export default { ele }
        // window.open('https://jsonplaceholder.typicode.com/posts/' + `${ele}` + '/comments')
}