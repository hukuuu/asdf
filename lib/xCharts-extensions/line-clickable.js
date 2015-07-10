var line = xChart.getVis('line')

function enter (self, storage, className, data, callbacks) {
	line.enter.apply(line, arguments)

	var maxlen = data[0].data.length
	var svg = self._svg[0][0]
	var width = ~~svg.getAttribute('width')

	svg.onclick = function(e) {
		var index = Math.floor(e.x/width * maxlen)
		var date = data[0].data[index]
		console.log(date);
		callbacks.click(date)
	}
}

xChart.setVis('line-clickable', {
  enter: enter,
  update: line.update,
  exit: line.exit,
  destroy: destroy
});
