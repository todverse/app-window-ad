class Slider {
	constructor(id, slides, meta) {
		this.elem = document.getElementById(id);
		this.slides = slides;
		let {delay=3} = meta;
		let {pugs=true} = meta;
		this.meta = meta;
		this.meta.delay = delay;
		this.meta.pugs = pugs;
		this.i = 1;
		this.j = -1;
	}
	auto() {
		this.timer = setInterval(() => {
			this.elem.style.backgroundImage = `url(${this.slides[this.i].url})`;
		if(this.meta.pugs) { 
					this.pugin.remove();
					this.addPugs(this.i);
				};
			this.i++;
			if(this.i === this.slides.length) this.i = 0;
		}, Number(this.meta.delay)*1000);
	}
	stopAuto() {
		clearInterval(this.timer);
	}
	addButton() {
	/*		let btn1 = document.createElement('button');
			let btn2 = document.createElement('button');
				btn1.className = 'btn_right';
				btn1.style.float = 'right';
				btn1.style.width = '12%';
				btn1.style.height = '12%';
				btn1.style.marginTop = '44%';
				btn1.style.backgroundColor = 'transparent';
				btn1.style.border = 'none';
				btn1.style.backgroundImage = 'url(slider_module/c_arrow_up_hover.png)';
				btn1.style.backgroundSize = '40%';
				btn1.style.backgroundPosition = 'center';
				btn1.style.backgroundRepeat = 'no-repeat';
				btn2.className = 'btn_left';
				btn2.className = 'btn_right';
				btn2.style.float = 'left';
				btn2.style.width = '12%';
				btn2.style.height = '12%';
				btn2.style.marginTop = '44%';
				btn2.style.backgroundColor = 'transparent';
				btn2.style.backgroundImage = 'url(slider_module/c_arrow_down_hover.png)';
				btn2.style.backgroundSize = '40%';
				btn2.style.backgroundPosition = 'center';
				btn2.style.backgroundRepeat = 'no-repeat';
				btn2.style.border = 'none';
			this.elem.appendChild(btn1);
			this.elem.appendChild(btn2);*/
			let btn1 = document.getElementById('butUp');
			let btn2 = document.getElementById('butDown');
			btn1.style.float = 'right';
			btn2.style.float = 'left';
			btn1.addEventListener('click', () => {
				if(this.i !== this.slides.length) {
					this.elem.style.backgroundImage = `url(${this.slides[this.i].url})`;
					this.j = this.i-1;
				if(this.meta.pugs) { 
					this.pugin.remove();
					this.addPugs(this.i);
				};
					this.i++;
				}else {
					this.i = 0;
					this.elem.style.backgroundImage = `url(${this.slides[this.i].url})`;
					this.j = this.i-1;
				if(this.meta.pugs) { 
					this.pugin.remove();
					this.addPugs(this.i);
				};
					this.i++;
					
				};
			});
			btn2.addEventListener('click', () => {
				if(this.j !== -1) {
					this.elem.style.backgroundImage = `url(${this.slides[this.j].url})`;
					this.i = this.j+1;
				if(this.meta.pugs) { 
					this.pugin.remove();
					this.addPugs(this.j);
				};
					this.j--;
				}else {
					this.j = this.slides.length-1;
					this.elem.style.backgroundImage = `url(${this.slides[this.j].url})`;
					this.i = this.j+1;
				if(this.meta.pugs) { 
					this.pugin.remove();
					this.addPugs(this.j);
				};
					this.j--;
				};
			});
	}
	openImg() {
		this.elem.style.position = 'absolute';
		this.elem.style.top = '0';
		this.elem.style.left = '0';
		this.elem.style.width = '100%';
		this.elem.style.height = '100%';
		document.getElementsByClassName('buttonsslide')[0].style.marginTop = '50%';
		document.getElementsByClassName('buttonsslide')[1].style.marginTop = '50%';
		document.getElementById('butUp').style.height = '100%';
		document.getElementById('butDown').style.height = '100%';
		this.pugin.style.bottom = '-95%';
		this.elem.style.opacity = '';
	}
	closeImg() {
		this.elem.style.position = 'relative';
		this.elem.style.top = '';
		this.elem.style.left = '';
		this.elem.style.width = '';
		this.elem.style.height = '300px';
		document.getElementsByClassName('buttonsslide')[0].style.marginTop = '108px';
		document.getElementsByClassName('buttonsslide')[1].style.marginTop = '108px';
		document.getElementById('butUp').style.height = '';
		document.getElementById('butDown').style.height = '';
		this.pugin.style.bottom = '-80%';
	}
	addPugs(c) {
		this.pugin = document.createElement('div');
		for(let i = 0; i < this.slides.length; i++) {
			let a = document.createElement('input');
			a.type = 'radio';
			a.id = 'radio';
			if(i === c) a.checked = 'checked';
			this.pugin.appendChild(a);
			a.addEventListener('click', (e) => {
				for(let i = 0; i < this.slides.length; i++) {
					this.pugin.childNodes[i].checked = '';
				};
				e.target.checked = 'checked';
				for(let i = 0; i < this.slides.length; i++) {
					if(this.pugin.childNodes[i].checked === true) {
						this.i = i+1;
						this.j = i-1;
						this.elem.style.backgroundImage = `url(${this.slides[i].url})`;
					};
				};
			});
		};
		this.pugin.style.position = 'relative';
		if (this.elem.style.width == '100%') {
			this.pugin.style.bottom = '-95%';
		}else {
			this.pugin.style.bottom = '-80%';
		};
		this.pugin.style.textAlign = 'center';
		this.pugin.style.padding = '0';
		this.elem.appendChild(this.pugin);
	}
	start() {
		this.elem.style.backgroundImage = `url(${this.slides[0].url})`;
		this.elem.style.backgroundSize = '70%';
		this.elem.style.backgroundPosition = 'center';
		this.elem.style.backgroundRepeat = 'no-repeat';
		this.elem.addEventListener('click',(e) => {
			if (e.target == document.getElementById('slider')) {
				if(e.target.style.width == '100%') {
					this.closeImg();
				} else {
					this.openImg();
				};
			};
		});
		this.elem.addEventListener('mousemove',(e) => {
			if (e.target == document.getElementById('slider')) {
				if(e.target.style.width == '100%') {
					e.target.style.cursor = 'pointer';
					e.target.style.opacity = '';
				} else {
					e.target.style.cursor = 'pointer';
					e.target.style.opacity = '0.8';
				};
			};
		});
		this.elem.addEventListener('mouseout',(e) => {
			if (e.target == document.getElementById('slider')) {
				if(e.target.style.width == '100%') {
				} else {
					e.target.style.cursor = 'pointer';
					e.target.style.opacity = '';
				};
			};
		});
		if(this.meta.auto) this.auto();
		if(this.meta.navs) this.addButton();
		if(this.meta.pugs) this.addPugs(0);
	}
	stop() {
		if(this.meta.auto) this.stopAuto();
	}
}
