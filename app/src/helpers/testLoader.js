class Loader {

	constructor(assets){
		this.loader = new AssetsLoader({
		    assets: assets
		})
	}

	error (error) {
		console.error(error);
	})

	progress(progress){
		console.log((progress * 100).toFixed() + '%');
	}

	complete(map){
		loader.get().forEach(function(file) {
			console.log(file);
		});
	}

	start(){};

}

export defaukt Loader;
