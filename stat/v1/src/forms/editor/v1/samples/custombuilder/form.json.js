     var configJson = localStorage.getItem("configJson");
             configJson = JSON.parse(configJson);
     var customBuilderTest = configJson;

formObj = {};
window.onload = function() {
        Formio.builder(document.getElementById('builder'),{},customBuilderTest);
     
};







