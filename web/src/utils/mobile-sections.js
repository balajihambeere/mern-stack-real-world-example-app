
export const headerDropdownContent = (item) => {
    let str = ``;
    for (let member of item.categories) {
        str += ` <a href="./${member.category}/${member.slugTitle}.html" title="${member.title}" class="w3-bar-item w3-button">${member.category}</a>`
    }
    return str;
}

export const headElement = (item) => {
    return `
    <head>
        <meta charset="UTF-8">
        <title>${item.header.title}</title>
        <meta name="description" content="${item.header.metaDescription}." />
        <meta name="Keywords" content="${item.header.keywords}." />
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
        </head>`;
}

export const navbar = (item) => {
    return `<a href="https://raptei.com"><img src="../content/images/logo.svg" height="50px" width="350px"></a>
        <div id="myHeader">
            <div class="w3-bar raptei-header">
                <a class="w3-bar-item w3-padding-large w3-hide-medium w3-hide-large w3-left" href="javascript:void(0)"
                    id="openSideBar" onclick="toggleSideBar()">
                    <i class="fa fa-bars fa-2x"></i>
                </a>
                <a class="w3-bar-item w3-button w3-right w3-hide-medium w3-hide-large" href="../index.html"><i
                        class="fa fa-home fa-2x"></i></a>
                <a class="w3-bar-item w3-button w3-hide-small" style="margin-left:75px;" href="../index.html">Home</a>
                <div class="w3-dropdown-hover">
                    <button class="w3-button">Tutorials</button>
                    <div class="w3-dropdown-content w3-bar-block w3-card-4">
                     ${headerDropdownContent(item)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const body = (item) => {
    return {
        __html: `<!DOCTYPE html>
        <html>
        ${headElement(item)}
        <body>
        ${navbar(item)}
        <script src="../content/js/raptei.js"></script>
        </body>
        </html>`}
}