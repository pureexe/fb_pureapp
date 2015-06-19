var ccvCallbackBlob = new Blob(["function get_named_arguments(e,t){if(e.length>1){for(var a={},r=0;r<t.length;r++)a[t[r]]=e[r];return a}return 1==e.length?e[0]:{}}if(void 0===parallable){var parallable=function(e,t){return parallable.core[t.toString()]=t().core,function(){var a,r,h,i;if(arguments.length>1)for(r=arguments[arguments.length-2],h=arguments[arguments.length-1],i=new Array(arguments.length-2),a=0;a<arguments.length-2;a++)i[a]=arguments[a];else r=arguments[0].async,h=arguments[0].worker,i=arguments[0],delete i.async,delete i.worker,i=[i];var n={shared:{}},s=t.apply(n,i);return r?function(r){var d=0,o=new Array(h),g=s.pre.apply(n,[h]);for(a in n.shared)\"function\"==typeof n.shared[a]?delete n.shared[a]:void 0!==n.shared[a].tagName&&delete n.shared[a];for(a=0;h>a;a++){var c=new Worker(e);c.onmessage=function(e){return function(t){o[e]=\"string\"==typeof t.data?JSON.parse(t.data):t.data,d++,d==h&&r(s.post.apply(n,[o]))}}(a);var f={input:g[a],name:t.toString(),shared:n.shared,id:a,worker:i.worker_num};try{c.postMessage(f)}catch(l){c.postMessage(JSON.stringify(f))}}}:s.post.apply(n,[[s.core.apply(n,[s.pre.apply(n,[1])[0],0,1])]])}};parallable.core={}}var ccv={pre:function(e){if(\"img\"==e.tagName.toLowerCase()){var t=document.createElement(\"canvas\");document.body.appendChild(e),t.width=e.offsetWidth,t.style.width=e.offsetWidth.toString()+\"px\",t.height=e.offsetHeight,t.style.height=e.offsetHeight.toString()+\"px\",document.body.removeChild(e);var a=t.getContext(\"2d\");return a.drawImage(e,0,0),t}return e},grayscale:function(e){for(var t,a,r=e.getContext(\"2d\"),h=r.getImageData(0,0,e.width,e.height),i=h.data,n=e.width*e.height*4;n>0;)i[n-=4]=i[t=n+1]=i[a=n+2]=.3*i[n]+.59*i[t]+.11*i[a];return r.putImageData(h,0,0),e},array_group:function(e,t){var a,r,h=new Array(e.length);for(a=0;a<e.length;a++)h[a]={parent:-1,element:e[a],rank:0};for(a=0;a<e.length;a++)if(h[a].element){for(var i=a;-1!=h[i].parent;)i=h[i].parent;for(r=0;r<e.length;r++)if(a!=r&&h[r].element&&t(h[a].element,h[r].element)){for(var n=r;-1!=h[n].parent;)n=h[n].parent;if(n!=i){h[i].rank>h[n].rank?h[n].parent=i:(h[i].parent=n,h[i].rank==h[n].rank&&h[n].rank++,i=n);for(var s,d=r;-1!=h[d].parent;)s=d,d=h[d].parent,h[s].parent=i;for(d=a;-1!=h[d].parent;)s=d,d=h[d].parent,h[s].parent=i}}}var o=new Array(e.length),g=0;for(a=0;a<e.length;a++){r=-1;var c=a;if(h[c].element){for(;-1!=h[c].parent;)c=h[c].parent;h[c].rank>=0&&(h[c].rank=~g++),r=~h[c].rank}o[a]=r}return{index:o,cat:g}},detect_objects:parallable(ccvCallbackURL,function(){function e(){var e=this.shared.canvas,t=this.shared.interval,a=this.shared.scale,r=this.shared.next,h=this.shared.scale_upto,i=new Array(4*(h+2*r)),n=new Array(4*(h+2*r));i[0]=e,n[0]={width:i[0].width,height:i[0].height,data:i[0].getContext(\"2d\").getImageData(0,0,i[0].width,i[0].height).data};var s;for(s=1;t>=s;s++)i[4*s]=document.createElement(\"canvas\"),i[4*s].width=Math.floor(i[0].width\/Math.pow(a,s)),i[4*s].height=Math.floor(i[0].height\/Math.pow(a,s)),i[4*s].getContext(\"2d\").drawImage(i[0],0,0,i[0].width,i[0].height,0,0,i[4*s].width,i[4*s].height),n[4*s]={width:i[4*s].width,height:i[4*s].height,data:i[4*s].getContext(\"2d\").getImageData(0,0,i[4*s].width,i[4*s].height).data};for(s=r;h+2*r>s;s++)i[4*s]=document.createElement(\"canvas\"),i[4*s].width=Math.floor(i[4*s-4*r].width\/2),i[4*s].height=Math.floor(i[4*s-4*r].height\/2),i[4*s].getContext(\"2d\").drawImage(i[4*s-4*r],0,0,i[4*s-4*r].width,i[4*s-4*r].height,0,0,i[4*s].width,i[4*s].height),n[4*s]={width:i[4*s].width,height:i[4*s].height,data:i[4*s].getContext(\"2d\").getImageData(0,0,i[4*s].width,i[4*s].height).data};for(s=2*r;h+2*r>s;s++)i[4*s+1]=document.createElement(\"canvas\"),i[4*s+1].width=Math.floor(i[4*s-4*r].width\/2),i[4*s+1].height=Math.floor(i[4*s-4*r].height\/2),i[4*s+1].getContext(\"2d\").drawImage(i[4*s-4*r],1,0,i[4*s-4*r].width-1,i[4*s-4*r].height,0,0,i[4*s+1].width-2,i[4*s+1].height),n[4*s+1]={width:i[4*s+1].width,height:i[4*s+1].height,data:i[4*s+1].getContext(\"2d\").getImageData(0,0,i[4*s+1].width,i[4*s+1].height).data},i[4*s+2]=document.createElement(\"canvas\"),i[4*s+2].width=Math.floor(i[4*s-4*r].width\/2),i[4*s+2].height=Math.floor(i[4*s-4*r].height\/2),i[4*s+2].getContext(\"2d\").drawImage(i[4*s-4*r],0,1,i[4*s-4*r].width,i[4*s-4*r].height-1,0,0,i[4*s+2].width,i[4*s+2].height-2),n[4*s+2]={width:i[4*s+2].width,height:i[4*s+2].height,data:i[4*s+2].getContext(\"2d\").getImageData(0,0,i[4*s+2].width,i[4*s+2].height).data},i[4*s+3]=document.createElement(\"canvas\"),i[4*s+3].width=Math.floor(i[4*s-4*r].width\/2),i[4*s+3].height=Math.floor(i[4*s-4*r].height\/2),i[4*s+3].getContext(\"2d\").drawImage(i[4*s-4*r],1,1,i[4*s-4*r].width-1,i[4*s-4*r].height-1,0,0,i[4*s+3].width-2,i[4*s+3].height-2),n[4*s+3]={width:i[4*s+3].width,height:i[4*s+3].height,data:i[4*s+3].getContext(\"2d\").getImageData(0,0,i[4*s+3].width,i[4*s+3].height).data};return[n]}function t(e){var t,a,r,h,i,n,s=this.shared.cascade,d=(this.shared.interval,this.shared.scale),o=this.shared.next,g=this.shared.scale_upto,c=1,f=1,l=[0,1,0,1],w=[0,0,1,1],p=[];for(t=0;g>t;t++){var u=e[4*t+8*o].width-Math.floor(s.width\/4),m=e[4*t+8*o].height-Math.floor(s.height\/4),v=[4*e[4*t].width,4*e[4*t+4*o].width,4*e[4*t+8*o].width],y=[16*e[4*t].width-16*u,8*e[4*t+4*o].width-8*u,4*e[4*t+8*o].width-4*u];for(a=0;a<s.stage_classifier.length;a++){var x=s.stage_classifier[a].orig_feature,_=s.stage_classifier[a].feature=new Array(s.stage_classifier[a].count);for(r=0;r<s.stage_classifier[a].count;r++)for(_[r]={size:x[r].size,px:new Array(x[r].size),pz:new Array(x[r].size),nx:new Array(x[r].size),nz:new Array(x[r].size)},n=0;n<x[r].size;n++)_[r].px[n]=4*x[r].px[n]+x[r].py[n]*v[x[r].pz[n]],_[r].pz[n]=x[r].pz[n],_[r].nx[n]=4*x[r].nx[n]+x[r].ny[n]*v[x[r].nz[n]],_[r].nz[n]=x[r].nz[n]}for(n=0;4>n;n++){var M=[e[4*t].data,e[4*t+4*o].data,e[4*t+8*o+n].data],b=[8*l[n]+w[n]*e[4*t].width*8,4*l[n]+w[n]*e[4*t+4*o].width*4,0];for(i=0;m>i;i++){for(h=0;u>h;h++){var z=0,k=!0;for(a=0;a<s.stage_classifier.length;a++){z=0;var C=s.stage_classifier[a].alpha,_=s.stage_classifier[a].feature;for(r=0;r<s.stage_classifier[a].count;r++){var I,A,D=_[r],S=M[D.pz[0]][b[D.pz[0]]+D.px[0]],E=M[D.nz[0]][b[D.nz[0]]+D.nx[0]];if(E>=S)z+=C[2*r];else{var N,J=!0;for(N=0;N<D.size;N++){if(D.pz[N]>=0&&(I=M[D.pz[N]][b[D.pz[N]]+D.px[N]],S>I)){if(E>=I){J=!1;break}S=I}if(D.nz[N]>=0&&(A=M[D.nz[N]][b[D.nz[N]]+D.nx[N]],A>E)){if(A>=S){J=!1;break}E=A}}z+=J?C[2*r+1]:C[2*r]}}if(z<s.stage_classifier[a].threshold){k=!1;break}}k&&p.push({x:(4*h+2*l[n])*c,y:(4*i+2*w[n])*f,width:s.width*c,height:s.height*f,neighbor:1,confidence:z}),b[0]+=16,b[1]+=8,b[2]+=4}b[0]+=y[0],b[1]+=y[1],b[2]+=y[2]}}c*=d,f*=d}return p}function a(e){{var t,a,r=this.shared.min_neighbors,h=this.shared.cascade;this.shared.interval,this.shared.scale,this.shared.next,this.shared.scale_upto}for(t=0;t<h.stage_classifier.length;t++)h.stage_classifier[t].feature=h.stage_classifier[t].orig_feature;if(e=e[0],r>0){var i=ccv.array_group(e,function(e,t){var a=Math.floor(.25*e.width+.5);return t.x<=e.x+a&&t.x>=e.x-a&&t.y<=e.y+a&&t.y>=e.y-a&&t.width<=Math.floor(1.5*e.width+.5)&&Math.floor(1.5*t.width+.5)>=e.width}),n=i.cat,s=i.index,d=new Array(n+1);for(t=0;t<d.length;t++)d[t]={neighbors:0,x:0,y:0,width:0,height:0,confidence:0};for(t=0;t<e.length;t++){var o=e[t],g=s[t];0==d[g].neighbors&&(d[g].confidence=o.confidence),++d[g].neighbors,d[g].x+=o.x,d[g].y+=o.y,d[g].width+=o.width,d[g].height+=o.height,d[g].confidence=Math.max(d[g].confidence,o.confidence)}var c=[];for(t=0;n>t;t++){var f=d[t].neighbors;f>=r&&c.push({x:(2*d[t].x+f)\/(2*f),y:(2*d[t].y+f)\/(2*f),width:(2*d[t].width+f)\/(2*f),height:(2*d[t].height+f)\/(2*f),neighbors:d[t].neighbors,confidence:d[t].confidence})}var l=[];for(t=0;t<c.length;t++){var o=c[t],w=!0;for(a=0;a<c.length;a++){var p=c[a],u=Math.floor(.25*p.width+.5);if(t!=a&&o.x>=p.x-u&&o.y>=p.y-u&&o.x+o.width<=p.x+p.width+u&&o.y+o.height<=p.y+p.height+u&&(p.neighbors>Math.max(3,o.neighbors)||o.neighbors<3)){w=!1;break}}w&&l.push(o)}return l}return e}if(void 0!==this.shared){var r=get_named_arguments(arguments,[\"canvas\",\"cascade\",\"interval\",\"min_neighbors\"]);this.shared.canvas=r.canvas,this.shared.interval=r.interval,this.shared.min_neighbors=r.min_neighbors,this.shared.cascade=r.cascade,this.shared.scale=Math.pow(2,1\/(r.interval+1)),this.shared.next=r.interval+1,this.shared.scale_upto=Math.floor(Math.log(Math.min(r.canvas.width\/r.cascade.width,r.canvas.height\/r.cascade.height))\/Math.log(this.shared.scale));var h;for(h=0;h<this.shared.cascade.stage_classifier.length;h++)this.shared.cascade.stage_classifier[h].orig_feature=this.shared.cascade.stage_classifier[h].feature}return{pre:e,core:t,post:a}})},onmessage=function(e){var t=\"string\"==typeof e.data?JSON.parse(e.data):e.data,a={shared:t.shared},r=parallable.core[t.name].apply(a,[t.input,t.id,t.worker]);try{postMessage(r)}catch(h){postMessage(JSON.stringify(r))}};"],{type : 'text/javascript'});
var ccvCallbackURL = window.URL.createObjectURL(ccvCallbackBlob);
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
			if (async) {
				return function (complete, error) {
					var executed = 0;
					var outputs = new Array(worker_num);
					var inputs = ctrl.pre.apply(scope, [worker_num]);
					/* sanitize scope shared because for Chrome/WebKit, worker only support JSONable data */
					for (i in scope.shared)
						/* delete function, if any */
						if (typeof scope.shared[i] == "function")
							delete scope.shared[i];
						/* delete DOM object, if any */
						else if (scope.shared[i].tagName !== undefined)
							delete scope.shared[i];
					for (i = 0; i < worker_num; i++) {
						var worker = new Worker(file);
						worker.onmessage = (function (i) {
							return function (event) {
								outputs[i] = (typeof event.data == "string") ? JSON.parse(event.data) : event.data;
								executed++;
								if (executed == worker_num)
									complete(ctrl.post.apply(scope, [outputs]));
							}
						})(i);
						var msg = { "input" : inputs[i],
									"name" : funct.toString(),
									"shared" : scope.shared,
									"id" : i,
									"worker" : params.worker_num };
						try {
							worker.postMessage(msg);
						} catch (e) {
							worker.postMessage(JSON.stringify(msg));
						}
					}
				}
			} else {
				return ctrl.post.apply(scope, [[ctrl.core.apply(scope, [ctrl.pre.apply(scope, [1])[0], 0, 1])]]);
			}
		}
	};
	parallable.core = {};
}

