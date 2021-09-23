const newsContent = document.getElementById("news-content");

let panelIsClosed = false;

let panelOptions = {
    position: "center",
    container: "window",
    theme: {
        bgContent: '#fff',
        colorHeader: '#000',
    },
    headerTitle: "News",
    // headerControls: {
    //     minimize: 'remove',
    //     maximize: 'remove',
    //     smallify: "remove"
    // },
    headerControls: 'closeonly xs',
    content: newsContent.innerHTML,
    contentSize: {
        // width: () => window.innerWidth * 0.6,
        // height: () => window.innerHeight * 0.8,
        width: "500px",
        height: "900px",
    },
    // contentOverflow: 'scroll',
    //contentAjax: 'docs/sample-content/sampleContent.html',
    dragit: {
        // cursor: 'grab',
        opacity: 1,
    },
    resizeit: {
        disable: true
    },
    onwindowresize: true,
    maximizedMargin: 10,
    syncMargins: true,
    callback: function(panel) {
        
        
    }
};

let panel = jsPanel.create(panelOptions);

// function resize() {
//     //panel.resize();
//     console.log("resize");
// }

// window.addEventListener('resize', resize);

// setup close event handler function
let panelCloseHandler = function(event) {
    panelIsClosed = true;
    console.log("panel closed !")
}

// assign close handler to event
document.addEventListener('jspanelclosed', panelCloseHandler, false);

// open panel window
function openModalWindow() {
    if(panelIsClosed) {
        panel = jsPanel.create(panelOptions);
        panelIsClosed = false;
    } else {
        console.log("panel is already opened !");
    }
}

let navNewsElement = document.getElementById("nav-news");
navNewsElement.addEventListener("click", openModalWindow);