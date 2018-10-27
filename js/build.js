function build(rows, cols) {
    document.body.remove();
    document.write('<link rel=\"stylesheet\" href=\"./css/main.css\">\n');
    document.write('    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\"\n');
    document.write('        crossorigin=\"anonymous\">');
    document.write('<div id=\"main\" class=\"main\">\n');
    document.write('        <table class=\"container \">\n');
    for (let i = 0; i < rows; i++) {
        document.write('            <tr class=\"row row justify-content-md-center\">\n');
        for (let j = 0; j < cols; j++) {
            document.write('                <td class=\"col-\" onclick=\"d(' + i + ',' + j + ')\" id=\"c' + i + '' + j + '\"></td>\n');
            // console.log(i + '' + j + ' done!');
        }
        document.write('            </tr>\n');
    }
    document.write('        </table>\n');
    document.write('    </div>');
    onLoadGame(rows, cols);
    document.write('    <script src=\"./js/main.js\"></script>');
}