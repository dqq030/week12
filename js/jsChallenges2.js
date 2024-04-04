document.querySelector('#sameAddress').addEventListener('click', function () {
    var home = document.querySelector('#home')
    home.value = document.querySelector('#bill').value;
    home.disabled = this.checked;
});