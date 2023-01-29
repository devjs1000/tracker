
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~!@#$%^&*()_+{}|:"<>?[];\',./ ';

export const encrypt = (password: any) => {
    let hash = '';
    const pwd = String(password);
    for (let i = 0; i < pwd.length; i++) {
        const index = alphabet.indexOf(pwd[i]);
        hash += `${i !== 0 ? ',' : ''}${index}`
    }
    return hash;
}

export const decrypt = (password: string) => {
    let hash = '';
    const pwd = password.split(',');
    for (let i = 0; i < pwd.length; i++) {
        const index = Number(pwd[i]);
        hash += alphabet[index] || '==='
    }
    return hash;
}


export const compare = (password: string, hash: string) => {
    let isMatch = true;
    const pwd = password.split('');
    const hsh = hash.split(',');
   
    for (let i = 0; i < hsh.length; i++) {
        const char = pwd[i];
        const index = Number(hsh[i]);
       
        if (alphabet[index] !== char) {
            isMatch = false;
        }
    }
    return isMatch;
}


