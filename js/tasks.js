let hash = document.location.hash;
let hash_id = hash.substring(1);

try {
    let details = document.getElementById('d' + hash_id);
    details.open = true;
    document.location.hash = 'd'+hash_id;
    
    details.style.background = '#FD820Daa';
    setTimeout(function () {
        details.style.background = '';
    }, 1000);

} catch (err) {
    document.getElementById('d6').open = true;
    document.location.hash = 'd6';
}
