tailwind.config = {
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            llg: { min: "992px", max: "1199px" },
            
            "xl-1": "1140px",
        },

        extend: {
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
            maxWidth: {
                '2lg': '1440px',
            },
            colors: {
                primary: 'var(--primary)',
                black: 'var(--black)',
                white: 'var(--white)',
                error: 'var(--error)',
                warning: 'var(--warning)',
                info: 'var(--info)',
                success: 'var(--success)',

                // roman palette
                'roman-50': 'var(--color-roman-50)',
                'roman-200': 'var(--color-roman-200)',
                'roman-300': 'var(--color-roman-300)',
                'roman-400': 'var(--color-roman-400)',
                'roman-500': 'var(--color-roman-500)',
                'roman-600': 'var(--color-roman-600)',
                'roman-700': 'var(--color-roman-70)',
                'roman-800': 'var(--color-roman-800)',
                'roman-900': 'var(--color-roman-900)',
                'roman-950': 'var(--color-roman-950)',

                // gray palette
                'gray-50': 'var(--color-gray-50)',
                'gray-100': 'var(--color-gray-100)',
                'gray-200': 'var(--color-gray-200)',
                'gray-300': 'var(--color-gray-300)',
                'gray-400': 'var(--color-gray-400)',
                'gray-500': 'var(--color-gray-500)',
                'gray-600': 'var(--color-gray-600)',
                'gray-700': 'var(--color-gray-700)',
                'gray-800': 'var(--color-gray-800)',
                'gray-900': 'var(--color-gray-900)',
                'gray-950': 'var(--color-gray-950)',
            },
        }
    }
}
