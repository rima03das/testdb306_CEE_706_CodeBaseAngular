/**
 * class file uses crypto .js for encryption
 * and decryption type of encryption/decryption can be
 * added from the map file if the map file does not
 * contain the algorithm then it will by default use
 * the AES algorithm
 */
import { Inject, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export const AlgorithmName = new InjectionToken('algorithmName');
const encryptMap = {
    aes_256: 'AES',
    aws_aes_256: 'AES',
    des: 'DES',
    triple_des: 'TripleDES',
    rabbit: 'Rabbit',
    rc4: 'RC4',
    rc4drop: 'RC4Drop'
};
export class CEEEncryptDecryptUtil {
    algorithmName;
    encMethod = 'AES';
    delimiter = '##CBOEIBO##'; // decode in https://www.theproblemsite.com/reference/mathematics/codes/shifted-alphabet-code
    constructor(algorithmName) {
        this.algorithmName = algorithmName;
        this.encMethod = encryptMap[this.algorithmName.toLowerCase()] || this.encMethod;
    }
    /**
     * function encrypts the file that is send
     * @param strFile: string the file or the text
     * @param secretKey the key to encrypt the file
     * @returns encrypted file
     */
    encrypt(strFile, secretKey, cipherTextBlob) {
        let encryptedFile = '';
        try {
            encryptedFile = CryptoJS[this.encMethod].encrypt(strFile, secretKey).toString();
            encryptedFile = `${encryptedFile}${this.delimiter}${cipherTextBlob}`;
        }
        catch (err) {
            console.error(`Error Occurred while encrypting the file`, err);
        }
        return encryptedFile;
    }
    /**
     * function decrypts the file that is send
     * @param strFile the file or the text
     * @param secretKey the secret key that gets returned from the decryption
     * @returns decrypted file
     */
    decrypt(strFile, secretKey) {
        let decryptedStr = '';
        try {
            strFile = strFile.split(this.delimiter)[0];
            decryptedStr = CryptoJS[this.encMethod].decrypt(strFile, secretKey).toString(CryptoJS.enc.Utf8);
        }
        catch (error) {
            console.error(`Error occurred while decrypting the file`, error);
        }
        return decryptedStr;
    }
    static ɵfac = function CEEEncryptDecryptUtil_Factory(t) { return new (t || CEEEncryptDecryptUtil)(i0.ɵɵinject(AlgorithmName)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CEEEncryptDecryptUtil, factory: CEEEncryptDecryptUtil.ɵfac, providedIn: 'any' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CEEEncryptDecryptUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'any',
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: [AlgorithmName]
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWVuY3J5cHQtZGVjcnlwdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3V0aWxzL2NlZS1lbmNyeXB0LWRlY3J5cHQtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUMvQyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQVMsZUFBZSxDQUFDLENBQUM7QUFDekUsTUFBTSxVQUFVLEdBQUc7SUFDZixPQUFPLEVBQUUsS0FBSztJQUNkLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsVUFBVSxFQUFFLFdBQVc7SUFDdkIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsR0FBRyxFQUFFLEtBQUs7SUFDVixPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFDO0FBSUYsTUFBTSxPQUFPLHFCQUFxQjtJQUlhO0lBSG5DLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDMUIsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLDZGQUE2RjtJQUV4SCxZQUEyQyxhQUFxQjtRQUFyQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNwRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxPQUFPLENBQUMsT0FBZSxFQUFFLFNBQWlCLEVBQUUsY0FBc0I7UUFDOUQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUk7WUFDQSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hGLGFBQWEsR0FBRyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsRUFBRSxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFFekIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTO1FBQ3RCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJO1lBQ0EsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkc7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsMENBQTBDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDOytFQXpDUSxxQkFBcUIsY0FJVixhQUFhO2dFQUp4QixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZsQixLQUFLOztpRkFFUixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxLQUFLO2FBQ3BCOztzQkFLZ0IsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNsYXNzIGZpbGUgdXNlcyBjcnlwdG8gLmpzIGZvciBlbmNyeXB0aW9uXHJcbiAqIGFuZCBkZWNyeXB0aW9uIHR5cGUgb2YgZW5jcnlwdGlvbi9kZWNyeXB0aW9uIGNhbiBiZVxyXG4gKiBhZGRlZCBmcm9tIHRoZSBtYXAgZmlsZSBpZiB0aGUgbWFwIGZpbGUgZG9lcyBub3RcclxuICogY29udGFpbiB0aGUgYWxnb3JpdGhtIHRoZW4gaXQgd2lsbCBieSBkZWZhdWx0IHVzZVxyXG4gKiB0aGUgQUVTIGFsZ29yaXRobVxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIENyeXB0b0pTIGZyb20gJ2NyeXB0by1qcyc7XHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBjb25zdCBBbGdvcml0aG1OYW1lID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2FsZ29yaXRobU5hbWUnKTtcclxuY29uc3QgZW5jcnlwdE1hcCA9IHtcclxuICAgIGFlc18yNTY6ICdBRVMnLFxyXG4gICAgYXdzX2Flc18yNTY6ICdBRVMnLFxyXG4gICAgZGVzOiAnREVTJyxcclxuICAgIHRyaXBsZV9kZXM6ICdUcmlwbGVERVMnLFxyXG4gICAgcmFiYml0OiAnUmFiYml0JyxcclxuICAgIHJjNDogJ1JDNCcsXHJcbiAgICByYzRkcm9wOiAnUkM0RHJvcCdcclxufTtcclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ2FueScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDRUVFbmNyeXB0RGVjcnlwdFV0aWwge1xyXG4gICAgcHJpdmF0ZSBlbmNNZXRob2QgPSAnQUVTJztcclxuICAgIGRlbGltaXRlciA9ICcjI0NCT0VJQk8jIyc7IC8vIGRlY29kZSBpbiBodHRwczovL3d3dy50aGVwcm9ibGVtc2l0ZS5jb20vcmVmZXJlbmNlL21hdGhlbWF0aWNzL2NvZGVzL3NoaWZ0ZWQtYWxwaGFiZXQtY29kZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQWxnb3JpdGhtTmFtZSkgcHJpdmF0ZSBhbGdvcml0aG1OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVuY01ldGhvZCA9IGVuY3J5cHRNYXBbdGhpcy5hbGdvcml0aG1OYW1lLnRvTG93ZXJDYXNlKCldIHx8IHRoaXMuZW5jTWV0aG9kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gZW5jcnlwdHMgdGhlIGZpbGUgdGhhdCBpcyBzZW5kXHJcbiAgICAgKiBAcGFyYW0gc3RyRmlsZTogc3RyaW5nIHRoZSBmaWxlIG9yIHRoZSB0ZXh0XHJcbiAgICAgKiBAcGFyYW0gc2VjcmV0S2V5IHRoZSBrZXkgdG8gZW5jcnlwdCB0aGUgZmlsZVxyXG4gICAgICogQHJldHVybnMgZW5jcnlwdGVkIGZpbGVcclxuICAgICAqL1xyXG4gICAgZW5jcnlwdChzdHJGaWxlOiBzdHJpbmcsIHNlY3JldEtleTogc3RyaW5nLCBjaXBoZXJUZXh0QmxvYjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGVuY3J5cHRlZEZpbGUgPSAnJztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBlbmNyeXB0ZWRGaWxlID0gQ3J5cHRvSlNbdGhpcy5lbmNNZXRob2RdLmVuY3J5cHQoc3RyRmlsZSwgc2VjcmV0S2V5KS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbmNyeXB0ZWRGaWxlID0gYCR7ZW5jcnlwdGVkRmlsZX0ke3RoaXMuZGVsaW1pdGVyfSR7Y2lwaGVyVGV4dEJsb2J9YDtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgT2NjdXJyZWQgd2hpbGUgZW5jcnlwdGluZyB0aGUgZmlsZWAsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbmNyeXB0ZWRGaWxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIGRlY3J5cHRzIHRoZSBmaWxlIHRoYXQgaXMgc2VuZFxyXG4gICAgICogQHBhcmFtIHN0ckZpbGUgdGhlIGZpbGUgb3IgdGhlIHRleHRcclxuICAgICAqIEBwYXJhbSBzZWNyZXRLZXkgdGhlIHNlY3JldCBrZXkgdGhhdCBnZXRzIHJldHVybmVkIGZyb20gdGhlIGRlY3J5cHRpb25cclxuICAgICAqIEByZXR1cm5zIGRlY3J5cHRlZCBmaWxlXHJcbiAgICAgKi9cclxuICAgIGRlY3J5cHQoc3RyRmlsZSwgc2VjcmV0S2V5KSB7XHJcbiAgICAgICAgbGV0IGRlY3J5cHRlZFN0ciA9ICcnO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN0ckZpbGUgPSBzdHJGaWxlLnNwbGl0KHRoaXMuZGVsaW1pdGVyKVswXTtcclxuICAgICAgICAgICAgZGVjcnlwdGVkU3RyID0gQ3J5cHRvSlNbdGhpcy5lbmNNZXRob2RdLmRlY3J5cHQoc3RyRmlsZSwgc2VjcmV0S2V5KS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igb2NjdXJyZWQgd2hpbGUgZGVjcnlwdGluZyB0aGUgZmlsZWAsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlY3J5cHRlZFN0cjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=