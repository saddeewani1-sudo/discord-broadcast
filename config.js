module.exports = {
    bot: {
        tokens: [MTQ1NDIwNzg0MzQxNzk4NTA4NA.GoFE_j.q7BbpF9kwfIja_EQE8G60LlFey4N5V4x5lYv6M
                
          "YOUR_BOT_TOKEN_HERE",              // Main bot token - Replace with your actual token
        //  "YOUR_SECOND_BOT_TOKEN_HERE",      // 2 bot token - Uncomment and replace to use
        //  "YOUR_THIRD_BOT_TOKEN_HERE",       // 3 bot token - Uncomment and replace to use
        //  "YOUR_FOURTH_BOT_TOKEN_HERE",      // 4 bot token - Uncomment and replace to use
        //  "YOUR_FIFTH_BOT_TOKEN_HERE",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'Wick Studio', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'online' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1454135377551163716',         // ايدي السيرفر
        broadcastRoleId: '1454135558996758840', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1454204761598460107' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }

};
