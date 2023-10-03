# Sales Prediction using Angular, Flask, and ARIMA Model

This project is a Sales Prediction system built using Angular for the front-end, Flask for the back-end, and an ARIMA (AutoRegressive Integrated Moving Average) model for sales forecasting. The application helps businesses predict future sales based on historical data.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Overview

Sales prediction is a critical aspect of business planning. This project aims to provide a user-friendly interface for businesses to input their historical sales data and receive sales forecasts using the ARIMA model.

## Technologies Used

- Angular: Front-end framework for building the user interface.
- Flask: Python web framework used for the back-end server.
- ARIMA Model: A statistical model for time series forecasting.
- JavaScript/TypeScript: Used for client-side scripting and interactivity.
- Python: Used for server-side scripting, data processing, and running the ARIMA model.
- HTML/CSS: Used for creating the web interface.

## Features

- User Authentication: Secure login system to protect sensitive business data.
- Data Upload: Ability to upload historical sales data in CSV format.
- Data Visualization: Visualize historical sales data and forecasted sales.
- Forecasting: Generate sales forecasts using the ARIMA model.
- Reporting: Download sales forecasts and reports in various formats.
- Responsive Design: Works seamlessly on desktop and mobile devices.

## Installation

Follow these steps to set up the Sales Prediction system:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pragzz1238/Sales-Prediction-using-Angular-Flask-and-ML.git
   ```

2. Navigate to the project directory:

     ```bash
     cd Sales-Prediction-using-Angular-Flask-and-ML
     ```

3. Install the required dependencies for both the front-end and back-end:

     ```bash
     # Install front-end dependencies
     cd DemoApp
     npm install
     
     # Install back-end dependencies
     cd ../crud_app
     pip install -r requirements.txt
     ```

4. Configure the database connection, authentication, and ARIMA model parameters as needed in the Flask back-end and Angular front-end.

## Usage

1. Start the Flask back-end server:

     ```bash
     cd crud_app
     python app.py
     ```

2. Start the Angular front-end:

     ```bash
     cd DemoApp
     ng serve
     ```

3. Open your web browser and navigate to http://localhost:4200 to access the Sales Prediction application.

4. Log in, upload historical sales data, and generate sales forecasts using the provided features.
