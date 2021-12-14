<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function add7(a) {
            alert(a + 7)
        }
        // add7(0)

        function multiply(number1, number2) {
            alert(number1 * number2);
        }
        // multiply(-8, 7)

        function capitalize(string) {
            alert(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
        }
        // capitalize('raNDOm StrING')

        function lastLetter(last) {
            alert(last.charAt(last.length-1))
        }
        // lastLetter('abcd')
    </script>
</body>
</html>
