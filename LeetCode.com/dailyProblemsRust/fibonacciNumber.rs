impl Solution {
    pub fn fib(n: i32) -> i32 {
        match n {
            n if n <= 0 => 0,
            1 => 1,
            _ => Self::fib(n - 1) + Self::fib(n - 2),
        }
    }
}

struct Solution;

fn main() {
    println!("{}", Solution::fib(5));
}
