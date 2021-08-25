if(typeof firstInjection === "undefined")
{
    firstInjection = true
}

document.addEventListener("DOMContentLoaded", () => {
    if(firstInjection === false) return;

    // Search for video info div
    const videoInfo = document.querySelector("#video-info");
    const uchaSeTrailerPlayer = document.querySelector("#ucha-player-trailer");

    if(videoInfo) {
        if(uchaSeTrailerPlayer) {
            uchaPlayerData = uchaSeTrailerPlayer?.dataset?.params;
            
            if(uchaPlayerData) {
                uchaPlayerData = JSON.parse(uchaPlayerData);
                uchaPlayerData.sources.main.smil = uchaPlayerData.sources.main.smil.replaceAll("/smil:trailers/registration/", "/smil:videos/").replaceAll(/\?uchaendtime=\d+&uchastarttime=\d+&uchahash=\S+=&/gm, "?");
                uchaPlayerData.thumbnails.src = uchaPlayerData.thumbnails.src.replaceAll("/trailers/registration/", "/videos/");

                document.querySelector("#ucha-player-trailer").dataset.params = JSON.stringify(uchaPlayerData);
                videoInfo.insertAdjacentHTML("beforeend", `<div class="col-12 col-sm-auto pt-md-2 pt-1 d-flex align-items-center"><div class="watchFullVideoButton"><span id="dl-text" class="d-inline-block text-xxs-semibold" style="vertical-align: middle;">Гледате ЦЯЛОТО видео 🤩</span></div></div>`);
            
                document.getElementById("watch-video-id")?.remove();
            }
        }
        else {
            videoInfo.insertAdjacentHTML("beforeend", `<div class="col-12 col-sm-auto pt-md-2 pt-1 d-flex align-items-center"><div class="watchFullVideoButton"><span id="dl-text" class="d-inline-block text-xxs-semibold" style="vertical-align: middle;">Това видео е безплатно 😅</span></div></div>`);
        }

        console.log("[Ucha.se Smarty] Initialized.");
        firstInjection = false;
    }
});