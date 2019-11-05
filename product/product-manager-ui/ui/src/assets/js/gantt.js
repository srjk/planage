google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }

  function drawChart(Row) {
    console.log('*********', Row);

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows(Row
      // ['Research', 'Find sources',new Date(2015, 2, 1), new Date(2015, 2, 5), null,  35,  null],
      // ['Write', 'Write paper',null, new Date(2015, 2, 9), daysToMilliseconds(3),  35,  'Research'],
      // ['Cite', 'Create bibliography',new Date(2015, 2, 1), new Date(2015, 2, 5), null,  35,  null],
      // ['Write', 'Write paper',null, new Date(2015, 2, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
      // ['Cite', 'Create bibliography',null, new Date(2015, 2, 7), daysToMilliseconds(1), 20, 'Research'],
      // ['Complete', 'Hand in paper', null, new Date(2015, 2, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
      //  ['Kite', 'Kreate bibliography',null, new Date(2015, 2, 22), daysToMilliseconds(3), 20, 'Complete'],
      // ['Outline', 'Outline paper',null, new Date(2015, 2, 6), daysToMilliseconds(1), 100, 'Research']
    );

    var options = {
      height: 275
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
  }

  function ganttChart(Row){
    drawChart(Row);
  }

