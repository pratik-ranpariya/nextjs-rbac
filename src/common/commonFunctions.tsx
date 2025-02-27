/**
 * Stores an item in localStorage with stringified value.
 * @param key - The key to associate with the item.
 * @param value - The value to store, which will be stringified.
 */
export function setLocalStorageItem(key: string, value: any): void {
  // Convert the value to a JSON string and store it in localStorage
  localStorage.setItem(key, JSON.stringify(value));
}
/**
 * Retrieves an item from localStorage and parses its JSON value.
 * @param key - The key of the item to retrieve.
 * @returns The parsed value of the item, or null if the item doesn't exist or if parsing fails.
 */
export function getLocalStorageItem<T>(key: string): T | null {
  try {
    // Retrieve the item from localStorage and parse it as JSON
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    // Handle parsing error
    // console.error(
    //   `Failed to parse the item from localStorage with key "${key}".`,
    //   error
    // );
    return null;
  }
}

/**
 * Removes a specific item from localStorage, or clears all data if no key is provided.
 * @param key - Optional key of the item to remove. If not provided, clears all localStorage data.
 */
export function clearLocalStorage(key?: string): void {
  if (key) {
    // If a key is provided, remove the specific item
    localStorage.removeItem(key);
  } else {
    // If no key is provided, clear all localStorage data
    localStorage.clear();
  }
}

//Be sure brfore change the function reason of same function used in backend
export const convertLowerCaseString = (str: any) => {
  return str?.replace(/[-\s]/g, "")?.toLowerCase();
};

export const removeHyphenSpace = (input: string) => {
  // Replace hyphen with a space
  return input.replace(/-/g, " ");
};

export const commonPotentialRetio = (totalAmount: any, noAmount: any, yesAmount: any, button: any, amount:any) => {
  const baseAmount = button === "yes" ? yesAmount+amount : noAmount+amount;
  const percentage = baseAmount !== 0 ? (amount / baseAmount) : 0;
  const newtotalAmount = totalAmount+amount
  
  let grossWinningAmount = parseFloat((percentage * newtotalAmount).toFixed(2)) || 0
  return {
      potentialAmount: grossWinningAmount,
      potentialPercentage: parseFloat(((grossWinningAmount - amount) / (amount / 100)).toFixed(2)) || 0
  }
}

export const formatBetValue = (value: number) => {
  if (value < 1000) return value.toLocaleString(); // For numbers below 1K
  if (value >= 1000 && value < 1000000)
    return (value / 1000).toFixed(1).replace(".0", "") + "K"; // For numbers between 1K and 1M
  if (value >= 1000000 && value < 1000000000)
    return (value / 1000000).toFixed(1).replace(".0", "") + "M"; // For numbers between 1M and 1B
  if (value >= 1000000000)
    return (value / 1000000000).toFixed(1).replace(".0", "") + "B"; // For numbers above 1B
  return value.toLocaleString(); // Fallback
  // Example :  This will output values like 100, 999, 1K, 99K, etc.
};

export const formatIndianCurrency = (amount: any) => {
  if (!amount || isNaN(amount)) return '0'; // Handle invalid or undefined values
  const [integerPart, decimalPart] = parseFloat(amount).toFixed(2).split('.'); // Split into integer and decimal parts

  const formattedInteger = integerPart.replace(/\B(?=(\d{2})+(?!\d))/g, ','); // Add commas for Indian format
  return decimalPart === '00' ? formattedInteger : `${formattedInteger}.${decimalPart}`;
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

export function debounce(func: (...args: any[]) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
export const monthdayyearconvertime = (isoDate: any) => {
  const date = new Date(isoDate);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${month} ${day}, ${year} (${hours}:${minutes})`;
};


export const formatDateyearmonth = (isoDateStr :any) => {
  const date = new Date(isoDateStr);
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleString('en-US', options as any);
};