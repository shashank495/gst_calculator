// ! Declatations




const button = document.querySelector('.btn')
// console.log(five, onetwo, oneeight, twoeight);

button.addEventListener('click', function () {
    const dropdown = document.querySelector('#dropdown');
    const select = dropdown.options[dropdown.selectedIndex].value;
    let result = document.querySelector('.result');
    let total = document.querySelector('.total');
    let input = Number(document.querySelector('.inputnum').value);
    // console.log(input);

    if (select == 1) {
        let gst5 = Math.round((input / 100) * 5);
        result.textContent = `GST : ${gst5}`;
        total.textContent = `Total : ${input} + ${gst5} = ${input + gst5}`
    } else if (select == 2) {
        let gst12 = Math.round((input / 100) * 12);
        result.textContent = `GST : ${gst12}`;
        total.textContent = `Total : ${input} + ${gst12} = ${input + gst12}`
    } else if (select == 3) {
        let gst18 = Math.round((input / 100) * 18);
        result.textContent = `GST : ${gst18}`;
        total.textContent = `Total : ${input} + ${gst18} = ${input + gst18}`
    } else if (select == 4) {
        let gst28 = Math.round((input / 100) * 28);
        result.textContent = `GST : ${gst28}`;
        total.textContent = `Total : ${input} + ${gst28} = ${input + gst28}`
    } else {
        result.textContent = 'Please Select a Value'
    }
})