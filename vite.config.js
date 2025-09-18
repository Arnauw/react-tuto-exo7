import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss({
            safelist: [
                "text-[#2F3336]",
                "text-[#8a0d20]",
                "text-[#1d9bf0]",
                "text-[#de1e2a]",
                "text-[#ffd401]",
                "bg-[#2F3336]",
                "bg-[#8a0d20]",
                "bg-[#1d9bf0]",
                "bg-[#de1e2a]",
                "bg-[#ffd401]",
                "border-[#2F3336]",
                "border-[#8a0d20]",
                "border-[#1d9bf0]",
                "border-[#de1e2a]",
                "border-[#ffd401]",
            ],
        }),
    ],
})
