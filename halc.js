function func(a,b){
    if (me === 'plus'){
        let c=a+b
        document.write(c)
    }
    else if(me === 'minus'){
        let c=a-b
        document.write(c)
    }
    else if(me === 'times'){
        let c=a*b
        document.write(c)
    }
    else if(me === 'divided'){
        let c=a/b
        document.write(c)
    }
}
//
let me = prompt('Что нам делать?(plus,minus,times,divided)')
let a = parseInt(prompt('Напишите первое число'))
let b = parseInt(prompt('Напишите второе число'))
//
func(a,b)