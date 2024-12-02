var PROFILEPATH = "profile/"

// Experience
$.getJSON(PROFILEPATH + "experience.json", (data) => {
    data.forEach((position) => {
        let positionnEntry = `
            <div data-date="${position.date.start} - ${position.date.end}">
                <h3>${position.title}</h3>
                <h4>${position.company}</h4>
                <p>
                    ${position.body}
                </p>
            </div>
        `
        $("#experience-timeline").append(positionnEntry)
    })
})

// Education
$.getJSON(PROFILEPATH + "education.json", (data) => {
    data.forEach((edu) => {
        // TODO
        var eduImg = ""
        if (edu.image != null) {
            eduImg = `
                <div class="project-image">
                    <img src="images/education/${edu.image}"/>
                </div>
            `
        } 

        let educationEntry = `
            <div class="education-block">
                <h3>${edu.school}</h3>
                <span class="education-date">${edu.date.start} - ${edu.date.end}</span>
                <h4>${edu.course}</h4>
                ${edu.body != undefined ? "<p>" + edu.body + "</p>" : ""}
                ${edu.points.length != 0 ? "<ul><li>" + edu.points.join("</li><li>") + "</li></ul>" : ""}
            </div>
        `
        $("#education").append(educationEntry)
    })
})

// Certifications
$.getJSON(PROFILEPATH + "certs.json", (data) => {
    // swap position of first and second entry, so the first entry will be in the center of the carousel
    [data[0], data[1]] = [data[1], data[0]]
    // first entry need to have active class
    let firstCert = true
    data.forEach((cert) => {
        var certImg = ""
        if (cert.image != null) {
            // make cert that has not been obtained yet blurred
            certImg = `
                <div class="card-img-top">
                    <img src="images/certs/${cert.image}" class="img-thumbnail ${cert.obtained != null ? "" : "blur-cert"}">
                </div>
            `
        } 

        let certEntry = `
            <div class="carousel-item ${firstCert ? "active" : ""}">
                <div class="card">
                    ${certImg}
                    <div class="card-body">
                        <h3 class="card-title">${cert.name}</h3>
                        <p class="card-text">${cert.obtained != null ? "Obtained " + cert.obtained : "In Progress"}</p>
                    </div>
                </div>
            </div>
        `
        firstCert = false
        $(".carousel-inner").append(certEntry)
    })
})


// Projects
$.getJSON(PROFILEPATH + "projects.json", (data) => {
    data.forEach((project) => {
        var projectImg = ""
        var projectLink = ""
        if (project.image != null) {
            projectImg = `
                <div class="project-image">
                    <img src="images/projects/${project.image}" />
                </div>
            `
        } 
        if (project.link != null) {
            projectLink = `<a href="${project.link}">View Project</a>`
        }

        let projectEntry = `
            <div class="project shadow-large">
                ${projectImg}
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>
                        ${project.body}
                    </p>
                    ${projectLink}
                </div>
            </div>
        `
        $("#projects .container").append(projectEntry)
    })
})

// SKILLS
$.getJSON(PROFILEPATH + "skills.json", (data) => {
    categoryCounter = 1
    data.forEach((category) => {
        let skillCategoryEntry = `
            <div class="accordion-item">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skills-panel-${categoryCounter}" aria-expanded="true" aria-controls="skills-panel-${categoryCounter}">
                    <h3 class="accordion-header">
                        ${category.title}
                    </h3>
                </button>
                <div id="skills-panel-${categoryCounter}" class="accordion-collapse collapse ${category.show ? "show" : ""}">
                    <div class="accordion-body">
                        <ul>
                            ${"<ul><li>" + category.skills.join("</li><li>") + "</li></ul>"}
                        </ul>                    
                    </div>
                </div>
            </div>
        `
        categoryCounter += 1
        $("#skills .accordion").append(skillCategoryEntry)
    })
})