class Text_editor{
    constructor(){
        const saveBtn = document.getElementById('saveBtn');
        const clearBtn = document.getElementById('clearBtn');
        const loadBtn = document.getElementById('loadBtn');
    }
    // Method to add text
    save(){
        saveBtn.addEventListener('click',() =>{
            console.log('Text saved');
        })
        
    }
    clear(){
        clearBtn.addEventListener('click',() =>{
            console.log('Text cleared');
        })
    }
    load(){
        loadBtn.addEventListener('click',() =>{
            console.log('Text loaded');
        })
    }
}

const editor = new Text_editor();
editor.save();
editor.clear();
editor.load();