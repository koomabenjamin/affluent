<template>
  <div id="chart" class="relative">
    <div class="flex items-center justify-end absolute -top-12 right-0">
      <button id="one_month"
        class="bg-white border  text-blue-600 h-6 w-auto text-xs px-2 shadow py-1 m-1 rounded"
        @click="updateData('one_month')" :class="{ active: selection === 'one_month' }">
        1M
      </button>

      <button id="six_months"
        class="bg-white border  text-blue-600 h-6 w-auto text-xs px-2 shadow py-1 m-1 rounded"
        @click="updateData('six_months')" :class="{ active: selection === 'six_months' }">
        6M
      </button>

      <button id="one_year"
        class="bg-white border  text-blue-600 h-6 w-auto text-xs px-2 shadow py-1 m-1 rounded"
        @click="updateData('one_year')" :class="{ active: selection === 'one_year' }">
        1Y
      </button>

      <button id="ytd"
        class="bg-white border  text-blue-600 h-6 w-auto text-xs px-2 shadow py-1 m-1 rounded"
        @click="updateData('ytd')" :class="{ active: selection === 'ytd' }">
        YTD
      </button>

      <button id="all"
        class="bg-white border  text-blue-600 h-6 w-auto text-xs px-2 shadow py-1 m-1 rounded"
        @click="updateData('all')" :class="{ active: selection === 'all' }">
        ALL
      </button>
    </div>
    <div id="chart-timeline" class="dark:text-white">
      <apexchart type="area" height="350" ref="chart"
        :options="chartOptions"
        :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryChart",
  data() {
    return {
      series: [
        {
          // Create a service that is will be executed every after a 5 seconds
          data: [
            [1327359600000, 409005],
            [1327446000000, 413004],
            [1327532400000, 411008],
            [1327618800000, 410005],
            [1327878000000, 410000],
            [1327964400000, 409005],
            [1328050800000, 412004],
            [1328137200000, 412009],
            [1340229600000, 312003],
            [1351202400000, 340001],
            [1351638000000, 340002],
            [1351724400000, 343006],
            [1351810800000, 343009],
            [1352070000000, 342004],
            [1352156400000, 343009],
            [1352242800000, 334007],
            [1352329200000, 329008],
            [1352415600000, 329000],
            [1352674800000, 327000],
            [1352761200000, 325004],
          ],
        },
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "area",
          height: 350,
          zoom: {
            autoScaleYaxis: true,
          },
        },
        annotations: {
          yaxis: [
            {
              y: 30,
              borderColor: "#999",
              label: {
                show: true,
                text: "Support",
                style: {
                  color: "#fff",
                  background: "#00E396",
                },
              },
            },
          ],
          xaxis: [
            {
              x: new Date("14 Nov 2012").getTime(),
              borderColor: "#999",
              yAxisIndex: 0,
              label: {
                show: true,
                text: "Rally",
                style: {
                  color: "#fff",
                  background: "#775DD0",
                },
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: "hollow",
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Mar 2012").getTime(),
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
      },
      selection: "one_year",
    };
  },
  methods: {
    updateData: function (timeline) {
      this.selection = timeline;

      switch (timeline) {
        case "one_month":
          this.$refs.chart.zoomX(
            new Date("28 Jan 2013").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "six_months":
          this.$refs.chart.zoomX(
            new Date("27 Sep 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "one_year":
          this.$refs.chart.zoomX(
            new Date("27 Feb 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "ytd":
          this.$refs.chart.zoomX(
            new Date("01 Jan 2013").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        case "all":
          this.$refs.chart.zoomX(
            new Date("23 Jan 2012").getTime(),
            new Date("27 Feb 2013").getTime()
          );
          break;
        default:
      }
    },
  },
};
</script>

<style>

</style>