<h1 align="center">:mask: Mask </h1>

# Table of Contents
- [Application](#application)
  - [Key Features](#key-features) 
- [Repository](#repository)
  - [API Used](#api-used)
  - [Technologies Used](#technologies-used)
  - [Installation Process](#installation-process)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)

# Application
Built with react, Mask provides an interactive interface for data management and visualization. It displays data from the ```https://disease.sh/``` API in dynamic line charts using React Chart.js.
<a href="https://daquanj.github.io/mask/" target="_blank" rel="noreferrer"> :champagne: Live Site</a>

## Key Features
- **Data Refinement**
  - **Data Scaling**: Allows users to view data on both a global scale and by individual country, providing a detailed and customizable data experience.
  - **Time Specifications**: Refine data based on a specified time frame i.e `previous 20 days`.
  - **Data Type(s)**: Provides a legend allowing users to focus on one or more data sets.
- **Real-Time statistics**: Displays up to date COVID-19 data, sourced directly from the disease.sh API.

# Repository
**This repository contains a single front end application**:

- **Client**: A React application located in the `/client` directory.

## Technologies Used

- **React**: Core library for building reusable components and a dynamic user interface.
- **JavaScript**: Adds interactive functionality and handling logic in the application.
- **React-Chart.js**: Used for visualizing data in interactive charts.
- **Axios**: Handles HTTP requests to fetch and send data between the client and server.
- **React Router**: Used for managing client-side routing and navigation.
- **Numeral.js**: Used for formatting numbers, such as currency, percentages, and large numbers.

## API Used
Mask integrates the `https://disease.sh/` API to retrieve up-to-date health and disease statistics. API calls are made only when users request specific data insights, ensuring real-time accuracy. All health data displayed in the application is sourced directly from disease.sh.

## Installation Process

### Prerequisites

Ensure you have the following installed:

- **Node.js 14+** and npm for the React client
- [Any other tools] (e.g., chrome)


### Installation

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/yourusername/your-client.git
   cd your-client

2. **Install client Dependencies:** Navigate to the ```client``` directory and install dependencies

    ```bash
    cd client
    npm install

### Running the Application

1. **Start the Client:** Open a new terminal, navigate to the ```client``` directory, and start the React app.
   
    ```bash
    cd client
    npm start
