export function greet(name){
    const names = ['Thomas','Stefan','Martin'];
    if (names.includes(name)){
        return 'Hello Coach!';
    }else if (name != null){
        return 'Hello ' + name + '!';
    }else {
        return 'Hello stranger!';
    }
}
