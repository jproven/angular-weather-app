# Angular Weather App

A modern, responsive weather application built with **Angular**.  
It allows users to search for cities, view current weather conditions, and manage their list of saved locations.

---

## 🌤 Main Features

- **City Search** – Search weather data by city name.
- **Current Weather Data** – Displays temperature, weather description, humidity, and wind speed.
- **Saved Cities Management** – Add, view, and remove favorite cities.
- **Responsive Layout** – Optimized for desktop and mobile devices.
- **Dark/Light Mode Support**.

---

## 🛠 Technologies Used

- [Angular](https://angular.io/) – Frontend framework.
- [Bootstrap](https://getbootstrap.com/) – UI styling.
- [OpenWeather API](https://openweathermap.org/api) – Weather data source.
- TypeScript, HTML, CSS.

---

## ⚙️ Configuration

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/angular-weather-app.git
   cd angular-weather-app
   ```
   
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **API Key Setup**
   
   3.1. This application requires an API key from OpenWeather. Once you have your API key, open:
   ```bash
   src/environments/environment.development.ts
   ```
   
   3.2. And set it as:
   ```bash
   export const environment = {
     production: false,
     apiKey: 'YOUR_API_KEY_HERE',
   };
   ```
   (You can also set a separate key in <i>environment.ts</i> or <i>environment.prod.ts</i> for production builds.)

   3.3. Update <i>angular.json</i> to include the local configuration:
   ```bash
   "configurations": {
     "production": {
       ...
     },
     "development": {
       ...
     },
     "local": {
       "fileReplacements": [
         {
           "replace": "src/environments/environment.ts",
           "with": "src/environments/environment.local.ts"
         }
       ]
     }
   }
   ```

## 🚀 Running the Application

### Development server
   ```bash
   ng serve
   ```
   Then open: http://localhost:4200/
   The app will reload automatically if you change any source files.

### Local Build (with API key in environment.local.ts)
   ```bash
   ng build --configuration=local
   ```
  Build files will be in the <i>dist/</i> folder.

### Production Build
   ```bash
   ng build --configuration=production
   ```
  Optimized for deployment.

## 📂 Project Structure (simplified)
   ```bash
    public/
     ├── assets/               # Images, icons
    src/
     ├── app/                  # Main Angular components & services
     │   ├── services/         # Weather API service
     │   ├── components/       # UI components
     │   └── app.module.ts     # Main module
     ├── environments/         # Environment configuration files
     │   ├── environment.ts
     │   ├── environment.development.ts
     │   └── environment.local.ts   <-- Your local API key
     ├── index.html            # Main HTML file
     ├── main.ts               # Main TS file
     └── styles.css            # Main CSS file
   ```

## 📜 License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0).
