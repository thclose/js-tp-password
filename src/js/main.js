const app = {
  cacheDom() {
    this.pwd = document.getElementById('password');
    this.btn = document.querySelector('.showPass');
  },
  init() {
    this.cacheDom();
    document.documentElement.classList.add("js-enabled");
    this.addEventListeners();
  },
  addEventListeners() {
    this.btn.addEventListener('click', () => {
      this.togglePass();
    });
  },
  togglePass() {
    (this.pwd.type === 'password') ? this.pwd.type = 'text' : this.pwd.type = 'password';
  }
};
app.init();
