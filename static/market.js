const chartOptions = {
	width: 100, height: 70, // chart.resize(250, 150);
	priceScale: {
		position: 'right', // left | right | none  Sets the position to display price scale
		mode: 0,  // Sets the price scale mode ,,PriceScaleMode.Normal, PriceScaleMode.Logarithmic, PriceScaleMode.Percentage
		autoScale: true,
		invertScale: false,
		alignLabels: true, // If true, labels with price data do not overlap
		borderVisible: true,  // If true, price scale border is visible
		borderColor: '#2b2b43',
		scaleMargins: {  // Sets the series margins from the top and bottom chart borders (percent)
			top: 0.2,
			bottom: 0.1,
		},
		drawTicks: true // If true, a small horizontal line is drawn on price axis labels
	},
	timeScale: {
		rightOffset: 0, // Sets the margin space in bars from the right side of the chart
		barSpacing: 6, // Sets the space between bars in pixels
		fixLeftEdge: false, // If true, prevents scrolling to the left of the first historical bar
		lockVisibleTimeRangeOnResize: false, // If true, prevents changing visible time area during chart resizing
		rightBarStaysOnScroll: false, // If false, the hovered bar remains in the same place when scrolling
		borderVisible: true,  // If true, the time scale border is visible
		borderColor: '#2b2b43',
		visible: true,
		timeVisible: false, // If true, the time is shown on the time scale and in the vertical crosshair label
		secondsVisible: true, // If true, seconds are shown on the label of the crosshair vertical line in hh:mm:ss format on intraday intervals
		shiftVisibleRangeOnNewBar: true, // If true, the visible range is shifted by the number of new bars when new bars are added (note that this only applies when the last bar is visible)
//		tickMarkFormatter: (time, tickMarkType, locale) => {  // Allows to override the tick marks formatter (see below)
//			console.log(time, tickMarkType, locale);
//			const year = LightweightCharts.isBusinessDay(time) ? time.year : new Date(time * 1000).getUTCFullYear();
//			return String(year);
//		},
	},
	crosshair: {
		vertLine: {
			color: '#758696',
			width: 1,
			style: 1,
			visible: true,
			labelVisible: true,
			labelBackgroundColor: '#4c525e'
		},
		horzLine: {
			color: '#758696',
			width: 1,
			style: 1,
			visible: true,
			labelVisible: true,
			labelBackgroundColor: '#4c525e'
		},
		mode: 1 // CrosshairMode.Magnet CrosshairMode.Normal Sets the mode of crosshair moving.
	},
	grid: {
		vertLines: {
			color: '#d6dcde',
			style: 1,
			visible: true,
		},
		horzLines: {
			color: '#d6dcde',
			style: 1,
			visible: true,
		},
	},
	watermark: {
		color: 'rgba(11, 94, 29, 0.4)',
		visible: false,
		text: 'NIFTY 50',
		fontSize: 48,
		fontFamily: 'Trebuchet MS', // 'Trebuchet MS', Roboto, Ubuntu, sans-serif
		fontStyle: '',
		horzAlign: 'center', // left | center | right
		vertAlign: 'center', // top | center | bottom 
	},
	layout: {
		backgroundColor: '#ffffff',
		textColor: '#191919',
		fontSize: 11,
		fontFamily: 'Trebuchet MS',
	},
	handleScroll: true,
	handleScroll: {
		mouseWheel: true, // If true, chart scrolling with horizontal mouse wheel is enabled
		pressedMouseMove: true, // If true, chart scrolling with left mouse button pressed is allowed
		horzTouchDrag: true, // If true, the chart handles horizontal pointer movements on touch screens. In this case the webpage is not scrolled. If you set it to false, the webpage is scrolled instead. Keep in mind that if the user starts scrolling the chart vertically or horizontally, scrolling is continued in any direction until the user releases the finger
		vertTouchDrag: true // If true, the chart handles vertical pointer movements on touch screens. In this case the webpage is not scrolled. If you set it to false, the webpage is scrolled instead. Keep in mind that if the user starts scrolling the chart vertically or horizontally, scrolling is continued in any direction until the user releases the finger.
	},
	handleScale: true,
	handleScale: {
		axisPressedMouseMove: true, // { time: true, price: true } Sets time and price axis scaling with left mouse button pressed is allowed
		axisDoubleClickReset: true, // If true, left mouse button double click axis resetting is allowed
		mouseWheel: true, // If true, series scaling with a mouse wheel is enabled
		pinch: true, // If true, series scaling with pinch/zoom gestures (this option is supported on touch devices) is enabled
	},
}
const seriesOptions = { // chart.removeSeries(series); barSeries.update({})
	priceScaleId: 'right', // right if right scale is visible and left if not,  Target price scale to bind new series to
	title: '', // You can name series when adding it to a chart. This name will be displayed on the label next to the last value label
//	visible: true,
	priceLineVisible: true, // If true, the series' price line is displayed on a chart if the series is visible
	priceLineWidth: 1,
	priceLineColor: '', 
	priceLineStyle: 1,  // LineStyle.Solid,Dotted, Dashed, LargeDashed, SparseDotted
	lastValueVisible: true, // If true, the label with the current price is displayed on the price scale if the series is visible
	baseLineVisible: true, // If true, the series' base line is displayed on a chart if the series is visible
	baseLineWidth: 1,
	baseLineColor: '#B2B5BE',
	baseLineStyle: 0,
	priceFormat: {
		type: 'price',  // price | volume | percent | custom
		precision: 2, // Specifies a number of decimal places used for price value display
		minMove: 0.01, // Sets the minimum possible step size for price value movement
//		formatter: price => '$' + price.toFixed(2)  // Sets a formatting function that is used when the type is custom
	},
//	scaleMargins: { // Margins of the price scale of series
//		top: 0.1,
//		bottom: 0.3,
//	},
}
const lineSeriesOption = {
	color: '#2196f3',
	lineStyle: 0, // LineStyle.Solid, Dotted, Dashed, LargeDashed, SparseDotted
	lineWidth: 3,
	crosshairMarkerVisible: true, // If true, the crosshair marker is shown
	crosshairMarkerRadius: 4,
	crosshairMarkerBorderColor: '', // The crosshair border color (an empty string fallbacks the color to series' color under the crosshair)
	crosshairMarkerBackgroundColor: '',
	lineType: 0, // LineType.Simple, withSteps
}
const areaSeriesOption = {
	topColor: 'rgba(46, 220, 135, 0.4)', // Area top color
	bottomColor: 'rgba(40, 221, 100, 0)', // Area bottom color
	lineColor: '#33D778',
	lineStyle: 0,
	lineWidth: 3,
	crosshairMarkerVisible: true,
	crosshairMarkerRadius: 4,
	crosshairMarkerBorderColor: '',
	crosshairMarkerBackgroundColor: '',
}
const candlestickSeriesOption = {
	upColor: '#26a69a', // Growing candles' color
	downColor: '#ef5350', // Falling candles' color
	borderVisible: true, // If true, the borders of a candle are drawn
	wickVisible: true, // If true, the high and low prices are shown as wicks of a candle
	borderColor: '#378658', // Border color of all candles in series
	wickColor: '#737375', // Wicks' color of all candles in series
	borderUpColor: '#26a69a', // Growing candle's border color.
	borderDownColor: '#ef5350', // Falling candle's border color.
	wickUpColor: '#26a69a', // Growing candle's wicks color.
	wickDownColor: '#ef5350', // Falling candle's wicks.
}

