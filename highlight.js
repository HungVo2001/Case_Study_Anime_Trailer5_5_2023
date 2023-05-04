window.onload = (event) => {
    document.getElementById('title').innerHTML = localStorage.getItem('title');
    // document.getElementById('account').innerHTML = localStorage.getItem('account');
    // document.getElementById('year').innerHTML = localStorage.getItem('year');
    // document.getElementById('category').innerHTML = localStorage.getItem('category');
    document.getElementById('video').setAttribute('src', localStorage.getItem('video'));
  
 };