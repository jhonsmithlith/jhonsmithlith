const data = {
  name: 'Brian',
  player: 'Malricio',
  occupation: 'Atleta.',
  age: 20,
  sex: 'male',
  birthplace: 'São paulo',
  residence: 'São paulo',

  life: {
    current: 40,
    max: 40,
  },
  sanity: {
    current: 21,
    max: 21,
  },

  lifeo: {
    current: 16,
    max: 16,
  },

  weapons: [
    
  ],
  attributes: [
    {
      type: 'Força',
      amount: 2,
    },
    {
      type: 'Agilidade',
      amount: 3,
    },
    {
      type: 'Vigor',
      amount: 2,
    },
    {
      type: 'Presença',
      amount: 2,
    },
    {
      type: 'intelecto',
      amount: 0,
    },
    
  ],




  pericias: [

    
    {
    type:'Atletismo',
    amount:'+5',
    },

    {
      type:'Atualidades',
      amount:'+0',
      },

      {
        type:'Ciência',
        amount:'+0',
        },
    
        {
          type:'Diplomacia',
          amount:'+0',
          },

          {
            type:'Enganação',
            amount:'+0',
            },
        
            {
              type:'Fortitude',
              amount:'+0',
              },
        
              {
                type:'Furtividade',
                amount:'+0',
                },
            
                {
                  type:'História',
                  amount:'+0',
                  },

                  {
                    type:'Intimidação',
                    amount:'+0',
                    },
                
                    {
                      type:'Intuição',
                      amount:'+0',
                      },
                
                      {
                        type:'Investigação',
                        amount:'+0',
                        },
                    
                        {
                          type:'Luta',
                          amount:'+5',
                          },
                
                          {
                            type:'Medicina',
                            amount:'+0',
                            },
                        
                            {
                              type:'Ocultismo',
                              amount:'+0',
                              },
                        
                              {
                                type:'Percepção',
                                amount:'+5',
                                },
                            
                                {
                                  type:'Pilotagem',
                                  amount:'+0',
                                  },

                                  {
                                    type:'Pontaria',
                                    amount:'+0',
                                    },
                                
                                    {
                                      type:'Prestidigitação',
                                      amount:'+0',
                                      },
                                
                                      {
                                        type:'Profissão',
                                        amount:'+0',
                                        },
                                    
                                        {
                                          type:'Reflexos',
                                          amount:'+5',
                                          },
                                
                                          {
                                            type:'Religião',
                                            amount:'+0',
                                            },
                                        
                                            {
                                              type:'Tática',
                                              amount:'+0',
                                              },
                                        
                                              {
                                                type:'Tecnologia',
                                                amount:'+0',
                                                },
                                            
                                                {
                                                  type:'Vontade',
                                                  amount:'+0',
                                                  },

    

    ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

data.pericias.map((pericia, index) => {
  addpericia(pericia, index)
})







$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#residence').val(data.residence)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.lifeBaro').css('width', `${calculateBar(data.lifeo.current, data.lifeo.max)}%`)
$('#lifeCounto').text(`${data.lifeo.current}/${data.lifeo.max}`)
$('#lifeCurrento').val(data.lifeo.current)
$('#lifeMaxo').val(data.lifeo.max)

$('.sanityBar').css(
  'width',
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)


const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const lifeModalo = $('#lifeModalo')
const sanityModal = $('#sanityModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'lifeModalo') {
    lifeModalo.css('display', 'none')
  }
   else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})


$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.lifeBaro').click(function () {
  console.log(this)
  lifeModalo.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})




$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#injury').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento ativado!')
  } else {
    console.log('Modo lesionado desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'Corte') {
    weaponType = 'C'
  } else if ($('#weaponType').val() == 'Impacto') {
    weaponType = 'I'
  } else if ($('#weaponType').val() == 'Perfurante') {
    weaponType = 'P'
  }else if ($('#weaponType').val() == 'Balistico') {
    weaponType = 'B'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weaponDamage').val(),
    numCurrent: $('#weaponNumCurrent').val(),
    numMax: $('#weaponNumMax').val(),
    attack: $('#weaponAttack').val(),
    reach: $('#weaponReach').val(),
    defect: $('#weaponDefect').val(),
    area: $('#weaponArea').val(),
  
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})






