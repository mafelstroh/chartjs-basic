import Chart from 'chart.js';

export default {
    template: '<canvas width="600" height="400" id="graph"></canvas>',

    ready() {
        var data = {
            labels: ['January', 'February', 'March'],

            datasets: [{
                fillcolor: "rgba(220, 220, 220, 0.2)",
                strokeCOlor: "rgba(220, 220, 220, 0.1)",
                pointColor: "rgba(220, 220, 220, 1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220, 220, 220, 1)",
                data: [30, 122, 90]
            }]
        };
        
        var context = document.querySelector('#graph').getContext('2d');

        new Chart(context).Line(data);
    }
}