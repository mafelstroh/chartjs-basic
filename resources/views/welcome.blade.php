<!DOCTYPE html>
<html>
    <head>
        <title>chartjs-basic</title>
    </head>
    <body>
        <div class="container">
            <graph :labels="['January', 'February', 'March']" 
                   :values="[10, 42, 4]"
                   color="blue"
            ></graph>
        </div>

        <script src="/js/main.js"></script>
    </body>
</html>
