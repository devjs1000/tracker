import storage from '@react-native-async-storage/async-storage';
import { decrypt, encrypt } from './encrypt';

export const updateDb = async (key: string, value: any) => {
    try {
        const hash = encrypt(JSON.stringify(value));
        await storage.setItem(key, hash);
    } catch (error) {
        console.error(error);
    }
}

export const getDb = async (key: string) => {
    try {
        const hash = await storage.getItem(key);
        if (hash !== null) {
            const res = decrypt(hash)
            console.log({ res, key })
            return res ? JSON.parse(res) : null;
        }else{
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}