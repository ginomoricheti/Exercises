# Ejercicio 1: Escribe un programa que lea repetidamente números hasta que el usuario introduzca “fin”. Una vez se haya introducido “fin”, muestra por pantalla el total, la cantidad de números y la media de esos números. Si el usuario introduce cualquier otra cosa que no sea un número, detecta su fallo usando try y except, muestra un mensaje de error y pasa al número siguiente.

# num_input = input("Introduce un número:\n")

# contador = 0
# total = 0

# while num_input != "fin":
#     try:
#         numero = float(num_input)
#         total = total + numero
#         contador += 1
#     except ValueError:
#         print("Introducí un número válido o la palabra 'fin' para terminar el programa.")
    
#     num_input = input("Introduce otro número o 'fin':\n")

# media = total / contador

# print(f'Ingresaste {contador} numeros')
# print(f'El total de todos los numeros da {total} y la media es de {media}')

# ------------------------------------------------------------------------------
# Ejercicio 2: Escribe otro programa que pida una lista de números como la anterior y al final muestre por pantalla el máximo y mínimo de los números, en vez de la media.

# num_array = []

# def min(valores):
#     menor = None
#     for valor in valores:
#         if menor is None or valor < menor:
#             menor = valor
#     return menor

# def max(valores):
#     mayor = None
#     for valor in valores:
#         if mayor is None or valor > mayor:
#             mayor = valor
#     return mayor

# num_input = input('Introduzca un número o "fin" para terminar: ')

# while num_input != "fin":
#     try:
#         num = float(num_input)  # Intentamos convertir a número
#         num_array.append(num)
#     except ValueError:
#         print("Introducí un número válido o la palabra 'fin' para terminar.")
    
#     num_input = input("Introduce otro número o 'fin': ")

# # Evitamos errores si no se ingresó ningún número
# if num_array:
#     x = min(num_array)
#     y = max(num_array)
#     print(f'\nLa lista que se generó con los números que ingresaste fue:\n{num_array}')
#     print(f'El menor es {x} y el mayor es {y}')
# else:
#     print("No se ingresaron números válidos.")