use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("----Guess the number!----");

    let secret_number = rand::thread_rng().gen_range(1, 101);
    let mut guess = String::new();

    println!("Please input your guess.");
    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too Small!"),
        Ordering::Greater => println!("Too Big!"),
        Ordering::Equal => println!("You win!")
    }

    println!("You guessed: {}", guess);
    println!("Secret number: {}", secret_number);
}
