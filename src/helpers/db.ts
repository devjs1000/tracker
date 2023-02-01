import storage from '@react-native-async-storage/async-storage';

export const updateDb = async (key: string, value: any, parse=true) => {
    try {
        const val=parse ? JSON.stringify(value) : value;
       storage.setItem(key, val);
    } catch (error) {
        console.error(error);
    }
}

export const getDb = async (key: string, parse=true) => {
    try {
        const value:any= await storage.getItem(key);
        const val=parse ? JSON?.parse(value) : value;
        return  val || {}
    } catch (error) {
        console.error(error);
        return null;
    }
}