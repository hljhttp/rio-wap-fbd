window.onload = function () {
    // setVersionNum();
};

var controlsObj;
var customFormBuilder;


if (isIEBrowser() || /Edge\/12./i.test(navigator.userAgent)) {

    if (controlsObj != 'undefined') {
        // Set form builder.
        customFormBuilder = controlsObj;

    } else {

        customFormBuilder = {
            builder: {
                layout: {
                    components: {}
                }
            }
        };
    }
} else {
    if (sessionStorage.customFormBuilder) {
        customObjSession = sessionStorage.getItem('customFormBuilder');
        customFormBuilder = JSON.parse(customObjSession);
        // customeditor
        $(document).ready(function () {

            //customeditor.set(customFormBuilder);

        });

    } else if (controlsObj != 'undefined') {
        // Set form builder.
        customFormBuilder = controlsObj;
    } else {

        // default form
        customFormBuilder = {
            builder: {
                layout: {
                    components: {}
                }
            }
        };
    }


}


$(document).ready(function () {


    formVersionControl = new LinkedList();
    Formio.createForm(document.getElementById('divHelp'), builderhelpObj);
    Formio.createForm(document.getElementById('undoRedo'), undoRedoObj);
    initFormVersion();

    setTimeout(function () {
        $('[name="data\\[undo\\]"]').click(function () {

            undoFormVersion();

        })
        $('[name="data\\[redo\\]"]').click(function () {

            redoFormVersion();
        })

        textFieldMonitor();
    }, 100);
});


// Builder setting 

if(urlQuery['form'] == undefined){

    var builder = new Formio.FormBuilder(document.getElementById("builder"), { display: 'form', components: [], properties: {} }, customFormBuilder);

}else{

    var builder = new Formio.FormBuilder(document.getElementById("builder"), formObj, customFormBuilder);
    
    
}







var keyName = 'outerColumns';
var updateBuilder = false;
var displayPDF = false;
// Handle the form selection.
$(document).ready(function () {
    var formSelect = document.getElementById('form-select');
    formSelect.addEventListener("change", function () {
        setDisplay(this.value);

        if (builder.instance.schema.display != "pdf") {
            delete builder.instance.schema.settings
            $("#loadHtml").css('display', 'none');
            $("#savePdf").css('display', 'none');
            displayPDF = false;
        } else {

            pdftemplateSrc = function () {
                var pathName = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
                return pathName + '/pdf2htmlEX/pdfTemplate';
            }

            builder.instance.schema.settings = {
                pdf: {
                    "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
                    "src": pdftemplateSrc()
                }
            }
            $("#loadHtml").css('display', 'block');
            $("#savePdf").css('display', 'block');
            displayPDF = true;

        }


    });

});


setDisplay('form');



