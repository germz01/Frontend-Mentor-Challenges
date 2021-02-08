document.querySelector("#share-image").addEventListener("click", function() {
    let sharePopup = document.querySelector("#popup-message");
    let shareButtonCenter = this.getBoundingClientRect()["left"] + (this.getBoundingClientRect()["width"] / 2);

    sharePopup.style["top"] = (this.getBoundingClientRect()["top"] - (this.getBoundingClientRect()["height"] * 2)) + "px";
    sharePopup.style["left"] = shareButtonCenter - (sharePopup.offsetWidth / 2) + "px";

    if (sharePopup.style["animation-name" ] === "fadeOut" || sharePopup.style["animation-name"] === "") {
        sharePopup.style["animation"] = "fadeIn 0.5s forwards";
    }
    else {
        sharePopup.style["animation"] = "fadeOut 0.5s forwards";
    }
});