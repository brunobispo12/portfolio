
let email = document.getElementById('copyP')

function copyPaste(){
    email.select()
    email.setSelectionRange(0, 99999)
    document.execCommand('copy')
}