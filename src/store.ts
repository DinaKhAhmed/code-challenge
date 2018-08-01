// Node File System 
let fs = require("fs");

// Variables Intialization
let dictionaryJsonObj = { dictionary: [] };
let dictionaryData = "";


// Read function, responsible for reading data from file system ((dictionary.json))
function read(key?: string, value?: string, remove: boolean = false): any {
    fs.readFile('dictionary.json', function (err, data) {
        if (err) {
            return console.error(err);
        }

        else {
            dictionaryJsonObj = data.indexOf('dictionary') > -1 ? JSON.parse(data) : dictionaryJsonObj;
            // in case of add we have key and value
            if (key && value) {
                // making sure that we don't have duplicate data
                if (!dictionaryJsonObj.dictionary.find(el => el.key == key)) {

                    dictionaryJsonObj.dictionary.push({ "key": key, "value": value });
                    dictionaryData = JSON.stringify(dictionaryJsonObj);
                    console.log(dictionaryJsonObj);
                    console.log("Dictionary Content: " + data.toString());

                    write(dictionaryData);
                }
                else {
                    console.log("this key already exist, please use another key");
                }
            }
            // we only have key when calling get or remove, to seperate between the, I have created remove flag

            if (key && !value) {
                if (remove) {
                    if (dictionaryJsonObj.dictionary.find(el => el.key == key)) {
                        dictionaryJsonObj.dictionary = dictionaryJsonObj.dictionary.filter(el => el.key !== key)
                        console.log("Removing >> " + key);
                        console.log(dictionaryJsonObj.dictionary.filter(el => el.key !== key));
                        dictionaryData = JSON.stringify(dictionaryJsonObj);
                        write(dictionaryData);

                    }
                    else
                        console.log("the key you are trying to remove doesn't exist");
                }
                else {
                    dictionaryData = JSON.stringify(dictionaryJsonObj);
                    if (dictionaryJsonObj.dictionary.find(el => el.key == key))
                        console.log(dictionaryJsonObj.dictionary.find(el => el.key == key));
                    else
                        console.log("the key you are trying to find doesn't exist");
                }

            }
            // readonly purpose like  when we want to list dictionary content
            if (!key && !value) {
                console.log("Dictionary Content: " + data.toString());

            }

        }

    });
};

// file sytem write function
let write = function (dictionaryData: string = dictionaryJsonObj.toString()) {




    fs.writeFile('dictionary.json', dictionaryData, 'utf8', function (err, data) {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Data written successfully!" + dictionaryData.toString());

        }


    });

}

let get = function (key: string) {
    read(key);
}

let add = function (key: string, value: string) {

    read(key.toString(), value.toString());

}

let list = function () {

    read();
}
let remove = function (key: string) {

    read(key, undefined, true);

}

let clear = function () {
    write('');
}
// I have used process.argv in order to catch when a command is passed
if (process.argv.length > 2) {
    // here I check on the third argument to know which function was called

    if (process.argv[2] == "read") {
        read();
    }
    if (process.argv[2] == "list") {
        list();
    }
    if (process.argv[2] == "clear") {
        clear();
    }
    if (process.argv[2] == "write") {
        write();
    }
    if (process.argv[2] == "add") {
        add(process.argv[3], process.argv[4]);
    }
    if (process.argv[2] == "remove") {
        remove(process.argv[3]);
    }
    if (process.argv[2] == "get") {
        get(process.argv[3]);
    }
}

