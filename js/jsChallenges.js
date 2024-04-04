document.querySelector('#subscribe').addEventListener('click', function () {
    if (this.checked) {
        document.querySelector('#emailDiv').style.display = 'block';
    } else {
        document.querySelector('#emailDiv').style.display = 'none';
    }
});

// If the visitor clicks anywhere on the page an alert button should
// pop up with the current time.

document.addEventListener('click', function () {
    alert(new Date());
})