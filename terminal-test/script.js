anychart.onDocumentReady(function () {
  anychart.data.loadJsonFile("assets/nodedata.json", function (data) {
    // create a chart from the loaded data
    chart = anychart.graph(data);
    // set the title
    chart.title("Testing Network Diagram");

    // set the chart attributes
    chart.nodes().labels().enabled(true);
    chart.nodes().labels().format("{%id}");
    chart.nodes().labels().fontSize(20);
    chart.nodes().height(100);
    chart.nodes().labels().fontWeight(600);
    chart.nodes().stroke("none");
    chart.nodes().shape("square");
  

    
    chart.group('router').fill({"src":"assets/router.png", "mode":"fit"});
    chart.group('pc').fill({"src":"assets/pc.png", "mode":"fit"});
    chart.group('switch').fill({"src":"assets/switch.png", "mode":"fit"});
    chart.group('cloud').fill({"src":"assets/cloud.png", "mode":"fit"});

    
    chart.addEventListener('dblClick', onPointClick);
    // draw the chart
    chart.container("container").draw();

    function onPointClick(e) {

      var tag = e.domTarget.tag;
      
      if (tag && tag.type == "node") {

        var id = tag.id;
        var edgeList = chart.edges(tag.id).b[id].Ns

        openTerminal()
        console.log(id,edgeList);
        
      }
    }

  });
  
});

function fitContent(){
  chart.fit();
}

function openTerminal(){
  var x = document.getElementById("terminalContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
}


