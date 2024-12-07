var PROFILEPATH = "profile/"

$.getJSON(PROFILEPATH + "certs.json", (data) => {
    // swap position of first and second entry, so the first entry will be in the center of the carousel
    [data[0], data[1]] = [data[1], data[0]]
    // first entry need to have active class
    // let firstCert = true
    let certCounter = 0
    data.forEach((cert) => {
        certCounter += 1
        var certImg = ""
        var certExpiry = "&nbsp; " // invisible character to make it take up space 
        if (cert.image != null) {
            // make cert that has not been obtained yet blurred
            certImg = `
                <div class="card-img-top">
                    <img src="images/certs/${cert.image}" class="img-thumbnail ${cert.obtained != null ? "" : "blur-cert"}">
                </div>
            `
        } 
        if (cert.expiry != null) {
            // todo change between expires and expired
            certExpiry = `
                <p>${"Expires " + cert.expiry }</p>
            `
        }

        let certEntry = `
            <div class="carousel-item ${certCounter == 1 ? "active" : ""}">
                <div class="card">
                    ${certImg}
                    <div class="card-body">
                        <h3 class="card-title">${cert.name}</h3>
                        <div class="card-text">
                            <p>${cert.obtained != null ? "Obtained " + cert.obtained : "In Progress"}</p>
                            <p>${certExpiry}</p>
                        </div>
                    </div>
                    <div class="card-body"><!-- add space below for carousel indicator --><div>
                </div>
            </div>
        `
        $(".carousel-inner").append(certEntry)
        // first button is already on index.html, add more to match no of certs
        if (certCounter != 1) {
            $(".carousel-indicators").append(
                `
                    <button type="button" data-bs-target="#certCarousel" data-bs-slide-to="${certCounter-1}" aria-label="Slide ${certCounter}"></button>
                `
            )
        }
    })
})
