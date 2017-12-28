// Ext.define('admin.view.chart.Line',{
// extend:'Ext.chart.CartesianChart',
// alias : 'widget.chartLine',
// store: 'ChartLineStore',
// axes: [{
// type: 'numeric',
// position: 'left',
// fields: ['data1'],
// title: {
// text: '在线人数',
// fontSize: 12
// },
// grid: true,
// minimum: 0
// }, {
// type: 'category',
// position: 'bottom',
// fields: ['name'],
// title: {
// text: '游戏名称',
// fontSize: 12
// }
// }],
// series: [{
// type: 'line',
// highlight: {
// size: 7,
// radius: 7
// },
// style: {
// stroke: 'rgb(143,203,203)'
// },
// xField: 'name',
// yField: 'data1',
// marker: {
// type: 'path',
// path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
// stroke: 'blue',
// lineWidth: 0
// }
// }, {
// type: 'line',
// highlight: {
// size: 7,
// radius: 7
// },
// xField: 'name',
// yField: 'data2',
// marker: {
// type: 'circle',
// radius: 4,
// lineWidth: 0
// }
// }, {
// type: 'line',
// highlight: {
// size: 7,
// radius: 7
// },
// xField: 'name',
// yField: 'data3',
// marker: {
// type: 'circle',
// radius: 4,
// lineWidth: 0
// }
// }, {
// type: 'line',
// highlight: {
// size: 7,
// radius: 7
// },
// xField: 'name',
// yField: 'data4',
// marker: {
// type: 'circle',
// radius: 4,
// lineWidth: 0
// }
// }, {
// type: 'line',
// highlight: {
// size: 7,
// radius: 7
// },
// xField: 'name',
// yField: 'data5',
// marker: {
// type: 'circle',
// radius: 4,
// lineWidth: 0
// }
// }],
// initComponent: function(){
// this.callParent(arguments);
// }
// });
