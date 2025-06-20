# Ejercicio 1: Escribe un bucle while que comience con el último carácter en la cadena y haga un recorrido hacia atrás hasta el primer carácter en la cadena, imprimiendo cada letra en una línea independiente.

# fruta = "manzana"
# indice = -1
# tamaño = -(len(fruta))

# while indice >= tamaño:
#   letra = fruta[indice]
#   print(letra)
#   indice -= 1

# print("\nFin del deletreo")

# ------------------------------------------------------------------------------
# Ejercicio 2: Dado que fruta es una cadena, ¿que significa fruta[:]?

# fruta = "naranja"
# print(fruta[:])

# Rta: significa toda la cadena.

# ------------------------------------------------------------------------------
# Ejercicio 3: Encapsula este código en una función llamada cuenta, y hazla genérica de tal modo que pueda aceptar una cadena y una letra como argumentos.

# def contador_letra(word, letra):
#   contador = 0
#   for letter in word:
#     if letter == letra:
#       contador += 1
  
#   print(f'La palabra {word} tiene {contador} "{letra}"')

# palabra = input("Escribi una palabra: ")
# letra = input("Que letra queres contar de esa palabra? ")

# contador_letra(palabra, letra)

# ------------------------------------------------------------------------------
# Ejercicio 4: Hay un método de cadenas llamado count que es similar a la función del ejercicio previo. Lee la documentación de este método en:

# https://docs.python.org/library/stdtypes.html#string-methods

# Escribe una invocación que cuenta el número de veces que una letra aparece en “banana”.

# fruta = "banana"

# print(fruta.count("a"))

# ------------------------------------------------------------------------------
'''Ejercicio 5: Toma el siguiente código en Python que almacena una cadena:
str = "X-DSPAM-Confidence:0.8475"
Utiliza find y una parte de la cadena para extraer la porción de la cadena
después del carácter dos puntos y después utiliza la función float para
convertir la cadena extraída en un número de punto flotante.'''

# str = "X-DSPAM-Confidence:0.8475"

# two_dots_position = str.find(":") + 1
# number_slice = str[two_dots_position:-1]
# print(number_slice, type(number_slice))
# float_number_slice = float(number_slice)
# print(float_number_slice, type(float_number_slice))

# ------------------------------------------------------------------------------
'''
Ejercicio 6: Lee la documentación de los métodos de cadenas en
https://docs.python.org/library/stdtypes.html#string-methods Quizá
quieras experimentar con algunos de ellos para asegurarte de entender
como funcionan. strip y replace son particularmente útiles.

La documentación usa una sintaxis que puede ser confusa. Por ejem￾plo, en find(sub[, start[, end]]), los corchetes indican argumentos op￾cionales. De modo que sub es requerido, pero start es opcional, y si se
incluye start, entonces end es opcional.
'''