'use client';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stocks = [
  { symbol: 'AAPL', price: '173.50', change: '1.25%', up: true },
  { symbol: 'GOOGL', price: '141.80', change: '0.75%', up: true },
  { symbol: 'MSFT', price: '378.85', change: '0.45%', down: false },
  { symbol: 'AMZN', price: '155.20', change: '1.15%', up: true },
  { symbol: 'TSLA', price: '238.45', change: '2.10%', down: false },
  { symbol: 'META', price: '334.90', change: '0.95%', up: true },
];

export default function StockTicker() {
  return (
    <div className="bg-gray-100 border-b overflow-hidden whitespace-nowrap">
      <div className="animate-ticker inline-block">
        {[...stocks, ...stocks, ...stocks].map((stock, index) => (
          <div 
            key={index} 
            className="inline-flex items-center px-4 py-2"
          >
            <span className="font-semibold">{stock.symbol}</span>
            <span className="ml-2">${stock.price}</span>
            <span 
              className={`ml-2 flex items-center ${
                stock.up ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stock.up ? (
                <TrendingUp size={16} className="mr-1" />
              ) : (
                <TrendingDown size={16} className="mr-1" />
              )}
              {stock.change}
            </span>
            <span className="mx-4 text-gray-300">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}