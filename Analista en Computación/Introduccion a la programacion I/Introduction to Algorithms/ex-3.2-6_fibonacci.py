'''
We define the Fibonacci numbers by the following recurrence:
F0 =  0
F1 = 1
F[i] = F[i-1] + F[i-2] for i >= 2
'''
from math import sqrt
cicles = int(input("Cuantos ciclos de fibo queres calcular pa? "))
fib_arr = [0] * cicles
proj_fib_arr = [0] * cicles

for cicle in range(cicles):
  if cicle == 0:
    fib_arr[cicle] = 0
    proj_fib_arr[cicle] = 0
    continue
  if cicle == 1:
    fib_arr[cicle] = 1
    proj_fib_arr[cicle] = 1
    continue
  
  fib_arr[cicle] = fib_arr[cicle-1]+fib_arr[cicle-2]
  
  projected_golden_ratio = (1+sqrt(5)) / 2
  actual_golden_ratio = fib_arr[cicle] / fib_arr[cicle-1]
  
  conjugated_golden_ratio = (1-sqrt(5)) / 2
  
  induction_fib = ((projected_golden_ratio ** cicle) - (conjugated_golden_ratio ** cicle)) / (sqrt(5))
  proj_fib_arr[cicle] = induction_fib

  print(f"Para {fib_arr[cicle]}, se espera {projected_golden_ratio}, y se obtuvo {actual_golden_ratio}")
  
  print(f"Calculando golden y conjugated ratios con induccion, se espera {induction_fib} y se tuvo {fib_arr[cicle]}")
  
  

print("---------------------------------------------")
print(f"Fibonacci final: {proj_fib_arr}")
print(f"Fibonacci final: {fib_arr}")
