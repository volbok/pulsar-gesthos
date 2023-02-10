const axios = require("axios");

const criandoJson = () => {
  console.log('ENVIADO ARRAY COM JSONS');
  var obj =
  {
    "pacientes": [
      {
        "internacao": {
          "data": "05/02/2023",
          "hora": "00:21:48",
          "prontuario": "304574",
          "atendimento": "1475486",
          "paciente": "LENI APARECIDA DE SOUZA MIGUEL",
          "sexo": "F",
          "nascimento": "28/10/1960",
          "unidadeinternacao": "C. T. I.  03",
          "leito": "19"
        }
      },
      {
        "internacao": {
          "data": "05/02/2023",
          "hora": "01:37:04",
          "prontuario": "340012",
          "atendimento": "1487506",
          "paciente": "ANA PAULA FERNANDES BOLA",
          "sexo": "F",
          "nascimento": "02/10/1980",
          "unidadeinternacao": "C. T. I.  01",
          "leito": "10"
        }
      },
    ]
  }
  axios.post('https://pulsar-gesthos-api.up.railway.app/gesthos_atendimentos', obj).then(() => {
  }).catch((err) => console.log(err));
}

setInterval(() => {
  criandoJson();
}, 10000);
