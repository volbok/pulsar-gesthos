const axios = require("axios");

let html = 'https://pulasr-gesthos-api.herokuapp.com/';
// let html = 'http://localhost:3333/'

const criandoJsonAtendimento = () => {
  console.log('ENVIADO ARRAY COM JSONS');
  var obj =
  {
    "credenciais":
    {
      "empresa": "13.025.354/0001-32",
      "usuario": "AABBCCDD",
      "password": "AABBCCDD"
    },
    "pacientes": [
      {
        "internacao": {
          "data": "01/01/2023",
          "hora": "13:40:00",
          "prontuario": "111",
          "atendimento": "111",
          "paciente": "PACIENTE 111",
          "sexo": "M",
          "nascimento": "01/01/1911",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "21"
        },
      },
      {
        "alta": {
          "data": "01/01/2023",
          "hora": "02:30:00",
          "prontuario": "111",
          "atendimento": "111",
          "paciente": "NOVO PACIENTE 111",
          "sexo": "M",
          "nascimento": "01/01/1911",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "01"
        },
      },
      {
        "alta": {
          "data": "02/02/2023",
          "hora": "01:30:00",
          "prontuario": "222",
          "atendimento": "222",
          "paciente": "PACIENTE 222",
          "sexo": "M",
          "nascimento": "01/01/1922",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "02"
        },
      },
      {
        "alta": {
          "data": "03/03/2023",
          "hora": "09:56:00",
          "prontuario": "333",
          "atendimento": "333",
          "paciente": "PACIENTE 333",
          "sexo": "M",
          "nascimento": "01/01/1933",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "03"
        },
      },
      {
        "internacao": {
          "data": "03/03/2023",
          "hora": "09:30:00",
          "prontuario": "333",
          "atendimento": "333",
          "paciente": "PACIENTE 333",
          "sexo": "M",
          "nascimento": "01/01/1933",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "03"
        },
      },
      {
        "alta": {
          "data": "03/03/2023",
          "hora": "09:33:00",
          "prontuario": "333",
          "atendimento": "333",
          "paciente": "PACIENTE 333",
          "sexo": "M",
          "nascimento": "01/01/1933",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "03"
        },
      }
    ]
  }
  axios.post(html + 'gesthos_atendimentos', obj).then(() => {
    console.log('ENVIADO! ' + JSON.stringify(obj));
  }).catch((err) => console.log(err));
}

const criandoJsonAssistencial = (endpoint) => {
  console.log('ENVIADO ARRAY COM JSONS');
  var obj =
  {"atributo": "a��o"}

  var obj2 =
  {
    "credenciais":
    {
      "empresa": "13.025.354/0001-32",
      "usuario": "AABBCCDD",
      "password": "AABBCCDD"
    },
    "registro": [
      {
        "documento": {
          "data": "01/03/2023",
          "hora": "00:03:06",
          "prontuario": "111",
          "atendimento": "111",
          "grupo": "01 - GRUPO DADOS VITAIS E CONTROLES",
          "item": "0101 - PAS",
          "valor": "A��O",
        }
      }
    ]
  }

  axios.post(html + endpoint, obj).then(() => {
    console.log('ENVIADO! ' + JSON.stringify(obj));
  }).catch((err) => console.log(err));
}

criandoJsonAssistencial('pegatxt');

setInterval(() => {
  // criandoJsonAtendimento();
  // criandoJsonAssistencial();
}, 50000);
