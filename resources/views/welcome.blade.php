<!DOCTYPE html>
<html>
    <head>
        <title>chartjs-basic</title>
    </head>
    <body>
        <div class="container">
            <graph :labels="['January', 'February', 'March']" 
                   :values="[10, 42, 4]"
            ></graph>
        </div>

        <div class="container">
            <graph :labels="['April', 'May', 'June']" 
                   :values="[800, 450, 12]"
                   color="red"
            ></graph>
        </div>

        <script src="/js/main.js"></script>
    </body>
</html>
