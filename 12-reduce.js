"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* reduce (reduzir, redução, chegar a um resultado único)
Passa por elementos de um array e reduz a um único valor, que pode ser
uma soma, média, concatenação, etc.

A função callback recebe dois parâmetros: o acumulador (valor que é acumulado até o momento), e o valor atual (elemento do array sendo processado).*/

// Exemplo 1
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(total);

separador();

// Exercício 1: realize a soma dos preços de todos os cursos
// Mostre no log.

// Exercício 2: calcule a média dos preços de todos os cursos
// Mostre no log.

// Exercício 3: calcule o preço total dos cursos de Front-End
// Mostre no log.
