export function hello_world(): String {
    return "Hello World"
}

console.log(hello_world())

function keep_me_alive() {
    setTimeout(() => {
        keep_me_alive()
    }, 1000);
}

keep_me_alive()