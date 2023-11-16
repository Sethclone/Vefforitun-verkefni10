<!-- FlightsList.vue -->
<template>
  <div class="bg-dark">
    <h1 class="text-light">Incoming Flights to Keflavík</h1>

    <div class="mb-3">
      <button @click="selectHandler('APA')" :class="{ 'btn-primary': selectedHandler === 'APA' }" class="btn btn-secondary">Economy Flights</button>
      <button @click="selectHandler('IGS')" :class="{ 'btn-primary': selectedHandler === 'IGS' }" class="btn btn-secondary">Icelandair Flights</button>
    </div>

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
      selectedHandler: 'APA', // Default selected handling agent
    };
  },
  computed: {
    filteredFlights() {
      return this.flights.filter(
        (flight) =>
          (this.selectedHandler === 'APA' && flight.handling_agent === 'APA') ||
          (this.selectedHandler === 'IGS' && flight.handling_agent === 'IGS') &&
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
        const response = await this.$axios.get('https://fidsproxy-secure.telia.is/api/flights', {
          params: {
            dateFrom: this.getToday(0),
            dateTo: this.getToday(1),
            handlingAgent: this.selectedHandler,
          },
        });

        console.log(response.data); // Log the API response
        this.flights = response.data;
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    },
    selectHandler(handler) {
      this.selectedHandler = handler;
      this.fetchFlights();
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