function setDisplay(display) {
    builder.setDisplay(display).then(function (instance) {
        //load form builder
        $("#openButtonCFB").click(function () {
            var file = document.getElementById("loadDocumentCFB").files[0];

            if (file) {

                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function (evt) {
                    /*
                        get data form file and send to cutTemplateString for cut string (varible name and semicolon).
                    */
                    templateJson = cutCustomFormNBuilderString(evt.target.result);

                    try {

                        customFormBuilder = JSON.parse(templateJson);
                        customFormBuilderKeySize = Object.keys(customFormBuilder).length

                        /*
                            check builder key in json data.
                        */


                        if (customFormBuilder['builder'] == undefined || customFormBuilderKeySize > 1) {
                            $(".warnmsgConfiguration").replaceWith(
                                '<div class="alert alert-warning alert-dismissable configwarning warnmsgConfiguration"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The Json template file has an incorect format.</div></div>'
                            )
                            notificationTimeOut['warnmsgConfiguration'] = setTimeout(function () {
                                $(".configwarning").replaceWith('<div class="warnmsgConfiguration"></div>');
                            }, 3000)
                            return;
                        }

                    } catch (error) {
                        $(".warnmsgConfiguration").replaceWith(
                            '<div class="alert alert-warning alert-dismissable configwarning warnmsgConfiguration"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The Json template file has an incorect format.</div></div>'
                        )
                        notificationTimeOut['warnmsgConfiguration'] = setTimeout(function () {
                            $(".configwarning").replaceWith('<div class="warnmsgConfiguration"></div>');
                        }, 3000)
                        return;
                    }


                    /*
                        save generated json(custom form builder) to local storage 
                        if user close browser tab this data will delete.
                    */
                    if (!isIEBrowser() && !/Edge\/12./i.test(navigator.userAgent)) {
                        sessionStorage.setItem('customFormBuilder', JSON.stringify(customFormBuilder));
                        customObjSession = sessionStorage.getItem('customFormBuilder');
                    } else {
                        customObjSession = JSON.stringify(customFormBuilder);
                    }

                    // reload web page.
                    location.reload();

                }
            } else {

                $(".warnmsgConfiguration").replaceWith(
                    '<div class="alert alert-warning alert-dismissable configwarning warnmsgConfiguration"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The Json template file has an incorect format.</div></div>'
                )
                notificationTimeOut['warnmsgConfiguration'] = setTimeout(function () {
                    $(".configwarning").replaceWith('<div class="warnmsgConfiguration"></div>');
                }, 3000)

            }
        });

        $("#openButtonCFBEdit").click(function () {
            updateBuilder = false;
            var file = document.getElementById("loadDocumentCFBEdit").files[0];
            var editFBcontrol = { "display": "form", "components": [], "properties": {}, "title": "", "name": "" };
            if (file) {

                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function (evt) {
                    /*
                        get data form file and send to cutTemplateString for cut string (varible name and semicolon).
                    */
                    templateJson = cutCustomFormNBuilderString(evt.target.result);

                    try {

                        customFormBuilder = JSON.parse(templateJson);

                        var nameFB = Object.keys(customFormBuilder.builder)[0];

                        setTimeout(function () {

                            $('#title').val(customFormBuilder.builder[nameFB].title);
                            $('#name').val(nameFB);
                        });

                        for (var key in customFormBuilder.builder) {

                            if (customFormBuilder.builder[key].components != undefined) {

                                for (var key1 in customFormBuilder.builder[key].components) {
                                    if (customFormBuilder.builder[key].components[key1].schema != undefined) {

                                        editFBcontrol.components.push(customFormBuilder.builder[key].components[key1].schema);
                                    }
                                }
                            }

                        }

                        editor.set(editFBcontrol);
                        clearFormVersion();
                        pushFormVersion(editFBcontrol);
                        builder.form = editFBcontrol;
                        builder.render();
                        openfromfile = true;
                        $("#edittab").trigger("click");


                    } catch (error) {
                        $(".warnmsgConfiguration").replaceWith(
                            '<div class="alert alert-warning alert-dismissable configwarning warnmsgConfiguration"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The Json template file has an incorect format.</div></div>'
                        )
                        notificationTimeOut['warnmsgConfiguration'] = setTimeout(function () {
                            $(".configwarning").replaceWith('<div class="warnmsgConfiguration"></div>');
                        }, 3000)
                        return;
                    }

                }
            } else {

                $(".warnmsgConfiguration").replaceWith(
                    '<div class="alert alert-warning alert-dismissable configwarning warnmsgConfiguration"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The Json template file has an incorect format.</div></div>'
                )
                notificationTimeOut['warnmsgConfiguration'] = setTimeout(function () {
                    $(".configwarning").replaceWith('<div class="warnmsgConfiguration"></div>');
                }, 3000)

            }
        });


        $('#openButtonCFBLoadForm').click(function () {


            var file = document.getElementById("loadDocumentCFBLoadForm").files[0];

            if (file) {
                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function (evt) {

                    if (file.type == 'text/javascript' || file.type == 'application/json') {
                        templateJson = cutTemplateString(evt.target.result);
                    } else {

                        templateJson = evt.target.result;
                    }

                    jsonFormToBuilder = new customBuilderPrototype();

                    verifyJsonFail = false;

                    if (jsonFormToBuilder.verifyJson(templateJson) == verifyJsonFail) {
                        jsonFormToBuilder.alertInvalidJson("warnmsgConfiguration", "configwarning");
                        return;
                    }

                    componentJson = JSON.parse(templateJson)
                    componentArray = JSON.parse(templateJson);
                    configWeight = 99;

                    if (componentJson['components'] == undefined) {

                        jsonFormToBuilder.alertInvalidJson("warnmsgConfiguration", "configwarning");
                        return
                    }

                    configJson = jsonFormToBuilder.componentToCustomBuilder(componentJson.title, componentJson.name, configWeight, componentArray);

                    if (configJson == false) {
                        jsonFormToBuilder.alertInvalidJson("warnmsgConfiguration", "configwarning");
                        return;
                    }

                    customFormBuilder = configJson;

                    if (!isIEBrowser() && !/Edge\/12./i.test(navigator.userAgent)) {
                        sessionStorage.setItem('customFormBuilder', JSON.stringify(customFormBuilder));
                        customObjSession = sessionStorage.getItem('customFormBuilder');
                    } else {
                        customObjSession = JSON.stringify(customFormBuilder);
                    }

                    // reload web page.
                    location.reload();
                }
            }

        });

        //begin read form renderer file
        $("#openButton").click(function () {
            updateBuilder = false;
            $('#addCustomProperties tr:gt(0)').remove()
            $("#followingButtons").contents().find("button").removeAttr('disabled');

            var file = document.getElementById("loadDocument").files[0];
            if (file) {

                var reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = function (evt) {

                    if (file.type == 'text/javascript' || file.type == 'application/json') {
                        templateJson = cutTemplateString(evt.target.result);
                    } else {

                        templateJson = evt.target.result;
                    }

                    // catch  another case of jsonTemplate
                    try {

                        editor.set(JSON.parse(templateJson));




                        setTimeout(function () {
                            NewFormData = JSON.parse(editor.getText());

                            $('#title').val(NewFormData['title']);
                            $('#name').val(NewFormData['name']);

                            var table = document.getElementById("addCustomProperties");

                            var row = "";
                            var btName;
                            var i = 1;
                            $.each(NewFormData['properties'], function (key, value) {

                                btName = "data[" + key + "]";
                                btName = btName.replace(/ /g, "");

                                var buttonName = "'" + btName + "'";
                                row += '<tr><td><input id=inputKey' + i + ' name="dataKey[' + i + ']" value="' + key + '" type="text" class="form-control" lang="en"></td>';
                                row += '<td><input id=inputValue' + i + ' name="dataValue[' + i + ']" value="' + value + '" type="text" class="form-control" lang="en"></td>';
                                row += '<td><button type="button" class="btn btn-default btn-secondary" onclick="deleteDefaultValue(this,' + buttonName + ');"><i class="glyphicon glyphicon-remove-circle"></i></button></td></tr>';


                                if (document.getElementsByName(btName)[0] != undefined)
                                    document.getElementsByName(btName)[0].setAttribute("disabled", true);
                                ++i;
                            });

                            $("#addCustomProperties").append(row);
                            instance._form = NewFormData;

                            /*
                                variable builder.form in view of formbuilder in edit tab.
                                use builder.render for refresh .
                            */
                            clearFormVersion();
                            pushFormVersion(templateJson);
                            builder.form = NewFormData;
                            builder.render();
                            openfromfile = true;
                            $("#edittab").trigger("click");


                        }, 15);

                    } catch (error) {


                        $(".warnmsg").replaceWith(
                            '<div class="alert alert-warning alert-dismissable openwarning warnmsg"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The Json template file has an incorect format.</div></div>'
                        )
                        notificationTimeOut['warnmsg'] = setTimeout(function () {
                            $(".openwarning").replaceWith('<div class="warnmsg"></div>');
                        }, 3000)
                    }

                }

            }

        }); // end on click "Open button."  

        //------------------------------------------------------- edit Code on Definition (catch event keyup) ------------------------------------------ 
        $('#jsoneditor').on('keyup', function () {
            updateBuilder = true;
            editByKeyboard = true;
        })

        //------------------------------------------------------- paste Code on Definition ------------------------------------------
        $('#jsoneditor').on('paste', function () {
            updateBuilder = false;
            // $('table#addCustomProperties tr').remove();
            $('#addCustomProperties tr:gt(0)').remove();
            $("#followingButtons").contents().find("button").removeAttr('disabled');

            pasteFormData = editor.getText();
            pasteFormData = cutTemplateString(pasteFormData);
            pasteFormData = JSON.parse(pasteFormData);



            $('#title').val(pasteFormData['title']);
            $('#name').val(pasteFormData['name']);

            var table = document.getElementById("addCustomProperties");

            var row = "";
            var btName;
            var i = 1;
            $.each(pasteFormData['properties'], function (key, value) {

                btName = "data[" + key + "]";
                btName = btName.replace(/ /g, "");

                var buttonName = "'" + btName + "'";
                row += '<tr><td><input id=inputKey' + i + ' name="dataKey[' + i + ']" value="' + key + '" type="text" class="form-control" lang="en"></td>';
                row += '<td><input id=inputValue' + i + ' name="dataValue[' + i + ']" value="' + value + '" type="text" class="form-control" lang="en"></td>';
                row += '<td><button type="button" class="btn btn-default btn-secondary" onclick="deleteDefaultValue(this,' + buttonName + ');"><i class="glyphicon glyphicon-remove-circle"></i></button></td></tr>';


                if (document.getElementsByName(btName)[0] != undefined)
                    document.getElementsByName(btName)[0].setAttribute("disabled", true);
                ++i;
            });

            $("#addCustomProperties").append(row);
            editor.set(pasteFormData);
            clearFormVersion();
            pushFormVersion(pasteFormData);

            instance._form = pasteFormData;

            builder.form = pasteFormData;
            builder.render();
        });


        var formElement = document.getElementById('formio');
        drag = false;
        undoredoEvent = false;

        oldEventId = null;
        oldComponentKey = null;
        instance.on('saveComponent', function (event) {



            if (oldEventId != event.id || oldComponentKey != event.key) {

                oldEventId = event.id;
                oldComponentKey = event.key;
                var schema = builder.instance.schema;
                editor.set(schema);
                // formVersionControl.push(JSON.stringify(schema));'
                pushFormVersion(schema);
                updateBuilder = false;

            }



        });

        instance.on('editComponent', function (event) {
            // var schema = instance.schema;
            // editor.set(schema);
        });

        instance.on('updateComponent', function (event) {
            // var schema = instance.schema;
            // editor.set(schema);
        });

        instance.on('deleteComponent', function (event) {


            if (oldEventId != event.id || oldComponentKey != event.key) {

                oldEventId = event.id;
                oldComponentKey = event.key;
                setTimeout(function () {
                    var schema = builder.instance.schema;
                    schema = checkComponentLength(schema)
                    editor.set(schema)

                    // updatePointer = true
                    updateBuilder = true;
                    pushFormVersion(schema)
                }, 100);
            }
        });
        editor.set(instance.schema);
        //Formio.createForm(formElement, instance.schema,langObj);
        generateForm();

    });
}


$('#savePdf').click(function () {

    var schema = builder.instance.schema;
    editor.set(schema);
    pushFormVersion(schema);
    updateBuilder = false;

});

/*
    push trigger for undo redo form 
*/
pointer = null;
updatePointer = false
function pushFormVersion(schema) {




    pointerObj = formVersionControl.search(pointer);


    schema = formObjectTostring(schema);

    if (pointerObj == undefined || pointerObj.prev == null) {

        formVersionControl.push(schema);

    } else {

        formVersionControl.pushWithpointer(schema, pointerObj);

    }

    pointer = formVersionControl.head;

}

// change object to string.

function formObjectTostring(formObject) {

    if (typeof formObject == 'string') {

        return formObject;
    } else {

        return JSON.stringify(formObject);
    }

}