response = {
	bmi: {
		s: ['NIFTY 50','NIFTY NEXT 50','NIFTY 500'],
		c: [[13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570.87],[13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570.87],[13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570,87,13577.90,23578.75,13568.77,13570.87]],
		pc: [30590,13577,13577],
		cg: [1.45,2.77,0.99],
		d: [[12,3,7],[30,66,89],[77,40,12]]
	}
}

function a(res, id) { // func Creates indiWidgets cantaing chart, price & name and append each to mid div element eg. id
	var i,miD = document.querySelector(id),
		iww = miD.clientWidth*0.3; // indiWidget  width 3.3 of par div for adjusting 3 div in par
	for(i in res.s){
		var color = res.cg[i] >0 ? 'rgba(38, 166, 154,': 'rgba(239, 83, 80,',  // Set series color base on pct change green or red
			indiWidget = document.createElement('div'), // div with class indiWidgets cantains chart and paragraph of a single indice
			par = document.createElement('p'); // Create paragraph element cantaining price, cg, Name of indices
		par.innerHTML = `<small><span style="color:${color}1";>(${res.cg[i]})</span> ${res.c[i].slice(-1).pop()}</small><br>${res.s[i]}`;
		// After appending chart apoend par into indiWidgets
		indiWidget.style.backgroundColor = `${color} 0.2`;
		indiWidget.classList.add('indiWidget')
		miD.appendChild(indiWidget);
		var chart = LightweightCharts.createChart( indiWidget,{
			width: iww, height: iww*0.7,
			handleScroll: false, handleScale: false,
			priceScale: {position: 'none'},
			timeScale: {visible: false},
			crosshair: {horzLines: {visible: false}, vertLines: {visible: false}},
			grid: {horzLines: {visible: false}, vertLines: {visible: false}},
			layout: {backgroundColor: data.bgColor},
			handleScroll: false,
			handleScale: false,
		})
		chart.addAreaSeries({
			priceLineVisible: false,
			topColor: `${color} 1)`,
			bottomColor: `${color} 0.2)`,
			lineColor: `${color} 1)`,
			lineStyle: 0,
			lineWidth: 2,
			crosshairMarkerVisible: false,
		}).setData(res.c[i].map((x,y)=>({time: y,value:x})));
		chart.addLineSeries({
			priceLineColor: '#778899',
			lineWidth: 0.1,
		}).setData([{time: 0, value: res.pc[i]}])
		chart.timeScale().setVisibleLogicalRange({
			from: 0.4,
			to: 74
		});
		indiWidget.append(par);
	}
	return miD.clientHeight;
}

