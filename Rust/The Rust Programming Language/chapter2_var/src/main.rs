fn main() {
    let mut x = 5;
    println!("The value of x is {}", x);
    x = 6;
    println!("The value of x is {}", x);

    const VARIABLE: &str = "dfhsuydfhgyu";

    let booleano: bool = true;

    let suma = 2 + 5;

    let resta = 2 - 5;
    
    let multiplicacion = 2 * 5;

    let divicion = 2 / 5;
    
    let resto = 2 % 5;

    if_statement();
}

fn if_statement() {
    let number = 3;
    if number < 5 {
        println!("Cuakkk")
    } else {
        println!("Mecmec")
    }
}