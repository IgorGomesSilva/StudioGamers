<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-select
      label="Marca"
      v-model="combomarca"
      :items="marca"
      :rules="[v => !!v || 'Selecione uma Marca']"
      required
    ></v-select>

    <v-select
      label="Processador"
      v-model="comboprocessador"
      :items="processador"
      :rules="[v => !!v || 'Selecione um Processador']"
      required
    ></v-select>

    <v-select
      label="Monitor"
      v-model="combomonitor"
      :items="monitor"
      :rules="[v => !!v || 'Selecione um Monitor']"
      required
    ></v-select>

    <v-select
      label="Fonte"
      v-model="combofonte"
      :items="fonte"
      :rules="[v => !!v || 'Selecione uma Fonte']"
      required
    ></v-select>

    <v-text-field
      label="Valor"
      v-model="valor"
      required
    ></v-text-field>

    <v-select
      label="Placa de Video"
      v-model="comboplaca"
      :items="placa"
      :rules="[v => !!v || 'Selecione uma placa de Video']"
      required
    ></v-select>

    <v-btn
      @click="submit"
      :disabled="!valid"
      primary
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      combomarca: null,
      marca: [
        'Dell',
        'HP',
        'Apple'
      ],
      combofonte: null,
      fonte: [
        '500 W',
        '350 W',
        '250 W'
      ],
      combomonitor: null,
      monitor: [
        'Samsumg LED 28"',
        'LG LED 32"',
        'HP LED 42"'
      ],
      comboprocessador: null,
      processador: [
        'Intel Core i3',
        'Intel Core i5',
        'Intel Core i7'
      ],
      valor: '',
      comboplaca: null,
      placa: [
        'GTX 1050',
        'GTX 1060',
        'GT 550M',
        'GT 650M'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          /*
        axios.post('http://localhost:8888/computadores', {
            marca: this.marca,
            processador: this.processador,
            valor: this.valor,
            monitor: this.monitor,
            fonte: this.fonte,
            placa: this.placa
          })
            */
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
