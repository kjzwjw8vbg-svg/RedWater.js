// redwater.js for Sandboxels
(function() {
    console.log("RedWater mod loaded!");

    // Function to turn water red
    function makeWaterRed() {
        if (!window.PixelManager || !PixelManager.pixels) return false;

        let changed = false;
        for (let key in PixelManager.pixels) {
            let pixel = PixelManager.pixels[key];
            if (pixel.name.toLowerCase().includes("water")) {
                pixel.color = "#FF0000"; // Red
                changed = true;
            }
        }
        return changed;
    }

    // Try to apply immediately
    if (!makeWaterRed()) {
        console.log("PixelManager not ready yet, retrying...");
    }

    // Keep retrying every 500ms until successful
    const interval = setInterval(() => {
        if (makeWaterRed()) {
            console.log("All water pixels are now red!");
            clearInterval(interval); // Stop once done
        }
    }, 500);

    // Optional: dynamically update existing water on map
    const canvasInterval = setInterval(() => {
        if (window.PixelManager && PixelManager.pixelArray) {
            PixelManager.pixelArray.forEach(p => {
                if (p?.type?.toLowerCase?.()?.includes("water")) {
                    p.color = "#FF0000";
                }
            });
        }
    }, 1000);
})();
