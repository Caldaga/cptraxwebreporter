<script type="text/javascript">
	var day30 = moment().subtract(30, 'days').format('MMM Do');
	var day29 = moment().subtract(29, 'days').format('MMM Do');
	var day28 = moment().subtract(28, 'days').format('MMM Do');
	var day27 = moment().subtract(27, 'days').format('MMM Do');
	var day26 = moment().subtract(26, 'days').format('MMM Do');
	var day25 = moment().subtract(25, 'days').format('MMM Do');
	var day24 = moment().subtract(24, 'days').format('MMM Do');
	var day23 = moment().subtract(23, 'days').format('MMM Do');
	var day22 = moment().subtract(22, 'days').format('MMM Do');
	var day21 = moment().subtract(21, 'days').format('MMM Do');
	var day20 = moment().subtract(20, 'days').format('MMM Do');
	var day19 = moment().subtract(19, 'days').format('MMM Do');
	var day18 = moment().subtract(18, 'days').format('MMM Do');
	var day17 = moment().subtract(17, 'days').format('MMM Do');
	var day16 = moment().subtract(16, 'days').format('MMM Do');
	var day15 = moment().subtract(15, 'days').format('MMM Do');
	var day14 = moment().subtract(14, 'days').format('MMM Do');
	var day13 = moment().subtract(13, 'days').format('MMM Do');
	var day12 = moment().subtract(12, 'days').format('MMM Do');
	var day11 = moment().subtract(11, 'days').format('MMM Do');
	var day10 = moment().subtract(10, 'days').format('MMM Do');
	var day9 = moment().subtract(9, 'days').format('MMM Do');
	var day8 = moment().subtract(8, 'days').format('MMM Do');
	var day7 = moment().subtract(7, 'days').format('MMM Do');
	var day6 = moment().subtract(6, 'days').format('MMM Do');
	var day5 = moment().subtract(5, 'days').format('MMM Do');
	var day4 = moment().subtract(4, 'days').format('MMM Do');
	var day3 = moment().subtract(3, 'days').format('MMM Do');
	var day2 = moment().subtract(2, 'days').format('MMM Do');
	var day1 = moment().subtract(1, 'days').format('MMM Do');
	var day0 = moment().format('MMM Do');
	new Chart(document.getElementById("ad-line"), {
		type: 'line',
		data: {
			labels: [day30,day29,day28,day27,day26,day25,day24,day23,day22,day21,day20,day19,day18,day17,day16,day15,day14,day13,day12,day11,day10,day9,day8,day7,day6,day5,day4,day3,day2,day1,day0],
			datasets: [
				{ 
					data: [
						<?php echo addslashes($adLineUserQueryResults[0][1])?>,
						<?php echo addslashes($adLineUserQueryResults[1][1])?>,
						<?php echo addslashes($adLineUserQueryResults[2][1])?>,
						<?php echo addslashes($adLineUserQueryResults[3][1])?>,
						<?php echo addslashes($adLineUserQueryResults[4][1])?>,
						<?php echo addslashes($adLineUserQueryResults[5][1])?>,
						<?php echo addslashes($adLineUserQueryResults[6][1])?>,
						<?php echo addslashes($adLineUserQueryResults[7][1])?>,
						<?php echo addslashes($adLineUserQueryResults[8][1])?>,
						<?php echo addslashes($adLineUserQueryResults[9][1])?>,
						<?php echo addslashes($adLineUserQueryResults[10][1])?>,
						<?php echo addslashes($adLineUserQueryResults[11][1])?>,
						<?php echo addslashes($adLineUserQueryResults[12][1])?>,
						<?php echo addslashes($adLineUserQueryResults[13][1])?>,
						<?php echo addslashes($adLineUserQueryResults[14][1])?>,
						<?php echo addslashes($adLineUserQueryResults[15][1])?>,
						<?php echo addslashes($adLineUserQueryResults[16][1])?>,
						<?php echo addslashes($adLineUserQueryResults[17][1])?>,
						<?php echo addslashes($adLineUserQueryResults[18][1])?>,
						<?php echo addslashes($adLineUserQueryResults[19][1])?>,
						<?php echo addslashes($adLineUserQueryResults[20][1])?>,
						<?php echo addslashes($adLineUserQueryResults[21][1])?>,
						<?php echo addslashes($adLineUserQueryResults[21][1])?>,
						<?php echo addslashes($adLineUserQueryResults[23][1])?>,
						<?php echo addslashes($adLineUserQueryResults[24][1])?>,
						<?php echo addslashes($adLineUserQueryResults[25][1])?>,
						<?php echo addslashes($adLineUserQueryResults[26][1])?>,
						<?php echo addslashes($adLineUserQueryResults[27][1])?>,
						<?php echo addslashes($adLineUserQueryResults[28][1])?>,
						<?php echo addslashes($adLineUserQueryResults[29][1])?>,
						<?php echo addslashes($adLineUserQueryResults[30][1])?>
					],
					label: "User Changes",
					borderColor: "#3cba9f",
					fill: false,
				},
				{ 
					data: [
						<?php echo addslashes($adLineGroupQueryResults[0][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[1][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[2][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[3][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[4][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[5][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[6][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[7][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[8][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[9][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[10][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[11][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[12][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[13][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[14][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[15][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[16][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[17][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[18][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[19][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[20][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[21][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[21][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[23][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[24][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[25][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[26][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[27][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[28][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[29][1])?>,
						<?php echo addslashes($adLineGroupQueryResults[30][1])?>
					],
					label: "Group Changes",
					borderColor: "#c45850",
					fill: false,
				}, 
				{ 
					data: [
						<?php echo addslashes($adLineCompQueryResults[0][1])?>,
						<?php echo addslashes($adLineCompQueryResults[1][1])?>,
						<?php echo addslashes($adLineCompQueryResults[2][1])?>,
						<?php echo addslashes($adLineCompQueryResults[3][1])?>,
						<?php echo addslashes($adLineCompQueryResults[4][1])?>,
						<?php echo addslashes($adLineCompQueryResults[5][1])?>,
						<?php echo addslashes($adLineCompQueryResults[6][1])?>,
						<?php echo addslashes($adLineCompQueryResults[7][1])?>,
						<?php echo addslashes($adLineCompQueryResults[8][1])?>,
						<?php echo addslashes($adLineCompQueryResults[9][1])?>,
						<?php echo addslashes($adLineCompQueryResults[10][1])?>,
						<?php echo addslashes($adLineCompQueryResults[11][1])?>,
						<?php echo addslashes($adLineCompQueryResults[12][1])?>,
						<?php echo addslashes($adLineCompQueryResults[13][1])?>,
						<?php echo addslashes($adLineCompQueryResults[14][1])?>,
						<?php echo addslashes($adLineCompQueryResults[15][1])?>,
						<?php echo addslashes($adLineCompQueryResults[16][1])?>,
						<?php echo addslashes($adLineCompQueryResults[17][1])?>,
						<?php echo addslashes($adLineCompQueryResults[18][1])?>,
						<?php echo addslashes($adLineCompQueryResults[19][1])?>,
						<?php echo addslashes($adLineCompQueryResults[20][1])?>,
						<?php echo addslashes($adLineCompQueryResults[21][1])?>,
						<?php echo addslashes($adLineCompQueryResults[21][1])?>,
						<?php echo addslashes($adLineCompQueryResults[23][1])?>,
						<?php echo addslashes($adLineCompQueryResults[24][1])?>,
						<?php echo addslashes($adLineCompQueryResults[25][1])?>,
						<?php echo addslashes($adLineCompQueryResults[26][1])?>,
						<?php echo addslashes($adLineCompQueryResults[27][1])?>,
						<?php echo addslashes($adLineCompQueryResults[28][1])?>,
						<?php echo addslashes($adLineCompQueryResults[29][1])?>,
						<?php echo addslashes($adLineCompQueryResults[30][1])?>
					],
					label: "Computer Changes",
					borderColor: "#e8c3b9",
					fill: false,
				}, 
			]
		},
		options: {
			title: {
				display: true,
				text: 'User, Group, and Computer Changes Last 30 Days',
				fontSize: 16
			},
			scales: {
				xAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 20,
						fontSize: 14
					}
				}],
				yAxes: [{
					ticks: {
						autoSkip: true,
						fontSize: 14
					}
				}]
			},
			legend: {
      				labels: {
        				fontSize: 14
      				}
  			}
		}
	});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("ad-bar-1"), {
			type: 'bar',
			data: {
			  labels: [<?php echo '"'.addslashes($adBar1QueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($adBar1QueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($adBar1QueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($adBar1QueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($adBar1QueryResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "Last 30 Days Changes",
				  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
				  data: [<?php echo '"'.$adBar1QueryResults[0][1].'"' ?>,<?php echo '"'.$adBar1QueryResults[1][1].'"' ?>,<?php echo '"'.$adBar1QueryResults[2][1].'"' ?>,<?php echo '"'.$adBar1QueryResults[3][1].'"' ?>,<?php echo '"'.$adBar1QueryResults[4][1].'"' ?>],
				}
			  ]
			},
			options: {
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 12
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 12
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'Active Directory Changes by Domain Controller Last 30 Days (TOP 5)',
				fontSize: 16
			  },
			  legend: {display:false}
			}
		});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("ad-bar-2"), {
			type: 'horizontalBar',
			data: {
			  labels: ["Created", "Deleted", "Disabled", "Enabled", "Locked"],
			  datasets: [
				{
				  label: "Last 30 Days User Status Changes",
				  backgroundColor: ["#3cba9f", "#c45850", "#3e95cd", "#8e5ea2", "#e8c3b9"],
				  data: [<?php echo $adHBarQueryCreatedResults[0][0] ?>,<?php echo $adHBarQueryDeletedResults[0][0] ?>,<?php echo $adHBarQueryDisabledResults[0][0] ?>,<?php echo $adHBarQueryEnabledResults[0][0] ?>,<?php echo $adHBarQueryLockedResults[0][0] ?>]
				}
			  ]
			},
			options: {
			  legend: { display:false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 14
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 14
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'User Status Changes Last 30 Days',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
	new Chart(document.getElementById("ad-pie"), {
		type: 'pie',
		data: {
		  labels: ["Group Creates", "Group Deletes", "Users Added", "Users Removed"],
		  datasets: [{
			label: "Group Changes Last 30 Days",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850","#e8c3b9"],
			data: [<?php echo $adPieQueryGroupCreatesResults[0][0] ?>,<?php echo $adPieQueryGroupDeletesResults[0][0] ?>,<?php echo $adPieQueryGroupMemAddResults[0][0] ?>,<?php echo $adPieQueryGroupMemRemResults[0][0] ?>]
		  }]
		},
		options: {
		  title: {
			display: true,
			text: 'Group Changes Last 30 Days',
			fontSize: 16
		  },
		  legend: { 
			labels: { 
				fontSize: 14
			}
		  }
		}
	});
</script>

<script type="text/javascript">
	var day30 = moment().subtract(30, 'days').format('MMM Do');
	var day29 = moment().subtract(29, 'days').format('MMM Do');
	var day28 = moment().subtract(28, 'days').format('MMM Do');
	var day27 = moment().subtract(27, 'days').format('MMM Do');
	var day26 = moment().subtract(26, 'days').format('MMM Do');
	var day25 = moment().subtract(25, 'days').format('MMM Do');
	var day24 = moment().subtract(24, 'days').format('MMM Do');
	var day23 = moment().subtract(23, 'days').format('MMM Do');
	var day22 = moment().subtract(22, 'days').format('MMM Do');
	var day21 = moment().subtract(21, 'days').format('MMM Do');
	var day20 = moment().subtract(20, 'days').format('MMM Do');
	var day19 = moment().subtract(19, 'days').format('MMM Do');
	var day18 = moment().subtract(18, 'days').format('MMM Do');
	var day17 = moment().subtract(17, 'days').format('MMM Do');
	var day16 = moment().subtract(16, 'days').format('MMM Do');
	var day15 = moment().subtract(15, 'days').format('MMM Do');
	var day14 = moment().subtract(14, 'days').format('MMM Do');
	var day13 = moment().subtract(13, 'days').format('MMM Do');
	var day12 = moment().subtract(12, 'days').format('MMM Do');
	var day11 = moment().subtract(11, 'days').format('MMM Do');
	var day10 = moment().subtract(10, 'days').format('MMM Do');
	var day9 = moment().subtract(9, 'days').format('MMM Do');
	var day8 = moment().subtract(8, 'days').format('MMM Do');
	var day7 = moment().subtract(7, 'days').format('MMM Do');
	var day6 = moment().subtract(6, 'days').format('MMM Do');
	var day5 = moment().subtract(5, 'days').format('MMM Do');
	var day4 = moment().subtract(4, 'days').format('MMM Do');
	var day3 = moment().subtract(3, 'days').format('MMM Do');
	var day2 = moment().subtract(2, 'days').format('MMM Do');
	var day1 = moment().subtract(1, 'days').format('MMM Do');
	var day0 = moment().format('MMM Do');
	new Chart(document.getElementById("fs-line"), {
		type: 'line',
		data: {
			labels: [day30,day29,day28,day27,day26,day25,day24,day23,day22,day21,day20,day19,day18,day17,day16,day15,day14,day13,day12,day11,day10,day9,day8,day7,day6,day5,day4,day3,day2,day1,day0],
			datasets: [
				{ 
					data: [
						<?php echo addslashes($fsLineCreateQueryResults[0][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[1][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[2][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[3][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[4][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[5][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[6][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[7][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[8][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[9][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[10][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[11][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[12][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[13][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[14][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[15][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[16][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[17][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[18][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[19][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[20][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[21][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[21][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[23][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[24][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[25][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[26][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[27][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[28][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[29][1])?>,
						<?php echo addslashes($fsLineCreateQueryResults[30][1])?>
					],
					label: "Creates",
					borderColor: "#3cba9f",
					fill: false
				},
				{ 
					data: [
						<?php echo addslashes($fsLineDeleteQueryResults[0][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[1][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[2][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[3][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[4][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[5][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[6][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[7][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[8][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[9][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[10][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[11][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[12][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[13][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[14][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[15][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[16][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[17][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[18][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[19][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[20][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[21][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[21][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[23][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[24][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[25][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[26][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[27][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[28][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[29][1])?>,
						<?php echo addslashes($fsLineDeleteQueryResults[30][1])?>
					],
					label: "Deletes",
					borderColor: "#c45850",
					fill: false
				},
				{ 
					data: [
						<?php echo addslashes($fsLineRenameQueryResults[0][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[1][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[2][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[3][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[4][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[5][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[6][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[7][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[8][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[9][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[10][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[11][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[12][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[13][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[14][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[15][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[16][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[17][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[18][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[19][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[20][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[21][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[21][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[23][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[24][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[25][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[26][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[27][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[28][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[29][1])?>,
						<?php echo addslashes($fsLineRenameQueryResults[30][1])?>
					],
					label: "Renames/Moves",
					borderColor: "#3e95cd",
					fill: false
				},				
				{ 
					data: [
						<?php echo addslashes($fsLinePermQueryResults[0][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[1][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[2][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[3][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[4][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[5][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[6][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[7][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[8][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[9][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[10][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[11][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[12][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[13][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[14][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[15][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[16][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[17][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[18][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[19][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[20][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[21][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[21][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[23][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[24][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[25][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[26][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[27][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[28][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[29][1])?>,
						<?php echo addslashes($fsLinePermQueryResults[30][1])?>
					],
					label: "Permissions Changes",
					borderColor: "#e8c3b9",
					fill: false
				}, 
			]
		},
		options: {
			title: {
				display: true,
				text: 'All File System Activity Last 30 Days',
				fontSize: 16
			},
			scales: {
				xAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 20,
						fontSize: 14
					}
				}],
				yAxes: [{
					ticks: {
						autoSkip: true,
						fontSize: 14
					}
				}]
			},
			legend: {
      				labels: {
        				fontSize: 14
      				}
  			}
		}
	});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("fs-bar-1"), {
			type: 'bar',
			data: {
			  labels: [<?php echo '"'.addslashes($fsBarTop5QueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($fsBarTop5QueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($fsBarTop5QueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($fsBarTop5QueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($fsBarTop5QueryResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "Last 30 Days File Activity",
				  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
				  data: [<?php echo '"'.$fsBarTop5QueryResults[0][1].'"' ?>,<?php echo '"'.$fsBarTop5QueryResults[1][1].'"' ?>,<?php echo '"'.$fsBarTop5QueryResults[2][1].'"' ?>,<?php echo '"'.$fsBarTop5QueryResults[3][1].'"' ?>,<?php echo '"'.$fsBarTop5QueryResults[4][1].'"' ?>]
				}
			  ]
			},
			options: {
			  legend: { display:false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 12
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 12
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'Top 5 File System Users Last 30 Days',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("fs-bar-2"), {
			type: 'horizontalBar',
			data: {
			  labels: [<?php echo '"'.addslashes($fsHBarTop5QueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($fsHBarTop5QueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($fsHBarTop5QueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($fsHBarTop5QueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($fsHBarTop5QueryResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "Last 30 Days File System Changes",
				  backgroundColor: ["#3cba9f", "#c45850", "#3e95cd", "#8e5ea2", "#e8c3b9"],
				  data: [<?php echo $fsHBarTop5QueryResults[0][1] ?>,<?php echo $fsHBarTop5QueryResults[1][1] ?>,<?php echo $fsHBarTop5QueryResults[1][2] ?>,<?php echo $fsHBarTop5QueryResults[1][3] ?>,<?php echo $fsHBarTop5QueryResults[1][4] ?>]
				}
			  ]
			},
			options: {
			  legend: { display:false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 14
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 14
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'File System Changes per Server Last 30 Days',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
	new Chart(document.getElementById("fs-pie"), {
		type: 'pie',
		data: {
		  labels: ["Writes", "Renames/Moves", "Creates", "Deletes", "Permissions Changes"],
		  datasets: [{
			label: "User Account Status",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850","#e8c3b9"],
			data: [<?php echo $pieWritesResults[0][0] ?>,<?php echo $pieRenamesResults[0][0] ?>,<?php echo $pieCreatesResults[0][0] ?>,<?php echo $pieDeletesResults[0][0] ?>,<?php echo $piePermsResults[0][0] ?>]
		  }]
		},
		options: {
		  title: {
			display: true,
			text: 'File System Events for the Last 30 days',
			fontSize: 16
		  },
		  legend: { 
			labels: { 
				fontSize: 14
			}
		  }
		}
	});
</script>

<script type="text/javascript">
	var day30 = moment().subtract(30, 'days').format('MMM Do');
	var day29 = moment().subtract(29, 'days').format('MMM Do');
	var day28 = moment().subtract(28, 'days').format('MMM Do');
	var day27 = moment().subtract(27, 'days').format('MMM Do');
	var day26 = moment().subtract(26, 'days').format('MMM Do');
	var day25 = moment().subtract(25, 'days').format('MMM Do');
	var day24 = moment().subtract(24, 'days').format('MMM Do');
	var day23 = moment().subtract(23, 'days').format('MMM Do');
	var day22 = moment().subtract(22, 'days').format('MMM Do');
	var day21 = moment().subtract(21, 'days').format('MMM Do');
	var day20 = moment().subtract(20, 'days').format('MMM Do');
	var day19 = moment().subtract(19, 'days').format('MMM Do');
	var day18 = moment().subtract(18, 'days').format('MMM Do');
	var day17 = moment().subtract(17, 'days').format('MMM Do');
	var day16 = moment().subtract(16, 'days').format('MMM Do');
	var day15 = moment().subtract(15, 'days').format('MMM Do');
	var day14 = moment().subtract(14, 'days').format('MMM Do');
	var day13 = moment().subtract(13, 'days').format('MMM Do');
	var day12 = moment().subtract(12, 'days').format('MMM Do');
	var day11 = moment().subtract(11, 'days').format('MMM Do');
	var day10 = moment().subtract(10, 'days').format('MMM Do');
	var day9 = moment().subtract(9, 'days').format('MMM Do');
	var day8 = moment().subtract(8, 'days').format('MMM Do');
	var day7 = moment().subtract(7, 'days').format('MMM Do');
	var day6 = moment().subtract(6, 'days').format('MMM Do');
	var day5 = moment().subtract(5, 'days').format('MMM Do');
	var day4 = moment().subtract(4, 'days').format('MMM Do');
	var day3 = moment().subtract(3, 'days').format('MMM Do');
	var day2 = moment().subtract(2, 'days').format('MMM Do');
	var day1 = moment().subtract(1, 'days').format('MMM Do');
	var day0 = moment().format('MMM Do');
	new Chart(document.getElementById("ll-line"), {
		type: 'line',
		data: {
			labels: [day30,day29,day28,day27,day26,day25,day24,day23,day22,day21,day20,day19,day18,day17,day16,day15,day14,day13,day12,day11,day10,day9,day8,day7,day6,day5,day4,day3,day2,day1,day0],
			datasets: [
				{ 
					data: [
						<?php echo addslashes($lineSuccAuthsResults[0][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[1][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[2][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[3][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[4][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[5][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[6][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[7][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[8][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[9][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[10][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[11][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[12][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[13][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[14][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[15][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[16][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[17][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[18][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[19][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[20][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[21][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[21][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[23][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[24][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[25][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[26][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[27][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[28][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[29][1])?>,
						<?php echo addslashes($lineSuccAuthsResults[30][1])?>
					],
					label: "Logons",
					borderColor: "#3cba9f",
					fill: false
				},
				{ 
					data: [
						<?php echo addslashes($lineFailedAuthsResults[0][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[1][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[2][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[3][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[4][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[5][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[6][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[7][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[8][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[9][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[10][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[11][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[12][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[13][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[14][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[15][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[16][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[17][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[18][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[19][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[20][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[21][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[21][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[23][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[24][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[25][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[26][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[27][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[28][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[29][1])?>,
						<?php echo addslashes($lineFailedAuthsResults[30][1])?>
					],
					label: "Failed Logons",
					borderColor: "#c45850",
					fill: false
				}, 
				{ 
					data: [
						<?php echo addslashes($lineLockoutsResults[0][1])?>,
						<?php echo addslashes($lineLockoutsResults[1][1])?>,
						<?php echo addslashes($lineLockoutsResults[2][1])?>,
						<?php echo addslashes($lineLockoutsResults[3][1])?>,
						<?php echo addslashes($lineLockoutsResults[4][1])?>,
						<?php echo addslashes($lineLockoutsResults[5][1])?>,
						<?php echo addslashes($lineLockoutsResults[6][1])?>,
						<?php echo addslashes($lineLockoutsResults[7][1])?>,
						<?php echo addslashes($lineLockoutsResults[8][1])?>,
						<?php echo addslashes($lineLockoutsResults[9][1])?>,
						<?php echo addslashes($lineLockoutsResults[10][1])?>,
						<?php echo addslashes($lineLockoutsResults[11][1])?>,
						<?php echo addslashes($lineLockoutsResults[12][1])?>,
						<?php echo addslashes($lineLockoutsResults[13][1])?>,
						<?php echo addslashes($lineLockoutsResults[14][1])?>,
						<?php echo addslashes($lineLockoutsResults[15][1])?>,
						<?php echo addslashes($lineLockoutsResults[16][1])?>,
						<?php echo addslashes($lineLockoutsResults[17][1])?>,
						<?php echo addslashes($lineLockoutsResults[18][1])?>,
						<?php echo addslashes($lineLockoutsResults[19][1])?>,
						<?php echo addslashes($lineLockoutsResults[20][1])?>,
						<?php echo addslashes($lineLockoutsResults[21][1])?>,
						<?php echo addslashes($lineLockoutsResults[21][1])?>,
						<?php echo addslashes($lineLockoutsResults[23][1])?>,
						<?php echo addslashes($lineLockoutsResults[24][1])?>,
						<?php echo addslashes($lineLockoutsResults[25][1])?>,
						<?php echo addslashes($lineLockoutsResults[26][1])?>,
						<?php echo addslashes($lineLockoutsResults[27][1])?>,
						<?php echo addslashes($lineLockoutsResults[28][1])?>,
						<?php echo addslashes($lineLockoutsResults[29][1])?>,
						<?php echo addslashes($lineLockoutsResults[30][1])?>
					],
					label: "Account Lockouts",
					borderColor: "#e8c3b9",
					fill: false
				}, 
			]
		},
		options: {
			title: {
				display: true,
				text: 'Authentication Events Last 30 Days',
				fontSize: 16
			},
			scales: {
				xAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 20,
						fontSize: 14
					}
				}],
				yAxes: [{
					ticks: {
						autoSkip: true,
						fontSize: 14
					}
				}]
			},
			legend: {
      				labels: {
        				fontSize: 14
      				}
  			}
		}
	});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("ll-bar-1"), {
			type: 'bar',
			data: {
			  labels: [<?php echo '"'.addslashes($barAuthsResults[0][0]).'"' ?>, <?php echo '"'.addslashes($barAuthsResults[1][0]).'"' ?>, <?php echo '"'.addslashes($barAuthsResults[2][0]).'"' ?>, <?php echo '"'.addslashes($barAuthsResults[3][0]).'"' ?>, <?php echo '"'.addslashes($barAuthsResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "Last 30 Days Authentications",
				  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
				  data: [<?php echo '"'.$barAuthsResults[0][1].'"' ?>,<?php echo '"'.$barAuthsResults[1][1].'"' ?>,<?php echo '"'.$barAuthsResults[2][1].'"' ?>,<?php echo '"'.$barAuthsResults[3][1].'"' ?>,<?php echo '"'.$barAuthsResults[4][1].'"' ?>]
				}
			  ]
			},
			options: {
			  legend: { display: false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 12
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 12
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'Top 5 Authenticators for the Last 30 Days',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("ll-bar-2"), {
			type: 'horizontalBar',
			data: {
			  labels: [<?php echo '"'.addslashes($llHBarQueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($llHBarQueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($llHBarQueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($llHBarQueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($llHBarQueryResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "Last 30 Days Failed Authentications",
				  backgroundColor: ["#3cba9f", "#c45850", "#3e95cd", "#8e5ea2", "#e8c3b9"],
				  data: [<?php echo $llHBarQueryResults[0][1] ?>,<?php echo $llHBarQueryResults[1][1] ?>,<?php echo $llHBarQueryResults[2][1] ?>,<?php echo $llHBarQueryResults[3][1] ?>,<?php echo $llHBarQueryResults[4][1] ?>]
				}
			  ]
			},
			options: {
			  legend: { display: false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 14
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 14
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'Top 5 Failed Authenticators for the Last 30 Days',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
	new Chart(document.getElementById("ll-pie"), {
		type: 'pie',
		data: {
		  labels: [<?php echo '"'.addslashes($llPieTop5QueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($llPieTop5QueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($llPieTop5QueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($llPieTop5QueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($llPieTop5QueryResults[4][0]).'"' ?>],
		  datasets: [{
			label: "Authentication Events Last 30 Days",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850","#e8c3b9"],
			data: [<?php echo $llPieTop5QueryResults[0][1] ?>,<?php echo $llPieTop5QueryResults[1][1] ?>,<?php echo $llPieTop5QueryResults[2][1] ?>,<?php echo $llPieTop5QueryResults[3][1] ?>,<?php echo $llPieTop5QueryResults[4][1] ?>]
		  }]
		},
		options: {
		  title: {
			display: true,
			text: 'Authentications per Server Last 30 Days (TOP 5)',
			fontSize: 16
		  },
		  legend: { 
			labels: { 
				fontSize: 14
			}
		  }
		}
	});
</script>

<script type="text/javascript">
	var day30 = moment().subtract(30, 'days').format('MMM Do');
	var day29 = moment().subtract(29, 'days').format('MMM Do');
	var day28 = moment().subtract(28, 'days').format('MMM Do');
	var day27 = moment().subtract(27, 'days').format('MMM Do');
	var day26 = moment().subtract(26, 'days').format('MMM Do');
	var day25 = moment().subtract(25, 'days').format('MMM Do');
	var day24 = moment().subtract(24, 'days').format('MMM Do');
	var day23 = moment().subtract(23, 'days').format('MMM Do');
	var day22 = moment().subtract(22, 'days').format('MMM Do');
	var day21 = moment().subtract(21, 'days').format('MMM Do');
	var day20 = moment().subtract(20, 'days').format('MMM Do');
	var day19 = moment().subtract(19, 'days').format('MMM Do');
	var day18 = moment().subtract(18, 'days').format('MMM Do');
	var day17 = moment().subtract(17, 'days').format('MMM Do');
	var day16 = moment().subtract(16, 'days').format('MMM Do');
	var day15 = moment().subtract(15, 'days').format('MMM Do');
	var day14 = moment().subtract(14, 'days').format('MMM Do');
	var day13 = moment().subtract(13, 'days').format('MMM Do');
	var day12 = moment().subtract(12, 'days').format('MMM Do');
	var day11 = moment().subtract(11, 'days').format('MMM Do');
	var day10 = moment().subtract(10, 'days').format('MMM Do');
	var day9 = moment().subtract(9, 'days').format('MMM Do');
	var day8 = moment().subtract(8, 'days').format('MMM Do');
	var day7 = moment().subtract(7, 'days').format('MMM Do');
	var day6 = moment().subtract(6, 'days').format('MMM Do');
	var day5 = moment().subtract(5, 'days').format('MMM Do');
	var day4 = moment().subtract(4, 'days').format('MMM Do');
	var day3 = moment().subtract(3, 'days').format('MMM Do');
	var day2 = moment().subtract(2, 'days').format('MMM Do');
	var day1 = moment().subtract(1, 'days').format('MMM Do');
	var day0 = moment().format('MMM Do');
	new Chart(document.getElementById("gpo-line"), {
		type: 'line',
		data: {
			labels: [day30,day29,day28,day27,day26,day25,day24,day23,day22,day21,day20,day19,day18,day17,day16,day15,day14,day13,day12,day11,day10,day9,day8,day7,day6,day5,day4,day3,day2,day1,day0],
			datasets: [
				{ 
					data: [
						<?php echo addslashes($gpoLineCreateQueryResults[0][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[1][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[2][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[3][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[4][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[5][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[6][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[7][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[8][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[9][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[10][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[11][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[12][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[13][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[14][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[15][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[16][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[17][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[18][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[19][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[20][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[23][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[24][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[25][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[26][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[27][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[28][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[29][1])?>,
						<?php echo addslashes($gpoLineCreateQueryResults[30][1])?>
					],
					label: "GPO Creates",
					borderColor: "#3cba9f",
					fill: false
				},
				{ 
					data: [
						<?php echo addslashes($gpoLineDeleteQueryResults[0][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[1][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[2][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[3][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[4][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[5][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[6][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[7][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[8][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[9][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[10][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[11][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[12][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[13][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[14][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[15][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[16][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[17][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[18][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[19][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[20][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[23][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[24][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[25][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[26][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[27][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[28][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[29][1])?>,
						<?php echo addslashes($gpoLineDeleteQueryResults[30][1])?>
					],
					label: "GPO Deletes",
					borderColor: "#c45850",
					fill: false
				},
				{ 
					data: [
						<?php echo addslashes($gpoLineLinkQueryResults[0][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[1][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[2][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[3][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[4][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[5][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[6][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[7][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[8][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[9][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[10][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[11][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[12][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[13][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[14][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[15][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[16][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[17][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[18][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[19][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[20][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[23][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[24][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[25][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[26][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[27][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[28][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[29][1])?>,
						<?php echo addslashes($gpoLineLinkQueryResults[30][1])?>
					],
					label: "GPO Modified",
					borderColor: "#3e95cd",
					fill: false
				},				
				{ 
					data: [
						<?php echo addslashes($gpoLineModifyQueryResults[0][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[1][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[2][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[3][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[4][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[5][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[6][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[7][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[8][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[9][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[10][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[11][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[12][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[13][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[14][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[15][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[16][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[17][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[18][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[19][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[20][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[21][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[23][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[24][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[25][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[26][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[27][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[28][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[29][1])?>,
						<?php echo addslashes($gpoLineModifyQueryResults[30][1])?>
					],
					label: "GPO Linked",
					borderColor: "#e8c3b9",
					fill: false
				}, 
			]
		},
		options: {
			title: {
				display: true,
				text: 'All GPO Activity Last 30 Days',
				fontSize: 16
			},
			scales: {
				xAxes: [{
					ticks: {
						autoSkip: true,
						maxTicksLimit: 20,
						fontSize: 14
					}
				}],
				yAxes: [{
					ticks: {
						autoSkip: true,
						fontSize: 14
					}
				}]
			},
			legend: {
      				labels: {
        				fontSize: 14
      				}
  			}
		}
	});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("gpo-bar-1"), {
			type: 'bar',
			data: {
			  labels: [<?php echo '"'.addslashes($gpoBarPerDCQueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($gpoBarPerDCQueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($gpoBarPerDCQueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($gpoBarPerDCQueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($gpoBarPerDCQueryResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "GPO Changes Last 30 Days",
				  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
				  data: [<?php echo '"'.$gpoBarPerDCQueryResults[0][1].'"' ?>,<?php echo '"'.$gpoBarPerDCQueryResults[1][1].'"' ?>,<?php echo '"'.$gpoBarPerDCQueryResults[2][1].'"' ?>,<?php echo '"'.$gpoBarPerDCQueryResults[3][1].'"' ?>,<?php echo '"'.$gpoBarPerDCQueryResults[4][1].'"' ?>]
				}
			  ]
			},
			options: {
			  legend: { display: false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 12
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 12
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'GPO Changes by Domain Controller Last 30 Days (TOP 5)',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
		new Chart(document.getElementById("gpo-bar-2"), {
			type: 'horizontalBar',
			data: {
			  labels: [<?php echo '"'.addslashes($gpoBar2PerUserQueryResults[0][0]).'"' ?>, <?php echo '"'.addslashes($gpoBar2PerUserQueryResults[1][0]).'"' ?>, <?php echo '"'.addslashes($gpoBar2PerUserQueryResults[2][0]).'"' ?>, <?php echo '"'.addslashes($gpoBar2PerUserQueryResults[3][0]).'"' ?>, <?php echo '"'.addslashes($gpoBar2PerUserQueryResults[4][0]).'"' ?>],
			  datasets: [
				{
				  label: "GPO Changes Last 30 Days",
				  backgroundColor: ["#3cba9f", "#c45850", "#3e95cd", "#8e5ea2", "#e8c3b9"],
				  data: [<?php echo $gpoBar2PerUserQueryResults[0][1] ?>,<?php echo $gpoBar2PerUserQueryResults[1][1] ?>,<?php echo $gpoBar2PerUserQueryResults[2][1] ?>,<?php echo $gpoBar2PerUserQueryResults[3][1] ?>,<?php echo $gpoBar2PerUserQueryResults[4][1] ?>]
				}
			  ]
			},
			options: {
			  legend: { display: false },
			  scales: {
				  xAxes: [{
					ticks: {
						fontSize: 14
					}
				  }],
				  yAxes: [{
					ticks: {
						fontSize: 14
					}
				  }]
			  },
			  title: {
				display: true,
				text: 'GPO Changes by User Last 30 Days (TOP 5)',
				fontSize: 16
			  }
			}
		});
</script>

<script type="text/javascript">
	new Chart(document.getElementById("gpo-pie"), {
		type: 'pie',
		data: {
		  labels: ["GPO Creates", "GPO Deletes", "GPO Modified", "GPO Linked"],
		  datasets: [{
			label: "User Account Status",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#c45850","#e8c3b9"],
			data: [<?php echo $sumGPOCreatedResults[0][0] ?>,<?php echo $sumGPODeletedResults[0][0] ?>,<?php echo $sumGPOModsResults[0][0] ?>,<?php echo $sumGPOLinksResults[0][0] ?>]
		  }]
		},
		options: {
		  title: {
			display: true,
			text: 'Group Policy Events for the Last 30 days',
			fontSize: 16
		  },
		  legend: { 
			labels: { 
				fontSize: 14
			}
		  }
		}
	});
</script>