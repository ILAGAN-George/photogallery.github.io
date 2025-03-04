function upDate(previewPic){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}

function unDo(){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('original-image.jpg')";
    imageDiv.textContent = "Hover over an image below";
}