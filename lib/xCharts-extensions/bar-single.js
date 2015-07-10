var bar = xChart.getVis('bar');

function postUpdateScale(self, scaleData, mainData, compData) {
  // bar.postUpdateScale.apply(this, arguments)
  self.xScale2 = d3.scale.ordinal()
    .domain(d3.range(0, mainData.length))
    .rangeRoundBands([0, self.xScale.rangeBand()], 0.08);
}

function enter(self, storage, className, data) {
  bar.enter.apply(this, arguments);
  // Do your custom actions here
}

function update(self, storage, timing) {
  var yZero = self.yZero;
  var domains = storage.bars.length,
    width = self.xScale2.rangeBand() * domains

  window.storage = storage;

  storage.barGroups
    .attr('class', function(d, i) {
      return xChart.visutils.colorClass(this, i);
    })
    .transition().duration(timing)
    .style('opacity', 1)
    .attr('transform', function(d, i) {
      return 'translate(' + self.xScale2(i) + ',0)';
    });
  storage.bars.transition().duration(timing)
    .attr('width', width)
    .attr('x', function(d) {
      return self.xScale(d.x)
    })
    .attr('height', function(d) {
      var height = Math.abs(yZero - self.yScale(d.y));
      return height
    })
    .attr('y', function(d) {
      return (d.y < 0) ? yZero : self.yScale(d.y);
    });
}

function exit(self, storage, timing) {
  bar.exit.apply(this, arguments);
  // Do your custom actions here
}

function destroy(self, storage, timing) {
  bar.destroy.apply(this, arguments);
  // Do your custom actions here
}

xChart.setVis('bar-single', {
  postUpdateScale: postUpdateScale,
  enter: enter,
  update: update,
  exit: exit,
  destroy: destroy
});
