import { defineConfig } from 'electron-builder-encryptor'

export default defineConfig({
    /**
     * 加密的密钥
     */
    key: 'xxx000777',
    preload: '../preload/index.js',
    renderer: {
      entry: '../../../dist',
      output: ''
    }
})