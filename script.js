function show() {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = 'block';
}
function hide() {
    const sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "none";
}
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Dhanush_CV.pdf'; 
    link.download = 'Dhanush_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