/*
    remove all of form version on linked list 
*/
function clearFormVersion() {

    formVersionControl.clearlist();
}
/*
    undo function 
*/
function undoFormVersion() {

    returnResult = formVersionControl.back(pointer);
    try {

        if (returnResult == null) {

            console.warn("Cannot undo form");

        } else {
            undoredoEvent = true;
            pointer = returnResult;

            editor.set(JSON.parse(pointer.value));
            builder.form = JSON.parse(pointer.value);
            //updatePointer = true;
            updateBuilder = true;
            // use edittab function for render all of edit page.

            var jsonCode = JSON.parse(editor.getText());
            if (jsonCode.hasOwnProperty('settings')) {
                if (jsonCode.settings.pdf.hasOwnProperty('status')) {
                    if (jsonCode.settings.pdf.status == 'convert-normal-html') {

                        $('#edittab').click();
                        setTimeout(function () {


                            htmlNormalFileData = htmlText;

                            iframe_id = "#" + $('iframe').first().attr('id');
                            iframe_id = String(iframe_id);
                            // clear old html content.
                            $('[content-area=html]', $(iframe_id).contents()).html("");
                            $('[content-area=html]', $(iframe_id).contents()).append(htmlNormalFileData);

                        }, 1000);
                    } else {
                        edittab();
                        return;
                    }
                } else {
                    edittab();
                }
            } else {
                edittab();
            }

        }
    }
    catch (error) {
        console.warn("Cannot undo form because this is the first version.");
    }


}
/*
    redo function 
*/
function redoFormVersion() {

    returnResult = formVersionControl.forward(pointer);
    try {
        if (returnResult == null) {

            console.warn("cannot redo form");

        } else {
            undoredoEvent = true;
            pointer = returnResult;
            editor.set(JSON.parse(pointer.value));
            builder.form = JSON.parse(pointer.value);
            // updatePointer = true;
            updateBuilder = true;
            // use edittab function for render all of edit page.
            var jsonCode = JSON.parse(editor.getText());

            if (jsonCode.hasOwnProperty('settings')) {
                if (jsonCode.settings.pdf.hasOwnProperty('status')) {
                    if (jsonCode.settings.pdf.status == 'convert-normal-html') {

                        $('#edittab').click();
                        setTimeout(function () {

                            htmlNormalFileData = htmlText;

                            iframe_id = "#" + $('iframe').first().attr('id');
                            iframe_id = String(iframe_id);
                            // clear old html content.
                            $('[content-area=html]', $(iframe_id).contents()).html("");
                            $('[content-area=html]', $(iframe_id).contents()).append(htmlNormalFileData);

                        }, 1000);
                    } else {
                        edittab();
                        return;
                    }
                } else {
                    edittab();
                }
            } else {
                edittab();
            }
        }

    } catch (error) {

        console.warn("cannot redo form because this is the lastest version.");

    }


}



/**
 * Get JSON string from template file
 */
function cutCustomFormNBuilderString(templateJson) {
    // cut 'var controlsObj = 'and ';' in variable templateJson.
    firstBrace = templateJson.indexOf("{");
    templateJson = templateJson.slice(0, 0) + templateJson.slice(firstBrace);
    templateJson = templateJson.replace(/\s*$/, '');
    orginalLength = templateJson.length;
    lastIndexOfComma = templateJson.lastIndexOf(";");
    const haveCommaAtLast = 1;
    if ((orginalLength - lastIndexOfComma) == haveCommaAtLast) {
        templateJson = templateJson.substring(";", templateJson.length - 1);

    }
    return templateJson;
}

function cutTemplateString(templateJson) {

    // cut 'var formObj = 'and ';' in variable templateJson.
    firstBrace = templateJson.indexOf("{");
    templateJson = templateJson.slice(0, 0) + templateJson.slice(firstBrace);
    orginalLength = templateJson.length;
    lastIndexOfComma = templateJson.lastIndexOf(";");
    const haveCommaAtLast = 1;
    if ((orginalLength - lastIndexOfComma) == haveCommaAtLast) {
        templateJson = templateJson.substring(";", templateJson.length - 1);

    }

    return templateJson;

}

//Create following buttons 
Formio.createForm(document.getElementById('followingButtons'), propertiesObj);

//create custompropeties


function insertShowAndSetDataBtn(formJson, keyName) {
    for (var i = 0; i < formJson.components.length; i++) {
        if (formJson.components[i].key == keyName) {
            foundButton = true;
            break;
        }
        foundButton = false;
    }
    if (foundButton != true) {

        // unfreeze object.components 
        compTemp = JSON.parse(JSON.stringify(formJson));
        compTemp.components.push(viewButtonsObj);
        formJson = compTemp;
        return formJson;
    }
    return formJson;
}

function setFileName(oFileInput, sTargetID) {
    if (oFileInput.value != '') {
        document.getElementById(sTargetID).innerHTML = oFileInput.files[0].name;
    } else {
        document.getElementById(sTargetID).innerHTML = '';
    }
};


// create the editor
var editor = new JSONEditor(document.getElementById('jsoneditor'), { mode: "code" });
var editorData = new JSONEditor(document.getElementById('editorData'), { mode: "code" });
var uploadStatus = false;

// Load a JSON document

FileReaderJS.setupInput(document.getElementById('loadDocument'), {
    readAsDefault: 'Text',
    on: {
        load: function (event, file) {
            var strTemplate;
            if (event.target.result.indexOf("var formObj = {") >= 0) {
                strTemplate = event.target.result.substring(event.target.result.indexOf("var formObj = {") + 13,
                    event.target.result.lastIndexOf(";"));
                //   editor.setText(strTemplate);
            } else {
                strTemplate = event.target.result;
                //   editor.setText(strTemplate);
            }
            uploadStatus = true;
        }
    }
});


/**
 * Save data to file .json
 */
function saveDocument() {

    if (!(IsJsonString() === 0)) {
        AlertInvalid(IsJsonString());
    } else {
        // Save Dialog
        // fname = window.prompt("Please input file name....");
        fname = document.getElementById("input-fileName").value;
        //fname="data";
        if (fname == null || fname == '') {
            fname = "form";
        }

        // Check json extension in file name
        if (fname.indexOf(".") == -1) {
            fname = fname + ".json";
        } else {
            if (fname.split('.').pop().toLowerCase() == "json") {
                // Nothing to do
            } else {
                fname = fname.split('.')[0] + ".json";
            }
        }

        var blob = new Blob([editor.getText()], { type: 'application/json;charset=utf-8' });
        var realform = editor.getText();
        saveAs(blob, fname);
        //	FileSaver.saveAs(blob, "sample.json");
        //window.navigator.msSaveOrOpenBlob(blob,'sample.json');
    }
};

/**
 * Save data to file json.js 
 */
function saveDocumentJsonJs() {

    if (!(IsJsonString() === 0)) {
        AlertInvalid(IsJsonString());
    } else {
        // Save Dialog
        // fname = window.prompt("Please input file name....");
        fname = document.getElementById("input-fileName").value;
        //fname="data";
        if (fname == null || fname == '') {
            fname = "form";
        }
        // Check json extension in file name
        if (fname.indexOf(".") == -1) {
            fname = fname + ".json.js";
        } else {
            if (fname.split('.').pop().toLowerCase() == "json") {
                // Nothing to do
            } else {
                fname = fname.split('.')[0] + ".json.js";
            }
        }

        var blob = new Blob(["var formObj = " + editor.getText() + ";"], { type: 'application/json;charset=utf-8' });
        var realform = editor.getText();
        saveAs(blob, fname);
        //	FileSaver.saveAs(blob, "sample.json");
        //window.navigator.msSaveOrOpenBlob(blob,'sample.json');
    }
};


//Save JS     
function IsJsonString() {
    var state = 0;
    try {
        JSON.parse(editor.getText());
    } catch (e) {
        return 2;
    }

    return editor.getText() != "{}" ? 0 : 1
}

function AlertInvalid(state) {
    state === 2 ?
        $(".setAlert").replaceWith(
            '<div class="alert alert-warning alert-dismissable defAlert setAlert"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning!</strong> The Json  has an incorect format.</div></div>'
        ) :
        $(".setAlert").replaceWith(
            '<div class="alert alert-warning alert-dismissable defAlert setAlert"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning! </strong>The Json editro  is empty.</div></div>'
        );

    notificationTimeOut['setAlert'] = setTimeout(function () {
        $(".defAlert").replaceWith('<div class="setAlert"></div>');
    }, 3000)
}