function get_named_arguments(params, names) {
	if (params.length > 1) {
		var new_params = {};
		for (var i = 0; i < names.length; i++)
			new_params[names[i]] = params[i];
		return new_params;
	} else if (params.length == 1) {
		return params[0];
	} else {
		return {};
	}
}

var ccv = {
	pre : function (image) {
		if (image.tagName.toLowerCase() == "img") {
			var canvas = document.createElement("canvas");
			document.body.appendChild(image);
			canvas.width = image.offsetWidth;
			canvas.style.width = image.offsetWidth.toString() + "px";
			canvas.height = image.offsetHeight;
			canvas.style.height = image.offsetHeight.toString() + "px";
			document.body.removeChild(image);
			var ctx = canvas.getContext("2d");
			ctx.drawImage(image, 0, 0);
			return canvas;
		}
		return image;
	},

	grayscale : function (canvas) {
		var ctx = canvas.getContext("2d");
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		var data = imageData.data;
		var pix1, pix2, pix = canvas.width * canvas.height * 4;
		while (pix > 0)
			data[pix -= 4] = data[pix1 = pix + 1] = data[pix2 = pix + 2] = (data[pix] * 0.3 + data[pix1] * 0.59 + data[pix2] * 0.11);
		ctx.putImageData(imageData, 0, 0);
		return canvas;
	},

	array_group : function (seq, gfunc) {
		var i, j;
		var node = new Array(seq.length);
		for (i = 0; i < seq.length; i++)
			node[i] = {"parent" : -1,
					   "element" : seq[i],
					   "rank" : 0};
		for (i = 0; i < seq.length; i++) {
			if (!node[i].element)
				continue;
			var root = i;
			while (node[root].parent != -1)
				root = node[root].parent;
			for (j = 0; j < seq.length; j++) {
				if( i != j && node[j].element && gfunc(node[i].element, node[j].element)) {
					var root2 = j;

					while (node[root2].parent != -1)
						root2 = node[root2].parent;

					if(root2 != root) {
						if(node[root].rank > node[root2].rank)
							node[root2].parent = root;
						else {
							node[root].parent = root2;
							if (node[root].rank == node[root2].rank)
							node[root2].rank++;
							root = root2;
						}

						/* compress path from node2 to the root: */
						var temp, node2 = j;
						while (node[node2].parent != -1) {
							temp = node2;
							node2 = node[node2].parent;
							node[temp].parent = root;
						}

						/* compress path from node to the root: */
						node2 = i;
						while (node[node2].parent != -1) {
							temp = node2;
							node2 = node[node2].parent;
							node[temp].parent = root;
						}
					}
				}
			}
		}
		var idx = new Array(seq.length);
		var class_idx = 0;
		for(i = 0; i < seq.length; i++) {
			j = -1;
			var node1 = i;
			if(node[node1].element) {
				while (node[node1].parent != -1)
					node1 = node[node1].parent;
				if(node[node1].rank >= 0)
					node[node1].rank = ~class_idx++;
				j = ~node[node1].rank;
			}
			idx[i] = j;
		}
		return {"index" : idx, "cat" : class_idx};
	},

	detect_objects : parallable(ccvCallbackURL, function (canvas, cascade, interval, min_neighbors) {
		if (this.shared !== undefined) {
			var params = get_named_arguments(arguments, ["canvas", "cascade", "interval", "min_neighbors"]);
			this.shared.canvas = params.canvas;
			this.shared.interval = params.interval;
			this.shared.min_neighbors = params.min_neighbors;
			this.shared.cascade = params.cascade;
			this.shared.scale = Math.pow(2, 1 / (params.interval + 1));
			this.shared.next = params.interval + 1;
			this.shared.scale_upto = Math.floor(Math.log(Math.min(params.canvas.width / params.cascade.width, params.canvas.height / params.cascade.height)) / Math.log(this.shared.scale));
			var i;
			for (i = 0; i < this.shared.cascade.stage_classifier.length; i++)
				this.shared.cascade.stage_classifier[i].orig_feature = this.shared.cascade.stage_classifier[i].feature;
		}
		function pre(worker_num) {
			var canvas = this.shared.canvas;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var pyr = new Array((scale_upto + next * 2) * 4);
			var ret = new Array((scale_upto + next * 2) * 4);
			pyr[0] = canvas;
			ret[0] = { "width" : pyr[0].width,
					   "height" : pyr[0].height,
					   "data" : pyr[0].getContext("2d").getImageData(0, 0, pyr[0].width, pyr[0].height).data };
			var i;
			for (i = 1; i <= interval; i++) {
				pyr[i * 4] = document.createElement("canvas");
				pyr[i * 4].width = Math.floor(pyr[0].width / Math.pow(scale, i));
				pyr[i * 4].height = Math.floor(pyr[0].height / Math.pow(scale, i));
				pyr[i * 4].getContext("2d").drawImage(pyr[0], 0, 0, pyr[0].width, pyr[0].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);
				ret[i * 4] = { "width" : pyr[i * 4].width,
							   "height" : pyr[i * 4].height,
							   "data" : pyr[i * 4].getContext("2d").getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };
			}
			for (i = next; i < scale_upto + next * 2; i++) {
				pyr[i * 4] = document.createElement("canvas");
				pyr[i * 4].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4].getContext("2d").drawImage(pyr[i * 4 - next * 4], 0, 0, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4].width, pyr[i * 4].height);
				ret[i * 4] = { "width" : pyr[i * 4].width,
							   "height" : pyr[i * 4].height,
							   "data" : pyr[i * 4].getContext("2d").getImageData(0, 0, pyr[i * 4].width, pyr[i * 4].height).data };
			}
			for (i = next * 2; i < scale_upto + next * 2; i++) {
				pyr[i * 4 + 1] = document.createElement("canvas");
				pyr[i * 4 + 1].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 1].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 1].getContext("2d").drawImage(pyr[i * 4 - next * 4], 1, 0, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height, 0, 0, pyr[i * 4 + 1].width - 2, pyr[i * 4 + 1].height);
				ret[i * 4 + 1] = { "width" : pyr[i * 4 + 1].width,
								   "height" : pyr[i * 4 + 1].height,
								   "data" : pyr[i * 4 + 1].getContext("2d").getImageData(0, 0, pyr[i * 4 + 1].width, pyr[i * 4 + 1].height).data };
				pyr[i * 4 + 2] = document.createElement("canvas");
				pyr[i * 4 + 2].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 2].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 2].getContext("2d").drawImage(pyr[i * 4 - next * 4], 0, 1, pyr[i * 4 - next * 4].width, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height - 2);
				ret[i * 4 + 2] = { "width" : pyr[i * 4 + 2].width,
								   "height" : pyr[i * 4 + 2].height,
								   "data" : pyr[i * 4 + 2].getContext("2d").getImageData(0, 0, pyr[i * 4 + 2].width, pyr[i * 4 + 2].height).data };
				pyr[i * 4 + 3] = document.createElement("canvas");
				pyr[i * 4 + 3].width = Math.floor(pyr[i * 4 - next * 4].width / 2);
				pyr[i * 4 + 3].height = Math.floor(pyr[i * 4 - next * 4].height / 2);
				pyr[i * 4 + 3].getContext("2d").drawImage(pyr[i * 4 - next * 4], 1, 1, pyr[i * 4 - next * 4].width - 1, pyr[i * 4 - next * 4].height - 1, 0, 0, pyr[i * 4 + 3].width - 2, pyr[i * 4 + 3].height - 2);
				ret[i * 4 + 3] = { "width" : pyr[i * 4 + 3].width,
								   "height" : pyr[i * 4 + 3].height,
								   "data" : pyr[i * 4 + 3].getContext("2d").getImageData(0, 0, pyr[i * 4 + 3].width, pyr[i * 4 + 3].height).data };
			}
			return [ret];
		};

		function core(pyr, id, worker_num) {
			var cascade = this.shared.cascade;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var i, j, k, x, y, q;
			var scale_x = 1, scale_y = 1;
			var dx = [0, 1, 0, 1];
			var dy = [0, 0, 1, 1];
			var seq = [];
			for (i = 0; i < scale_upto; i++) {
				var qw = pyr[i * 4 + next * 8].width - Math.floor(cascade.width / 4);
				var qh = pyr[i * 4 + next * 8].height - Math.floor(cascade.height / 4);
				var step = [pyr[i * 4].width * 4, pyr[i * 4 + next * 4].width * 4, pyr[i * 4 + next * 8].width * 4];
				var paddings = [pyr[i * 4].width * 16 - qw * 16,
								pyr[i * 4 + next * 4].width * 8 - qw * 8,
								pyr[i * 4 + next * 8].width * 4 - qw * 4];
				for (j = 0; j < cascade.stage_classifier.length; j++) {
					var orig_feature = cascade.stage_classifier[j].orig_feature;
					var feature = cascade.stage_classifier[j].feature = new Array(cascade.stage_classifier[j].count);
					for (k = 0; k < cascade.stage_classifier[j].count; k++) {
						feature[k] = {"size" : orig_feature[k].size,
									  "px" : new Array(orig_feature[k].size),
									  "pz" : new Array(orig_feature[k].size),
									  "nx" : new Array(orig_feature[k].size),
									  "nz" : new Array(orig_feature[k].size)};
						for (q = 0; q < orig_feature[k].size; q++) {
							feature[k].px[q] = orig_feature[k].px[q] * 4 + orig_feature[k].py[q] * step[orig_feature[k].pz[q]];
							feature[k].pz[q] = orig_feature[k].pz[q];
							feature[k].nx[q] = orig_feature[k].nx[q] * 4 + orig_feature[k].ny[q] * step[orig_feature[k].nz[q]];
							feature[k].nz[q] = orig_feature[k].nz[q];
						}
					}
				}
				for (q = 0; q < 4; q++) {
					var u8 = [pyr[i * 4].data, pyr[i * 4 + next * 4].data, pyr[i * 4 + next * 8 + q].data];
					var u8o = [dx[q] * 8 + dy[q] * pyr[i * 4].width * 8, dx[q] * 4 + dy[q] * pyr[i * 4 + next * 4].width * 4, 0];
					for (y = 0; y < qh; y++) {
						for (x = 0; x < qw; x++) {
							var sum = 0;
							var flag = true;
							for (j = 0; j < cascade.stage_classifier.length; j++) {
								sum = 0;
								var alpha = cascade.stage_classifier[j].alpha;
								var feature = cascade.stage_classifier[j].feature;
								for (k = 0; k < cascade.stage_classifier[j].count; k++) {
									var feature_k = feature[k];
									var p, pmin = u8[feature_k.pz[0]][u8o[feature_k.pz[0]] + feature_k.px[0]];
									var n, nmax = u8[feature_k.nz[0]][u8o[feature_k.nz[0]] + feature_k.nx[0]];
									if (pmin <= nmax) {
										sum += alpha[k * 2];
									} else {
										var f, shortcut = true;
										for (f = 0; f < feature_k.size; f++) {
											if (feature_k.pz[f] >= 0) {
												p = u8[feature_k.pz[f]][u8o[feature_k.pz[f]] + feature_k.px[f]];
												if (p < pmin) {
													if (p <= nmax) {
														shortcut = false;
														break;
													}
													pmin = p;
												}
											}
											if (feature_k.nz[f] >= 0) {
												n = u8[feature_k.nz[f]][u8o[feature_k.nz[f]] + feature_k.nx[f]];
												if (n > nmax) {
													if (pmin <= n) {
														shortcut = false;
														break;
													}
													nmax = n;
												}
											}
										}
										sum += (shortcut) ? alpha[k * 2 + 1] : alpha[k * 2];
									}
								}
								if (sum < cascade.stage_classifier[j].threshold) {
									flag = false;
									break;
								}
							}
							if (flag) {
								seq.push({"x" : (x * 4 + dx[q] * 2) * scale_x,
										  "y" : (y * 4 + dy[q] * 2) * scale_y,
										  "width" : cascade.width * scale_x,
										  "height" : cascade.height * scale_y,
										  "neighbor" : 1,
										  "confidence" : sum});
							}
							u8o[0] += 16;
							u8o[1] += 8;
							u8o[2] += 4;
						}
						u8o[0] += paddings[0];
						u8o[1] += paddings[1];
						u8o[2] += paddings[2];
					}
				}
				scale_x *= scale;
				scale_y *= scale;
			}
			return seq;
		};

		function post(seq) {
			var min_neighbors = this.shared.min_neighbors;
			var cascade = this.shared.cascade;
			var interval = this.shared.interval;
			var scale = this.shared.scale;
			var next = this.shared.next;
			var scale_upto = this.shared.scale_upto;
			var i, j;
			for (i = 0; i < cascade.stage_classifier.length; i++)
				cascade.stage_classifier[i].feature = cascade.stage_classifier[i].orig_feature;
			seq = seq[0];
			if (!(min_neighbors > 0))
				return seq;
			else {
				var result = ccv.array_group(seq, function (r1, r2) {
					var distance = Math.floor(r1.width * 0.25 + 0.5);

					return r2.x <= r1.x + distance &&
						   r2.x >= r1.x - distance &&
						   r2.y <= r1.y + distance &&
						   r2.y >= r1.y - distance &&
						   r2.width <= Math.floor(r1.width * 1.5 + 0.5) &&
						   Math.floor(r2.width * 1.5 + 0.5) >= r1.width;
				});
				var ncomp = result.cat;
				var idx_seq = result.index;
				var comps = new Array(ncomp + 1);
				for (i = 0; i < comps.length; i++)
					comps[i] = {"neighbors" : 0,
								"x" : 0,
								"y" : 0,
								"width" : 0,
								"height" : 0,
								"confidence" : 0};

				// count number of neighbors
				for(i = 0; i < seq.length; i++)
				{
					var r1 = seq[i];
					var idx = idx_seq[i];

					if (comps[idx].neighbors == 0)
						comps[idx].confidence = r1.confidence;

					++comps[idx].neighbors;

					comps[idx].x += r1.x;
					comps[idx].y += r1.y;
					comps[idx].width += r1.width;
					comps[idx].height += r1.height;
					comps[idx].confidence = Math.max(comps[idx].confidence, r1.confidence);
				}

				var seq2 = [];
				// calculate average bounding box
				for(i = 0; i < ncomp; i++)
				{
					var n = comps[i].neighbors;
					if (n >= min_neighbors)
						seq2.push({"x" : (comps[i].x * 2 + n) / (2 * n),
								   "y" : (comps[i].y * 2 + n) / (2 * n),
								   "width" : (comps[i].width * 2 + n) / (2 * n),
								   "height" : (comps[i].height * 2 + n) / (2 * n),
								   "neighbors" : comps[i].neighbors,
								   "confidence" : comps[i].confidence});
				}

				var result_seq = [];
				// filter out small face rectangles inside large face rectangles
				for(i = 0; i < seq2.length; i++)
				{
					var r1 = seq2[i];
					var flag = true;
					for(j = 0; j < seq2.length; j++)
					{
						var r2 = seq2[j];
						var distance = Math.floor(r2.width * 0.25 + 0.5);

						if(i != j &&
						   r1.x >= r2.x - distance &&
						   r1.y >= r2.y - distance &&
						   r1.x + r1.width <= r2.x + r2.width + distance &&
						   r1.y + r1.height <= r2.y + r2.height + distance &&
						   (r2.neighbors > Math.max(3, r1.neighbors) || r1.neighbors < 3))
						{
							flag = false;
							break;
						}
					}

					if(flag)
						result_seq.push(r1);
				}
				return result_seq;
			}
		};
		return { "pre" : pre, "core" : core, "post" : post };
	})
}
var onmessage = function (event) {
	var data = (typeof event.data == "string") ? JSON.parse(event.data) : event.data;
	var scope = { "shared" : data.shared };
	var result = parallable.core[data.name].apply(scope, [data.input, data.id, data.worker]);
	try {
		postMessage(result);
	} catch (e) {
		postMessage(JSON.stringify(result));
	}
}