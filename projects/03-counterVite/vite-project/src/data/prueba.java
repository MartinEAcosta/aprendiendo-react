public Camino volverBase(Mapa map, Celda destino){
    Camino camino = new Camino;
    Cellda origen= this.posicionActual;
    if(origen != destino){
        Iterator<Celda> it = map.obtenerAdys(origen);
        while(it.hasNext()){
            Celda movimiento = it.next();
            if(movimiento.getValor() != 1){
                //El primer movimiento no cuenta como gasto energetico por lo cual no se evalua nada de eso.
                camino.add(movimiento);
                volverBase(map,destino,movimiento,camino);
                camino.remove(movimiento);
            }
        }
    }
    return this.solucion;
}

private void volverBase(Mapa map,Celda destino, Celda actual, Camino camino){
    if(actual == destino){
        if(this.solucion.getGasto() > camino.getGasto()){
            this.solucion = camino;
        }
    }
    else{
        Iterator<Celda> it = map.obtenerAdys(actual);
        while(it.hasNext()){
            Celda movimiento = it.next();
            if(movimiento.getValor() != 1 && !camino.contains(movimiento)){
                //En caso que el camino retorne true aumento el gasto de energia
                if(camino.deboGirar(movimiento)){
                    camino.aumentarGasto();
                }
                camino.add(movimiento);
                //PODA
                //Si todavia no llegue al destino y ya tengo un mayor gasto que
                //La posible mejor solucion, no sigo explorando
                if(camino.getGasto() > this.solucion.getGasto()){
                    volverBase(map, destino, movimiento, camino);
                }
                camino.remove(movimiento);
                //Si hubo que girar, volviendo del backtracking debo sacar lo aumentado
                //Debido a que podria intervenir en las siguientes decisiones.
                if(camino.deboGirar(movimiento)){
                    camino.decrementarGasto();
                }
            }
        }
    }
}

public Sudoku resolverSudoku(Sudoku sudoku, ArrayList<Integer> numeros){
    Sudoku parcial = sudoku;
    resolverSudoku(parcial,numeros);
    return this.solucion;
}

private void resolverSudoku(Sudoku parcial, ArrayList<Integer> numeros){
    if(parcial.isCompleto()){
        this.solucion = parcial;
    }
    else{
        Iterator<Celda> it = parcial.obtenerCeldasVacias();
        while(it.hasNext()){
            Celda celda = it.next();
            if(celda.getValor() == 0){
                //Si la celda esta vacia, intento colocar cada numero
                //Y si alguno de ellos es una solucion, la guardo
                for(Integer nro : numeros){
                    if(parcial.esPosible(nro,celda)){
                        parcial.colocar(nro,celda);
                        resolverSudoku(parcial,numeros);
                        if(this.solucion != null){
                            return this.solucion;
                        }
                        parcial.quitarNumero(celda);
                    }
                }
            }
    }
}