const express = require('express');
const fetch = require("node-fetch");
const { response } = require('express');
const app = express();
const port = 8000;
app.set('json spaces', 2);

// to query, call: http://localhost:8000/findRoute
app.get('/findRoute', async function (req, res) {

    //Set up URL to query
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6InV5dWFvZTdidGkiLCJ0b2tlbiI6eyJpdiI6IjkxN2IxNzJiZDNmZWRjZWJmMWYxOTZkOTA5MmU2MjYyIiwiY29udGVudCI6IjcxNTFkYjBjNjBlYmY1Y2Q0ZjJiMjM0NTY1ZDA4Yzc2N2FhZTUxZjc4ZTRiOTU1YWZlMzBjNTNkZjBhN2NlZjVlMGE3MWJhYzcyZjkxYzM3MDUxODc4OGZkZWZlZWQzYmMzZTJiOGE4ZmYzZjgwYzY4YWM5NjQxM2M1NzFmMGJkZDgxYThiYWFjNDlhYWQ1NjE0ZWY0YTgyN2M3ZmRlMDZmOTE1M2U4NDMwNGJmZjA5NzliODYzMzRkY2VhNmY1ZWUyZjkwYzkzODI1OGM1Y2Y2MmYyMmUwYzc5MGUyMGYxY2YyOWVmMGY2NTI3OGQwMzJlNjNhZGNlYmY5NDczZWZmN2U0ZTFhMjQ1MmVkYzJmYWVmZTNjMTU2NTFmZGM2YTAwMTU0ZjYxN2QyYzZmZGYxZjg2NzBhNDJjMDgwMzc5NGVhZjI5OWU4MmQ1NTBiN2M4MzYyNWZkOGIyODIwM2IxYzFkNTQ1ZWYzZmZjZDI2NGNkZTNkM2JkZGZmZWUwOWQ5YzEwMjRmZWVhY2UwMDI3NDI0NDg0YjQ1OTBjZDdkNWZhNDg2NGNlNGVjZjVkNzJjYTk4ZjliOTExZDllNmE2ODNkODdlNDc2Zjg1ZTQxMzJkYzJkMDdlODZkODc1ZWUxOTAzYzdhZjhkZGM1ODc3NWE5NDNmNzFmNjFjYzdmOGM3NzJmZmU3ZTFkZDdlYTlmN2FjMTJmNzc1NGI3ZmNiMTRkMzJhMTgyYjg0OGRkNWNlYjY1YWE3MjNjNWJkOTNmMjIzYWJlNmUyMjg4YTUwNTNkYmYwMjA0MTBmYWRmYzlkN2NhMDE1ZDg5ODI3ODY3YWYxNzQ1YzYwYmJiNTgwZDMzOTY2MjBhMDY2NThmMDIifSwic2VjdXJpdHlUb2tlbiI6eyJpdiI6IjkxN2IxNzJiZDNmZWRjZWJmMWYxOTZkOTA5MmU2MjYyIiwiY29udGVudCI6IjIxNWZjMTE2NmI4NmYzYzY2ZDJkMzg3NjQ4ODc4MzIxNTdiNjVhZWQ5ZTFjOWY1Y2YwMTljMDMyZjFiNmM2OWFkNWFkMWFhMzEyZWIwMjNjMjczMzQzYjEifSwianRpIjoiMzRiN2JjNmEtYTQ2ZC00YTZjLWE0MjEtMjk2MzZhOWNkM2RhIiwiaWF0IjoxNjY4Mjk3MTU4LCJleHAiOjE2NjgzMDA3NTh9.azTDbSoVdQEz0L7fpxlm-15WkfF1Ng3DubzpL_EhSxE";
    let url = `https://api.iq.inrix.com/traffic/Inrix.ashx?Action=FindRoute&Token=${token}&wp_1=47.613458,-122.188086&wp_2=47.5983,-122.33421&format=json`;

    //Set up query method
    var requestOptions = {
        method: 'GET'
    };

    //Query INRIX for token
    let response = await fetch(url, requestOptions);
    console.log(response);
    let json = await response.json();
    let output = json.result;

    //Return token
    res.json({
        Output: output,
    });
})

//Starting server using listen function
app.listen(port, function () {
    console.log("Server has been started at " + port);
})