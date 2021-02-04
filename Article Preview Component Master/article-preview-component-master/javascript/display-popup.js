function displaySharePopup() {
    let shareButtonCoordinates = document.getElementById("share-image").getBoundingClientRect();
    let sharePopup = document.getElementById("popup-message");
    let shareButtonCenter = shareButtonCoordinates["left"] + (shareButtonCoordinates["width"] / 2);

    sharePopup.style["top"] = (shareButtonCoordinates["top"] - (shareButtonCoordinates["height"] * 2)) + "px";
    sharePopup.style["left"] = shareButtonCenter - (sharePopup.offsetWidth / 2) + "px";  
    sharePopup.style["animation"] = "fadeIn 0.5s forwards";

    document.getElementById("share-image").style["animation"] = "invertColor 0.5s forwards"
}