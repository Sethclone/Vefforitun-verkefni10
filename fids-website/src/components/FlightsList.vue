<!-- FlightsList.vue -->
<template>
    <div class="bg-dark">
        <h1 class="text-light">Incoming Flights to Keflavík</h1>
      <table class="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Flight</th>
            <th scope="col">Origin</th>
            <th scope="col">Status</th>
            <th scope="col">Scheduled Time</th>
            <th scope="col">Airline</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flight in filteredFlights" :key="flight.flt">
            <td scope="row">{{ flight.flt }}</td>
            <td>{{ flight.origin }}</td>
            <td>{{ flight.status }}</td>
            <td>{{ flight.sched_time.slice(11, 16) }}</td>
            <td>{{ flight.airline_name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        flights: [],
      };
    },
    computed: {
      filteredFlights() {
        // Filter the flights based on your conditions
        return this.flights.filter(
          (flight) =>
            flight.handling_agent === 'APA' &&
            flight.flight_type === 'J' &&
            flight.destination === 'Keflavík'
        );
      },
    },
    methods: {
      getToday(offset) {
        const today = new Date();
        today.setDate(today.getDate() + offset);
        const isoDate = today.toISOString().split('T')[0];
        return isoDate;
      },
      async fetchFlights() {
        try {
          const response = await this.$axios.get(
            'http://fids.kefairport.is/api/flights',
            {
              params: {
                dateFrom: this.getToday(0),
                dateTo: this.getToday(1),
              },
            }
          );
  
          console.log(response.data); // Log the API response
          this.flights = response.data;
        } catch (error) {
          console.error('Error fetching flights:', error);
        }
      },
    },
    mounted() {
      this.fetchFlights();
    },
  };
  </script>
  
  <style>
  /* Your component styles here */
  </style>
  