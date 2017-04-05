$(document).ready(function () {
    $('#generate').click(function(){
        var output = $('#outputText');
        output.hide();
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        $.get(baseUrl + 'generate', function (data) {
            output.html(data);
            output.fadeIn();
        });
    });
});
