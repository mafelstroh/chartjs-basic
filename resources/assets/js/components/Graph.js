import Chart from 'chart.js';

export default {
    template: '<canvas width="600" height="400"></canvas>',

    props: ['labels', 'values', 'color'], 

    props: {
        labels: {}, 
        values: {}, 
        color: {
            default: 'rgba(220,220,220,0.2)'
        }
    },

    ready() {
        var data = {
            labels: this.labels,

            datasets: [{
                fillColor: this.color,
                strokeColor: "rgba(220, 220, 220, 0.1)",
                pointColor: "rgba(220, 220, 220, 1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220, 220, 220, 1)",
                data: this.values
            }]
        };
        new Chart(
            this.$el.getContext('2d')
        ).Line(data);
    }
}