$('#changeLifeo').submit(function (event) {
  let current = Number($('#lifeCurrento').val())
  const max = Number($('#lifeMaxo').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.lifeo.current = current
  data.lifeo.max = max
  $('.lifeBaro').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCounto').text(`${current}/${max}`)

  closeModal('#lifeModalo')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {
  // Não encontrei uma forma mais fácil, então fiz assim

  const table = [
    { desastre: 1, normal: 20 },
    { desastre: 1, normal: 19, good: 20 },
    { desastre: 1, normal: 18, good: 20 },
    { desastre: 1, normal: 17, good: 19 },
    { desastre: 1, normal: 16, good: 19, extreme: 20 },
    { desastre: 1, normal: 15, good: 18, extreme: 20 },
    { desastre: 1, normal: 14, good: 18, extreme: 20 },
    { desastre: 1, normal: 13, good: 17, extreme: 20 },
    { desastre: 1, normal: 12, good: 17, extreme: 20 },
    { desastre: 1, normal: 11, good: 16, extreme: 19 },
    { desastre: 1, normal: 10, good: 16, extreme: 19 },
    { desastre: 1, normal: 9, good: 16, extreme: 19 },
    { desastre: 1, normal: 8, good: 15, extreme: 19 },
    { desastre: 1, normal: 7, good: 14, extreme: 19 },
    { desastre: 1, normal: 6, good: 14, extreme: 18 },
    { desastre: 1, normal: 5, good: 13, extreme: 18 },
    { desastre: 1, normal: 4, good: 13, extreme: 18 },
    { desastre: 1, normal: 3, good: 12, extreme: 18 },
    { desastre: 1, normal: 2, good: 12, extreme: 18 },
    { desastre: 1, normal: 2, good: 11, extreme: 17 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Extremo'
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
    if (dice <= type.desastre) return 'Desastre'
  } else if (type.good) {
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
    if (dice <= type.desastre) return 'Desastre'
  } else if (type.normal) {
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
    if (dice <= type.desastre) return 'Desastre'
  } else if (type.desastre) {
    if (dice <= type.desastre) return 'Desastre'
  }

}










function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}







function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
  
        <td>
            <button onclick="deleteWeapon(${id})" style="cursor: pointer;">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td><img onclick="rollDano_${id}()" class="attributeDice" src="./img/dado.png" alt="Dado" style="display: block; margin-left: auto; margin-right: auto; height: 20px; cursor: pointer;">${weapon.damage}</td>
        <td><input type="number" value="${weapon.numCurrent}"></td>
        <td>${weapon.numMax}</td>
        <td>${weapon.attack}</td>
        <td>${weapon.reach}</td>
        <td>${weapon.defect}</td>
        <td>${weapon.area}</td>
        </tr>
    
    <script>
    
    function rollDano_${id}() {
      console.log(this)
    
    
    
      diceModal.css('display', 'block')
    
      setTimeout(() => {
        $('.modalDice').css('transform', 'rotate(360deg)')
        $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
      }, 1000)
    
      setTimeout(() => {
        $('.sanityDice').css('transform', 'rotate(360deg)')
        $('.sanityDice').css('-webkit-transform', 'rotate(360deg)')
      }, 1000)
    
      
    
      setTimeout(() => {
        const diceNumber = rollDice('${weapon.damage}')
        $('#diceNumber').text(diceNumber)
        $('#diceType').text("")
    
        setTimeout(() => {
          diceModal.css('display', 'none')
          $('#diceNumber').text('')
          $('#diceType').text('')
    
          $('.modalDice').css('transform', 'rotate(0deg)')
          $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
        }, 20000)
      }, 2000)
    }
    
    
    </script>
    
    
    
    
    `)
  $('table#weapons').append(newWeapon)
}










function addAttribute(attribute, id) {



  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
  <a id="click_${id}" onclick="roll_dice_rep${id}()">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}"  id="attribute_input_${id}" >
  </div>
  
<script>
  
  function roll${id}(cnt, dice)
  {
    result${id}='';
    sum=0;
    for (var ik=1; ik<=cnt; ik++)
    {
        result${id}+=(ik>1)?'+':'';
          roll_result${id}=Math.floor((Math.random()*dice)+1);
      sum+=roll_result${id};
        result${id}+=roll_result${id};
    }
    result${id}+=(cnt>1)?' = <b>'+sum+'</b>':'';
    element_ID=cnt+'d'+dice;
    document.getElementById(element_ID).innerHTML=result${id};
  }
  





  function roll_dice_rep${id}()
  {
    rep= parseInt(document.getElementById('attribute_input_${id}').value) + parseInt(1);
    cnt= 1;
    dice= 20;
  
    result${id}=' ';
    for (var jk=1; jk<=rep; jk++)
    {
        sum=0;
        for (var ik=1; ik<=cnt; ik++)
        {
            result${id}+=(ik>1)?'+':'';
              roll_result${id}=Math.floor((Math.random()*dice)+1);
          sum+=roll_result${id};
            result${id}+=roll_result${id};
        }
        result${id}+=(cnt>1)?' = <b>'+sum+'</b>':'';
        result${id}+=',  ';
    }




    console.log(this)



    diceModal.css('display', 'block')
  
    setTimeout(() => {
      $('.modalDice').css('transform', 'rotate(360deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    setTimeout(() => {
      $('.sanityDice').css('transform', 'rotate(360deg)')
      $('.sanityDice').css('-webkit-transform', 'rotate(360deg)')
    }, 1000)
  
    
  
    setTimeout(() => {
      const diceNumber = result${id}
      $('#diceNumber').text(diceNumber)
  
      setTimeout(() => {
        diceModal.css('display', 'none')
        $('#diceNumber').text('')
        $('#diceType').text('')
  
        $('.modalDice').css('transform', 'rotate(0deg)')
        $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
      }, 20000)
    }, 2000)
  

  }
  </script>
  
  `)
  $('#attributesList').append(newAttribute)
}










function addpericia(pericia, id) {



  const newpericia = $(`<div class="pericia" id="pericia_${id}">
  <div class="sty${id}">
  <input type="checkbox" id="crazedi${id}" name="crazedi${id}"  value="crazedi${id}" style="width: 80px;" ><label for="crazedi${id}" >Treinado</label>
  </div>
  <img class="attributeDice" src="./img/dado.png" alt="Dado">
  </a>
    
    <h3>${pericia.type}</h3>
    
    <input type="text" name="appearance" value="${pericia.amount}"  id="pericia_input_${id}" >
  </div>
  
  <style>

  .sty${id} {
    text-align: center;
  }

  




  </style>
  
  `)


  $('#periciasList').append(newpericia)

}


function addpericiar(pericia, id) {



  const newpericiar = $(`<div class="pericia" id="pericia_${id}">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${pericia.type}</h3>
    <input type="text" name="appearance" value="${pericia.amount}"  id="pericia_input_${id}" >
  </div>`)


  $('#periciasListr').append(newpericiar)

}



function deleteWeapon(id) {
  $(`tr#weapon_${id}`).remove()
}















//para vida


function tirar(){
  
  let current = Number($('#lifeCurrent').val()) - 1
  const max = Number($('#lifeMax').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrent').val(data.life.current) 
  $('#lifeCount').text(`${data.life.current}/${data.life.max}`)
  
}


function add(){
  
  let current = Number($('#lifeCurrent').val()) + 1
  const max = Number($('#lifeMax').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrent').val(data.life.current) 
  $('#lifeCount').text(`${data.life.current}/${data.life.max}`)
  

}




//para sanidade

function tirars(){

  let current = Number($('#sanityCurrent').val()) - 1
  const max = Number($('#sanityMax').val())

  

  data.sanity.current = current
  data.sanity.max = max

  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)

   $('#sanityCurrent').val(data.sanity.current) 
  $('#sanityCount').text(`${current}/${max}`)
  
}


function adds(){

  let current = Number($('#sanityCurrent').val()) + 1
  const max = Number($('#sanityMax').val())

  

  data.sanity.current = current
  data.sanity.max = max

  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)

   $('#sanityCurrent').val(data.sanity.current) 
  $('#sanityCount').text(`${current}/${max}`)
  
}






//para esforço

function tiraro(){
  
  let current = Number($('#lifeCurrento').val()) - 1
  const max = Number($('#lifeMaxo').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBaro').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrento').val(data.life.current) 
  $('#lifeCounto').text(`${data.life.current}/${data.life.max}`)
  
}


function addo(){
  
  let current = Number($('#lifeCurrento').val()) + 1
  const max = Number($('#lifeMaxo').val())

  
  data.life.current = current
  data.life.max = max



  $('.lifeBaro').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
  
  $('#lifeCurrento').val(data.life.current) 
  $('#lifeCounto').text(`${data.life.current}/${data.life.max}`)
  

}





function somadadef(valor){

alert(valor)





}
