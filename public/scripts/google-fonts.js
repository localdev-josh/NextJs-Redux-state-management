(async () => {
    const download = require("nextjs-google-fonts");
    const fonts=["https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"]
    const options={
        publicFolder: "public", // next.js 'public' folder
        fontsFolder: "fonts", // folder name where data should be saved (fonts+styles)
        styleFolder: "style", // folder with .css from google fonts url
        resetFolder: true, // delete all files from the "fontsFolder" with downloaded data when downloading fonts again
        prevent: true, // prevent download fonts for every your 'npm run dev'
        outputData: {
            name: "data.json", // name of file where be save your data about fonts (for your preverences ;) )
            //path: '../..' , // the path where 'data.json' will be located. If is empty its return 'publicFolder'+'fontsFolder' destination
        },
    }
    await download(fonts,options);
})();
