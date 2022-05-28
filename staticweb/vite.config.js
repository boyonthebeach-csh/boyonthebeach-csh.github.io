const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                authlogin: resolve(__dirname, "auth-login.html"),
                authregister: resolve(__dirname, "auth-register.html"),
                products: resolve(__dirname, "product.html"),
                cart: resolve(__dirname, "cart.html"),
                payment: resolve(__dirname, "payment.html"),
            },
        },
    },
});
