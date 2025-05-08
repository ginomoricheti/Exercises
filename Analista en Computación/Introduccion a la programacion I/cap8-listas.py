import os

'''
Ejercicio 1: Escribe una función llamada recortar que toma una lista y la modi-
fica, removiendo el primer y último elemento, y regresa None. Después escribe una función llamada medio que toma una lista y regresa una nueva lista que contiene todo excepto el primero y último elementos.
'''

# def recortar(lista):
#   if len(lista) > 1:
#     lista.pop(0)
#     lista.pop(-1)
#   elif len(lista) == 1:
#     list.pop(0)
  
#   return None

# def medio(lista):
#   nueva_lista = lista[1:-1]
  
#   return 

# ------------------------------------------------------------------------------
'''
Ejercicio 4: Descargar una copia de un archivo www.py4e.com/code3/romeo.txt.
Escribir un programa para abrir el archivo romeo.txt y leerlo línea por línea. Para cada línea, dividir la línea en una lista de palabras utilizando la función split. Para cada palabra, revisar si la palabra ya se encuentra previamente en la lista. Si la palabra no está en la lista, agregarla a la lista. Cuando el programa termine, ordenar e imprimir las palabras resultantes en orden alfabético. 

Ingresar nombre de archivo: romeo.txt
['Arise', 'But', 'It', 'Juliet', 'Who', 'already', 'and', 'breaks', 'east', 'envious', 'fair', 'grief', 'is', 'kill', 'light', 'moon', 'pale', 'sick', 'soft', 'sun', 'the', 'through', 'what', 'window', 'with', 'yonder']
'''

# actual_route = os.path.dirname(__file__)
# file_route = os.path.join(actual_route, 'cap8-listas.txt')

# word_list = []

# with open(file_route) as file:
#   for line in file:
#     line = line.split()
#     for word in line:
#       if word not in word_list:
#         word_list.append(word)

# word_list.sort()

# print(word_list)

# ------------------------------------------------------------------------------
'''
Ejercicio 5: Escribir un programa para leer a través de datos de una ban￾deja de entrada de correo y cuando encuentres una línea que comience con “From”, dividir la línea en palabras utilizando la función split. Estamos interesados en quién envió el mensaje, lo cual es la segunda palabra en las líneas que comienzan con From.
'''
# actual_route = os.path.dirname(__file__)
# file_route = os.path.join(actual_route, 'cap8-listas.txt')

# form_lines_count = 0
# search_word = 'From'

# with open(file_route) as file:
#   for line in file:
#     line = line.split()
#     if len(line) != 0 and line[0] != f'From:' and line[0] == {search_word}:
#       form_lines_count += 1
#       print(line[1])

# print(f'\nHay {form_lines_count} lineas en el archivo con la palabra {search_word} al inicio\n')

# ------------------------------------------------------------------------------
'''
Ejercicio 6: Reescribe el programa que pide al usuario una lista de números e imprime el máximo y el mínimo de los números al final cuando el usuario ingresa “hecho”. Escribe el programa para almacenar los números que el usuario ingrese en una lista, y utiliza las funciones max() y min() para calcular el máximo y el mínimo después de que el bucle termine.
'''

# lista = []
# num = input('Ingresa un numero o "hecho" para salir: ')

# while num != 'hecho':
#   if num == ' ' or num == '' :
#     num = input('Ingresaste un espacio en blanco, escribi otro numero o "hecho" para salir: ')
#     continue
#   lista.append(float(num))
#   num = input('Ingresa otro numero o "hecho" para salir: ')

# print(f'El numero mas alto que ingresaste fue {max(lista)} y el mas chico {min(lista)}')