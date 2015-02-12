var dashboard = dashboard || {};
var productSupportedCtx;
var productSupportedChart;
var productSupportedChart;
var productGoalChart;

$(function() {
    dashboard.init();
    dashboard.bindEvents();
});

var template="<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>";

dashboard.init = function() {
    productSupportedCtx = $('#productSupported').get(0).getContext("2d");
    productGoalCtx=$('#productGoal').get(0).getContext("2d");

    productSupportedChart = new Chart(productSupportedCtx).Pie(data.productSupport,{
    });

    // $('#productSupportedLegend').html(productSupportedChart.generateLegend());

    productGoalChart=new Chart(productGoalCtx).Pie(data.productGoal);
    supportRequestCtx=$('#supportRequest').get(0).getContext("2d");
    supportRequestChart=new Chart(supportRequestCtx).Bar(data.supportRequest)
}

dashboard.bindEvents=function(){
	$('#productSupported').click(function(event){
		console.log(productSupportedChart.getSegmentsAtEvent(event));
	});
}


var data = {
    productSupport: [{
        value: 3,
        color: "#5B9BD5",
        highlight: "#6BA5D9",
        label: "AMO"
    }, {
        value: 28,
        color: "#ED7D31",
        highlight: "#EF8A46",
        label: "AEM"
    }, {
        value: 27,
        color: "#A5A5A5",
        highlight: "#AEAEAE",
        label: "Analytics"
    }, {
        value: 27,
        color: "#FFC000",
        highlight: "#FFC619",
        label: "Campaign"
    },
    {
        value: 0,
        color: "#F0F0F0",
        highlight: "#F0F0F0",
        label: "Primetime"
    },
    {
        value: 0,
        color: "#F0F0F0",
        highlight: "#F0F0F0",
        label: "Social"
    },
    {
        value: 15,
        color: "#255E91",
        highlight: "#3B6E9C",
        label: "Target"
    }
    ],
    productGoal: [{
        value: 5,
        color: "#5B9BD5",
        highlight: "#6BA5D9",
        label: "AMO"
    }, {
        value: 55,
        color: "#ED7D31",
        highlight: "#EF8A46",
        label: "AEM"
    }, {
        value: 15,
        color: "#A5A5A5",
        highlight: "#AEAEAE",
        label: "Analytics"
    },
    {
        value: 14,
        color: "#FFC000",
        highlight: "#FFC619",
        label: "Campaign"
    },
    {
        value: 4,
        color: "#4472C4",
        highlight: "#5780CA",
        label: "Primetime"
    },
    {
        value: 1,
        color: "#70AD47",
        highlight: "#7EB559",
        label: "Social"
    },
    {
        value: 6,
        color: "#255E91",
        highlight: "#3B6E9C",
        label: "Target"
    }],
    supportRequest:{
    labels: ["New","Existing"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#5B9BD5",
            strokeColor: "#255E91",
            highlightFill: "#6BA5D9",
            highlightStroke: "#3B6E9C",
            data: [31, 19]
        }
    ]
}
}