function addDefaultValue(key, value, textAreaEditorType) {

    keyId = key.target.innerText + "KeyField";
    keyId = keyId.replace(/\s/g, '');

    valueId = key.target.innerText + "ValueField";
    valueId = valueId.replace(/\s/g, '');

    valueType = "textfield";

    deleteButtonKey = key.target.innerText + "DeleteButton";
    deleteButtonKey = deleteButtonKey.replace(/\s/g, '');

    keyData = key.target.innerText;
    keyData = keyData.replace(/\s/g, '');
    valueData = value;


    addCustomProperties(keyId, keyData, valueId, valueType, valueData, deleteButtonKey, textAreaEditorType);

    key.target.setAttribute("disabled", true);
    // call definitiontab function for add properties to json editor  
    definitiontab();
    // use json form editor to push new version.
    pushFormVersion(editor.getText());

}


function addEmptyValue() {

    var inputName = window.makeid();
    var keyName = inputName + 'KeyField';
    var valueName = inputName + 'ValueField';
    addCustomProperties(keyName, "", valueName, "textfield", "", "text");
    definitiontab();
    pushFormVersion(editor.getText());

}



function edittab() {

    var jsonCode = JSON.parse(editor.getText());
    if (updateBuilder == true) {

        if (editByKeyboard == true) {
            pushFormVersion(jsonCode);
            try {
                if (jsonCode.settings.pdf.status == 'convert-normal-html') {

                    htmlNormalFileData = htmlText;
                    setTimeout(function () {

                        iframe_id = "#" + $('iframe').eq(0).attr('id');
                        iframe_id = String(iframe_id);
                        // clear old html content.
                        $('[content-area=html]', $(iframe_id).contents()).html("");
                        $('[content-area=html]', $(iframe_id).contents()).append(htmlNormalFileData);
                    }, 1000);
                }

            } catch (error) {

            }


            editByKeyboard = false;
        }

        updateCustomPropertiesByEdittab = true;

        $('#addCustomProperties tr:gt(0)').remove()
        $("#followingButtons").contents().find("button").removeAttr('disabled');

        builder.form = jsonCode;
        builder.render();


        $('#title').val(jsonCode['title']);
        $('#name').val(jsonCode['name']);

        var table = document.getElementById("addCustomProperties");
        var row = "";
        var btName;
        var i = 1;


        // clear rows 
        dataGridJSONRowTemp = customPropsObj.components[0].rows[0];
        customPropsObj.components[0].rows = [];
        customPropsObj.components[0].rows[0] = dataGridJSONRowTemp;



        window.formiodata = {};
        window.formElement = {};
        for (key in jsonCode['properties']) {

            name = key;
            name = name.replace(/\s/g, '');

            name = '[name="data\\[' + name + '\\]"]';
            $(name).attr('disabled', 'disabled');


            keyId = key + "KeyField";
            keyId = keyId.replace(/\s/g, '');


            valueId = key + "ValueField";
            valueId = valueId.replace(/\s/g, '');


            valueType = "textfield";
            deleteButtonKey = key + "DeleteButton";
            deleteButtonKey = deleteButtonKey.replace(/\s/g, '');


            keyData = key;
            valueData = jsonCode['properties'][key];

            textAreaEditorType = getTextAreaEditorType(key);
            addCustomProperties(keyId, keyData, valueId, valueType, valueData, deleteButtonKey, textAreaEditorType);


        }


        setCustomPropertiesArea();


        updateBuilder = false;
        updateCustomPropertiesByEdittab = false;

    }

    if (openfromfile == true) {

        updateCustomPropertiesByEdittab = true;



        $('#title').val(jsonCode['title']);
        $('#name').val(jsonCode['name']);

        var table = document.getElementById("addCustomProperties");
        var row = "";
        var btName;
        var i = 1;


        // clear rows 
        dataGridJSONRowTemp = customPropsObj.components[0].rows[0];
        customPropsObj.components[0].rows = [];
        customPropsObj.components[0].rows[0] = dataGridJSONRowTemp;



        window.formiodata = {};
        window.formElement = {};


        for (key in jsonCode['properties']) {

            name = key;
            name = name.replace(/\s/g, '');

            name = '[name="data\\[' + name + '\\]"]';
            $(name).attr('disabled', 'disabled');


            keyId = key + "KeyField";
            keyId = keyId.replace(/\s/g, '');


            valueId = key + "ValueField";
            valueId = valueId.replace(/\s/g, '');


            valueType = "textfield";
            deleteButtonKey = key + "DeleteButton";
            deleteButtonKey = deleteButtonKey.replace(/\s/g, '');


            keyData = key;
            valueData = jsonCode['properties'][key];

            textAreaEditorType = getTextAreaEditorType(key);
            addCustomProperties(keyId, keyData, valueId, valueType, valueData, deleteButtonKey, textAreaEditorType);


        }




        setCustomPropertiesArea();
        openfromfile = false;
        updateCustomPropertiesByEdittab = false;

    }

    setTimeout(function () {

        $("#formio .hiddenButton").css("visibility", "hidden");
    }, 100)

}

function viewtab() {

    var jsonCode = JSON.parse(editor.getText());

    jsonCode = insertShowAndSetDataBtn(jsonCode, 'outerColumns');
    propertiesObject = {};
    for (key in window.formiocurrent) {
        try {
            propertiesObject[window.formiocurrent[key].keyData] = window.formiocurrent[key].valueData;
        } catch (error) {

        }

    }
    var addProp = { "properties": propertiesObject };
    jsonCode = Object.assign({}, jsonCode, addProp);

    if (document.getElementById("customScript") != undefined)
        document.getElementById("customScript").remove();
    if (document.getElementById("customCss") != undefined)
        document.getElementById("customCss").remove();

    if (jsonCode.properties.hasOwnProperty('customScript'))
        loadScript(jsonCode.properties.customScript, null, null, "customScript");

    if (jsonCode.properties.hasOwnProperty('customCss')) {
        var customCssElem = document.createElement("link");
        customCssElem.rel = "stylesheet";
        customCssElem.id = "customCss";
        customCssElem.href = jsonCode.properties.customCss + "?vid=" + versionId;
        customCssElem.onreadystatechange = false;
        customCssElem.onload = false;
        customCssElem.onerror = false;
        var layoutStyleNode = document.getElementById("layoutstyle");
        layoutStyleNode.parentNode.insertBefore(customCssElem, layoutStyleNode.nextSibling);
    }


    setTimeout(function () {
        Formio.createForm(document.getElementById('formio'), jsonCode).then(function (instance) {
            $(document).ready(function () {
                starEvent();
            });
        });

        $("#formio .hiddenButton").css("visibility", "visible");
        setTestFormButton();

    }, 120)


    if (displayPDF) {

        if (jsonCode.settings.pdf.status == 'convert-normal-html') {

            setTimeout(function () {


                iframe_id = "#" + $('iframe').eq(1).attr('id');
                iframe_id = String(iframe_id);
                // clear old html content.
                $('[content-area=html]', $(iframe_id).contents()).html("");
                $('[content-area=html]', $(iframe_id).contents()).append(htmlNormalFileData);
            }, 1000);
        }

    }


}

function definitiontab() {

    schema = editor.get();
    schema = checkComponentLength(schema)
    editor.set(schema);

    updateFormIoCurrent();


    propertiesObject = {};
    for (key in window.formiocurrent) {
        try {
            propertiesObject[window.formiocurrent[key].keyData] = window.formiocurrent[key].valueData;
        } catch (error) {

        }

    }






    var objTitle = { title: document.getElementById('title').value };
    var objName = { name: document.getElementById('name').value };
    var addProp = { "properties": propertiesObject };
    var jsonCode = JSON.parse(editor.getText());
    var keyName = 'outerColumns';

    for (var i = 0; i < jsonCode.components.length; i++) {
        if (jsonCode.components[i].key == keyName) {
            jsonCode.components.splice(i, 1);
            break;
        }
    }

    //remove "allowMultipleMasks", "inputMasks", "showWordCount" and "showCharCount" from json code.
    for (var i = 0; i < jsonCode.components.length; i++) {
        delete jsonCode.components[i].allowMultipleMasks;
        delete jsonCode.components[i].inputMasks;
        delete jsonCode.components[i].showWordCount;
        delete jsonCode.components[i].showCharCount;
    }

    jsonCode = Object.assign({}, jsonCode, addProp);
    jsonCode = Object.assign({}, jsonCode, objTitle);
    jsonCode = Object.assign({}, jsonCode, objName);


    editor.set(jsonCode);
    textFieldMonitor();
}



