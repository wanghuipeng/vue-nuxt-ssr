function resizeHeight() {
    var height = getViewPortHeight();

    var content = document.getElementById("content");
    // var listl = document.getElementById("listl")
    // var listr = document.getElementById("listr")

    content.style.height = height - 77 + "px"
        // listl.style.height = height - 210 + "px"
        // listr.style.height = height - 210 + "px"

    function getViewPortHeight() {
        return document.documentElement.clientHeight || document.body.clientHeight;
    }
}
window.onresize = resizeHeight
window.onload = resizeHeight