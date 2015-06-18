if (parallable === undefined) {
	var parallable = function (file, funct) {
		parallable.core[funct.toString()] = funct().core;
		return function () {
			var i;
			var async, worker_num, params;
			if (arguments.length > 1) {
				async = arguments[arguments.length - 2];
				worker_num = arguments[arguments.length - 1];
				params = new Array(arguments.length - 2);
				for (i = 0; i < arguments.length - 2; i++)
					params[i] = arguments[i];
			} else {
				async = arguments[0].async;
				worker_num = arguments[0].worker;
				params = arguments[0];
				delete params["async"];
				delete params["worker"];
				params = [params];
			}
			var scope = { "shared" : {} };
			var ctrl = funct.apply(scope, params);
			
		}
	};
	parallable.core = {};
}
