// this will create the intern card
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

// this will create the manager card
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class = "card-body">
               <p class = "id">ID: ${manager.id}</p>
               <p class="email">Email: <a href="${manager.email}">${manager.email}</a></p>
               <p class= "office">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

//this will create the engineer card
const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">  
                <h3>${engineer.name}</h3>  
                <h4>Engineer</h4>
            </div>

        <div class= "card-body">
            <p class = "id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>

        </div>
    </div>
    `
};

//this will push the array to the page
generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
           const managerCard = generateManager(employee);
           pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard)
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    //this is joining the strings 
    const employeeCards = pageArray.join('')

    //return to the generated page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

//generating HTML page
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang = "en">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href = "style.css">
    </head>
    <body>
        <header>
        <nav class = "navbar" id = "navbar">
            <span class= "navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>  
        </nav>
        </header>
        <main>
            <div class= "container">
                <div class= "row justify-content-center" id="team-cards">
                ${employeeCards}
                </div>
            </div>
        </main>
    </body>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>

    `;
}
//exporting to index
module.exports = generateHTML;