# [Test assignment for "Natlex Group"](https://test-natlex-group.vercel.app/)

## Application is task manager with stats

### Details:

- At first all tasks are generated with random data, so we can view stats via 2
  charts (how many tasks created on each day, task proportions by statuses) on
  dashboard page
- You can filter tasks in certain date range, it will filter them based on they
  are createdAt timestamp, P.S. Please notice that when choosing date filter
  press "Ok" button to apply filter
- After we can perform CRUD operations in Tasks page, and they will keep the
  state via
  [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Then we can view updated stats data back on dashboard page
- Application is response from desktop to mobile, has dark theme support
- Charts are configurable according to [Apexcharts
  docs](https://apexcharts.com/docs/options/chart). P.S: View options section

## Tech stack: Vue: 2.7 (Composition API), VueX, Vuetify, Vite, Typescript

### Dependency details

```json
{
  "vite": "^4.0.0",
  "vue": "^2.7.14",
  "vue-router": "^3.5.1",
  "vuetify": "^2.6.14",
  "@mdi/font": "^7.3.67",
  "vuex": "^3.6.2",
  "apexcharts": "^3.44.0",
  "vue-apexcharts": "^1.6.2",
  "dayjs": "^1.11.10"
}
```

## Project setup

```sh
npm install
```

### Start development server

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```
