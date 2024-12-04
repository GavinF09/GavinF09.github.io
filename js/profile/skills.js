var PROFILEPATH = "profile/"

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
                            ${'<ul><li>' + category.skills.join('</li><li>') + '</li></ul>'}
                        </ul>                    
                    </div>
                </div>
            </div>
        `
        categoryCounter += 1
        $("#skills .accordion").append(skillCategoryEntry)
    })
})