//a(response.bmi,'#bmi')
//a(response.bmi,'#si')

var data = {
	bgColor: '#f9fcfb'
}

fetch('http://127.0.0.1:5000/dd')
	.then(r=>r.json())
	.then(d=>{
		var chartH = 66,
			mchart = document.querySelector('#mChart'),
			ohlc = d.n.d;
		chartH = chartH + a(d.bmi,'#bmi');
		chartH = chartH + a(d.smi,'#si');
		mchart.style.height = chartH+'px';

		mchart.innerHTML = `<p><h4>NIFTY 50</h4>${d.bmi.c[0].slice(-1).pop()}</p>`
		// CandleStick chart
		LightweightCharts.createChart(mchart, { 
			width: mchart.clientWidth, height: chartH/2,
			priceScale: {borderVisible: false},
			timeScale: {
				rightOffset: 3,
				//fixLeftEdge: false,
				borderVisible: false,
				timeVisible: true,
				secondsVisible: false
			},
			layout: {backgroundColor: data.bgColor},
			grid: {horzLines: {visible: false}, vertLines: {visible: false}},
			crosshair: {mode: 0},
			handleScroll: false,
			handleScale: true,
		}).addCandlestickSeries().setData(
			ohlc[0].map((x,y)=>({
				time: Math.floor(new Date(`20${x}-00:00`).getTime()/1000),
				open: ohlc[1][y],
				high: ohlc[2][y],
				low: ohlc[3][y],
				close: ohlc[4][y]
			}))
		);
	})

