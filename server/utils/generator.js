const navbarDropDownContent = (skills) => {
    let str = ``;
    for (let skill of skills) {
        str += `<a href="./${skill.name.toLowerCase()}/${skill.slug}.html" title="${skill.title}" 
        class="w3-bar-item w3-button">${skill.name}</a>`
    }
    return str;
}

const lessonSidebarContent = (lessons) => {
    let str = ``;
    for (let lesson of lessons) {
        str += `<a href="./${lesson.slug}.html" title="${lesson.title}" class="w3-bar-item w3-button">${lesson.title}</a>`
    }
    return str;
}

const generation = (item, lesson, skills, prev, next) => {
    return new Promise((resolve, reject) => {
        resolve(`<!DOCTYPE html>
        <html>
        <title>${lesson.title}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="${lesson.metaDescription}." />
        <meta name="Keywords" content="${lesson.keywords}." />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes">
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="www.raptei.com" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="author" content="raptei.com">
        <link rel="stylesheet" href="../content/css/raptei.css">
        <link rel="stylesheet" href="../content/css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <body>
            <!-- mobile version -->
            <div class="w3-hide-medium w3-hide-large">
                <a href="raptei.com" title="rapid technology investigation" ><img src="../content/images/logo.svg" alt="raptei.com" height="50px" width="350px"></a>
                <div id="myHeader" class="raptei-navbar">
                    <div class="w3-bar">
                        <a class="w3-bar-item w3-padding-large w3-left" title="raptei.com"  href="javascript:void(0)" id="openSideBar"
                            onclick="toggleSideBar()">
                            <i class="fa fa-bars fa-2x"></i>
                        </a>
                        <a class="w3-bar-item w3-button w3-right" title="raptei.com"  href="/"><i class="fa fa-home fa-2x"></i></a>
                        <div class="w3-dropdown-hover">
                            <button class="w3-button dropDown-button" onclick="toggleMenuBar()">Tutorials</button>
                            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                            ${navbarDropDownContent(skills)}
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="w3-row">
                    <div class="w3-half">
                        <div class="w3-container w3-center advertisement">
                            <p>Advertisement</p>
                        </div>
                        <br />
                        <h2 class="w3-center">${lesson.title}</h2>
                        <div class="w3-container">
                            <div class="w3-bar">
                                ${ prev ? `<a class="w3-bar-item w3-left bgBlack" title="${prev.title}" href="./${prev.slug}.html">Previous</a>` : ``}
                                ${ next ? `<a class="w3-bar-item  w3-right bgBlack" title="${next.title}"  href="${next.slug}.html">Next</a>` : ``}
                            </div>
                         </div>
                        <hr />
                        <div class="w3-container">
                            <article>
                            ${lesson.content}
                            </article>
                        </div>
                        <hr />
                        <div class="w3-container">
                            <div class="w3-center advertisement">
                                Advertisement
                            </div>
                        </div>
                        <div class="w3-container">
                            <div class="w3-bar">
                                ${ prev ? `<a class="w3-bar-item w3-left bgBlack" title="${prev.title}" href="./${prev.slug}.html">Previous</a>` : ``}
                                ${ next ? `<a class="w3-bar-item  w3-right bgBlack" title="${next.title}"  href="${next.slug}.html">Next</a>` : ``}
                            </div>
                         </div>
                    </div>
                    <nav class="w3-sidebar w3-collapse w3-white w3-animate-left sidebar-style" id="mySidebar">
                        <div class="w3-bar-block">
                            <a class="w3-bar-item bgBlack" href="./${item.slug}.html" title="${item.title}"> ${item.title}
                               ${lessonSidebarContent(item.lessons)}
                            </a>
                        </div>
                    </nav>
                </div>
                <footer>
                    <div class="w3-bar">
                        <a class="w3-bar-item" title="Privacy Policy" href="#">Privacy Policy</a>
                        <a class="w3-bar-item" title="Terms of Services" href="#">Terms of Services</a>
                    </div>
                    <div class="w3-center">
                        <a> &copy; raptei.com</a>
                    </div>
                </footer>
            </div>
            
            <!-- web version -->
            <div class="w3-hide-small">
            <a href="raptei.com" title="rapid technology investigation" ><img src="../content/images/logo.svg" alt="raptei.com" height="50px" width="350px"></a>
                <div id="myHeader">
                    <div class="w3-bar raptei-navbar">
                        <a class="w3-bar-item w3-button home-anchor-style" title="raptei.com" href="/">Home</a>
                        <div class="w3-dropdown-hover">
                            <button class="w3-button">Tutorials</button>
                            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                            ${navbarDropDownContent(skills)}
                            </div>
                        </div>
                    </div>
                </div>
        
                <header class="raptei-header">
                    <div class="w3-container banner-header w3-center">
                        <h1>${item.title}</h1>
                        <a class="raptei-btn" title="Latest ${item.title}">
                            Learn ${item.name} Rapidly</a>
                    </div>
                </header>
        
                <div class="w3-row">
                    <div class="w3-quarter">
                        <div class="w3-bar-block">
                            <a class="w3-bar-item bgBlack" title="${item.title}" href="./${item.slug}.html"> ${item.title}
                            ${lessonSidebarContent(item.lessons)}
                            </a>
                        </div>
                    </div>
        
                    <div class="w3-half ">
                        <div class="w3-container">
                            <br />
                            <h2 class="w3-center">${lesson.title}</h2>
                            <div class="w3-bar">
                                ${ prev ? `<a class="w3-bar-item w3-left bgBlack" title="${prev.title}" href="./${prev.slug}.html">Previous</a>` : ``}
                                ${ next ? `<a class="w3-bar-item  w3-right bgBlack" title="${next.title}"  href="${next.slug}.html">Next</a>` : ``}
                            </div>
                            <hr />
                            <article>
                                ${lesson.content}
                            </article>
                            <hr />
                            <div class="w3-center">
                                Advertisement
                            </div>
                            <div class="w3-bar">
                                ${ prev ? `<a class="w3-bar-item w3-left bgBlack" title="${prev.title}" href="./${prev.slug}.html">Previous</a>` : ``}
                                ${ next ? `<a class="w3-bar-item  w3-right bgBlack" title="${next.title}"  href="${next.slug}.html">Next</a>` : ``}
                            </div>
                        </div>
                    </div>
        
                    <div class="w3-quarter">
                        <div class="w3-center">
                            Advertisement
                        </div>
                    </div>
                </div>
        
                <footer>
                    <div class="w3-bar">
                        <a class="w3-bar-item" title="Privacy Policy" href="#">Privacy Policy</a>
                        <a class="w3-bar-item" title="Terms of Services" href="#">Terms of Services</a>
                    </div>
                    <div class="w3-center">
                        <a> &copy; raptei.com</a>
                    </div>
                </footer>
            </div>
            <script src="../content/js/raptei.js"></script>
        </body>
        </html>`)
    });
}

module.exports = {
    generation
}