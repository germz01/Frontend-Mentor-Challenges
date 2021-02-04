function displaySharePopup() {
    let shareButtonCoordinates = document.getElementById("share-image").getBoundingClientRect();
    let sharePopup = document.getElementById("popup-message");
    let shareButtonCenter = shareButtonCoordinates["left"] + (shareButtonCoordinates["width"] / 2);

    sharePopup.style["top"] = (shareButtonCoordinates["top"] - (shareButtonCoordinates["height"] * 2)) + "px";
    sharePopup.style["left"] = shareButtonCenter - (sharePopup.offsetWidth / 2) + "px";

    if (sharePopup.style["animation-name" ] === "fadeOut" || sharePopup.style["animation-name"] === "") {
        sharePopup.style["animation"] = "fadeIn 0.5s forwards";
    }
    else {
        sharePopup.style["animation"] = "fadeOut 0.5s forwards";
    }
}