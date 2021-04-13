Webcam.set({
    width:310,
    Height:300,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode: "environment"
    }
})
camera=document.getElementById("camera");

Webcam.attach("#camera");