/* console.log(document.title); */
let docTitle = 'Heyyyy !';
window.addEventListener('blur', () => {
	document.title = 'I miss you';
})

window.addEventListener('focus', () => {
	document.title = docTitle;
})