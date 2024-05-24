function changeImage() {
    const image = document.getElementById("intro").querySelector("img");
    if (image.src.includes("communication.jpg")) {
      image.src = "connection.jpg";
    } else {
      image.src = "communication.jpg";
    }
  }
  