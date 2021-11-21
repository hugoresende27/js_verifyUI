const nums = document.querySelectorAll('.cod')

nums[0].focus()

nums.forEach((code,index) => {
    code.addEventListener('keydown', (e) => {//arrow function com eventlistener de keydown 
        if (e.key >= 0 && e.key <=9) {//parametro recebido por eventlistener, e.key se estiver entre 0 e 9
            nums[index].value = ''//para substituir logo o número no caso de já existir input 
            setTimeout(() => nums[index + 1].focus(), 10)//avança um index 
            //nums[index + 1].focus()
        }
        else if (e.key === 'Backspace'){//ao pressionar backspace recua um index
            setTimeout(() => nums[index - 1].focus(), 10)
        }
    })
})