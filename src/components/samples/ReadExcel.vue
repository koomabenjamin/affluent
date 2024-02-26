<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <div v-if="excelData">
      <h2>Excel Data:</h2>
      <pre>{{ excelData }}</pre>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  data() {
    return {
      excelData: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        this.readExcel(file);
      }
    },
    readExcel(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        this.excelData = JSON.stringify(jsonData, null, 2);
      };

      reader.readAsBinaryString(file);
    },
  },
};
</script>