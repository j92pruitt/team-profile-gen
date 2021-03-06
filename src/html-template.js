function htmlTemplate(teamCards){
    return `<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>

<body>
    <div class="container-fluid text-sm-center text-light p-5 bg-danger">
        <h1 class="display-3">My Team</h1>
    </div>

    <main>
        <div class="container">
            <div class="row row-cols-3">
                ${teamCards}
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>`
};

function cardTemplate(name, position, idNumber, email, finalAttribute, finalInfo) {
    return `<div class="col my-2">
    <div class="shadow rounded">
        <div class="container-fluid text-light p-3 bg-primary rounded-top shadow">
            <h2>${name}</h2>
            <h3>${position}</h3>
        </div>
        <div class="container-fluid bg-light px-3 py-5 rounded-bottom">
            <ul class="list-group">
                <li class="list-group-item">ID: ${idNumber}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">${finalAttribute}: ${finalInfo}</li>
            </ul>
        </div>
    </div>
</div>`
};

module.exports = {htmlTemplate, cardTemplate}