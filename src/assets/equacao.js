


function fechar() {



  var p = document.getElementById('valor')
  var v = document.getElementById('lb')
  var m = document.getElementById('minimo')
  var t = document.getElementById('tempo')
  var tp = document.getElementById('tp')

  var pedido = Number(p.value)
  var tempo  = Number(t.value)


  if (pedido == "" || tempo == "") {


    v.innerHTML = `Digite o valor do pedido!`
    document.getElementById('lb').style.color = "red";
    tp.innerHTML = `Digite o tempo de entrega!`
    document.getElementById('tp').style.color = "red";


  } else {

    if (pedido < 10) {



      m.innerHTML = `Você digitou ${pedido}. Dez é o valor mínimo!`
      document.getElementById('minimo').style.color = "red";
      document.getElementById('lb').innerHTML = "Valor do Pedido: R$0,00"
      document.getElementById('lb').style.color = "black";

    } else {


      v.innerHTML = `Valor do Pedido: R$ ${pedido}`
      tp.innerHTML = `Tempo médio de entrega: ${tempo} minutos`
      document.getElementById('tp').style.color = "red";




    }

  }

}

