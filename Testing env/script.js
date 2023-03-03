anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile("assets/nodedata.json", function (data) {
    // create a chart from the loaded data
    var chart = anychart.graph(data);
    // set the title
    chart.title("Testing Network Diagram");

    // set the chart attributes
    chart.nodes().labels().enabled(true);
    chart.nodes().labels().format("{%id}");
    chart.nodes().labels().fontSize(12);
    chart.nodes().labels().fontWeight(600);
    chart.nodes().stroke("none")
    chart.nodes().shape("square");
    chart.nodes().fill("fit");
    

    
    chart.addEventListener('dblClick', onPointClick);
    // draw the chart
    chart.container("container").draw();

    function onPointClick(e) {

      tag = e.domTarget.tag;
      
      if (tag && tag.type == "node") {

        // console.log(tag.id);
        chart.edges(tag.id);
        id = tag.id;

        edgeList = chart.edges(tag.id).b[id].Ns
        console.log(id,edgeList);
        
      }
    }
  });
});


function windowAlert() {

  window.alert("Hello World!");
  
}

