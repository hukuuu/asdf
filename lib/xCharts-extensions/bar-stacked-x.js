var bar = xChart.getVis('bar');
var barStackedX = {
  postUpdateScale: function(self, scaleData, mainData, compData) {
    bar.postUpdateScale.apply(this, arguments)
  },
  enter: function(self, storage, className, data) {
    bar.enter.apply(this, arguments);
    // Do your custom actions here
  },
  update: function(self, storage, timing) {
    var yZero = self.yZero;
    var i = 0, 
      margin = 1,
      width = self.xScale2.rangeBand() + margin, 
      domainMax = storage.bars[0].length;

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
      .attr('width', self.xScale2.rangeBand())
      .attr('x', function(d) {
        return self.xScale(d.x) + width * (Math.floor(i++/domainMax))
      })
      .attr('height', function(d) {
        return Math.abs(yZero - self.yScale(d.y));
      })
      .attr('y', function(d) {
        return (d.y < 0) ? yZero : self.yScale(d.y);
      });
  },
  exit: function(self, storage, timing) {
    bar.exit.apply(this, arguments);
    // Do your custom actions here
  },
  destroy: function(self, storage, timing) {
    bar.destroy.apply(this, arguments);
    // Do your custom actions here
  },
};
xChart.setVis('bar-stacked-x', barStackedX);