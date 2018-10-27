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
<<<<<<< HEAD
            // console.log(i + '' + j + ' done!');
=======
            console.log(i + '' + j + ' done!');
>>>>>>> cc9677cddba97e79f2fb6fe57116948eb4112b9b
        }
        document.write('            </tr>\n');
    }
    document.write('        </table>\n');
    document.write('    </div>');
    document.write('    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n');
    document.write('    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n');
    document.write('    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n');
    onLoadGame(rows, cols);
    document.write('    <script src=\"./js/main.js\"></script>');
}