function initFormVersion() {

    //updatePointer = true; 
    updateBuilder = true;
    pushFormVersion(builder.instance.schema);

}

// function setVersionNum() {
//      formiojsObj;
//      document.getElementById("setVersion").innerHTML = formiojsObj["name"] + "@v" + formiojsObj["version"];
// }

function textFieldMonitor() {

    // Test function monitor input 
    // $(document).ready(function () {

    setTimeout(function () {
        typingTimer;  //timer identifier

        doneTypingInterval = 1000;  //time in ms (5 seconds)

        $('[name*="data"],#title,#name').keyup(function () {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        })


    }, 1000);
    function doneTyping() {
        //do something
        definitiontab();
        pushFormVersion(editor.get());

        return;
    }



    // });
}


/*
* View tab  download data 
*/

function saveDocumentData() {

    if (!(IsJsonDataString() === 0)) {
        AlertInvalidJsonData(IsJsonDataString());
    } else {
        $(".alertData").replaceWith('<div class="setAlertData"></div>');
        // Save Dialog
        // fname = window.prompt("Please input file name....");
        fname = document.getElementById("input-fileNameData").value;
        //fname="data";
        if (fname == null || fname == '') {
            fname = "data";
        }

        // Check json extension in file name
        if (fname.indexOf(".") == -1) {
            fname = fname + ".json";
        } else {
            if (fname.split('.').pop().toLowerCase() == "json") {
                // Nothing to do
            } else {
                fname = fname.split('.')[0] + ".json";
            }
        }

        var blob = new Blob([editorData.getText()], { type: 'application/json;charset=utf-8' });
        var realform = editorData.getText();
        saveAs(blob, fname);
        //	FileSaver.saveAs(blob, "sample.json");
        //  window.navigator.msSaveOrOpenBlob(blob,'sample.json');
    }
};

/**
 * Save data to file json.js 
 */
function saveDocumentDataJsonJs() {

    if (!(IsJsonDataString() === 0)) {
        AlertInvalidJsonData(IsJsonDataString());
    } else {
        $(".alertData").replaceWith('<div class="setAlertData"></div>');
        // Save Dialog
        // fname = window.prompt("Please input file name....");
        fname = document.getElementById("input-fileNameData").value;
        //fname="data";
        if (fname == null || fname == '') {
            fname = "data";
        }
        // Check json extension in file name
        if (fname.indexOf(".") == -1) {
            fname = fname + ".json.js";
        } else {
            if (fname.split('.').pop().toLowerCase() == "json") {
                // Nothing to do
            } else {
                fname = fname.split('.')[0] + ".json.js";
            }
        }

        var blob = new Blob(["var dataObj = " + editorData.getText() + ";"], { type: 'application/json;charset=utf-8' });
        var realform = editorData.getText();
        saveAs(blob, fname);
        //	FileSaver.saveAs(blob, "sample.json");
        //  window.navigator.msSaveOrOpenBlob(blob,'sample.json');
    }
};


//Save JS     
function IsJsonDataString() {
    var state = 0;
    try {
        JSON.parse(editorData.getText());
    } catch (e) {
        return 2;
    }
    return editorData.getText() != "{}" ? 0 : 1
}

function AlertInvalidJsonData(state) {
    state === 2 ?
        $(".setAlertData").replaceWith(
            '<div class="alert alert-warning alert-dismissable alertData setAlertData"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning!</strong> The Json has an incorect format.</div></div>'
        ) :
        $(".setAlertData").replaceWith(
            '<div class="alert alert-warning alert-dismissable alertData setAlertData"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning!</strong> Json is emtpy</div></div>'
        );

    notificationTimeOut['setAlertData'] = setTimeout(function () {
        $(".alertData").replaceWith('<div class="setAlertData"></div>');
    }, 3000)
}


/*
* View tab  Open data  from file.
*/


$('#openButtonData').click(function () {

    var file = document.getElementById("loadDocumentData").files[0];
    if (file == undefined) {
        $(".setAlertLoadData").replaceWith(
            '<div class="alert alert-warning alert-dismissable alertLoadData setAlertLoadData"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning!</strong> Please select data file</div></div>'
        )


        notificationTimeOut['setAlertLoadData'] = setTimeout(function () {
            $(".alertLoadData").replaceWith('<div class="setAlertLoadData"></div>');
        }, 3000)
    } else {
        if (file.type == 'text/javascript' || file.type == 'application/json') {
            $(".alertLoadData").replaceWith('<div class="setAlertLoadData"></div>');
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                /*
                    get data form file and send to cutTemplateString for cut string (varible name and semicolon).
                */
                try {
                    dataJson = cutDataString(evt.target.result);
                    editorData.set(JSON.parse(dataJson))
                } catch (error) {
                    $(".setAlertLoadData").replaceWith(
                        '<div class="alert alert-danger alert-dismissable alertLoadData setAlertLoadData"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Danger!</strong> Invalid Json Format.</div></div>'
                    )
                    notificationTimeOut['setAlertLoadData'] = setTimeout(function () {
                        $(".alertLoadData").replaceWith('<div class="setAlertLoadData"></div>');
                    }, 3000)


                }


            }
        } else {

            // notification

        }
    }
})



function cutDataString(dataJson) {
    // cut 'var dataObj = 'and ';' in variable dataJson.
    if (dataJson.indexOf("var dataObj = ") >= 0) {
        // javascript object
        dataJson = dataJson.split("var dataObj = ").pop();
        dataJson = dataJson.substring(';', dataJson.length - 1);

    } else {
        // json object nothing to do. 
    }

    return dataJson;
}



// replace with standard class before notification flash alert.
notificationTimeOut = [];

$('body').on('click', '.close', function () {

    selector = '.' + $(this)[0].parentElement['classList'][3];
    standardClass = $(this)[0].parentElement['classList'][4]
    $(selector).replaceWith('<div class="' + standardClass + '"></div>');
    clearTimeout(notificationTimeOut[standardClass]);

})


$(document).ready(function () {

    var resizeJsonEditor = function () {
        editor.aceEditor.resize();
        editorData.aceEditor.resize();
    };

    $('.jsoneditor').resize(resizeJsonEditor);

    // resize editor in definition tab
    resizeEditorBySelector("#jsoneditor>.jsoneditor", 70)

});



// when window resize then resize editor 
$(window).on("resize", function () {

    // resize editor in definition tab
    resizeEditorBySelector("#jsoneditor>.jsoneditor", 70)

})



// resize editor by selector resize edit
function resizeEditorBySelector(selectorName, sizePercentage) {

    windowHeight = $(window).height();
    heightPercent = (sizePercentage * windowHeight) / 100;
    $(selectorName).height(heightPercent)
    editor.aceEditor.resize()
    editorData.aceEditor.resize();

}




/**
 *  Start Add Custom component 
 * 
 */




