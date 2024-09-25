const toastContainer = document.querySelector('.toast-container');
const toastViewer = document.querySelector('.toast-viewer');

const toastButtons = [
    {
        text: "Success",
        color: "green"
    },
    {
        text: "Info",
        color: "blue"
    },
    {
        text: "Warning",
        color: "orange"
    },
    {
        text: "Error",
        color: "red"
    },
]

const toasts = [];

function init() {
    createButtons(toastButtons);
}
init()

function createButtons(buttons) {
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.innerText = button.text;

        btn.className = "toast-button";

        btn.style.backgroundColor = button.color;

        toastContainer.append(btn);
    })
}

function createToast(arr, index) {
    const { text: toastMessage, color: toastColor } = arr[index];

    toasts.push({ message: `${toastMessage} toast notification`, color: toastColor });
    console.log(toasts)
    displayToast(toasts);
}

function displayToast(arr) {
    toastViewer.innerText = "";
    arr.forEach((toast, index) => {
        const toastDiv = document.createElement('div');
        const text = document.createElement('p')
        const closeButton = document.createElement('button')
        
        text.innerText = toast.message;
        closeButton.innerText = "x"

        toastDiv.className = 'toast'
        closeButton.className = "close-button";

        toastDiv.style.borderBottom = `3px solid ${toast.color}`

        toastDiv.append(text);
        toastDiv.append(closeButton)
        toastViewer.append(toastDiv);
    })
}

const buttons = document.querySelectorAll('.toast-button');

buttons.forEach((btn, i) => 
    btn.addEventListener('click', 
        () => createToast(toastButtons, i))
);

function deleteNotification(arr, index) {
    return arr.filter((element, i) => i !== index);
}

console.log(document.querySelectorAll(".close-button"))

document.querySelectorAll(".close-button").forEach((btn, i) => btn.addEventListener('click', () => deleteNotification(toasts, i)))