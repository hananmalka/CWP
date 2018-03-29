let configuration = {
    customize: ''
};

function setConfig() {
    if (localStorage.getItem('Customization')) {
        configuration.customize = !(JSON.parse(localStorage.getItem('Customization')).customize);
    } else {
        configuration.customize = true;
    }
    localStorage.setItem('Customization', JSON.stringify(configuration));
}


function loadConfiguration() {
    if (!localStorage.getItem('Customization')) {
        $('#checkbox_config_page').prop('checked', false);
    } else {
        $('#checkbox_config_page').prop('checked', JSON.parse(localStorage.getItem('Customization')).customize);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('input').addEventListener('click', function() {
        setConfig();
    });
    loadConfiguration();
});