$(document).ready(function () {
    // decalre variable for store "Custom Properties" data
    window.formiodata = {};

    setCustomPropertiesArea = function () {

        Formio.createForm(document.getElementById('customPropertiesArea'), customPropsObj).then(function (form) {

            // set "Custom Properties" data to new form. 
            form.data = window.formiodata;
            form.render();

            // update formiocurrent variable with lastest formiodata 
            updateFormIoCurrent = function () {

                window.formiodata = form.data;

                // create temp object 
                window.formiotemp = [];
                for (key in window.formiodata) {

                    checkKeyField = key.indexOf("KeyField");
                    if (checkKeyField >= 0) {

                        window.formiotemp[key] = { "keyData": window.formiodata[key] }
                        keyCutKeyfiled = key.replace("KeyField", '')
                        keyUncutKeyfiled = key

                    } else {

                        checkStringBeforeKeyField = key.indexOf(keyCutKeyfiled)
                        if (checkStringBeforeKeyField >= 0) {

                            try {
                                window.formiotemp[keyUncutKeyfiled]["valueData"] = window.formiodata[key]
                                keyCutKeyfiled = "";
                                keyUncutKeyfiled = "";
                                checkStringBeforeKeyField = "";

                            } catch (error) {

                            }

                        }


                    }

                }

                for (key in window.formiocurrent) {
                    window.formiocurrent[key] = window.formiotemp[key]
                }

            }


            printform = function () {
                window.formiodata = form.data;
            }


            $(document).ready(function () {
                // find empty table data (td tag) and if empty all of table data then delete row 
                $('tr').each(function () {
                    var td = $(this).find('td:empty');
                    numberOfTableData = 3;
                    tableId = $(this).parent().parent().parent().attr("id");
                    tableIdIsEmpty = undefined;
                    if (tableId != tableIdIsEmpty) {
                        idPoition = tableId.indexOf("CustomPropertiesTable");
                        const customPrepertiesTable = idPoition >= 0 ? true : false;
                        if (td.length == numberOfTableData && customPrepertiesTable == true) {
                            $(this).remove();
                        }
                    }

                });

            });

        });

    }


    // add "Custom Properties" function.

    addCustomProperties = function (keyId, keyData, valueId, valueType, valueData, deleteButtonKey, textAreaEditorType) {




        icomponent = returnCustomPropertiesComponent();


        // check textAreaEditorType for assign input type.

        if (textAreaEditorType != null) {

            icomponent[1].components[0]["editor"] = textAreaEditorType;
            valueType = "textarea";
        }



        icomponent[0].components[0].key = keyId;
        icomponent[1].components[0].type = valueType;
        icomponent[1].components[0].key = valueId;
        icomponent[2].components[0].key = deleteButtonKey;



        // check duplicate key
        for (key in customPropsObj.components[0].rows) {
            try {

                if (customPropsObj.components[0].rows[key][0].components[0].key != undefined) {


                    if (keyId == customPropsObj.components[0].rows[key][0].components[0].key) {
                        // Duplicate Key 

                        return
                    }
                }
            } catch (error) {

            }

        }


        customPropsObj.components[0].rows.push(icomponent);


        // assign keydata and  Valuedata to window variable.
        window.formiodata[keyId] = keyData;
        window.formiodata[valueId] = valueData;

        // assign current Custom Properties to window variable

        window.formiocurrent[keyId] =
            {
                'keyData': keyData,
                'valueData': valueData
            }


        /**
         * Note : 
         *     window.formiodata is all of formiodata
         *     window.formiocurrent is current Custom Properties 
         *     so 
         *     window.formiodata != window.formiocurrent
         */

        // render form 
        // if edittab clicked then don't run this 
        if (updateCustomPropertiesByEdittab == true) {

        } else {
            setCustomPropertiesArea();
        }

    }


    // delete "Custom Properties" function 

    window.deleterow = function deleteRow() {

        // customPropsObj.components[0].rows ( this is Custom Properties row.)
        // customPropsObj.components[0].rows[numberOfRow][2] (this is Custom Properties value)

        for (key in customPropsObj.components[0].rows) {

            number = parseInt(key)

            if (customPropsObj.components[0].rows[number][2].components[0] == undefined) {


            } else {

                target = deletebuttonIdCutstring();
                deleteKey = customPropsObj.components[0].rows[number][2].components[0].key;
                name = deleteKey.replace('DeleteButton', '');
                if (deleteKey == target) {

                    keyIdDeleted = customPropsObj.components[0].rows[key][0].components[0].key;

                    delete window.formiocurrent[keyIdDeleted];


                    // found then delete component by key 
                    customPropsObj.components[0].rows.splice(key, 1);
                    // enable button  
                    name = name.replace(/\s/g, '');
                    name = '[name="data\\[' + name + '\\]"]';
                    $(name).attr('disabled', false);
                    setCustomPropertiesArea();
                    definitiontab()

                    pushFormVersion(editor.getText());
                    break
                }

            }

        }
    }


    // return deletebuttonId  

    function deletebuttonIdCutstring() {

        var deleteButtonId = window.deletebuttonId;
        deleteButtonId = deleteButtonId.replace('data[', '');
        deleteButtonId = deleteButtonId.replace(']', '');
        return deleteButtonId;


    }

    window.getDeleteButttonId = function () {


        if (event.toElement.name == null) {
            // user click delete button on icon 
            // get name by parent element
            window.deletebuttonId = event.toElement.parentElement.name;
        } else {
            // user click delete button on button
            // get name by direct element 
            window.deletebuttonId = event.toElement.name;
        }

    }





    window.makeid = function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }


    //  initial table 
    setCustomPropertiesArea();

    // decalre variable for store current custom properties.
    window.formiocurrent = [];
});


function returnCustomPropertiesComponent() {
    return [
        {
            "components": [
                {
                    "autofocus": false,
                    "input": true,
                    "tableView": true,
                    "inputType": "text",
                    "inputMask": "",
                    "label": "",
                    "key": "",
                    "placeholder": "",
                    "prefix": "",
                    "suffix": "",
                    "multiple": false,
                    "defaultValue": "",
                    "protected": false,
                    "unique": false,
                    "persistent": true,
                    "hidden": false,
                    "clearOnHide": true,
                    "spellcheck": true,
                    "validate": {
                        "required": false,
                        "minLength": "",
                        "maxLength": "",
                        "pattern": "",
                        "custom": "",
                        "customPrivate": false
                    },
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "type": "textfield",
                    "labelPosition": "top",
                    "inputFormat": "plain",
                    "tags": [],
                    "properties": {},
                    "hideLabel": true
                }
            ]
        },
        {
            "components": [
                {
                    "autofocus": false,
                    "input": true,
                    "tableView": true,
                    "label": "",
                    "key": "",
                    "placeholder": "",
                    "prefix": "",
                    "suffix": "",
                    "rows": 3,
                    "multiple": false,
                    "defaultValue": "",
                    "protected": false,
                    "persistent": true,
                    "hidden": false,
                    "wysiwyg": false,
                    "clearOnHide": true,
                    "spellcheck": true,
                    "validate": {
                        "required": false,
                        "minLength": "",
                        "maxLength": "",
                        "pattern": "",
                        "custom": ""
                    },
                    "type": "textarea",
                    "labelPosition": "top",
                    "inputFormat": "plain",
                    "tags": [],
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "properties": {},
                    "hideLabel": true
                }
            ]
        },
        {
            "components": [
                {
                    "autofocus": false,
                    "hideLabel": true,
                    "input": true,
                    "label": "",
                    "mask": false,
                    "tableView": false,
                    "key": "",
                    "size": "md",
                    "leftIcon": "glyphicon glyphicon-remove-circle",
                    "rightIcon": "",
                    "block": false,
                    "action": "custom",
                    "disableOnInvalid": false,
                    "theme": "danger",
                    "type": "button",
                    "tags": [],
                    "conditional": {
                        "show": "",
                        "when": null,
                        "eq": ""
                    },
                    "properties": {},
                    "custom": "\nwindow.getDeleteButttonId();\nwindow.deleterow();"
                }
            ]
        }];




}

updateCustomPropertiesByEdittab = false;
openfromfile = false;
editByKeyboard = false;
keyCutKeyfiled = '';
var typingTimer;
var doneTypingInterval;


function getTextAreaEditorType(key) {

    // remove space from string 
    key = key.replace(/\s/g, '');

    switch (key) {
        case "formhelp":
            return "quill";
        case "loadingScript":
            return "ace";
        default:
            return null
    }

}


function checkComponentLength(schema) {

    var componentsEmpty = 0;
    if (schema.components.length == componentsEmpty) {



        defaultButton = {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }

        schema.components.push(defaultButton)

        // return schema;

    }

    return schema;

}

/**
 * Open PdfTemplate.html
 */

