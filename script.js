/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * 
 * @param {org.blocknitive.universidad.ActualizaTitulo} actualizaTitulo - esta es la transacción que hemos declarado en el universidad.cto, ahora definiremos su lógica con 
 * código
 * @transaction
 */
function actualizaTitulo(tituloActualiza) {

    var logAntiguoEstado =  tituloActualiza.titulo.estado;
    
    tituloActualiza.titulo.estado = tituloActualiza.estadoTitulo;

    console.log('actualizando estado titulo');    

  	return getAssetRegistry('org.blocknitive.universidad.Titulo')
  	.then(function (assetRegistry) {
        return assetRegistry.update(tituloActualiza.titulo);
    })
    .then(function () {
        var event = getFactory().newEvent('org.blocknitive.universidad', 'EventoActualizaTitulo');
        event.titulo = tituloActualiza.titulo;
        event.estadoTitulo = logAntiguoEstado;
        emit(event);

    });
}