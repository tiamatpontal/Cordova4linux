var app = {
	init: function(){
		this.deviceReady();
	},
	deviceReady: function(){
		document.addEventListener("deviceready", this.onDeviceReady, false);
		document.addEventListener("pause", this.onDevicePause ,false);
		document.addEventListener("resume", this.onDeviceResume ,false);
	},
	onDeviceReady: function(){
		app.receivedEvent();
		app.onDeviceInfo();
	},
	receivedEvent: function(){
		var pronto = document.getElementById("secundaria").querySelector("#ready");
		
		pronto.innerHTML = "Carregado!";

		console.log(device);
	},
	onDevicePause: function(){
		alert("App enviada para background.");
	},
	onDeviceResume: function(){
		alert("App trazida do background.");
	},
	onDeviceInfo: function(){
		var dispositivo = document.getElementById("dispositivo").querySelector("#info");
		dispositivo.innerHTML = "Cordova: " + device.cordova;
		dispositivo.innerHTML += "<br/>Platform: " + device.platform;
		dispositivo.innerHTML += "<br/>UUID: " + device.uuid;
		dispositivo.innerHTML += "<br/>Versao: " + device.version;
		dispositivo.innerHTML += "<br/>Modelo: " + device.model;
	}
}

app.init();