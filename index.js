const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
app.set('json spaces', 2);

// to query, call: http://localhost:8000/findRoute
app.get('/findRoute', async function (req, res) {

    //Set up URL to query
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InV5dWFvZTdidGkiLCJ0b2tlbiI6eyJpdiI6IjljNzg4ZDQzNGM0ODMyY2Q2ZTI0Njc3ZGUyMDQ1MzdhIiwiY29udGVudCI6IjVlNTEwN2E3MGY3OGIxZTFhYmYwMGYzMjcxNzQzM2U3OTcxODdkOGE4Yjc5ODIzNDBhZTg5MzYzNWRjZjg0MGM3M2Y4Y2JkZWM5MDg5NmVkNmY2YjI4Y2JlOTc3MWJmY2I0YmQ0NmEyYmQyMjdiMmUwYjQ5MjMwYzIzM2Q4ZjM0YjllMzgyNjFmMDk1ZGU2MmM2ODcxMDg4Yjg2YWU1ZjY1NDJhZTIxOTQxMjhjZTEyMGU4ZTQyYmY0OGFiOWM3ZDJlYjQzYjg1MmQ2NWUyM2RjOWZkZDE1YWIwMmM4MmYyZDExMTZkMTc1NTAxYTBiMDk1NjE3Nzc1MGVhYjdiODdhMWJhZjAyNmEyNGRlNjA4ZTU1OTExNzU4YWEyYzNmMTAwMzRkOWQxNmIzMTM0YWI3ZWE4MmE0MGVhOTNhNDEyODY2MDgwMzExNGIzOTUzNzZiM2JiOTQ1YzM1MDNjNDFhODc3OGM4ODNmMjJkNmE1YThlMDgwNDYxYjgzMzBmYzJiNDI1ZjExMmQ0ZWNmOWU4YTRlZGEyOTkwYjhmYTBkNzY5OTQ5ZDkxM2Q5OTgzZWUyMTFmZDliYzc3MzAzM2IxMjBlNmEyZjM3MWI3Zjg0NmU2ZDM1NGJmNzQzYWU2OGU2NTkyMzQzNjRlODgyOTRiNzQ0MDkwYWY5YjVmZWQ5MWYxYmUyNDM5OTViNmMyYjlhZGQzNDczMTY3YTRiZGM4YmU2ZDA0OWIzYjUyNzE1YjQ0M2RmYWY5MDgxOThmZjFmZWE5MWUxYTk4OGMzMWU3MDZkMzkzMTkyOTVkNjk0NWYwN2ViNWJiNGQxZjk1YzYzNWQwZGU1Yjk1MDRmNjlmNjlkOTdiZDEwMzA3ZjZkNzgifSwic2VjdXJpdHlUb2tlbiI6eyJpdiI6IjljNzg4ZDQzNGM0ODMyY2Q2ZTI0Njc3ZGUyMDQ1MzdhIiwiY29udGVudCI6IjRmMWUwYTlhMDM1OWE4ZGU5ZWZlMTA1NjU1NDEzOGJjODEwNzU5YzA4ZjcwOTE3NjM5ZDE5ZTMzNDNjMWEzNjc2ZWQ4ZWRhY2IyMWJhY2M4NWQzMTJkZjUifSwianRpIjoiZDI5ZWNhYTItOGU2Ny00MmMyLTk2NzYtNDhjZGY4YjIzMTlkIiwiaWF0IjoxNjY4MzAxMTk2LCJleHAiOjE2NjgzMDQ3OTZ9.Lt7ZXHRANZ0Dl6BDhk3BojkV7jNeKZCqdEjnOBn9mgU";
    let url = `https://api.iq.inrix.com/findRoute?&Token=${token}&wp_1=37.770581%2C-122.442550&wp_2=37.765297%2C-122.442527&format=json`;

    //Set up query method
    var requestOptions = {
        method: 'GET'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    // console.log(response);
    let json = await response.json();
    let output = json.result;
    console.log("*** \n"+json);

    res.json({
        data: json,
    })

})

//Starting server using listen function
app.listen(port, function () {
    console.log("Server has been started at " + port);
})