function openPdfTemplate() {


    var pdfTemplatePath = $('#pdfTemplatePath').val();

    pdfTemplatePath_validate = pdfTemplateValidate(pdfTemplatePath)

    var fail = false;

    if (pdfTemplatePath_validate == fail) {


        $(".warnmsPdfTemplate").replaceWith(
            '<div class="alert alert-warning alert-dismissable openwarning warnmsPdfTemplate"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The HTML path has an incorect format.</div></div>'
        )
        notificationTimeOut['warnmsPdfTemplate'] = setTimeout(function () {
            $(".openwarning").replaceWith('<div class="warnmsPdfTemplate"></div>');
        }, 3000)
    } else {

        function readTextFile(file) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        var allText = rawFile.responseText;
                        // alert(allText);
                        htmlText = allText;
                        ;
                    }
                }
            }
            rawFile.send(null);
        }

        function statusOfHtmlText(htmlText) {

            /*
    HTML has converted or not converted.
    return "converteHtml" or "normalHtml" 

*/

            var htmlObject = $(htmlText);
            var posPdf2htmlExString = htmlText.indexOf('content="pdf2htmlEX"');
            var focusElement = $('[content-area=html]', htmlObject);


            var elementHasPdf2htmlExString = posPdf2htmlExString > 0 ? true : false;


            if (focusElement[0] != undefined) {
                var focusElementChildLength = focusElement[0].children.length;
                var elementHasChild = focusElementChildLength > 0 ? true : false;
            }




            if (elementHasChild || elementHasPdf2htmlExString) {

                return "convertedHtml";

            } else {

                return "normalHtml";

            }

        }



        readTextFile(pdfTemplatePath);




        switch (statusOfHtmlText(htmlText)) {

            case 'convertedHtml':
                updateBuilder = true;
                // set to Json Editor.


                $("#form-select").val('pdf');

                editor.set(
                    {
                        "display": "pdf",
                        "components": [
                            {
                                "type": "button",
                                "label": "Submit",
                                "key": "submit",
                                "disableOnInvalid": true,
                                "theme": "primary",
                                "input": true,
                                "tableView": true
                            }
                        ],
                        "properties": {},
                        "title": "",
                        "name": "",
                        "settings": {
                            "pdf": {
                                "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
                                "status": "converted-html",
                                "src": pdfTemplatePath_validate
                            }
                        }
                    }
                )


                $('#edittab').click();

                break;
            case 'normalHtml':
                var currentUri = window.location.href;
                var templatePath = getTemplatePath(currentUri);
                editor.set(
                    {
                        "display": "pdf",
                        "components": [
                            {
                                "type": "button",
                                "label": "Submit",
                                "key": "submit",
                                "disableOnInvalid": true,
                                "theme": "primary",
                                "input": true,
                                "tableView": true
                            }
                        ],
                        "properties": {},
                        "title": "",
                        "name": "",
                        "settings": {
                            "pdf": {
                                "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
                                "status": "convert-normal-html",
                                "src": templatePath
                            }
                        }
                    }
                )

                updateBuilder = true;
                $('#edittab').click();

                setTimeout(function () {


                    htmlNormalFileData = htmlText;

                    iframe_id = "#" + $('iframe').first().attr('id');
                    iframe_id = String(iframe_id);

                    // clear old html content.
                    $('[content-area=html]', $(iframe_id).contents()).html("");
                    $('[content-area=html]', $(iframe_id).contents()).append(htmlNormalFileData);

                }, 1500);



                break;

            default:
                break;
        }


        return;


    }

}


function pdfTemplateValidate(pdfTemplatePath) {





    dataReturn = filePathToUrl(pdfTemplatePath);

    if (dataReturn == false) {

        return false;

    } else {

        return cutdotHtml(dataReturn);
    }


}



function cutdotHtml(pdfTemplateUri) {

    var pos = pdfTemplateUri.lastIndexOf('.html');

    pdfTemplateUri = pdfTemplateUri.substring(0, pos)
    return pdfTemplateUri;


}

function getTemplatePath(currentUri) {

    var pos = currentUri.lastIndexOf('index.html');
    var indexDotHtmlNotfound = -1;
    if (pos > indexDotHtmlNotfound) {
        currentUri = currentUri.substring(0, pos)
    }

    pdfTemplateUri = currentUri + 'pdf2htmlEX/src/sample';

    return pdfTemplateUri;

}





String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

function filePathToUrl(path) {
    var expectPosition = [];
    expectPosition['file://'] = 0;
    var lookingString = path.search("file:///");
    var pathIsUri = lookingString == expectPosition['file://'] ? true : false;


    if (pathIsUri) {

        var dotHtmlPos = path.lastIndexOf('.html');
        var pathLength = path.length;
        var checkpath = pathLength - dotHtmlPos;
        expectPosition['html'] = 5;
        pathIsUri = checkpath == expectPosition['html'] ? true : false;
        if (pathIsUri) {

            return path;
        } else {
            return false;
        }


    } else {

        /**
         * 
         *  local path example: C:\path\pdfTemplate.html
         */

        path = path.replaceAll('\\', '/');
        path = path.replaceAll(' ', '%20');
        var drive = /(.)\:\//
        userDrive = path.match(drive);
        var notFound = null;
        expectPosition['drive'] = 0;
        var userDrivePosition = userDrive == null ? 0 : userDrive.index;

        if (userDrive == notFound || userDrivePosition != expectPosition['drive']) {

            return false;
        } else {

            return path.replace(drive, 'file:///$1:/');
        }

    }

}

window.testform = function () {



    testformJson = editor.get();
    localStorage.setItem("testform", JSON.stringify(testformJson));
    window.open('../../../header/index.html?form=' + '../forms/editor/v1/samples/testform/', '_blank');

}

function setTestFormButton() {


    var isChrome = !!window.chrome;
    var isIEedge = navigator.userAgent.indexOf("Edge") > -1;
    var isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);


    if (isChrome) {
        if (isIEedge || isOpera) {
            $(document).ready(function () {
                $('[name="data\\[testfrom\\]"]').css('display', 'none');
                $('[name="data\\[translateform\\]"]').css('display', 'none');
            })
        } else {
            $('[name="data\\[testfrom\\]"]').css('display', 'block');
            $('[name="data\\[translateform\\]"]').css('display', 'block');
        }
    } else {
        $(document).ready(function () {
            $('[name="data\\[testfrom\\]"]').css('display', 'none');
            $('[name="data\\[translateform\\]"]').css('display', 'none');
        })
    }
}


window.translateform = function () {


    function traverse(o) {
        for (i in o) {
            if (!!o[i] && typeof (o[i]) == "object") {

                o[i] = removekey(o[i], 'conditional');
                o[i] = removekey(o[i], 'customConditional');
                o[i] = removekey(o[i], 'logic');
                o[i] = removekey(o[i], 'loadingScript');
                o[i] = removekey(o[i], 'loadedScript');

                o[i] = changeKeyValue(o[i], 'hidden', false);

                traverse(o[i]);

            }
        }

        return o;

    }

    function removekey(obj, keyToRemove) {


        if (obj[keyToRemove] != undefined) {
            delete obj[keyToRemove];
        }

        return obj;
    }

    function changeKeyValue(obj, keyToChange, newValue) {

        if (obj[keyToChange] != undefined) {
            obj[keyToChange] = newValue;
        }
        return obj;
    }

    translateformJson = editor.get();
    traverseResult = traverse(translateformJson);
    localStorage.setItem("translateform", JSON.stringify(traverseResult));
    window.open('../../../header/index.html?form=' + '../forms/editor/v1/samples/translateform/', '_blank');

}

configJson = {}

function saveConfigJsonJs() {


    saveConfigJsonJsInstance = new customBuilderPrototype();
    componentJson = editor.getText();

    if (saveConfigJsonJsInstance.verifyJson(componentJson) == verifyJsonFail) {
        saveConfigJsonJsInstance.alertInvalidJson("downloadConfigWarningMsg", "downloadConfigAlert");

        return;
    }
    componentJson = JSON.parse(componentJson);


    componentArray = componentJson;
    configWeight = document.getElementById('config-weight').value;
    configJson = saveConfigJsonJsInstance.componentToCustomBuilder(componentJson.title, componentJson.name, configWeight, componentArray);

    if (configJson == false) {
        saveConfigJsonJsInstance.alertInvalidJson("downloadConfigWarningMsg", "downloadConfigAlert");
        return;
    }

    saveConfigJsonJsInstance.downloadConfig(configJson);


}


