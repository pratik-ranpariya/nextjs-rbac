import { getLocalStorageItem } from '../commonFunctions'
import axiosInstance from './axiosInstance'

export interface ApiResponse<T> {
    data: T
    status: number
    statusText: string
}

export const Get = async <T>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.get<T>(url, { params, headers })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const Post = async <T, B = any>(
    url: string,
    body: B,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.post<T>(url, body, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json', // Default to JSON
            },
        })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const PostWithToken = async <T, B = any>(
    url: string,
    body: B,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const token = getLocalStorageItem('') ? getLocalStorageItem('') : ''; // Fetch the token from local storage or secure place
        // if (!token) {
        //     throw new Error('Token is missing');
        // }
        const authHeaders = token ? { Authorization: `Bearer ${token}` } : {}; // Conditionally set Authorization header if token is present
        
        const response = await axiosInstance.post<T>(url, body, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json', // Default to JSON
                ...authHeaders,
            },
        });
        
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        throw error; // Re-throw the error for error handling
    }
};

export const PostWithTokenFormData = async <T, B = any>(
    url: string,
    body: B,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const token = getLocalStorageItem('') ? getLocalStorageItem('') : ''; // Fetch the token from local storage or secure place
        // if (!token) {
        //     throw new Error('Token is missing');
        // }

        const isFormData = body instanceof FormData;

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                ...(isFormData
                    ? {} // Let the browser set the Content-Type for FormData
                    : { 'Content-Type': headers?.['Content-Type'] || 'application/json' }), // Default to JSON
                Authorization: `Bearer ${token}`, // Passing the token in Bearer format
                ...(headers || {}),
            },
            body: isFormData ? body : JSON.stringify(body),
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, requestOptions);
        const responseData = await response.json();

        return {
            data: responseData,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        throw error; // Re-throw the error for error handling
    }
};

export const GetWithToken = async <T>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const token = getLocalStorageItem('') ? getLocalStorageItem('') : ''; // Fetch the token from local storage or secure place
        // if (!token) {
        //     throw new Error('Token is missing');
        // }
        const authHeaders = token ? { Authorization: `Bearer ${token}` } : {}; // Conditionally set Authorization header if token is present

        const response = await axiosInstance.get<T>(url, {
            params,
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json', // Default to JSON
                ...authHeaders,
            },
        });
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const Patch = async <T, B = any>(
    url: string,
    body: B,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.patch<T>(url, body, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json', // Default to JSON
            },
        })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const Put = async <T, B = any>(
    url: string,
    body: B,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.put<T>(url, body, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json', // Default to JSON
            },
        })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const Delete = async <T>(
    url: string,
    headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.delete<T>(url, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json', // Default to JSON
            },
        })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}
