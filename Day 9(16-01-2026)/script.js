function darkMode(){
    let setTheme = document.body;
    setTheme.classList.toggle('dark-mode');

    let theme;

    if(setTheme.classList.contains('dark-mode')){
        theme = 'DARK';
    }
    else{
        theme = 'LIGHT';
    }

    localStorage.setItem('PageTheme', JSON.stringify(theme));
}


let getTheme = JSON.parse(localStorage.getItem('PageTheme'));

if(getTheme == 'DARK')
    document.body.classList = 'dark-mode'
