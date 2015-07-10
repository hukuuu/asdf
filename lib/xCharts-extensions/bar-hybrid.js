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
  var domains = storage.bars[0].length;
  var barslen = storage.bars.length
  var j = 0

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
    .attr('width', self.xScale2.rangeBand() * barslen)
    .attr('x', function(d) {
      return self.xScale(d.x)
    })
    .attr('height', function(d) {
      return getHeight(d.y)
    })
    .attr('y', function(d, i) {
      var y = calculateY(d.y)
      var others = 0
      switch (Math.floor(j / domains)) {
        case 0:
          others = (getHeight(self._mainData[1].data[i].y) + getHeight(self._mainData[2].data[i].y) + getHeight(self._mainData[3].data[i].y));
          break;
        case 1:
          others = (getHeight(self._mainData[2].data[i].y) + getHeight(self._mainData[3].data[i].y));
          break;
        case 2:
          others = getHeight(self._mainData[3].data[i].y);
          break
        default:
          break;
      }
      j++
      return y - others;
    });

  function calculateY(y) {
    return y < 0 ? yZero : self.yScale(y)
  }

  function getHeight(y) {
    var height = Math.abs(yZero - self.yScale(y));
    return height
  }
}

function exit(self, storage, timing) {
  bar.exit.apply(this, arguments);
  // Do your custom actions here
}

function destroy(self, storage, timing) {
  bar.destroy.apply(this, arguments);
  // Do your custom actions here
}

xChart.setVis('bar-hybrid', {
  postUpdateScale: postUpdateScale,
  enter: enter,
  update: update,
  exit: exit,
  destroy: destroy
});
