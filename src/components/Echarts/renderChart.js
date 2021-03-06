import toString from '../../util/toString';

export default function renderChart(props) {
  const height = props.height || 400;
  return `
    document.getElementById('main').style.height = "${height}px";
    var myChart = window.echarts.init(document.getElementById('main'));
    myChart.setOption(${toString(props.option)});
  `
}