function testConfig() {


    componentJson = editor.getText();
    proto = new customBuilderPrototype();
    componentJson = JSON.parse(componentJson);
    componentArray = componentJson;
    configWeight = document.getElementById('config-weight').value;
    configJson = proto.componentToCustomBuilder(componentJson.title, componentJson.name, configWeight, componentArray);

    if (configJson == false) {
        proto.alertInvalidJson("downloadConfigWarningMsg", "downloadConfigAlert");
        return;
    }

    localStorage.setItem("configJson", JSON.stringify(configJson));
    window.open('../../../header/index.html?form=' + '../forms/editor/v1/samples/custombuilder/', '_blank');

}



function starEvent() {
  
  
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.stars li').on('mouseover', function () {
        if ($(this).parent().attr('disabled') == 'disabled')
            return;

        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.stars li').on('click', function () {
        if ($(this).parent().attr('disabled') == 'disabled')
            return;

        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('.stars li.selected').last().data('value'), 10);
        $(this).parent().attr('data-rating', ratingValue)
    });//end

}


function customBuilderPrototype() {

    testComp = {};
    testComp['components'] = [];
    verifyJsonFail = false;

}




customBuilderPrototype.prototype.traverse = function (o) {
    var allComp = {};
    allComp['components'] = [];
    for (i in o) {
        if (!!o[i] && typeof (o[i]) == "object") {

            if (i == "components") {

                for (var a = 0; a <= o[i].length; a++) {

                    lastComponent = customBuilderPrototype.prototype.findSubComponent(o[i][a]);
                    allComp = testComp;

                }
            }

            customBuilderPrototype.prototype.traverse(o[i]);

        }
    }


    return allComp;
}


customBuilderPrototype.prototype.findSubComponent = function (obj) {

    if (obj != undefined) {

        if (obj['components'] != undefined || obj['columns'] != undefined) {
        } else {
            testComp['components'].push(obj);
        }

    }
}

customBuilderPrototype.prototype.findSubComponentBoolean = function (obj) {

    var objHasSubComponent = true;
    var objDoesNotHaveSubComponent = false;

    if (obj['components'] != undefined || obj['columns'] != undefined || obj['rows'] != undefined || obj['valueComponent']) {

        return objHasSubComponent;

    } else {

        return objDoesNotHaveSubComponent;
    }

    /**  return true or false */

}

customBuilderPrototype.prototype.componentToCustomBuilder = function (configTitle, configName, configWeight, componentObj) {

    var temp = [];
    var configStructure = {}
    configStructure.builder = {}

    // return ready custom builder.

    configName = configName == '' || configName == null ? "DefaultName" : configName;
    configTitle = configTitle == '' || configTitle == null ? "DefaultTitle" : configTitle;


    configStructure.builder[configName] =
        {
            "title": configTitle,
            "weight": configWeight,
            "components": {

            }
        }



    for (key in componentObj['components']) {



        try {
            temp['type'] = componentObj['components'][key].type.toString();
        } catch (error) {

            configStructure = false;
            break
        }





        temp['key'] = componentObj['components'][key].key == undefined || null ? TogFormViewer.uuidv4() : componentObj['components'][key].key.toString();
        temp['label'] = componentObj['components'][key].label == undefined || null ? "" : componentObj['components'][key].label;
        temp['icon'] = customBuilderPrototype.prototype.getIcon(temp['type']);



        // first set builder structure 
        configStructure.builder[configName].components[temp['key']] =
            {
                "title": temp['label'],
                "key": temp['key'],
                "icon": temp['icon'],
                "schema": {}
            };

        // second push schema 

        configStructure.builder[configName].components[temp['key']].schema = componentObj['components'][key];

        // third edit label,type,key and input in schema 
        configStructure.builder[configName].components[temp['key']].schema.label = temp['label'];
        configStructure.builder[configName].components[temp['key']].schema.type = temp['type'];
        configStructure.builder[configName].components[temp['key']].schema.key = temp['key'];
        configStructure.builder[configName].components[temp['key']].schema.input = true;


    }


    return configStructure;

}



customBuilderPrototype.prototype.downloadConfig = function (configJson) {

    configJson = "controlsObj = " + JSON.stringify(configJson) + ";"
    var blob = new Blob([configJson], { type: 'application/json;charset=utf-8' });
    saveAs(blob, customBuilderPrototype.prototype.setConfigFileName());

}

customBuilderPrototype.prototype.setConfigFileName = function () {

    var extenion = '.json.js'
    var name = document.getElementById("config-fileName").value;
    var fileName;
    if (name == null || name == '') {
        name = "config";
    }

    fileName = name + extenion;
    return fileName;
}


customBuilderPrototype.prototype.alertInvalidJson = function (identificationClass, replaceMessageClass) {

    identificationClassSelector = "." + identificationClass;
    replaceMessageClassSelector = "." + replaceMessageClass;


    $(identificationClassSelector).replaceWith(
        '<div class="alert alert-warning alert-dismissable ' + replaceMessageClass + ' ' + identificationClass + ' "><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning!</strong> The Json  has an incorect format.</div></div>'
    )

    notificationTimeOut[identificationClass] = setTimeout(function () {
        $(replaceMessageClassSelector).replaceWith('<div class="' + identificationClass + '"></div>');
    }, 3000)


}

customBuilderPrototype.prototype.verifyJson = function (jsonObject) {

    try {

        JSON.parse(jsonObject);

        verifyJsonResult = true;

    } catch (error) {


        verifyJsonResult = false;

    }
    return verifyJsonResult
}


customBuilderPrototype.prototype.getIcon = function (type) {

    switch (type) {
        case 'textField':
            icon = 'fa fa-terminal';
            break;
        case 'password':
            icon = 'fa fa-asterisk';
            break;
        case 'checkbox':
            icon = 'fa fa-check-square';
            break;
        case 'selectboxes':
            icon = 'fa fa-plus-squaree';
            break;
        case 'content':
            icon = 'fab fa-html5';
            break;
        case 'radio':
            icon = 'fa fa-dot-circle-o';
            break;
        case 'button':
            icon = 'fa fa-stop';
            break;
        case 'select':
            icon = 'fa fa-th-list';
            break;
        case 'time':
            icon = 'fa fa-clock-o';
            break;
        case 'textarea':
            icon = 'fa fa-font';
            break;
        case 'number':
            icon = 'fa fa-hashtag';
            break;
        case 'email':
            icon = 'fa fa-at';
            break;
        case 'url':
            icon = 'fa fa-link';
            break;
        case 'datetime':
            icon = 'fa fa-calendar-plus-o';
            break;
        case 'tags':
            icon = 'fa fa-tags';
            break;
        case 'survey':
            icon = 'fa fa-list';
            break;
        case 'location':
            icon = 'fa fa-map';
            break;
        case 'htmlelement':
            icon = 'fa fa-code';
            break;
        case 'form':
            icon = 'fab fa-wpforms';
            break;
        case 'signature':
            icon = 'fa fa-pencil';
            break;
        case 'file':
            icon = 'fa fa-file';
            break;
        case 'resource':
            icon = 'fa fa-files-o';
            break;
        case 'currency':
            icon = 'fa fa-usd';
            break;
        case 'day':
            icon = 'fa fa-calendar';
            break;
        case 'address':
            icon = 'fa fa-home';
            break;
        case 'phoneNumber':
            icon = 'fa fa-phone-square';
            break;
        case 'column':
            icon = 'fa fa-columns';
            break;
        case 'fieldset':
            icon = 'fa fa-th-large';
            break;
        case 'panel':
            icon = 'fa fa-list-alt';
            break;
        case 'table':
            icon = 'fa fa-table';
            break;
        case 'tabs':
            icon = 'fal fa-folder';
            break;
        case 'well':
            icon = 'fal fa-square';
            break;
        case 'hidden':
            icon = 'fa fa-user-secret';
            break;
        case 'container':
            icon = 'fal fa-folder-open';
            break;
        case 'datagrid':
            icon = 'fa fa-th';
            break;
        case 'datamap':
            icon = 'fa fa-th-list';
            break;
        case 'editgrid':
            icon = 'fa fa-tasks';
            break;
        default:
            icon = 'fa fa-terminal';
    }

    return icon;

}


