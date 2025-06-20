import os

'''
Ejercicio 1: Descargar una copia del archivo www.py4e.com/code3/words.txt
Escribe un programa que lee las palabras en words.txt y las almacena como claves en un diccionario. No importa qué valores tenga. Luego puedes utilizar el operador in como una forma rápida de revisar si una cadena está en el diccionario.
'''

# actual_route = os.path.dirname(__file__)
# file_route = os.path.join(actual_route, 'cap9-diccionarios.txt')

# counter = 1
# dictionary = {}

# with open(file_route) as file:
#   for line in file:
#     words = line.split()
#     for word in words:
#       dictionary[word] = counter
#       counter += 1

# print(dictionary)

# ------------------------------------------------------------------------------
'''
Ejercicio 2: Escribir un programa que clasifica cada mensaje de correo dependiendo del día de la semana en que se recibió. Para hacer esto busca las líneas que comienzan con “From”, después busca por la tercer palabra y mantén un contador para cada uno de los días de la semana. Al final del programa imprime los contenidos de tu diccionario (el orden no importa).

Línea de ejemplo:
From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008

Ejemplo de ejecución:
python dow.py
Ingresa un nombre de archivo: mbox-short.txt
{'Fri': 20, 'Thu': 6, 'Sat': 1}
'''

# actual_route = os.path.dirname(__file__)
# file_route = os.path.join(actual_route, 'cap7-archivos.txt')

# dictionary = {}

# with open(file_route) as file:
#   for line in file:
#     if line.startswith('From '):
#       words = line.split()
#       if words[2] not in dictionary:
#         dictionary[words[2]] = 1
#       else:
#         dictionary[words[2]] = dictionary[words[2]] + 1
        

# print(dictionary)


# ------------------------------------------------------------------------------
'''
Ejercicio 3: Escribe un programa para leer a través de un historial de correos, construye un histograma utilizando un diccionario para contar cuántos mensajes han llegado de cada dirección de correo electrónico, e imprime el diccionario.

Ingresa un nombre de archivo: mbox-short.txt
{'gopal.ramasammycook@gmail.com': 1, 'louis@media.berkeley.edu': 3,
'cwen@iupui.edu': 5, 'antranig@caret.cam.ac.uk': 1,
'rjlowe@iupui.edu': 2, 'gsilver@umich.edu': 3,
'david.horwitz@uct.ac.za': 4, 'wagnermr@iupui.edu': 1,
'zqian@umich.edu': 4, 'stephen.marquard@uct.ac.za': 2,
'ray@media.berkeley.edu': 1}
'''

actual_route = os.path.dirname(__file__)
file_route = os.path.join(actual_route, 'cap7-archivos.txt')

dictionary = {}

with open(file_route) as file:
  for line in file:
    if line.startswith('From '):
      words = line.split()
      if words[1] not in dictionary:
        dictionary[words[1]] = 1
      else:
        dictionary[words[1]] = dictionary[words[1]] + 1
        

print(dictionary)
'''
Ejercicio 4: Agrega código al programa anterior para determinar quién
tiene la mayoría de mensajes en el archivo. Después de que todos los
datos hayan sido leídos y el diccionario haya sido creado, mira a través
del diccionario utilizando un bucle máximo (ve Capítulo 5: Bucles máx￾imos y mínimos) para encontrar quién tiene la mayoría de mensajes e
imprimir cuántos mensajes tiene esa persona.

Ingresa un nombre de archivo: mbox-short.txt
cwen@iupui.edu 5
Ingresa un nombre de archivo: mbox.txt
zqian@umich.edu 195
'''
max_quantity = 0
max_item = ''

for item in dictionary:
  if dictionary[item] > max_quantity:
    max_quantity = dictionary[item]
    max_item = item

print(f'El que mas correos nos envio fue {max_item}, con un total de {max_quantity}')

# ------------------------------------------------------------------------------
'''
Ejercicio 5: Este programa almacena el nombre del dominio (en vez de la dirección) desde donde fue enviado el mensaje en vez de quién envió el mensaje (es decir, la dirección de correo electrónica completa). Al final del programa, imprime el contenido de tu diccionario. 

python schoolcount.py
Ingresa un nombre de archivo: mbox-short.txt
{'media.berkeley.edu': 4, 'uct.ac.za': 6, 'umich.edu': 7,
'gmail.com': 1, 'caret.cam.ac.uk': 1, 'iupui.edu': 8}
'''
# actual_route = os.path.dirname(__file__)
# file_route = os.path.join(actual_route, 'cap7-archivos.txt')

# dictionary = {}

# with open(file_route) as file:
#   for line in file:
#     if line.startswith('From '):
#       words = line.split()
#       if words[1] not in dictionary:
#         dictionary[words[1]] = 1
#       else:
#         dictionary[words[1]] = dictionary[words[1]] + 1
        

# print(dictionary)