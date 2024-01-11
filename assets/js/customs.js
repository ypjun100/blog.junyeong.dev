window.onload = () => {
    var si = $("#search-input"), pw = $("#panel-wrapper");

    si.on('input', () => {
        if (si.val() === "") {
            pw.removeClass("unloaded");
        } else {
            pw.addClass("unloaded");
        }
    });
};