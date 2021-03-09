import pandas as pd

def downData(symbols, inter, peri):
    import yfinance as yf
    return yf.download(
            tickers = symbols,
            period = peri,
            interval = inter,
            group_by = 'column',
            auto_adjust = True,
            prepost = False,
            threads = True,
    )
sym = {  # Index name as keys & yahoo finance code as values
        '^NSEI': 'NIFTY 50',
        '^NSMIDCP': 'NIFTY NEXT 50',
        '^CNX100': 'NIFTY 100',
        '^NSEBANK': 'NIFTY BANK',
        '^CNXAUTO': 'NIFTY AUTO',
        'NIFTY_FIN_SERVICE.NS': 'NIFTY FINANCIAL SERVICES',
        '^CNXFIN': 'NIFTY FINANCIAL SERVICES 25/50',
        '^CNXFMCG': 'NIFTY FMCG',
        '^CNXIT': 'NIFTY IT',
        '^CNXMEDIA': 'NIFTY MEDIA',
        '^CNXMETAL': 'NIFTY METAL',
        '^CNXPHARMA': 'NIFTY PHARMA',
        '^CNXPSUBANK': 'NIFTY PSU BANK',
        'NIFTY_PVT_BANK.NS': 'NIFTY PRIVATE BANK',
        '^CNXREALTY': 'NIFTY REALTY'
}

# Download Data from yahoo finance & rename it to corresponding keys in sym dict then save as csv in index.csv
downData(list(sym.keys()),'1m','2d').to_csv('csv/index_1m.csv')
df = pd.read_csv('csv/index_1m.csv', header = [0,1], index_col = 0, parse_dates = True).round(2).rename(columns = sym, level=1)
# index name list
bmi = ['NIFTY 50','NIFTY NEXT 50','NIFTY 100']
smi = [
        'NIFTY BANK',
        'NIFTY AUTO',
        'NIFTY FINANCIAL SERVICES',
        'NIFTY FINANCIAL SERVICES 25/50',
        'NIFTY FMCG',
        'NIFTY IT',
        'NIFTY MEDIA',
        'NIFTY METAL',
        'NIFTY PHARMA',
        'NIFTY PSU BANK',
        'NIFTY PRIVATE BANK',
        'NIFTY REALTY'
]

# def take ticker name & timeFrame and return dict as {'d': [t,o,h,l,c]}
def ohlcJSON(name,t):
    o = df.Open[name].resample(t).first().dropna()
    return {
            'd': [ # list as [unix timestamp, open, high, low, close]
                o.index.strftime('%y-%m-%dT%H:%M').to_list(),
                o.to_list(),
                df.High[name].resample(t).max().dropna().to_list(),
                df.Low[name].resample(t).min().dropna().to_list(),
                df.Close[name].resample(t).last().dropna().to_list()
            ]
    }
# filter indexes as per list and return json to send for frontend market Tab
def setRes(sym, sort = None):
    df_close = df.Close[sym].resample('1D').last().dropna()
    if sort == True:
        sym = df_close.pct_change().iloc[-1].sort_values(ascending=False).index.tolist()
        df_close = df_close[sym]
    return {
            's': sym,
            'pc': df_close.iloc[-2].to_list(),
            'c': df.Close.loc[df.at_time('09:15').index[-1]:,sym].resample('5T').last().dropna().values.T.tolist(), # 5 min closing price for last day
            'cg': (df_close.pct_change()*100).iloc[-1].round(2).to_list(),
    }
res = {
        'bmi': setRes(bmi),
        'smi': setRes(smi,sort = True),
        'n': ohlcJSON('NIFTY 50','5T')
}
import json
json.dump(res, open('json/MT_indiwidgets.json','w'))
