
function getFile(url, options) {
	return new Promise(function(resolve, reject) {
		function onLoad () {
			console.info(this.status)
			console.log(this.responseText)
			switch(this.status) {
				case 0:
				case 200:
					resolve(this.responseText);
					break;
				default:
					reject(new Error(this.responseText))
					break;
			}
		}

		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", onLoad);
		oReq.open("GET", url);
		oReq.send();	
	});
}

// Super cool pyramid of death for running shopbot code as a test
function doSBP(sbpCode, name) {
	name = name || 'cut.sbp'
	return new Promise(function(fulfill, reject) {
		fabmo.clearJobQueue(function() {
			fabmo.submitJob({file : sbpCode, filename : name}, {
					stayHere : true
				}, function(err, data) {
					if(err) {
						console.error(err);
						return reject(err);
					}
					var jobId = data.jobs[0]._id;
					fabmo.on('status', function(status) {
						if(status.state === 'idle') {
							fabmo.getJobInfo(jobId, function(err, info) {
								switch(info.state) {
									case 'finished':
										fabmo.off('status');
										return fulfill();
										break;
									case 'failed':
										fabmo.off('status');
										return reject(new Error('Job failed.'));
										break;
									default:
									break;
								}
							});
						}
					});
					fabmo.runNext();
			});
		});
	});	
}

function doSBPURL(url) {
	return getFile(url)
		.then(function resolve(data) {
			console.log(data);
			return doSBP(data);
		});
}
$("#run-004766001").click(function(evt) {
    doSBPURL("cut_files/004766001.sbp");
});
$("#run-004766002").click(function(evt) {
    doSBPURL("cut_files/004766002.sbp");
});
$("#run-004766003").click(function(evt) {
    doSBPURL("cut_files/004766003.sbp");
});
$("#run-004766004").click(function(evt) {
    doSBPURL("cut_files/004766004.sbp");
});
$("#run-on").click(function(evt) {
    doSBPURL("cut_files/on.sbp");
});
$("#run-off").click(function(evt) {
    doSBPURL("cut_files/off.sbp");
});
$("#run-004766007").click(function(evt) {
    doSBPURL("cut_files/004766007.sbp");
});
$("#runwithprobing").click(function(evt) {
    doSBPURL("macros/macro_88withprobing.sbp");
});
$("#runoriginal").click(function(evt) {
    doSBPURL("macros/macro_88.sbp");
});
$("#run-004766009").click(function(evt) {
    doSBPURL("cut_files/004766009.sbp");
});
$("#run-004766010").click(function(evt) {
    doSBPURL("cut_files/004766010.sbp");
});
$("#run-004766011").click(function(evt) {
    doSBPURL("cut_files/004766011.sbp");
});