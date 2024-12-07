var PROFILEPATH = "profile/"

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
            projectLink = `<a href="${project.link}" class="btn" target="_blank">View Project</a>`
            // projectLink = `<button type="button" class="btn">View Project</button>`
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