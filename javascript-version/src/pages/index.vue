<script setup>
// import AnalyticsAward from '@/views/dashboards/analytics/AnalyticsAward.vue'
// import AnalyticsBarCharts from '@/views/dashboards/analytics/AnalyticsBarCharts.vue'
// // import AnalyticsDatatable from '@/views/dashboards/analytics/AnalyticsDatatable.vue'
// import AnalyticsDepositWithdraw from '@/views/dashboards/analytics/AnalyticsDepositWithdraw.vue'
// import AnalyticsSalesByCountries from '@/views/dashboards/analytics/AnalyticsSalesByCountries.vue'
// import AnalyticsTotalEarning from '@/views/dashboards/analytics/AnalyticsTotalEarning.vue'
// import AnalyticsTotalProfitLineCharts from '@/views/dashboards/analytics/AnalyticsTotalProfitLineCharts.vue'
// import AnalyticsTransactions from '@/views/dashboards/analytics/AnalyticsTransactions.vue'
// import AnalyticsWeeklyOverview from '@/views/dashboards/analytics/AnalyticsWeeklyOverview.vue'
// import CardStatisticsVertical from '@core/components/CardStatisticsVertical.vue'
import montain from '@/assets/images/logos/montain.png'
import logofinal from '@/assets/logofinal.svg?raw'
import yachakuy from '@/assets/images/logos/yachakuy.png'  
import { getAll }from '@/database.js'
import wordStore from '@/store/index'
import cardPalabra from '@/views/pages/components/cardPalabra.vue'

const store = wordStore();


const getList= async ()=>{
      let list= await getAll()
      // this.wordList= list

      store.addnewdata(list)
      console.log(store.word)


}
getList()

const totalProfit = {
  title: 'Total Profit',
  color: 'secondary',
  icon: 'mdi-poll',
  stats: '$25.6k',
  change: 42,
  subtitle: 'Weekly Project',
}
const newProject = {
  title: 'New Project',
  color: 'primary',
  icon: 'mdi-briefcase-variant-outline',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project',
}
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
      <!-- <AnalyticsAward /> -->
      <!-- <div v-html="logo" /> -->
      <!-- <cardPalabra /> -->
      <div v-html="logofinal" />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <!-- <AnalyticsTransactions /> -->
      <cardPalabra />
    
      <!-- <VImg :src="yachakuy" cover /> -->
    
      <!-- <img src="@/assets/images/logos/yachakuy.png" alt="logo" /> -->

    </VCol>

    <VCol
      cols="12"
      md="4"
    >
  
      <!-- <AnalyticsWeeklyOverview /> -->
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <!-- <AnalyticsTotalEarning /> -->
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow class="match-height">
        <VCol
          cols="12"
          sm="6"
        >
          <!-- <AnalyticsTotalProfitLineCharts /> -->
          <h3>Aprenda Quechua Boliviano</h3>
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <!-- <CardStatisticsVertical v-bind="totalProfit" /> -->
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <!-- <CardStatisticsVertical v-bind="newProject" /> -->
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <!-- <AnalyticsBarCharts /> -->
        </VCol>
      </VRow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <!-- <AnalyticsSalesByCountries /> -->
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <!-- <AnalyticsDepositWithdraw /> -->
    </VCol>

    <!-- <VCol cols="12">
      <AnalyticsDatatable />
    </VCol> -->
  </VRow>
</template>
