# Ejercicio 1: Ejecuta el programa en tu sistema y observa que numeros obtienes.

# import random

# print(random.randint(5,10))

# ------------------------------------------------------------------------------
# Ejercicio 6: Reescribe el programa de cálculo del salario, con tarifa-y￾media para las horas extras, y crea una función llamada calculo_salario que reciba dos parámetros (horas y tarifa).

# def calculo_salario (horas, tarifa):
#   if horas > 40:
#       horas_de_mas = horas - 40
#       tarifa_extra = tarifa * 1.5
#       salario_comun = 40 * tarifa
#       salario_extra = horas_de_mas * tarifa    
#       salario = salario_comun + salario_extra    
#       print(f'Por trabajar tus 40hs correspondientes se te abonó ${salario_comun} (40 horas a ${tarifa} la hora). Pero las {horas_de_mas} que trabajaste extra se te pagaron a ${tarifa_extra} la hora, entonces recibiste ${salario_extra}.Por ende tu total este mes es de ${salario}')
#   else:
#       salario = horas * tarifa_x_hora
#       print(f'Por trabajar {horas}hs se te abonó ${salario} (por hora ${tarifa_x_hora})')      

# while True:
#   try: 
#     horas = int(input("Cuantas horas trabajaste?\n"))
#     tarifa_x_hora = float(input("Cuanto cobras la hora?\n"))  
    
#     calculo_salario(horas, tarifa_x_hora)
    
#     break

#   except ValueError:
#     print("Error, no se ha introducido un numero. Por favor, introduzca un numero\n\n\n")

# ------------------------------------------------------------------------------
# Ejercicio 7: Reescribe el programa de calificaciones del capítulo anterior usando una función llamada calcula_calificacion, que reciba una puntuación como parámetro y devuelva una calificación como cadena.

# def calcula_calificaion(punt):
#   if 0.0 <= punt <= 1.0:
#       if punt >= 0.9:
#         calificacion = "Sobresaliente!!"
#       elif punt >= 0.8:
#         calificacion = "Notable"
#       elif punt >= 0.7:
#         calificacion = "Bien"
#       elif punt >= 0.6:
#         calificacion = "Suficiente"
#       else:
#         calificacion = "Insuficiente"
#   else:
#       print("No se ha introducido una puntuacion de entre 0.0 y 1.0")

#   return calificacion

# ciclos = int(input("Cuantas notas vas a cargar?\n"))

# for i in range(ciclos):
#   try:
#     puntuacion = float(input(f"[Nota {i+1}] Introduzca una puntuación entre 0.0 y 1.0 por favor:\n"))
    
#     print(calcula_calificaion(puntuacion))

#   except ValueError:
#     print("No se ha introducido un valor numerico.")
