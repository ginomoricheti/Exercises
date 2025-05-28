import math
import sys
sys.set_int_max_str_digits(10000)

# 1) logn <= t  || n <= 2^t
def max_n_log(t):
    return int(2 ** t)

# 2) sqrt(n) <= t  => n <= t^2
def max_n_sqrt(t):
    return t ** 2

# 3) n <= t
def max_n_linear(t):
    return t

# 4) n * log2(n) <= t
def nlogn(n, t):
    return n * math.log2(n) <= t

def max_n_nlogn(t):
    lo, hi = 1, t
    res = 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nlogn(mid, t):
            res = mid
            lo = mid + 1
        else:
            hi = mid - 1
    return res

# 5) n^2 <= t
def max_n_n2(t):
    return int(math.sqrt(t))

# 6) n^3 <= t
def max_n_n3(t):
    return int(t ** (1/3))

# 7) 2^n <= t
def max_n_exp(t):
    return int(math.log2(t))

# 8) n! <= t
def max_n_fact(t):
    n = 1
    fact = 1
    while fact <= t:
        n += 1
        fact *= n
    return n - 1

while True:
    time = int(input("¿Qué número desea calcular? (En microsegundos, 0 para salir): "))
    if time == 0:
        break

    menu = int(input(
        "Con qué algoritmo desea calcular?\n"
        "1) log(n)\n2) raíz cuadrada de n\n3) n\n4) n log n\n5) n^2\n6) n^3\n7) 2^n\n8) n!\n"
        "Marque el número correspondiente a su operación: "
    ))

    if menu == 1:
        res = max_n_log(time)
    elif menu == 2:
        res = max_n_sqrt(time)
    elif menu == 3:
        res = max_n_linear(time)
    elif menu == 4:
        res = max_n_nlogn(time)
    elif menu == 5:
        res = max_n_n2(time)
    elif menu == 6:
        res = max_n_n3(time)
    elif menu == 7:
        res = max_n_exp(time)
    elif menu == 8:
        res = max_n_fact(time)
    else:
        print("Opción inválida.")
        continue

    print(f"Con {time} microsegundos y el algoritmo {menu}, podés procesar un problema con n ≈ {res}")
