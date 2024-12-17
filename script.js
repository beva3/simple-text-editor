const editor = document.querySelector('.editor');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const loadBtn = document.getElementById('loadBtn');

class Text_editor{
    constructor(){
    }
    // Method to add text
    save(){
        saveBtn.addEventListener('click',() =>{
            const content = editor.innerHTML; // Save the HTML content (preserves formatting)
            localStorage.setItem('textEditorContent', content);
            alert('Content saved!');
        })
        
    }
    clear(){
        clearBtn.addEventListener('click',() =>{
            editor.innerHTML = ''; // Clear the editable area
            console.log('Text cleared');
        })
    }
    load(){
        loadBtn.addEventListener('click',() =>{
            const savedContent = localStorage.getItem('textEditorContent');
            if (savedContent) {
                editor.innerHTML = savedContent; // Load the saved content
            } else {
                alert('No content to load!');
            }
            console.log('Text loaded');
        })
    }
}


const app = new Text_editor();
app.save();
app.clear();
app.load();