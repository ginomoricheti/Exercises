'''
Consider the problem of adding two n-bit binary integers, stored in two n-element arrays A and B. The sum of the two integers should be stored in binary form in an .n C 1/-element array C . State the problem formally and write pseudocode for adding the two integers.
'''

def new_binary_number():
    x = int(input("¿De cuántos dígitos será el número binario? "))
    binary = [0] * x

    for i in range(x):
        while True:
            digit = input(f"Introducí el dígito número {i+1} (de izquierda a derecha, solo 0 o 1): ")

            if digit in ('0', '1'):
                binary[i] = int(digit)
                break
            else:
                print("Error: Solo se permite 0 o 1. Intentalo de nuevo.")
    
    return binary

def binary_sum(a, b):
    # Equalize lenghts
    diff = len(a) - len(b)
    if diff > 0:
        b = [0] * diff + b
    elif diff < 0:
        a = [0] * (-diff) + a
    
    n = len(a)
    c = [0] * (n + 1)
    carry = 0
    
    for i in range(len(a) - 1, - 1, -1):
        total = a[i] + b[i] + carry
        c[i + 1] = total % 2
        carry = total // 2
    
    c[0] = carry

    return c

def binary_to_decimal(x):
    n = len(x)
    pos = 0
    decimal = 0
    
    for i in range(n - 1, -1, -1):
        decimal += int(x[i]) + 2 ** pos
        pos += 1

    return decimal

a = new_binary_number()
b = new_binary_number()

print(f"El primer numero que cargaste es:\n\t{a}")
print(f"El primer numero que cargaste es:\n\t{b}")

print("La suma de ambos da: ", binary_sum(a, b))

print(f"En decimal:\n\ta = {binary_to_decimal(a)}\n\tb = {binary_to_decimal(b)}\n --------- \nSuma\t{binary_to_decimal(binary_sum(a, b))}")