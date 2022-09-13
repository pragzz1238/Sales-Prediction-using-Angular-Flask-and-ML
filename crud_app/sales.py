import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib import pyplot
from statsmodels.tsa.stattools import adfuller
import joblib
from pylab import rcParams

from sklearn.metrics import mean_squared_error
from math import sqrt
from statsmodels.tsa.arima.model import ARIMA

from statsmodels.tsa.stattools import adfuller
from pmdarima import auto_arima

df=pd.read_csv("P:\Pictures\KAAR PROJECT-1\Timeseries_SARIMAX-main\Timeseries_SARIMAX-main\shampoo_sales.csv", )
df['Temp_date'] = 0
initial_year = 2019
counter = 0
for indx,row in df.iterrows():
    #print(indx)
    if counter < 12 :
        year = initial_year
    elif counter >=12 and counter <24:
        year = initial_year + 1
    elif counter >=24:
        year = initial_year + 2
    df['Temp_date'].iloc[indx] = str(year) + "-" + df['Month'].iloc[indx][2:]
    counter += 1
    
    
df['Month'] = df['Temp_date']
df.drop(columns = 'Temp_date', inplace = True)
df['Month'] = df['Month'] + "-" + "01"
df = df[0:36]
df= df.set_index(['Month'])
df = df.rename({'Sales of shampoo over a three year period': 'Sales'}, axis=1)
plt.figure(figsize=(12,5))
plt.title("Price Distirbution Graph")
ax = sns.distplot(df["Sales"], color = 'y')
def ad_test(dataset):
    dftest = adfuller(dataset, autolag = 'AIC')
    print("1. ADF : ",dftest[0])
    print("2. P-Value : ", dftest[1])
    print("3. Num Of Lags : ", dftest[2])
    print("4. Num Of Observations Used For ADF Regression:",dftest[3])
    print("5. Critical Values :")
    for key, val in dftest[4].items():
        print("\t",key, ": ", val)
ad_test(df['Sales'])
stepwise_fit = auto_arima(df['Sales'], trace=True, suppress_warnings=True)
X = df.values
size = int(len(X) * 0.66)
train, test = X[0:size], X[size:len(X)]
history = [x for x in train]
predictions = list()
for t in range(len(test)):
    model = ARIMA(history, order=(1,1,2))
    model_fit = model.fit()
    output = model_fit.forecast()
    yhat = output[0]
    predictions.append(yhat)
    obs = test[t]
    history.append(obs)
    print('predicted=%f, expected=%f' % (yhat, obs))
rmse = sqrt(mean_squared_error(test, predictions))
print('Test RMSE: %.3f' % rmse)
plt.figure(figsize=(5, 5))
pyplot.plot(test)
pyplot.plot(predictions, color='red')
pyplot.show()
pyplot.savefig('plot.png')